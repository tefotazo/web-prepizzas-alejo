import { site } from '../config/site';

export function About() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-title" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 id="nosotros-title" className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Nosotros
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">{site.aboutText}</p>
      </div>
    </section>
  );
}
