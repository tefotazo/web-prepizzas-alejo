// Arma el pedido en el tablero y lo convierte en un mensaje de WhatsApp.

const formato = new Intl.NumberFormat('es-AR');
const precio = (n: number) => '$ ' + formato.format(n);

const ruido = (i: number, c: string) => {
  const x = Math.sin((i + 1) * 12.9898 + c.charCodeAt(0) * 78.233) * 43758.5453;
  return x - Math.floor(x) - 0.5;
};

// Reemplaza el texto letra por letra; solo se encastran las letras que cambiaron.
function ponerLetras(el: HTMLElement, texto: string) {
  const anterior = el.dataset.valor ?? el.textContent ?? '';
  if (anterior === texto) return;
  el.dataset.valor = texto;

  const fragmento = document.createDocumentFragment();
  let cambiadas = 0;
  [...texto].forEach((c, i) => {
    if (c === ' ') {
      fragmento.append(' ');
      return;
    }
    const letra = document.createElement('span');
    letra.className = 'letra';
    letra.textContent = c;
    letra.style.setProperty('--dy', `${(ruido(i, c) * 0.05).toFixed(3)}em`);
    letra.style.setProperty('--rot', `${(ruido(i + 7, c) * 2.4).toFixed(2)}deg`);
    // Se compara alineando desde la derecha, como se leen los números.
    const previa = anterior[anterior.length - (texto.length - i)];
    if (c !== previa) {
      letra.classList.add('encastra');
      letra.style.animationDelay = `${cambiadas++ * 40}ms`;
    }
    fragmento.append(letra);
  });
  el.replaceChildren(fragmento);
}

