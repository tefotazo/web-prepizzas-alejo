const priceFormatter = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 });

/** Formatea un monto en pesos argentinos: 2500 → "$ 2.500" */
export function formatPrice(n: number): string {
  return `$ ${priceFormatter.format(Math.round(n))}`;
}
