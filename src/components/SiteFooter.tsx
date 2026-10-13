import { EMAIL } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-navy-800 py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2">
            <span aria-hidden>⚓</span>
            <span className="font-display font-bold text-sm text-gray-400">TEORÍA NÁUTICA</span>
          </a>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-400">
            <li>
              <a href="/conductor-nautico" className="hover:text-white transition-colors">
                Conductor Náutico
              </a>
            </li>
            <li>
              <a href="/timonel-de-yate" className="hover:text-white transition-colors">
                Timonel de Yate
              </a>
            </li>
            <li>
              <a href="/rendir-libre" className="hover:text-white transition-colors">
                Cómo rendir libre
              </a>
            </li>
          </ul>
          <a href={`mailto:${EMAIL}`} className="text-xs text-gray-400 hover:text-gray-200 transition-colors">
            {EMAIL}
          </a>
        </div>
        <p className="text-xs text-gray-400 text-center">
          Contenido basado en el programa de la PNA. No es un producto oficial de la Prefectura Naval Argentina.
        </p>
      </div>
    </footer>
  );
}
