import { CtaBlock } from './CtaBlock';
import { SiteFooter } from './SiteFooter';
import { SiteNav } from './SiteNav';
import { EmpezarCurso } from './EmpezarCurso';
import { APP_URL, type Curso } from '@/lib/site';

/**
 * Las páginas de contenido (cursos, rendir libre): título, una línea y el
 * botón arriba de todo; después secciones cortas y escaneables.
 */
export function ContentPage({
  kicker,
  titulo,
  bajada,
  cta,
  curso,
  children,
}: {
  kicker: string;
  titulo: string;
  bajada: string;
  cta: { titulo: string; texto: string };
  /** En las páginas de un curso, los botones abren la app con ese curso. */
  curso?: Curso;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <SiteNav />
      <header className="pt-28 sm:pt-32 pb-10 px-6 border-b border-navy-800">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold-400 font-mono text-xs tracking-widest uppercase mb-4">{kicker}</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.05] mb-5 text-balance">
            {titulo}
          </h1>
          <p className="text-lg text-gray-300 text-balance">{bajada}</p>
          {curso ? (
            <div className="mt-7">
              <EmpezarCurso curso={curso} grande />
            </div>
          ) : (
            <a
              href={APP_URL}
              className="mt-7 inline-block w-full sm:w-auto text-center bg-white text-navy-950 font-bold px-10 py-4 text-base hover:bg-gray-100 transition-colors"
            >
              Empezar gratis
            </a>
          )}
        </div>
      </header>
      <article className="py-10 px-6">
        <div className="max-w-3xl mx-auto prose-tn">{children}</div>
      </article>
      <CtaBlock {...cta} curso={curso} />
      <SiteFooter />
    </main>
  );
}

/** Los temas del programa como etiquetas: se leen de un vistazo. */
export function Temas({ items }: { items: string[] }) {
  return (
    <div className="!mt-3 flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="bg-navy-800 border border-navy-700 px-3 py-1.5 text-sm text-gray-300">
          {t}
        </span>
      ))}
    </div>
  );
}

/** Preguntas frecuentes plegadas: el texto queda en la página para los buscadores. */
export function Plegadas({ preguntas }: { preguntas: { q: string; a: string }[] }) {
  return (
    <div className="!mt-4 divide-y divide-navy-800 border-y border-navy-800">
      {preguntas.map((f) => (
        <details key={f.q} className="group py-4">
          <summary className="flex justify-between gap-4 cursor-pointer list-none font-display font-bold text-white">
            {f.q}
            <span className="text-gold-400 transition-transform group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className="!mt-3 text-gray-400">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