export function iniciarPedido() {
  const form = document.querySelector<HTMLFormElement>('#pedido');
  if (!form) return;

  const renglones = [...form.querySelectorAll<HTMLElement>('[data-producto]')];
  const cantidades = new Map(renglones.map((r) => [r.dataset.producto!, 0]));
  const ctas = [...document.querySelectorAll<HTMLAnchorElement>('[data-cta-pedido]')];
  const ctaTexto = form.querySelector<HTMLElement>('[data-cta-texto]')!;
  const vacio = form.querySelector<HTMLElement>('[data-vacio]')!;
  const lleno = form.querySelector<HTMLElement>('[data-lleno]')!;
  const total = form.querySelector<HTMLElement>('[data-total]')!;
  const anuncio = form.querySelector<HTMLElement>('[data-anuncio]')!;
  const direccionBox = form.querySelector<HTMLElement>('[data-direccion]')!;
  const direccion = form.querySelector<HTMLInputElement>('#direccion')!;
  const notaRetiro = form.querySelector<HTMLElement>('[data-nota-retiro]')!;
  const notaComercio = form.querySelector<HTMLElement>('[data-nota-comercio]')!;
  const barra = document.querySelector<HTMLElement>('[data-barra]')!;
  const barraResumen = document.querySelector<HTMLElement>('[data-barra-resumen]')!;
  const barraCta = document.querySelector<HTMLElement>('[data-barra-cta]')!;
  const totalFila = form.querySelector<HTMLElement>('.total')!;
  const numero = form.dataset.wa!;

  let totalEnVista = true;

  const entrega = () => form.querySelector<HTMLInputElement>('input[name="entrega"]:checked')?.value ?? 'retiro';

  function mensaje(items: { nombre: string; cantidad: number; subtotal: number }[], suma: number) {
    if (!items.length) return form!.dataset.mensajeVacio ?? 'Hola!';
    const lineas = items.map((i) => `• ${i.cantidad} × ${i.nombre}: ${precio(i.subtotal)}`);
    const dir = direccion.value.trim();
    const tipo = entrega();
    if (tipo === 'comercio') {
      return ['Hola! Tengo un comercio y quiero hacer un pedido por mayor:', '', ...lineas.map((l) => l.split(':')[0]), '', '¿Me pasan los precios mayoristas y el día de entrega?', 'Gracias!'].join('\n');
    }
    const comoLlega =
      tipo === 'envio'
        ? `Entrega: envío a domicilio${dir ? `, a ${dir}` : ' (te paso la dirección)'}`
        : `Entrega: paso a retirar por ${form!.dataset.retiro}`;
    return ['Hola! Quiero hacer este pedido:', '', ...lineas, '', `Total: ${precio(suma)}`, comoLlega, '', 'Gracias!'].join('\n');
  }

  function actualizar(cambio?: string) {
    const items: { nombre: string; cantidad: number; subtotal: number }[] = [];
    let suma = 0;
    let unidades = 0;

    for (const r of renglones) {
      const id = r.dataset.producto!;
      const cant = cantidades.get(id) ?? 0;
      const valor = Number(r.dataset.precio);
      const sub = cant * valor;
      r.classList.toggle('elegido', cant > 0);
      ponerLetras(r.querySelector<HTMLElement>('[data-cantidad]')!, String(cant));
      ponerLetras(r.querySelector<HTMLElement>('[data-subtotal]')!, cant > 1 ? `= ${precio(sub)}` : '');
      r.querySelector<HTMLButtonElement>('[data-accion="menos"]')!.disabled = cant === 0;
      if (cant > 0) items.push({ nombre: r.dataset.nombre!, cantidad: cant, subtotal: sub });
      suma += sub;
      unidades += cant;
    }

    vacio.hidden = unidades > 0;
    lleno.hidden = unidades === 0;
    if (unidades > 0) ponerLetras(total, precio(suma));
    ctaTexto.textContent = unidades > 0 ? 'Pedir por WhatsApp' : 'Consultar por WhatsApp';

    const href = `${numero}?text=${encodeURIComponent(mensaje(items, suma))}`;
    ctas.forEach((a) => (a.href = href));

    ponerLetras(barraResumen, unidades > 0 ? `${unidades} ${unidades === 1 ? 'paquete' : 'paquetes'} · ${precio(suma)}` : '¿Qué llevás hoy?');
    barraCta.textContent = unidades > 0 ? 'Pedir' : 'Consultar';
    barra.hidden = totalEnVista;

    if (cambio) {
      const r = renglones.find((x) => x.dataset.producto === cambio)!;
      anuncio.textContent = `${r.dataset.nombre}: ${cantidades.get(cambio)}. Total ${precio(suma)}.`;
    }
  }

  form.addEventListener('click', (e) => {
    const boton = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-accion]');
    if (!boton) return;
    const id = boton.closest<HTMLElement>('[data-producto]')!.dataset.producto!;
    const actual = cantidades.get(id) ?? 0;
    cantidades.set(id, Math.max(0, Math.min(99, actual + (boton.dataset.accion === 'mas' ? 1 : -1))));
    actualizar(id);
  });

  form.addEventListener('change', () => {
    const tipo = entrega();
    direccionBox.hidden = tipo !== 'envio';
    notaRetiro.hidden = tipo !== 'retiro';
    notaComercio.hidden = tipo !== 'comercio';
    actualizar();
  });

  direccion.addEventListener('input', () => actualizar());
  form.addEventListener('submit', (e) => e.preventDefault());

  new IntersectionObserver(([entrada]) => {
    totalEnVista = entrada.isIntersecting;
    actualizar();
  }).observe(totalFila);

  actualizar();
}

// La docena se encastra de a una letra cuando entra en pantalla.
export function iniciarDocena() {
  const docena = document.querySelector<HTMLElement>('[data-docena]');
  if (!docena || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (docena.getBoundingClientRect().top < window.innerHeight) return;

  const letras = [...docena.querySelectorAll<HTMLElement>('.letra')];
  letras.forEach((l) => l.classList.add('pendiente'));

  const obs = new IntersectionObserver(
    ([entrada]) => {
      if (!entrada.isIntersecting) return;
      obs.disconnect();
      letras.forEach((l, i) => {
        l.style.animationDelay = `${i * 70}ms`;
        l.classList.remove('pendiente');
        l.classList.add('encastra');
      });
    },
    { threshold: 0.6 },
  );
  obs.observe(docena);
}
