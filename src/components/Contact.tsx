import { instagramUrl, site } from '../config/site';
import { buildWhatsAppUrl, GREETING_MESSAGE } from '../lib/whatsapp';
import { InstagramIcon, WhatsAppIcon } from './icons';

export function Contact() {
  const deliveryText = [site.shipping.pickup && 'Retiro', site.shipping.delivery && 'Envío']
    .filter(Boolean)
    .join(' y ');

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="scroll-mt-20 bg-flour-deep py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="contacto-title" className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Contacto
        </h2>
        <dl className="mt-8 grid gap-6 sm:grid-cols-3">
          <div>
            <dt className="font-semibold text-ink">Horarios</dt>
            <dd className="mt-1 text-ink-soft">{site.openingHours}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Entregas</dt>
            <dd className="mt-1 text-ink-soft">{deliveryText}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Zona</dt>
            <dd className="mt-1 text-ink-soft">{site.deliveryZone}</dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={buildWhatsAppUrl(site.whatsappNumber, GREETING_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-basil px-6 font-semibold text-white hover:bg-basil/90"
          >
            <WhatsAppIcon width={20} height={20} /> WhatsApp
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ink px-6 font-semibold text-ink hover:bg-flour"
          >
            <InstagramIcon width={20} height={20} /> @{site.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}
