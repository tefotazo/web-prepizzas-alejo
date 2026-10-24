import { useState } from 'react';
import type { Product } from '../data/products';
import { useCart } from '../cart/CartContext';
import { formatPrice } from '../lib/format';
import { QuantityStepper } from './QuantityStepper';
import { useToast } from './Toast';

export function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();
  const { showToast } = useToast();

  function handleAdd() {
    dispatch({ type: 'add', product, quantity });
    showToast(`Agregaste ${quantity} × ${product.name}`);
    setQuantity(1);
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-warm">
      <div className="relative aspect-[4/3] bg-flour-deep">
        <img
          src={`${import.meta.env.BASE_URL}${product.image}`}
          alt={product.name}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-flour px-3 py-1 text-xs font-semibold text-tomato-dark">
            {product.tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl font-bold text-ink">{product.name}</h3>
          <p className="shrink-0 text-lg font-semibold tabular-nums text-tomato-dark">
            {formatPrice(product.price)}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-ink-soft">{product.description}</p>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          <QuantityStepper value={quantity} onChange={setQuantity} label={product.name} />
          <button
            type="button"
            onClick={handleAdd}
            className="min-h-11 flex-1 rounded-full bg-tomato px-5 font-semibold text-white transition-colors hover:bg-tomato-dark"
            aria-label={`Agregar ${quantity} × ${product.name} al pedido`}
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}
