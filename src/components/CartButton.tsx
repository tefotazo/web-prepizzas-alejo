import { useCart } from '../cart/CartContext';
import { BagIcon } from './icons';

export function CartButton({ onClick }: { onClick: () => void }) {
  const { itemCount } = useCart();
  const label =
    itemCount === 0
      ? 'Abrir pedido, vacío'
      : `Abrir pedido, ${itemCount} ${itemCount === 1 ? 'producto' : 'productos'}`;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-haspopup="dialog"
      className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-flour transition-colors hover:bg-ink-soft"
    >
      <BagIcon />
      {itemCount > 0 && (
        <span
          data-testid="cart-count"
          aria-hidden="true"
          className="absolute -right-1 -top-1 grid min-h-5 min-w-5 place-items-center rounded-full bg-tomato px-1 text-xs font-bold tabular-nums text-white"
        >
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </button>
  );
}
