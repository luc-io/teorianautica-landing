// Datos compartidos por las páginas, el sitemap y los datos estructurados.
// Los números (lecciones, temas, precios, tope diario) salen del catálogo y de
// `src/lib/mercadopago.ts` de la app. Si cambian allá, se cambian acá: un número
// desactualizado en la landing es peor que ninguno.

export const SITE_URL = 'https://teorianautica.com';
export const APP_URL = 'https://app.teorianautica.com';
export const SITE_NAME = 'Teoría Náutica';
export const EMAIL = 'hola@teorianautica.com';

export type Curso = {
  slug: string;
  icon: string;
  nombre: string;
  desc: string;
  datos: string;
  precio: number;
  meses: number;
  tope: number;
};

export const CURSOS: Curso[] = [
  {
    slug: 'conductor-nautico',
    icon: '🚤',
    nombre: 'Conductor Náutico',
    desc: 'La licencia inicial, para embarcaciones a motor cerca de la costa.',
    datos: '77 lecciones · 17 temas de seguridad y legislación',
    precio: 20000,
    meses: 3,
    tope: 2,
  },
  {
    slug: 'timonel-de-yate',
    icon: '⛵',
    nombre: 'Timonel de Yate',
    desc: 'La licencia superior: embarcaciones más grandes y navegación más lejos de la costa. Agrega la materia de navegación, que conductor no tiene. A motor, o a vela y motor.',
    datos: '146 lecciones a motor, 159 a vela y motor · 26 temas',
    precio: 40000,
    meses: 6,
    tope: 4,
  },
];

export function precioARS(n: number) {
  return `$${n.toLocaleString('es-AR')}`;
}

export const FAQS: { q: string; a: string }[] = [
  {
    q: '¿Esto reemplaza al curso presencial?',
    a: 'La teoría sí, y es el 80% del examen. La práctica no: eso se hace en el agua, con instructor y embarcación.',
  },
  {
    q: '¿Puedo rendir sin hacer un curso?',
    a: 'Sí. Prefectura toma examen a alumnos libres una vez por mes, teórico y práctico.',
  },
  {
    q: '¿Qué es gratis y qué se paga?',
    a: 'Todas las lecciones y sus quizzes son gratis, con un tope de lecciones nuevas por día (2 en Conductor, 4 en Timonel). El pase suma el instructor con IA sin límite, los exámenes por materia, el examen general, los simulacros, el repaso y las lecciones sin tope.',
  },
  {
    q: '¿Cuánto dura el pase?',
    a: 'Tres meses en Conductor y seis en Timonel, porque el programa es más largo. Es un pago único: no se renueva solo.',
  },
  {
    q: '¿Timonel incluye Conductor?',
    a: 'Son dos cursos distintos y cada pase habilita el suyo. Timonel es una licencia superior: su curso cubre la seguridad y la legislación de conductor, más a fondo, y suma navegación.',
  },
  {
    q: '¿Sirve si ya tengo la licencia?',
    a: 'Sí, para repasar. El contenido es el programa completo, no un resumen para aprobar.',
  },
];

export const OG_IMAGE = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: 'Teoría Náutica — El curso teórico completo para tu licencia náutica',
};
