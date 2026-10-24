import { site } from '../config/site';
import { buildWhatsAppUrl, GREETING_MESSAGE } from '../lib/whatsapp';
import { WhatsAppIcon } from './icons';

export function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppUrl(site.whatsappNumber, GREETING_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-basil text-white shadow-warm transition-transform hover:scale-105 focus-visible:scale-105"
    >
      <WhatsAppIcon width={28} height={28} />
    </a>
  );
}
