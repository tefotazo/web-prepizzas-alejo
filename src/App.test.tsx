import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { CART_STORAGE_KEY } from './cart/cartReducer';

beforeEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe('App', () => {
  it('tiene las secciones ancladas desde el header', () => {
    const { container } = render(<App />);
    for (const id of ['prepizzas', 'como-pedir', 'nosotros', 'contacto']) {
      expect(container.querySelector(`#${id}`)).not.toBeNull();
      expect(container.querySelector(`header a[href="#${id}"]`)).not.toBeNull();
    }
  });

  it('agregar muestra toast, actualiza contador y persiste', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: 'Sumar una unidad de Prepizza común' }));
    await user.click(screen.getByRole('button', { name: 'Agregar 2 × Prepizza común al pedido' }));

    expect(screen.getByText('Agregaste 2 × Prepizza común')).toBeInTheDocument();
    expect(screen.getByTestId('cart-count')).toHaveTextContent('2');
    expect(JSON.parse(localStorage.getItem(CART_STORAGE_KEY)!).items[0].quantity).toBe(2);
  });

  it('restaura el carrito de localStorage al cargar', () => {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify({ items: [{ id: 'pack-x6', name: 'Pack x6', price: 12000, quantity: 3 }] }),
    );
    render(<App />);
    expect(screen.getByTestId('cart-count')).toHaveTextContent('3');
  });

  it('drawer: exige dirección con envío, envía por WhatsApp y vacía', async () => {
    const open = vi.spyOn(window, 'open').mockImplementation(() => null);
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: 'Agregar 1 × Pack x6 al pedido' }));
    await user.click(screen.getByRole('button', { name: /Abrir pedido/ }));

    const dialog = screen.getByRole('dialog', { name: 'Tu pedido' });
    await user.click(within(dialog).getByLabelText('Envío'));
    await user.click(within(dialog).getByRole('button', { name: /Enviar pedido/ }));
    expect(open).not.toHaveBeenCalled();
    expect(within(dialog).getByText(/Escribí la dirección/)).toBeInTheDocument();

    await user.type(within(dialog).getByLabelText(/Dirección/), 'Calle 123');
    await user.click(within(dialog).getByRole('button', { name: /Enviar pedido/ }));

    expect(open).toHaveBeenCalledTimes(1);
    const [url, target] = open.mock.calls[0];
    expect(target).toBe('_blank');
    const text = new URL(String(url)).searchParams.get('text')!;
    expect(text).toContain('- 1 × Pack x6 ($ 12.000)');
    expect(text).toContain('Entrega: Envío a Calle 123');
    expect(text).not.toContain('Nombre:');
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(screen.queryByTestId('cart-count')).toBeNull();
    expect(screen.getByText('Te llevamos a WhatsApp para confirmar el pedido')).toBeInTheDocument();
  });

  it('drawer: cierra con Escape y el botón de enviar está deshabilitado vacío', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /Abrir pedido/ }));
    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByRole('button', { name: /Enviar pedido/ })).toBeDisabled();
    expect(dialog).toContainElement(document.activeElement as HTMLElement);
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});
