import { site } from '../config/site';
import { CartButton } from './CartButton';

const NAV_LINKS = [
  { href: '#prepizzas', label: 'Prepizzas' },
  { href: '#como-pedir', label: 'Cómo pedir' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header({ onOpenCart }: { onOpenCart: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-crust/20 bg-flour/95 backdrop-blur supports-[backdrop-filter]:bg-flour/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <a href="#inicio" className="font-display text-xl font-bold text-ink">
          {site.name}
        </a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex min-h-11 items-center rounded-full px-4 font-medium text-ink-soft transition-colors hover:bg-flour-deep hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <CartButton onClick={onOpenCart} />
      </div>
      <nav aria-label="Secciones" className="md:hidden">
        <ul className="flex gap-1 overflow-x-auto px-2 pb-1">
          {NAV_LINKS.map((l) => (
            <li key={l.href} className="shrink-0">
              <a
                href={l.href}
                className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-ink-soft hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
