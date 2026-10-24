import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from 'react';
import {
  CART_STORAGE_KEY,
  cartReducer,
  itemCount,
  loadCart,
  subtotal,
  type CartAction,
  type CartItem,
} from './cartReducer';

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextValue | null>(null);

function getStorage(): Storage | undefined {
  try {
    return typeof window !== 'undefined' ? window.localStorage : undefined;
  } catch {
    return undefined;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, () => loadCart(getStorage()));

  useEffect(() => {
    try {
      getStorage()?.setItem(CART_STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Sin storage disponible (modo privado, cuota llena): el carrito vive solo en memoria.
    }
  }, [state]);

  const value = useMemo<CartContextValue>(
    () => ({
      items: state.items,
      itemCount: itemCount(state),
      subtotal: subtotal(state),
      dispatch,
    }),
    [state],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>');
  return ctx;
}
