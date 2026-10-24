import { formatPrice } from './format';

describe('formatPrice', () => {
  it('formatea con separador de miles es-AR', () => {
    expect(formatPrice(2500)).toBe('$ 2.500');
    expect(formatPrice(17000)).toBe('$ 17.000');
    expect(formatPrice(1250000)).toBe('$ 1.250.000');
  });

  it('formatea montos chicos y cero', () => {
    expect(formatPrice(0)).toBe('$ 0');
    expect(formatPrice(950)).toBe('$ 950');
  });

  it('redondea decimales', () => {
    expect(formatPrice(2499.6)).toBe('$ 2.500');
  });
});
