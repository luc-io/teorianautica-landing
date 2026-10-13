import { CtaBlock } from './CtaBlock';
import { SiteFooter } from './SiteFooter';
import { SiteNav } from './SiteNav';

export function ContentPage({
  kicker,
  titulo,
  bajada,
  cta,
  children,
}: {
  kicker: string;
  titulo: string;
  bajada: string;
  cta: { titulo: string; texto: string };
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <SiteNav />
      <header className="pt-36 sm:pt-40 pb-12 px-6 border-b border-navy-800">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold-400 font-mono text-sm tracking-widest uppercase mb-4">{kicker}</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 text-balance">
            {titulo}
          </h1>
          <p className="text-lg text-gray-400 text-balance">{bajada}</p>
        </div>
      </header>
      <article className="py-12 px-6">
        <div className="max-w-3xl mx-auto prose-tn">{children}</div>
      </article>
      <CtaBlock {...cta} />
      <SiteFooter />
    </main>
  );
}
