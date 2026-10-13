// Alcances: lección `legislacion/04-regimen-nautico/leccion-02-cona-alcances-limitaciones`
// de la app. Temas: `docs/teoria_v3/materias/*/*/tema.md` con lecciones de CONA.

import type { Metadata } from 'next';
import { ContentPage } from '@/components/ContentPage';
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
      titulo="Curso teórico de Conductor Náutico"
      bajada="La licencia inicial para embarcaciones deportivas a motor. El programa de la Prefectura completo, para estudiar en tu casa y presentarte a rendir cuando estés listo."
      cta={{
        titulo: 'Empezá hoy, sin esperar una cohorte',
        texto: 'Las 77 lecciones de Conductor Náutico, con sus quizzes, gratis y sin tarjeta.',
      }}
    >
      <JsonLd data={[courseLd(curso), breadcrumbLd(curso.nombre, `/${curso.slug}`)]} />

      <h2>Qué te habilita el carnet de Conductor Náutico</h2>
      <ul>
        <li>
          <strong>Embarcaciones deportivas a motor:</strong> lanchas, semirrígidos, motos de agua. A vela, no.
        </li>
        <li>
          <strong>Hasta 10 metros de eslora y 150 HP,</strong> y los dos límites se cumplen a la vez: superar uno ya
          te deja afuera.
        </li>
        <li>
          <strong>Aguas interiores y área costera restringida:</strong> ríos, lagos y arroyos navegables, y la costa.
          Mar adentro, no.
        </li>
        <li>
          <strong>Con tiempo favorable o bueno, y de día.</strong> La navegación nocturna queda para habilitaciones
          superiores.
        </li>
      </ul>
      <p>
        El carnet vence y se renueva con examen psicofísico. Si querés embarcaciones más grandes, vela o ir más
        lejos, la licencia que sigue es <a href="/timonel-de-yate">Timonel de Yate</a>.
      </p>

      <h2>Qué estudiás</h2>
      <p>
        {curso.datos}: el programa de la Prefectura entero, no un resumen de lo que se toma. Cada lección viene con
        su quiz, y tu progreso se registra idea por idea.
      </p>
      <h3>Seguridad</h3>
      <ul>
        {SEGURIDAD.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <h3>Legislación</h3>
      <ul>
        {LEGISLACION.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <h2>Cómo rendir</h2>
      <p>
        El examen es teórico y práctico. Podés rendir en un club náutico o libre: Prefectura toma examen a alumnos
        libres una vez por mes, sin que estés inscripto en ningún curso.{' '}
        <a href="/rendir-libre">Cómo se rinde libre, paso a paso</a>.
      </p>
      <p>
        La teoría es el 80% del examen y la estudiás acá. La práctica se hace en el agua, con instructor y
        embarcación.
      </p>

      <CursoResumen curso={curso} />
    </ContentPage>
  );
}
