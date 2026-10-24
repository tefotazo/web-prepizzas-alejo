import { site } from '../config/site';

export function Footer() {
  return (
    <footer className="bg-ink py-8 pb-24 text-sm text-flour/80 sm:pb-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}. Hecho en casa.
        </p>
        <p>{site.openingHours}</p>
      </div>
    </footer>
  );
}
