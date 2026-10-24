const STEPS = [
  {
    title: 'Elegí',
    text: 'Sumá al pedido las prepizzas y packs que quieras, con la cantidad de cada uno.',
  },
  {
    title: 'Completá',
    text: 'Abrí tu pedido, contanos si retirás o te lo llevamos, y dejá alguna aclaración.',
  },
  {
    title: 'Confirmá por WhatsApp',
    text: 'Te abrimos WhatsApp con el pedido escrito. Lo mandás y te confirmamos el horario.',
  },
];

export function HowToOrder() {
  return (
    <section
      id="como-pedir"
      aria-labelledby="como-pedir-title"
      className="scroll-mt-20 bg-ink py-16 text-flour sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="como-pedir-title" className="font-display text-3xl font-bold sm:text-4xl">
          Cómo pedir
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-crust font-display text-xl font-bold text-ink"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-flour/80">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
