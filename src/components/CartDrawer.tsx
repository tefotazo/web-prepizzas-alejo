import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { useCart } from '../cart/CartContext';
import { site } from '../config/site';
import { formatPrice } from '../lib/format';
import { useFocusTrap } from '../lib/useFocusTrap';
import { buildOrderMessage, buildWhatsAppUrl, type DeliveryMethod } from '../lib/whatsapp';
import { CloseIcon, EmptyBoardIllustration, TrashIcon, WhatsAppIcon } from './icons';
import { QuantityStepper } from './QuantityStepper';
import { useToast } from './Toast';

interface Props {
  open: boolean;
  onClose: () => void;
}

const defaultDelivery: DeliveryMethod = site.shipping.pickup ? 'pickup' : 'delivery';

export function CartDrawer({ open, onClose }: Props) {
  const { items, subtotal, dispatch } = useCart();
  const { showToast } = useToast();
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const addressErrorId = useId();

  const [name, setName] = useState('');
  const [delivery, setDelivery] = useState<DeliveryMethod>(defaultDelivery);
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [addressError, setAddressError] = useState(false);

  useFocusTrap(panelRef, open, onClose);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const isEmpty = items.length === 0;
  const showDeliveryChoice = site.shipping.pickup && site.shipping.delivery;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (isEmpty) return;
    if (delivery === 'delivery' && !address.trim()) {
      setAddressError(true);
      document.getElementById('cart-address')?.focus();
      return;
    }
    const message = buildOrderMessage(items, { name, delivery, address, notes });
    window.open(buildWhatsAppUrl(site.whatsappNumber, message), '_blank');
    dispatch({ type: 'clear' });
    setNotes('');
    setAddressError(false);
    showToast('Te llevamos a WhatsApp para confirmar el pedido');
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-ink/50" onClick={onClose} aria-hidden="true" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-flour shadow-warm outline-none"
      >
        <div className="flex items-center justify-between border-b border-crust/20 px-5 py-3">
          <h2 id={titleId} className="font-display text-2xl font-bold text-ink">
            Tu pedido
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar pedido"
            className="grid h-11 w-11 place-items-center rounded-full text-ink hover:bg-flour-deep"
          >
            <CloseIcon />
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex min-h-0 flex-1 flex-col">
          <div className="flex-1 overflow-y-auto px-5 py-4">
            {isEmpty ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <EmptyBoardIllustration />
                <p className="font-display text-xl font-bold text-ink">Todavía no sumaste nada</p>
                <p className="max-w-xs text-sm text-ink-soft">
                  Elegí tus prepizzas en el catálogo y van a aparecer acá.
                </p>
                <a
                  href="#prepizzas"
                  onClick={onClose}
                  className="inline-flex min-h-11 items-center rounded-full border border-ink px-5 font-semibold text-ink hover:bg-flour-deep"
                >
                  Ver prepizzas
                </a>
              </div>
            ) : (
              <>
                <ul className="divide-y divide-crust/20">
                  {items.map((item) => (
                    <li key={item.id} className="flex flex-col gap-2 py-4">
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-semibold text-ink">{item.name}</p>
                        <p className="tabular-nums text-ink">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <QuantityStepper
                          value={item.quantity}
                          label={item.name}
                          onChange={(q) =>
                            dispatch({ type: 'setQuantity', id: item.id, quantity: q })
                          }
                        />
                        <button
                          type="button"
                          onClick={() => dispatch({ type: 'remove', id: item.id })}
                          aria-label={`Quitar ${item.name} del pedido`}
                          className="grid h-11 w-11 place-items-center rounded-full text-tomato-dark hover:bg-flour-deep"
                        >
                          <TrashIcon width={20} height={20} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-2 flex items-baseline justify-between border-t border-ink/20 pt-4">
                  <p className="font-semibold text-ink">Subtotal</p>
                  <p
                    data-testid="cart-subtotal"
                    className="text-xl font-bold tabular-nums text-ink"
                  >
                    {formatPrice(subtotal)}
                  </p>
                </div>

                <fieldset className="mt-6 flex flex-col gap-4">
                  <legend className="sr-only">Tus datos</legend>
                  <label className="flex flex-col gap-1 text-sm font-medium text-ink">
                    Nombre <span className="font-normal text-ink-soft">(opcional)</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="name"
                      className="min-h-11 rounded-xl border border-crust/40 bg-white px-3 text-base"
                    />
                  </label>

                  {showDeliveryChoice && (
                    <fieldset>
                      <legend className="text-sm font-medium text-ink">¿Cómo lo recibís?</legend>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {(
                          [
                            ['pickup', 'Retiro'],
                            ['delivery', 'Envío'],
                          ] as const
                        ).map(([value, label]) => (
                          <label
                            key={value}
                            className="flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-crust/40 bg-white px-3 has-[:checked]:border-tomato has-[:checked]:bg-tomato/5"
                          >
                            <input
                              type="radio"
                              name="delivery"
                              value={value}
                              checked={delivery === value}
                              onChange={() => {
                                setDelivery(value);
                                setAddressError(false);
                              }}
                              className="h-5 w-5 accent-tomato"
                            />
                            {label}
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  )}

                  {delivery === 'delivery' && (
                    <label className="flex flex-col gap-1 text-sm font-medium text-ink">
                      Dirección
                      <input
                        id="cart-address"
                        type="text"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                          if (e.target.value.trim()) setAddressError(false);
                        }}
                        required
                        aria-required="true"
                        aria-invalid={addressError}
                        aria-describedby={addressError ? addressErrorId : undefined}
                        autoComplete="street-address"
                        className="min-h-11 rounded-xl border border-crust/40 bg-white px-3 text-base aria-[invalid=true]:border-tomato"
                      />
                      <span className="font-normal text-ink-soft">{site.deliveryZone}</span>
                      {addressError && (
                        <span id={addressErrorId} className="font-medium text-tomato-dark">
                          Escribí la dirección para que podamos llevarte el pedido.
                        </span>
                      )}
                    </label>
                  )}

                  <label className="flex flex-col gap-1 text-sm font-medium text-ink">
                    Aclaraciones <span className="font-normal text-ink-soft">(opcional)</span>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                      placeholder="Horario, timbre, si querés que te llamemos…"
                      className="rounded-xl border border-crust/40 bg-white px-3 py-2 text-base placeholder:text-ink-soft/80"
                    />
                  </label>
                </fieldset>
              </>
            )}
          </div>

          <div className="border-t border-crust/20 px-5 py-4">
            <button
              type="submit"
              disabled={isEmpty}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-basil px-5 font-semibold text-white transition-colors hover:bg-basil/90 disabled:cursor-not-allowed disabled:bg-ink/30"
            >
              <WhatsAppIcon width={20} height={20} />
              Enviar pedido por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
