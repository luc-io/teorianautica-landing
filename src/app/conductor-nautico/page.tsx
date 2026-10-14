// Alcances: lección `legislacion/04-regimen-nautico/leccion-02-cona-alcances-limitaciones`
// de la app. Temas: `docs/teoria_v3/materias/*/*/tema.md` con lecciones de CONA.

import type { Metadata } from 'next';
import { ContentPage, Temas } from '@/components/ContentPage';
import { CursoResumen } from '@/components/CursoResumen';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata } from '@/lib/meta';
import { breadcrumbLd, courseLd } from '@/lib/jsonld';
import { CURSOS } from '@/lib/site';

const curso = CURSOS.find((c) => c.slug === 'conductor-nautico')!;

const TITLE = 'Curso de Conductor Náutico online y gratis';
const DESCRIPTION =
  'El programa de Prefectura para el carnet de Conductor Náutico: 77 lecciones de seguridad y legislación, gratis. Qué habilita la licencia y cómo prepararte para el examen.';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/conductor-nautico' });

const SEGURIDAD = [
  'Nomenclatura y tecnología marinera',
  'Nudos marineros',
  'Averías y vías de agua',
  'Lucha contra incendios',
  'Combustibles y propulsión mecánica',
  'Salvaguarda de la vida humana',
  'Señales de socorro y comunicaciones',
  'Fondeo',
  'Meteorología',
  'Maniobras',
  'Primeros auxilios',
  'Prevención de la contaminación',
];

const LEGISLACION = [
  'RIPA y reglas de paso',
  'Balizamiento (IALA B)',
  'Luces y marcas',
  'Régimen náutico deportivo',
  'Régimen contravencional, aduanero y migratorio',
];

export default function ConductorNautico() {
  return (
    <ContentPage
      kicker="Curso · Conductor Náutico"
      titulo="Curso de Conductor Náutico, gratis"
      bajada="El programa de Prefectura completo: 77 lecciones con animaciones y un cuestionario por cada idea."
      cta={{ titulo: 'Empezá hoy, gratis', texto: 'Sin tarjeta y sin esperar una cohorte.' }}
    >
      <JsonLd data={[courseLd(curso), breadcrumbLd(curso.nombre, `/${curso.slug}`)]} />

      <h2>Qué te habilita</h2>
      <ul>
        <li>Lanchas, semirrígidos y motos de agua. A vela, no.</li>
        <li>Hasta 10 metros de eslora y 150 HP, las dos cosas a la vez.</li>
        <li>Ríos, lagos y la zona costera. Mar adentro, no.</li>
        <li>De día y con buen tiempo.</li>
      </ul>
      <p>
        ¿Querés vela o ir más lejos? Eso es <a href="/timonel-de-yate">Timonel de Yate</a>.
      </p>

      <h2>Qué estudiás</h2>
      <h3>Seguridad</h3>
      <Temas items={SEGURIDAD} />
      <h3>Legislación</h3>
      <Temas items={LEGISLACION} />

      <h2>Cómo rendir</h2>
      <p>
        Examen teórico y práctico, en un club o libre ante Prefectura, una vez por mes.{' '}
        <a href="/rendir-libre">Cómo se rinde libre</a>.
      </p>

      <CursoResumen curso={curso} />
    </ContentPage>
  );
}
