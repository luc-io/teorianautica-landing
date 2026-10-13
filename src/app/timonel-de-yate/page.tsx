// Alcances: lección `legislacion/04-regimen-nautico/leccion-06-timonel-alcances-atribuciones`
// de la app. Temas: `docs/teoria_v3/materias/*/*/tema.md` con lecciones de timonel.

import type { Metadata } from 'next';
import { ContentPage } from '@/components/ContentPage';
import { CursoResumen } from '@/components/CursoResumen';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata } from '@/lib/meta';
import { breadcrumbLd, courseLd } from '@/lib/jsonld';
import { CURSOS } from '@/lib/site';

const curso = CURSOS.find((c) => c.slug === 'timonel-de-yate')!;

const TITLE = 'Curso de Timonel de Yate online: teoría y navegación';
const DESCRIPTION =
  'El programa de Prefectura para Timonel de Yate, a motor o a vela y motor: seguridad, legislación y la materia de navegación completa. Las lecciones son gratis.';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/timonel-de-yate' });

const NAVEGACION = [
  'Cartas náuticas',
  'Magnetismo y compases',
  'Distancia y velocidad',
  'Posición y situación',
  'Profundidad y mareas',
  'Navegación a vista de costa',
];

export default function TimonelDeYate() {
  return (
    <ContentPage
      kicker="Curso · Timonel de Yate"
      titulo="Curso teórico de Timonel de Yate"
      bajada="La licencia superior: embarcaciones más grandes y navegación más lejos de la costa. Suma la materia de navegación, que Conductor Náutico no tiene. A motor, o a vela y motor."
      cta={{
        titulo: 'El programa largo, a tu ritmo',
        texto: 'Las lecciones de Timonel de Yate, con sus quizzes, gratis y sin tarjeta. Empezás hoy, sin esperar una cohorte.',
      }}
    >
      <JsonLd data={[courseLd(curso), breadcrumbLd(curso.nombre, `/${curso.slug}`)]} />

      <h2>Qué te habilita el carnet de Timonel de Yate</h2>
      <ul>
        <li>
          <strong>Embarcaciones deportivas de hasta 20 metros de eslora,</strong> el doble que Conductor Náutico y
          sin su tope de potencia. A vela, a motor, o a vela y motor.
        </li>
        <li>
          <strong>Lagos y ríos interiores en toda su extensión,</strong> y en el Río de la Plata, la zona al oeste
          de la línea que une Punta Atalaya, en Argentina, con Punta Rosario, en Uruguay.
        </li>
        <li>
          <strong>En zona marítima,</strong> los lugares que establezca la dependencia de Prefectura
          correspondiente.
        </li>
      </ul>
      <p>Para sacarlo hay que ser mayor de 18 años y aprobar los exámenes correspondientes.</p>

      <h2>Motor, o vela y motor</h2>
      <p>
        El curso se divide por propulsión. <strong>A motor</strong> son 146 lecciones, para quien navega motoras más
        grandes que las que habilita Conductor Náutico. <strong>A vela y motor</strong> son 159: suma lo propio de
        la vela, como los rumbos respecto al viento, virar por avante y trasluchar. Es la habilitación que se saca para un
        velero, que necesita el motor para entrar y salir de puerto.
      </p>

      <h2>Qué estudiás</h2>
      <p>
        {curso.datos}. Cubre la seguridad y la legislación de Conductor Náutico, más a fondo, y agrega temas que
        conductor no tiene: navegación con mal tiempo, jurisdicción fluvio-marítima y normas de cortesía.
      </p>
      <h3>La materia de navegación</h3>
      <p>Es lo que más separa a Timonel de Conductor:</p>
      <ul>
        {NAVEGACION.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <p>
        Es también la parte que más cuesta estudiar sola, y por eso el pase dura seis meses: el programa es más largo.
      </p>

      <h2>Cómo rendir</h2>
      <p>
        Como en Conductor, el examen es teórico y práctico, y se puede rendir en un club náutico o libre.{' '}
        <a href="/rendir-libre">Cómo se rinde libre, paso a paso</a>.
      </p>
      <p>
        ¿Timonel incluye Conductor? Son dos cursos distintos y cada pase habilita el suyo. Si recién empezás y sólo
        vas a andar a motor cerca de la costa, mirá el curso de <a href="/conductor-nautico">Conductor Náutico</a>.
      </p>

      <CursoResumen curso={curso} />
    </ContentPage>
  );
}
