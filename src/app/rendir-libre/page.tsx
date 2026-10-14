// Copy fuente: sección 6 de `docs/producto/landing-copy.md` en
// teoria-nautica-conductor. Los requisitos y el contenido del examen salen del
// programa de la PNA (`docs/teoria_v3/_pna-syllabus-source-*.md`). Lo que no
// sabemos con certeza (fechas, inscripción, aranceles) se manda a consultar a
// Prefectura: no se inventa.

import type { Metadata } from 'next';
import { ContentPage, Plegadas } from '@/components/ContentPage';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata } from '@/lib/meta';
import { breadcrumbLd, faqLd } from '@/lib/jsonld';

const TITLE = 'Cómo rendir libre el examen de Conductor Náutico y Timonel';
const DESCRIPTION =
  'Prefectura toma examen teórico y práctico a alumnos libres una vez por mes. Qué necesitás para rendir libre Conductor Náutico o Timonel de Yate sin anotarte en un curso.';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/rendir-libre', type: 'article' });

const PREGUNTAS = [
  {
    q: '¿Se puede rendir el examen de Conductor Náutico libre?',
    a: 'Sí. Prefectura toma examen teórico y práctico a alumnos libres una vez por mes. No hace falta estar inscripto en ningún curso: hace falta saber la teoría y haber hecho la práctica.',
  },
  {
    q: '¿Cada cuánto toma examen libre la Prefectura?',
    a: 'Una vez por mes. La fecha, el lugar y cómo anotarte los confirma la dependencia de Prefectura donde vayas a rendir.',
  },
  {
    q: '¿Necesito un certificado de curso para rendir libre?',
    a: 'No. El examen libre es justamente para quien no cursó en un club. Lo que se evalúa es lo que sabés, en la parte teórica y en la práctica.',
  },
  {
    q: '¿Cuál es la diferencia con rendir en un club náutico?',
    a: 'En el club, el club pide el examen por escrito, presenta los contenidos y los exámenes con quince días de anticipación, y Prefectura va a tomarlo. Libre, te presentás vos en el turno mensual de Prefectura.',
  },
];

export default function RendirLibre() {
  return (
    <ContentPage
      kicker="Examen de Prefectura"
      titulo="Cómo rendir libre el examen de Conductor Náutico y Timonel"
      bajada="Sí, se puede sin hacer un curso. Prefectura toma examen libre una vez por mes, teórico y práctico."
      cta={{ titulo: 'La teoría, lista para el turno del mes', texto: 'El programa completo, gratis y sin tarjeta.' }}
    >
      <JsonLd data={[faqLd(PREGUNTAS), breadcrumbLd('Cómo rendir libre', '/rendir-libre')]} />

      <h2>Qué necesitás</h2>
      <ul>
        <li>
          <strong>Saber la teoría</strong> del programa de tu licencia.
        </li>
        <li>
          <strong>Haber hecho la práctica</strong> a bordo, con un instructor.
        </li>
        <li>
          <strong>Los requisitos:</strong> 18 años (16 con autorización en Conductor), DNI, certificado médico y fotos.
        </li>
      </ul>

      <h2>Paso a paso</h2>
      <ol>
        <li>
          Elegí la licencia: <a href="/conductor-nautico">Conductor Náutico</a> o{' '}
          <a href="/timonel-de-yate">Timonel de Yate</a>.
        </li>
        <li>Estudiá la teoría.</li>
        <li>Hacé la práctica en el agua.</li>
        <li>Consultá el turno del mes en tu dependencia de Prefectura.</li>
        <li>Presentate al teórico y al práctico.</li>
      </ol>

      <h2>Cómo es el examen</h2>
      <ul>
        <li>
          <strong>Teórico:</strong> nomenclatura, seguridad, RIPA, balizamiento, luces y legislación. Timonel suma
          navegación.
        </li>
        <li>
          <strong>Práctico:</strong> maniobras a bordo: arrancar, parar, dar atrás, navegar a rumbo, atracar y
          desatracar.
        </li>
      </ul>

      <h2>Libre o en un club</h2>
      <p>
        En el club, la fecha la pone el club y rendís con el grupo. Libre, te presentás vos en el turno mensual de
        Prefectura. Fecha, inscripción y papeles: confirmalos en tu dependencia.
      </p>

      <h2>Preguntas frecuentes</h2>
      <Plegadas preguntas={PREGUNTAS} />
    </ContentPage>
  );
}
