// Copy: `docs/producto/landing-copy.md` en teoria-nautica-conductor.
// Los números viven en `src/lib/site.ts`.

import type { Metadata } from 'next';
import { CtaBlock } from '@/components/CtaBlock';
import { JsonLd } from '@/components/JsonLd';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteNav } from '@/components/SiteNav';
import { homeLd } from '@/lib/jsonld';
import { pageMetadata } from '@/lib/meta';
import { APP_URL, CURSOS, FAQS, precioARS } from '@/lib/site';
import { AnimacionLoop } from '@/components/AnimacionLoop';

export const metadata: Metadata = pageMetadata({
  title: { absolute: 'Teoría Náutica — El curso teórico para tu licencia náutica' },
  description:
    'El programa de la Prefectura completo para Conductor Náutico y Timonel de Yate: lecciones y cuestionarios gratis, instructor con IA y simulacros de examen.',
  path: '/',
});

// Los videos están en `public/videos/`; salen de `juego/reels/grabar.mjs --solo`
// en teoria-nautica-conductor.
const ANIMACIONES = [
  { id: 'vuelta-encontrada', titulo: 'De frente', regla: 'Las dos caen a estribor.' },
  { id: 'alcance-lancha', titulo: 'Alcance', regla: 'El que alcanza, cede.' },
  { id: 'cuatro-luces', titulo: 'Luces', regla: 'Qué ves según desde dónde mirás.' },
];

const PASOS = [
  { titulo: 'Elegí tu licencia', texto: 'Conductor Náutico o Timonel de Yate.' },
  { titulo: 'Estudiá a tu ritmo', texto: 'Lecciones cortas, animaciones y cuestionarios.' },
  { titulo: 'Rendí en Prefectura', texto: 'Libre, en el turno del mes.' },
];

