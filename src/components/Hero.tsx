import { site } from '../config/site';
import { buildWhatsAppUrl, GREETING_MESSAGE } from '../lib/whatsapp';

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="bg-flour-deep">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h1
            id="hero-title"
            className="text-balance font-display text-4xl font-bold leading-tight text-ink sm:text-6xl"
          >
            Prepizzas caseras, amasadas en familia
          </h1>
          <p className="mt-5 max-w-prose text-lg text-ink-soft">
            Masa con tiempo de leudado y salsa hecha por nosotros. Vos le ponés lo que más te gusta
            y en minutos tenés pizza de verdad.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#prepizzas"
              className="inline-flex min-h-12 items-center rounded-full bg-tomato px-6 font-semibold text-white hover:bg-tomato-dark"
            >
              Ver prepizzas
            </a>
            <a
              href={buildWhatsAppUrl(site.whatsappNumber, GREETING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center rounded-full border border-ink px-6 font-semibold text-ink hover:bg-flour"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}images/products/prepizza-comun.jpg`}
          alt="Prepizza casera con salsa de tomate"
          width={800}
          height={600}
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-warm"
        />
      </div>
    </section>
  );
}
