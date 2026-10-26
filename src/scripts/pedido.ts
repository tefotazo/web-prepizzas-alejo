// Arma el pedido de paquetes y lo convierte en un mensaje de WhatsApp.
import { formatoPrecio, precioPedido, precioSuelto, negocio, type Promo } from '../data/negocio';

const MAX = 99;

// Vuelve a "pegar" el elemento, como un sello nuevo encima del anterior.
function estampar(el: HTMLElement) {
  el.classList.remove('estampa');
  void el.offsetWidth;
  el.classList.add('estampa');
}

function fechaLegible(valor: string) {
  if (!valor) return '';
  return new Date(`${valor}T12:00`).toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'numeric' });
}

export function iniciarPedido() {
  const form = document.querySelector<HTMLFormElement>('#pedido');
  if (!form) return;

  const promos: Promo[] = JSON.parse(form.dataset.precios ?? '[]');
  const campo = form.querySelector<HTMLInputElement>('#paquetes')!;
  const menos = form.querySelector<HTMLButtonElement>('[data-accion="menos"]')!;
  const escalones = [...form.querySelectorAll<HTMLButtonElement>('[data-paquetes]')];
  const unidades = form.querySelector<HTMLElement>('[data-unidades]')!;
  const total = form.querySelector<HTMLElement>('[data-total]')!;
  const ahorro = form.querySelector<HTMLElement>('[data-ahorro]')!;
  const estimado = form.querySelector<HTMLElement>('[data-estimado]')!;
  const anuncio = form.querySelector<HTMLElement>('[data-anuncio]')!;
  const direccionBox = form.querySelector<HTMLElement>('[data-direccion]')!;
  const direccion = form.querySelector<HTMLInputElement>('#direccion')!;
  const dia = form.querySelector<HTMLInputElement>('#dia')!;
  const notaRetiro = form.querySelector<HTMLElement>('[data-nota-retiro]')!;
  const ctas = [...document.querySelectorAll<HTMLAnchorElement>('[data-cta-pedido]')];
  const barra = document.querySelector<HTMLElement>('[data-barra]')!;
  const barraResumen = document.querySelector<HTMLElement>('[data-barra-resumen]')!;
  const totalFila = form.querySelector<HTMLElement>('.total')!;
  const numero = form.dataset.wa!;

  const hoy = new Date();
  dia.min = new Date(hoy.getTime() - hoy.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

  let cantidad = 1;
  let totalEnVista = true;
  let totalAnterior = '';

  const entrega = () => form.querySelector<HTMLInputElement>('input[name="entrega"]:checked')?.value ?? 'retiro';

  // Las promos publicadas llegan hasta cierta cantidad; de ahí en más el total combinado es una estimación.
  const esEstimado = () => cantidad > promos[promos.length - 1].paquetes;

  function mensaje(suma: number) {
    const prepizzas = cantidad * negocio.paquete.prepizzas;
    const dir = direccion.value.trim();
    const cuando = fechaLegible(dia.value);
    const comoLlega =
      entrega() === 'envio'
        ? `Entrega: envío a domicilio${dir ? `, a ${dir}` : ' (te paso la dirección)'}`
        : `Entrega: paso a retirar por ${form!.dataset.retiro}`;
    return [
      'Hola! Quiero hacer este pedido:',
      '',
      `• ${cantidad} ${cantidad === 1 ? 'paquete' : 'paquetes'} (${prepizzas} pre-pizzas)`,
      esEstimado() ? `Total estimado: ${formatoPrecio(suma)} (a confirmar)` : `Total: ${formatoPrecio(suma)}`,
      comoLlega,
      cuando ? `Para el ${cuando}` : 'Día: a coordinar',
      '',
      'Gracias!',
    ].join('\n');
  }

  function actualizar(anunciar = false) {
    const suma = precioPedido(cantidad, promos);
    const ahorra = precioSuelto(cantidad) - suma;
    const tope = Math.min(cantidad, promos[promos.length - 1].paquetes);

    campo.value = String(cantidad);
    menos.disabled = cantidad <= 1;
    unidades.textContent = `= ${cantidad * negocio.paquete.prepizzas} pre-pizzas`;
    escalones.forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.paquetes) === tope)));

    const texto = formatoPrecio(suma);
    if (texto !== totalAnterior) {
      total.textContent = texto;
      if (totalAnterior) estampar(total);
      totalAnterior = texto;
    }
    ahorro.hidden = ahorra <= 0;
    estimado.hidden = !esEstimado();
    ahorro.textContent = `¡Ahorrás ${formatoPrecio(ahorra)}!`;

    const href = `${numero}?text=${encodeURIComponent(mensaje(suma))}`;
    ctas.forEach((a) => (a.href = href));

    barraResumen.textContent = `${cantidad} ${cantidad === 1 ? 'paquete' : 'paquetes'} · ${texto}`;
    barra.hidden = totalEnVista;

    if (anunciar) anuncio.textContent = `${cantidad} ${cantidad === 1 ? 'paquete' : 'paquetes'}. Total ${texto}.`;
  }

  const poner = (n: number) => {
    cantidad = Math.max(1, Math.min(MAX, Math.round(n) || 1));
    actualizar(true);
  };

  form.addEventListener('click', (e) => {
    const objetivo = e.target as HTMLElement;
    const paso = objetivo.closest<HTMLButtonElement>('[data-accion]');
    if (paso) poner(cantidad + (paso.dataset.accion === 'mas' ? 1 : -1));
    const escalon = objetivo.closest<HTMLButtonElement>('[data-paquetes]');
    if (escalon) poner(Number(escalon.dataset.paquetes));
  });

  // Los botones de las promos, fuera del formulario, cargan esa cantidad y llevan al pedido.
  document.querySelectorAll<HTMLButtonElement>('[data-elegir]').forEach((b) =>
    b.addEventListener('click', () => {
      poner(Number(b.dataset.elegir));
      form.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }),
  );

  campo.addEventListener('change', () => poner(Number(campo.value)));

  form.addEventListener('change', (e) => {
    if ((e.target as HTMLInputElement).name !== 'entrega') return;
    const tipo = entrega();
    direccionBox.hidden = tipo !== 'envio';
    notaRetiro.hidden = tipo !== 'retiro';
    actualizar();
  });

  direccion.addEventListener('input', () => actualizar());
  dia.addEventListener('change', () => actualizar());
  form.addEventListener('submit', (e) => e.preventDefault());

  new IntersectionObserver(([entrada]) => {
    // La barra solo aparece cuando el total quedó arriba, no antes de llegar a él.
    totalEnVista = entrada.isIntersecting || entrada.boundingClientRect.top > 0;
    actualizar();
  }).observe(totalFila);

  actualizar();
}
