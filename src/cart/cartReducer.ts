import type { Product } from '../data/products';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: 'add'; product: Pick<Product, 'id' | 'name' | 'price'>; quantity: number }
  | { type: 'remove'; id: string }
  | { type: 'setQuantity'; id: string; quantity: number }
  | { type: 'clear' };

export const initialCartState: CartState = { items: [] };

function sanitizeQuantity(q: number): number {
  return Number.isFinite(q) ? Math.max(0, Math.floor(q)) : 0;
}

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'add': {
      const quantity = sanitizeQuantity(action.quantity);
      if (quantity === 0) return state;
      const { id, name, price } = action.product;
      const existing = state.items.find((i) => i.id === id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === id ? { ...i, name, price, quantity: i.quantity + quantity } : i,
          ),
        };
      }
      return { items: [...state.items, { id, name, price, quantity }] };
    }
    case 'remove':
      return { items: state.items.filter((i) => i.id !== action.id) };
    case 'setQuantity': {
      const quantity = sanitizeQuantity(action.quantity);
      if (quantity === 0) return { items: state.items.filter((i) => i.id !== action.id) };
      return {
        items: state.items.map((i) => (i.id === action.id ? { ...i, quantity } : i)),
      };
    }
    case 'clear':
      return initialCartState;
    default:
      return state;
  }
}

export function itemCount(state: CartState): number {
  return state.items.reduce((sum, i) => sum + i.quantity, 0);
}

export function subtotal(state: CartState): number {
  return state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
}

export const CART_STORAGE_KEY = 'prepizzas-alejo-cart';

/** Lee el carrito guardado, descartando datos corruptos o con formato viejo. */
export function loadCart(storage: Pick<Storage, 'getItem'> | undefined): CartState {
  try {
    const raw = storage?.getItem(CART_STORAGE_KEY);
    if (!raw) return initialCartState;
    const parsed: unknown = JSON.parse(raw);
    const items = (parsed as CartState)?.items;
    if (!Array.isArray(items)) return initialCartState;
    return {
      items: items.filter(
        (i): i is CartItem =>
          typeof i?.id === 'string' &&
          typeof i?.name === 'string' &&
          typeof i?.price === 'number' &&
          typeof i?.quantity === 'number' &&
          i.quantity > 0,
      ),
    };
  } catch {
    return initialCartState;
  }
}
