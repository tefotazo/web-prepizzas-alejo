export interface Product {
  id: string;
  name: string;
  description: string;
  /** Precio en pesos argentinos, sin decimales */
  price: number;
  /** Ruta relativa a /public */
  image: string;
  tag?: string;
}

// Precios de ejemplo: reemplazar con los reales.
export const products: Product[] = [
  {
    id: 'prepizza-comun',
    name: 'Prepizza común',
    description: 'La clásica: masa esponjosa con salsa de tomate casera, lista para gratinar.',
    price: 2500,
    image: 'images/products/prepizza-comun.jpg',
    tag: 'La más pedida',
  },
  {
    id: 'prepizza-cebolla',
    name: 'Prepizza con cebolla',
    description: 'Con cebolla en juliana sobre la salsa, ideal para fugazzeta.',
    price: 2800,
    image: 'images/products/prepizza-cebolla.jpg',
  },
  {
    id: 'prepizza-integral',
    name: 'Prepizza integral',
    description: 'Masa con harina integral, más sabor y más fibra.',
    price: 2900,
    image: 'images/products/prepizza-integral.jpg',
  },
  {
    id: 'prepizza-sin-tacc',
    name: 'Prepizza sin TACC',
    description: 'Elaborada con premezcla apta celíacos.',
    price: 3500,
    image: 'images/products/prepizza-sin-tacc.jpg',
    tag: 'Sin TACC',
  },
  {
    id: 'pack-x6',
    name: 'Pack x6',
    description: 'Seis prepizzas comunes para el freezer o para una juntada.',
    price: 12000,
    image: 'images/products/pack-x6.jpg',
  },
  {
    id: 'pack-x12',
    name: 'Pack x12',
    description: 'Doce prepizzas comunes al mejor precio por unidad.',
    price: 22000,
    image: 'images/products/pack-x12.jpg',
    tag: 'Conviene',
  },
];
