// Todos los datos del negocio viven acá. Los marcados REEMPLAZAR son de ejemplo:
// cambialos por los reales y poné `ejemplo: false` para sacar el aviso del sitio.

export interface Producto {
  id: string;
  nombre: string;
  detalle: string;
  precio: number;
  unidades: number;
}

export const negocio = {
  ejemplo: true,

  nombre: 'Prepizzas de la Casa', // REEMPLAZAR
  familia: 'la familia Ejemplo', // REEMPLAZAR
  barrio: 'Barrio Ejemplo', // REEMPLAZAR
  // Número con código de país y sin signos: 54 9 + característica + número
  whatsapp: '5491100000000', // REEMPLAZAR
  instagram: 'prepizzasdelacasa', // REEMPLAZAR (o dejar vacío)

  horario: 'Lun a sáb · 10 a 20 h', // REEMPLAZAR
  dias: 'Lunes a sábado', // REEMPLAZAR
  direccionRetiro: 'Calle Ejemplo 1234', // REEMPLAZAR
  zonasEnvio: ['Barrio Ejemplo', 'Villa Ejemplo', 'Parque Ejemplo'], // REEMPLAZAR
  envio: 'Gratis desde 2 docenas. Si no, $ 1.500.', // REEMPLAZAR

  productos: [
    { id: 'comun', nombre: 'Docena común', detalle: '12 prepizzas de 30 cm', precio: 6000, unidades: 12 },
    { id: 'integral', nombre: 'Docena integral', detalle: '12 prepizzas de harina integral', precio: 7200, unidades: 12 },
    { id: 'salsa', nombre: 'Con salsa x6', detalle: 'Media docena con salsa de tomate casera', precio: 4500, unidades: 6 },
    { id: 'chicas', nombre: 'Docena chicas', detalle: '12 prepizzetas de 18 cm, para picada', precio: 4200, unidades: 12 },
  ] satisfies Producto[], // REEMPLAZAR precios y productos

  // Para el bloque "rinde": qué producto se usa como ejemplo
  productoRinde: 'comun',
  consejo: 'Se guardan en el freezer y van directo al horno, sin descongelar.', // REEMPLAZAR

  mayorista: {
    minimo: 'Desde 5 docenas por pedido', // REEMPLAZAR
    entrega: 'Te las llevamos al local una vez por semana', // REEMPLAZAR
    precio: 'Precio por docena más bajo que el minorista', // REEMPLAZAR
  },

  historia: [
    // REEMPLAZAR por la historia real: quién amasa, desde cuándo, qué tiene de distinto la receta.
    'Las amasamos nosotros, en casa, en tandas chicas para que salgan siempre iguales.',
    'Empezamos vendiéndoselas a los vecinos de la cuadra y hoy también las encontrás en almacenes del barrio.',
  ],
};

export const formatoPrecio = (n: number) => '$ ' + new Intl.NumberFormat('es-AR').format(n);

export const linkWhatsApp = (mensaje: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
