import { buildOrderMessage, buildWhatsAppUrl } from './whatsapp';

const items = [
  { name: 'Prepizza común', price: 2500, quantity: 2 },
  { name: 'Pack x6', price: 12000, quantity: 1 },
];

describe('buildOrderMessage', () => {
  it('arma el mensaje completo con envío, nombre y aclaraciones', () => {
    const msg = buildOrderMessage(items, {
      name: 'Ana',
      delivery: 'delivery',
      address: 'Av. Siempreviva 742',
      notes: 'Tocar timbre 2B',
    });
    expect(msg).toBe(
      [
        'Hola! Quiero hacer un pedido 🍕',
        '- 2 × Prepizza común ($ 5.000)',
        '- 1 × Pack x6 ($ 12.000)',
        'Total: $ 17.000',
        'Entrega: Envío a Av. Siempreviva 742',
        'Nombre: Ana',
        'Aclaraciones: Tocar timbre 2B',
      ].join('\n'),
    );
  });

  it('usa "Retiro" y omite nombre y aclaraciones vacíos', () => {
    const msg = buildOrderMessage(items, { name: '  ', delivery: 'pickup', notes: '' });
    expect(msg).toBe(
      [
        'Hola! Quiero hacer un pedido 🍕',
        '- 2 × Prepizza común ($ 5.000)',
        '- 1 × Pack x6 ($ 12.000)',
        'Total: $ 17.000',
        'Entrega: Retiro',
      ].join('\n'),
    );
    expect(msg).not.toContain('Nombre:');
    expect(msg).not.toContain('Aclaraciones:');
  });

  it('ignora la dirección si es retiro y recorta espacios', () => {
    const msg = buildOrderMessage(items, {
      delivery: 'pickup',
      address: 'Calle 1',
      name: '  Juan  ',
    });
    expect(msg).toContain('Entrega: Retiro');
    expect(msg).not.toContain('Calle 1');
    expect(msg).toContain('Nombre: Juan');
  });
});

describe('buildWhatsAppUrl', () => {
  it('url-encodea el mensaje con saltos de línea, emoji y símbolos', () => {
    const url = buildWhatsAppUrl('5491100000000', 'Hola! 🍕\nTotal: $ 5.000 & más');
    expect(url).toBe(
      'https://wa.me/5491100000000?text=Hola!%20%F0%9F%8D%95%0ATotal%3A%20%24%205.000%20%26%20m%C3%A1s',
    );
    const text = new URL(url).searchParams.get('text');
    expect(text).toBe('Hola! 🍕\nTotal: $ 5.000 & más');
  });

  it('limpia el número y sin mensaje devuelve solo el link', () => {
    expect(buildWhatsAppUrl('+54 9 11 0000-0000')).toBe('https://wa.me/5491100000000');
  });
});
