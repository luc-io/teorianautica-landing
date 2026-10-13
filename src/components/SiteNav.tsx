import { APP_URL } from '@/lib/site';

export function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-md border-b border-navy-800/50">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-lg" aria-hidden>
            ⚓
          </span>
          <span className="font-display font-bold text-white text-sm tracking-wide">TEORÍA NÁUTICA</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="/#incluye" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">
            Qué incluye
          </a>
          <a href="/#cursos" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">
            Cursos
          </a>
          <a href="/rendir-libre" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">
            Rendir libre
          </a>
          <a
            href={APP_URL}
            className="bg-white text-navy-950 text-sm font-semibold px-4 py-1.5 hover:bg-gray-100 transition-colors"
          >
            Empezar gratis
          </a>
        </div>
      </div>
    </nav>
  );
}
