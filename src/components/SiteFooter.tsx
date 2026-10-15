import { IconoWhatsApp } from './IconoWhatsApp';
import { DATA_FISCAL_URL, EMAIL, LEGAL, WHATSAPP_CANAL, whatsappContacto } from '@/lib/site';

const LEGALES = [
  { href: LEGAL.terminos, label: 'Términos' },
  { href: LEGAL.privacidad, label: 'Privacidad' },
];

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
          <div className="flex flex-col items-center sm:items-end gap-2 text-xs text-gray-400">
            <a
              href={whatsappContacto()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <IconoWhatsApp tam={14} />
              WhatsApp
            </a>
            <a
              href={WHATSAPP_CANAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <IconoWhatsApp tam={14} />
              Canal de WhatsApp
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-gray-200 transition-colors">
              {EMAIL}
            </a>
          </div>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-400">
          {LEGALES.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        {DATA_FISCAL_URL && (
          <div className="flex justify-center">
            <a href={DATA_FISCAL_URL} target="_F960AFIPInfo" rel="noopener noreferrer" aria-label="Data Fiscal en ARCA">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/data-fiscal.jpg" alt="Data Fiscal" width={48} height={66} loading="lazy" />
            </a>
          </div>
        )}
        <p className="text-xs text-gray-400 text-center">
          Contenido basado en el programa de la PNA. No es un producto oficial de la Prefectura Naval Argentina.
        </p>
      </div>
    </footer>
  );
}
