import {
  CART_STORAGE_KEY,
  cartReducer,
  initialCartState,
  itemCount,
  loadCart,
  subtotal,
  type CartState,
} from './cartReducer';

const comun = { id: 'prepizza-comun', name: 'Prepizza común', price: 2500 };
const pack = { id: 'pack-x6', name: 'Pack x6', price: 12000 };

function withItems(): CartState {
  let s = cartReducer(initialCartState, { type: 'add', product: comun, quantity: 2 });
  s = cartReducer(s, { type: 'add', product: pack, quantity: 1 });
  return s;
}

describe('cartReducer', () => {
  it('add agrega un ítem nuevo', () => {
    const s = cartReducer(initialCartState, { type: 'add', product: comun, quantity: 2 });
    expect(s.items).toEqual([{ ...comun, quantity: 2 }]);
  });

  it('add suma cantidad si el producto ya está', () => {
    const s = cartReducer(withItems(), { type: 'add', product: comun, quantity: 3 });
    expect(s.items.find((i) => i.id === comun.id)?.quantity).toBe(5);
    expect(s.items).toHaveLength(2);
  });

  it('add ignora cantidades inválidas', () => {
    const s = withItems();
    expect(cartReducer(s, { type: 'add', product: comun, quantity: 0 })).toBe(s);
    expect(cartReducer(s, { type: 'add', product: comun, quantity: -2 })).toBe(s);
  });

  it('remove quita el ítem', () => {
    const s = cartReducer(withItems(), { type: 'remove', id: comun.id });
    expect(s.items.map((i) => i.id)).toEqual([pack.id]);
  });

  it('setQuantity cambia la cantidad y con 0 elimina', () => {
    let s = cartReducer(withItems(), { type: 'setQuantity', id: pack.id, quantity: 4 });
    expect(s.items.find((i) => i.id === pack.id)?.quantity).toBe(4);
    s = cartReducer(s, { type: 'setQuantity', id: pack.id, quantity: 0 });
    expect(s.items.find((i) => i.id === pack.id)).toBeUndefined();
  });

  it('clear vacía el carrito', () => {
    expect(cartReducer(withItems(), { type: 'clear' })).toEqual({ items: [] });
  });

  it('itemCount y subtotal', () => {
    const s = withItems();
    expect(itemCount(s)).toBe(3);
    expect(subtotal(s)).toBe(17000);
    expect(itemCount(initialCartState)).toBe(0);
    expect(subtotal(initialCartState)).toBe(0);
  });
});

describe('loadCart', () => {
  const storage = (value: string | null) => ({
    getItem: (k: string) => (k === CART_STORAGE_KEY ? value : null),
  });

  it('restaura un carrito guardado', () => {
    const s = withItems();
    expect(loadCart(storage(JSON.stringify(s)))).toEqual(s);
  });

  it('devuelve vacío con datos ausentes o corruptos', () => {
    expect(loadCart(storage(null))).toEqual(initialCartState);
    expect(loadCart(storage('{no json'))).toEqual(initialCartState);
    expect(loadCart(storage('{"items":"x"}'))).toEqual(initialCartState);
    expect(loadCart(undefined)).toEqual(initialCartState);
  });
});
