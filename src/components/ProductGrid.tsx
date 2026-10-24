import type { Product } from '../data/products';
import { ProductCard } from './ProductCard';

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section
      id="prepizzas"
      aria-labelledby="prepizzas-title"
      className="scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="prepizzas-title" className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Nuestras prepizzas
        </h2>
        <p className="mt-3 max-w-prose text-ink-soft">
          Elegí cuántas querés, sumalas al pedido y lo mandamos por WhatsApp.
        </p>
        {products.length === 0 ? (
          <p className="mt-10 rounded-2xl bg-flour-deep p-6 text-ink-soft">
            Por ahora no hay productos cargados. Escribinos por WhatsApp y te contamos qué tenemos
            hoy.
          </p>
        ) : (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <li key={p.id} className="flex">
                <div className="w-full">
                  <ProductCard product={p} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
