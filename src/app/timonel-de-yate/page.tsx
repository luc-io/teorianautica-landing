// Alcances: lección `legislacion/04-regimen-nautico/leccion-06-timonel-alcances-atribuciones`
// de la app. Temas: `docs/teoria_v3/materias/*/*/tema.md` con lecciones de timonel.

import type { Metadata } from 'next';
import { ContentPage, Temas } from '@/components/ContentPage';
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
      titulo="Curso de Timonel de Yate, gratis"
      bajada="La licencia para ir más lejos, a motor o a vela. Seguridad, legislación y navegación completa."
      cta={{ titulo: 'Empezá hoy, gratis', texto: 'Sin tarjeta y a tu ritmo.' }}
    >
      <JsonLd data={[courseLd(curso), breadcrumbLd(curso.nombre, `/${curso.slug}`)]} />

      <h2>Qué te habilita</h2>
      <ul>
        <li>Embarcaciones de hasta 20 metros, sin tope de potencia. A motor, o a vela y motor.</li>
        <li>Ríos y lagos interiores enteros.</li>
        <li>Río de la Plata hasta la línea Punta Atalaya – Punta Rosario.</li>
        <li>En el mar, donde lo establezca Prefectura.</li>
      </ul>

      <h2>Motor, o vela y motor</h2>
      <ul>
        <li>
          <strong>A motor:</strong> 146 lecciones.
        </li>
        <li>
          <strong>A vela y motor:</strong> 159 lecciones. Suma rumbos al viento, virar y trasluchar.
        </li>
      </ul>

      <h2>Qué estudiás</h2>
      <p>Lo de Conductor, más a fondo, y la materia que más lo diferencia:</p>
      <h3>Navegación</h3>
      <Temas items={NAVEGACION} />

      <h2>Cómo rendir</h2>
      <p>
        Examen teórico y práctico, en un club o libre ante Prefectura. <a href="/rendir-libre">Cómo se rinde libre</a>.
        ¿Sólo lancha y cerca de la costa? Te alcanza con <a href="/conductor-nautico">Conductor Náutico</a>.
      </p>

      <CursoResumen curso={curso} />
    </ContentPage>
  );
}
