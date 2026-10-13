// Copy fuente: sección 6 de `docs/producto/landing-copy.md` en
// teoria-nautica-conductor. Los requisitos y el contenido del examen salen del
// programa de la PNA (`docs/teoria_v3/_pna-syllabus-source-*.md`). Lo que no
// sabemos con certeza (fechas, inscripción, aranceles) se manda a consultar a
// Prefectura: no se inventa.

import type { Metadata } from 'next';
import { ContentPage } from '@/components/ContentPage';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata } from '@/lib/meta';
import { breadcrumbLd, faqLd } from '@/lib/jsonld';
import { APP_URL } from '@/lib/site';

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
      titulo="Cómo rendir libre el examen de Conductor Náutico y Timonel de Yate"
      bajada="No hace falta anotarse en un curso para rendir. Prefectura toma examen teórico y práctico a alumnos libres una vez por mes: necesitás saber la teoría y haber hecho la práctica."
      cta={{
        titulo: 'La teoría, lista para el turno del mes',
        texto:
          'El programa de la Prefectura completo, gratis y sin tarjeta. Cuando se acerca la fecha, el pase suma simulacros de examen y el repaso de lo que te cuesta.',
      }}
    >
      <JsonLd data={[faqLd(PREGUNTAS), breadcrumbLd('Cómo rendir libre', '/rendir-libre')]} />

      <h2>Las dos formas de rendir ante Prefectura</h2>
      <p>Prefectura toma examen de dos formas.</p>
      <p>
        <strong>En un club náutico.</strong> El club pide el examen por escrito, presenta los contenidos y los
        exámenes con quince días de anticipación, y Prefectura va sin cargo a tomarlo. Es el camino de quien cursa en
        un club: la fecha la pone el club y se rinde con el grupo.
      </p>
      <p>
        <strong>Libre.</strong> Prefectura toma examen teórico y práctico a alumnos libres una vez por mes. No
        necesitás estar inscripto en ningún curso: necesitás saber la teoría y haber hecho la práctica.
      </p>
      <p>
        El segundo camino es el que casi nadie conoce. Sirve si no tenés un club cerca, si el próximo curso empieza
        dentro de meses o si preferís estudiar a tu ritmo y presentarte cuando estés listo.
      </p>

      <h2>Qué necesitás para presentarte libre</h2>
      <ol>
        <li>
          <strong>Saber la teoría.</strong> El examen teórico cubre el programa de la Prefectura para la licencia que
          rendís. Es la mayor parte del examen y la que se puede estudiar sola.
        </li>
        <li>
          <strong>Haber hecho la práctica.</strong> El examen práctico se rinde arriba de una embarcación. Eso se
          aprende en el agua, con un instructor y un barco: ninguna app lo reemplaza.
        </li>
        <li>
          <strong>Cumplir los requisitos de la licencia.</strong> El programa de Conductor Náutico pide 18 años (16
          con autorización), DNI, certificado médico y fotografías. Para Timonel de Yate hay que ser mayor de 18 años
          y aprobar los exámenes correspondientes.
        </li>
      </ol>
      <p>
        La fecha del turno del mes, cómo anotarte y la documentación exacta los confirma la dependencia de Prefectura
        donde vas a rendir. Consultalo antes de ir: puede variar según la dependencia.
      </p>

      <h2>Cómo es el examen</h2>
      <h3>La parte teórica</h3>
      <p>
        En Conductor Náutico se evalúa nomenclatura, seguridad, el reglamento para prevenir abordajes (RIPA),
        balizamiento y legislación. Puede ser oral o escrito, e incluye reconocer señales y resolver casos prácticos:
        quién tiene paso en un cruce, qué indica una boya, qué luces muestra una embarcación de noche.
      </p>
      <p>
        Timonel de Yate suma la materia de navegación: cartas náuticas, rumbos y compases, mareas y situación. Y pide la seguridad y la legislación más a fondo.
      </p>
      <h3>La parte práctica</h3>
      <p>
        Se rinde a bordo. En Conductor Náutico, las maniobras básicas: arrancar y parar, acelerar y desacelerar,
        invertir la marcha, navegar a rumbo, girar, atracar y desatracar, manejar las amarras y conocer los
        elementos de seguridad. Lo que se mira es seguridad, criterio y responsabilidad, además de la técnica.
      </p>

      <h2>Paso a paso para rendir libre</h2>
      <ol>
        <li>
          <strong>Elegí la licencia.</strong> <a href="/conductor-nautico">Conductor Náutico</a> es la inicial, para
          embarcaciones a motor. <a href="/timonel-de-yate">Timonel de Yate</a> es la superior: embarcaciones más
          grandes, más lejos de la costa, a motor o a vela y motor.
        </li>
        <li>
          <strong>Estudiá la teoría.</strong> El programa completo, tema por tema, hasta que puedas responder sin
          dudar.
        </li>
        <li>
          <strong>Hacé la práctica.</strong> Con un instructor y una embarcación, hasta que las maniobras te salgan
          solas.
        </li>
        <li>
          <strong>Consultá el turno.</strong> En la dependencia de Prefectura donde vas a rendir: fecha del mes,
          inscripción y papeles.
        </li>
        <li>
          <strong>Presentate.</strong> Teórico y práctico, el día del turno.
        </li>
      </ol>

      <h2>Dónde entra Teoría Náutica</h2>
      <p>
        Esta app está hecha para el que rinde libre. Tiene el programa de la Prefectura completo, escrito para que se
        entienda y se recuerde, con una pregunta por cada idea que el programa exige. El curso es gratis. El pase
        suma el instructor con IA sin límite, los simulacros de examen, el repaso de lo que fallás y las lecciones
        sin tope diario.
      </p>
      <p>
        La práctica no la damos: esa sigue siendo en el agua. <a href={APP_URL}>Empezá la teoría gratis</a>.
      </p>

      <h2>Preguntas frecuentes</h2>
      {PREGUNTAS.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p className="!mt-2">{f.a}</p>
        </div>
      ))}
    </ContentPage>
  );
}
