import { formatPrice } from './format';

export interface OrderLine {
  name: string;
  price: number;
  quantity: number;
}

export type DeliveryMethod = 'pickup' | 'delivery';

export interface CustomerInfo {
  name?: string;
  delivery: DeliveryMethod;
  address?: string;
  notes?: string;
}

export const GREETING_MESSAGE = 'Hola! Quiero hacer una consulta sobre las prepizzas.';

export function buildOrderMessage(items: OrderLine[], customer: CustomerInfo): string {
  const lines = ['Hola! Quiero hacer un pedido 🍕'];
  let total = 0;
  for (const item of items) {
    const lineTotal = item.price * item.quantity;
    total += lineTotal;
    lines.push(`- ${item.quantity} × ${item.name} (${formatPrice(lineTotal)})`);
  }
  lines.push(`Total: ${formatPrice(total)}`);

  const address = customer.address?.trim();
  lines.push(
    customer.delivery === 'delivery'
      ? `Entrega: Envío a ${address ?? ''}`.trimEnd()
      : 'Entrega: Retiro',
  );

  const name = customer.name?.trim();
  if (name) lines.push(`Nombre: ${name}`);
  const notes = customer.notes?.trim();
  if (notes) lines.push(`Aclaraciones: ${notes}`);

  return lines.join('\n');
}

export function buildWhatsAppUrl(number: string, message?: string): string {
  const cleanNumber = number.replace(/\D/g, '');
  const base = `https://wa.me/${cleanNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
