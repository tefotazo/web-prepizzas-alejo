/**
 * Datos del negocio centralizados. Cambiá acá y se actualiza todo el sitio.
 */
export interface SiteConfig {
  name: string;
  /** Formato internacional sin "+" ni espacios, ej. 5491100000000 */
  whatsappNumber: string;
  /** Usuario de Instagram sin "@" */
  instagram: string;
  deliveryZone: string;
  openingHours: string;
  aboutText: string;
  shipping: { pickup: boolean; delivery: boolean };
}

export const site: SiteConfig = {
  name: 'Prepizzas Alejo', // TODO: reemplazar con dato real
  whatsappNumber: '5491100000000', // TODO: reemplazar con dato real
  instagram: 'prepizzasalejo', // TODO: reemplazar con dato real
  deliveryZone: 'Envíos en la zona de [barrio / localidad]', // TODO: reemplazar con dato real
  openingHours: 'Lunes a sábado de 10 a 20 h', // TODO: reemplazar con dato real
  aboutText:
    'Somos una familia que amasa prepizzas como en casa: harina, agua, levadura y tiempo de leudado. Las hacemos todos los días para que vos solo tengas que ponerles lo que más te guste y meterlas al horno.', // TODO: reemplazar con dato real
  shipping: { pickup: true, delivery: true }, // TODO: reemplazar con dato real
};

export const instagramUrl = `https://instagram.com/${site.instagram}`;
