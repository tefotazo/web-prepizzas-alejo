// Todos los datos del negocio viven acá. Los marcados REEMPLAZAR son de ejemplo:
// cambialos por los reales y poné `ejemplo: false` para sacar el aviso del sitio.

export interface Promo {
  paquetes: number;
  precio: number;
}

export const negocio = {
  ejemplo: true,

  nombre: 'Pre-Pizzas Caseras', // REEMPLAZAR si la marca tiene nombre propio
  barrio: 'Barrio Ejemplo', // REEMPLAZAR
  // Número con código de país y sin signos: 54 9 + característica + número
  whatsapp: '5491164313066',
  telefono: '11 6431-3066',

  horario: 'Lun a sáb · 10 a 20 h', // REEMPLAZAR
  direccionRetiro: 'Calle Ejemplo 1234', // REEMPLAZAR
  zonasEnvio: ['Barrio Ejemplo', 'Villa Ejemplo', 'Parque Ejemplo'], // REEMPLAZAR
  envio: 'Consultá el costo de envío a tu zona.', // REEMPLAZAR

  paquete: {
    prepizzas: 2,
    detalle: 'Cada paquete incluye 2 pre-pizzas (en bolsa de polipropileno).',
  },
  caracteristicas: ['Salsa sola', 'Masa casera', 'Sin conservantes', 'Excelente calidad'],

  // Precio por cantidad de paquetes. El pedido combina estas promos para dar el menor precio.
  promos: [
    { paquetes: 1, precio: 3000 },
    { paquetes: 2, precio: 5000 },
    { paquetes: 3, precio: 7000 },
  ] satisfies Promo[],

  mayorista: {
    rubros: [
      { icono: 'torta', texto: 'Cumpleaños / Fiestas' },
      { icono: 'gente', texto: 'Reuniones / Eventos' },
      { icono: 'local', texto: 'Kioscos / Minimercados' },
      { icono: 'campana', texto: 'Restaurantes / Bares' },
      { icono: 'sumar', texto: '¡Y mucho más!' },
    ],
  },
} as const;

export type Rubro = (typeof negocio.mayorista.rubros)[number]['icono'];

export const formatoPrecio = (n: number) => '$' + new Intl.NumberFormat('es-AR').format(n);

// Menor precio para n paquetes combinando las promos.
export function precioPedido(n: number, promos: readonly Promo[] = negocio.promos) {
  const mejor = [0];
  for (let i = 1; i <= n; i++) {
    mejor[i] = Math.min(...promos.filter((p) => p.paquetes <= i).map((p) => mejor[i - p.paquetes] + p.precio));
  }
  return mejor[n];
}

export const precioSuelto = (n: number) => n * negocio.promos[0].precio;

export const linkWhatsApp = (mensaje: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