// Los topes salen de `tope_lecciones_diario` y `FREE_INSTRUCTOR_LIMIT` en la app.
const [CONDUCTOR, TIMONEL] = CURSOS;
const GRATIS = [
  'Todas las lecciones, con animaciones',
  'Un cuestionario por cada idea',
  `Hasta ${CONDUCTOR.tope} lecciones nuevas por día (${TIMONEL.tope} en Timonel)`,
  '3 consultas al instructor',
];
const PASE = [
  {
    titulo: 'Instructor con IA, sin límite',
    texto: 'Le preguntás lo que no te cerró de una lección y te responde con el programa del curso y tu progreso.',
  },
  {
    titulo: 'Exámenes de práctica',
    texto: 'Por materia y del curso completo, con las preguntas de lo que toma Prefectura.',
  },
  {
    titulo: 'Lecciones sin tope diario',
    texto: 'Avanzás todo lo que quieras el mismo día.',
  },
  {
    titulo: 'Repaso',
    texto: 'Vuelven las ideas que fallaste hasta que las sabés.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd data={homeLd()} />
      <SiteNav />

      {/* Hero: una frase, el botón y una animación */}
      <section className="pt-28 sm:pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="text-gold-400 font-mono text-xs tracking-widest uppercase mb-4">
              Conductor Náutico · Timonel de Yate
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.05] mb-5 text-balance">
              Sacá tu licencia náutica estudiando desde el celular
            </h1>
            <p className="text-lg text-gray-300 mb-8 text-balance">
              El curso teórico completo, gratis. Con animaciones y un cuestionario por cada idea.
            </p>
            <a
              href={APP_URL}
              className="inline-block w-full sm:w-auto bg-white text-navy-950 font-bold px-10 py-4 text-base hover:bg-gray-100 transition-colors"
            >
              Empezar gratis
            </a>
            <p className="text-sm text-gray-400 mt-3">Sin tarjeta. Empezás hoy.</p>
          </div>
          <div className="bg-navy-800 border border-navy-700 p-3">
            <AnimacionLoop id="cruce-motor" titulo="Cruce de dos lanchas: cede la que ve a la otra por su estribor" />
          </div>
        </div>
      </section>

      {/* Animaciones */}
      <section id="animaciones" className="py-16 px-6 bg-navy-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-10 text-balance">
            Cada regla, en movimiento
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {ANIMACIONES.map((a) => (
              <figure key={a.id} className="bg-navy-800 border border-navy-700 p-3">
                <AnimacionLoop id={a.id} titulo={`${a.titulo}: ${a.regla}`} />
                <figcaption className="px-1 pt-3 pb-1">
                  <p className="font-display font-bold text-white">{a.titulo}</p>
                  <p className="text-sm text-gray-400 mt-1">{a.regla}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-10">Cómo funciona</h2>
          <ol className="grid sm:grid-cols-3 gap-8 text-center">
            {PASOS.map((p, i) => (
              <li key={p.titulo}>
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-gold-400 text-gold-400 font-mono font-bold">
                  {i + 1}
                </span>
                <h3 className="font-display font-bold text-white text-lg mt-4">{p.titulo}</h3>
                <p className="text-gray-400 mt-1">{p.texto}</p>
              </li>
            ))}
          </ol>
          <p className="text-center mt-8">
            <a href="/rendir-libre" className="text-sm text-gold-400 hover:text-gold-300 transition-colors">
              Cómo se rinde libre, paso a paso →
            </a>
          </p>
        </div>
      </section>

      {/* Cursos */}
      <section id="cursos" className="py-16 px-6 bg-navy-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-10">Elegí tu licencia</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {CURSOS.map((c) => (
              <div key={c.nombre} className="bg-navy-800 border border-navy-700 p-6 flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>
                    {c.icon}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">{c.nombre}</h3>
                </div>
                <p className="text-gray-300 mt-3">{c.corta}</p>
                <p className="text-sm text-gray-400 mt-2">{c.lecciones}</p>
                <div className="mt-6 flex items-center gap-5">
                  <a
                    href={APP_URL}
                    className="bg-white text-navy-950 font-bold px-6 py-3 text-sm hover:bg-gray-100 transition-colors"
                  >
                    Empezar gratis
                  </a>
                  <a href={`/${c.slug}`} className="text-sm text-gold-400 hover:text-gold-300 transition-colors">
                    Ver el curso →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gratis y Pase */}
      <section id="pase" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-3 text-balance">
            Estudiás gratis. Con el pase, llegás al examen
          </h2>
          <p className="text-gray-400 text-center mb-10 text-balance">
            El pase suma el instructor y los exámenes de práctica.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-navy-800 border border-navy-700 p-6">
              <p className="font-mono text-xs tracking-widest uppercase text-gray-400">Gratis</p>
              <ul className="mt-5 space-y-3">
                {GRATIS.map((g) => (
                  <li key={g} className="flex gap-3 text-gray-300">
                    <span className="text-gray-500" aria-hidden>
                      ✓
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-800 border border-gold-400 p-6">
              <p className="font-mono text-xs tracking-widest uppercase text-gold-400">Pase</p>
              <ul className="mt-5 space-y-4">
                {PASE.map((p) => (
                  <li key={p.titulo} className="flex gap-3">
                    <span className="text-gold-400" aria-hidden>
                      ✓
                    </span>
                    <span>
                      <span className="block font-display font-bold text-white">{p.titulo}</span>
                      <span className="block text-sm text-gray-400 mt-0.5">{p.texto}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-400 mt-6">
                Conductor {precioARS(CONDUCTOR.precio)} por {CONDUCTOR.meses} meses · Timonel{' '}
                {precioARS(TIMONEL.precio)} por {TIMONEL.meses} meses. Pago único, no se renueva solo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes, plegadas */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-8">Preguntas frecuentes</h2>
          <div className="divide-y divide-navy-800 border-y border-navy-800">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex justify-between gap-4 cursor-pointer list-none font-display font-bold text-white">
                  {f.q}
                  <span className="text-gold-400 transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="text-gray-400 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock titulo="Empezá hoy, gratis" texto="Todas las lecciones, sin tarjeta." />
      <SiteFooter />
    </main>
  );
}
