// Datos compartidos por las páginas, el sitemap y los datos estructurados.
// Los números (lecciones, temas, precios, tope diario) salen del catálogo y de
// `src/lib/mercadopago.ts` de la app. Si cambian allá, se cambian acá: un número
// desactualizado en la landing es peor que ninguno.

export const SITE_URL = 'https://teorianautica.com';
export const APP_URL = 'https://app.teorianautica.com';
export const SITE_NAME = 'Teoría Náutica';
export const EMAIL = 'hola@teorianautica.com';

/**
 * Enlace del QR de Data Fiscal (F. 960/NM de ARCA), que tiene que mostrar quien
 * vende por internet: el `href` que da ARCA, `https://qr.afip.gob.ar/?qr=…`.
 * Sin cargar en Vercel, el QR no se muestra.
 */
export const DATA_FISCAL_URL = process.env.NEXT_PUBLIC_DATA_FISCAL_URL?.trim() || null;

// Enlaces legales del pie. Las páginas viven en la app, que es donde se compra:
// el botón de arrepentimiento (Res. SCI 424/2020) va en la primera pantalla de
// la app, no acá, porque el landing no vende. No hay botón de baja: el Pase es
// un pago único sin renovación.
export const LEGAL = {
  terminos: `${APP_URL}/terminos`,
  privacidad: `${APP_URL}/privacidad`,
};

export type Curso = {
  slug: string;
  icon: string;
  nombre: string;
  desc: string;
  /** Una línea para la tarjeta de la portada. */
  corta: string;
  /** El número de lecciones, dicho corto. */
  lecciones: string;
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
    corta: 'La licencia inicial, para lanchas.',
    lecciones: '77 lecciones',
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
    corta: 'Más lejos de la costa, a motor o a vela.',
    lecciones: 'Más de 140 lecciones',
    datos: '146 lecciones a motor, 159 a vela y motor · 26 temas',
    precio: 40000,
    meses: 6,
    tope: 4,
  },
];

// Mientras la app no cobra (`COBROS_ACTIVOS` en teoria-nautica-conductor), el
// pase se activa gratis por estos días y la app prueba distintos precios: el
// landing no publica ninguno para no contradecir lo que ve cada usuario.
// `precio` y `meses` de `CURSOS` quedan para cuando se vuelva a cobrar.
export const PASE_PRUEBA_DIAS = 14;

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
    a: 'Las lecciones y sus quizzes son gratis. El pase suma instructor con IA sin límite, simulacros, repaso y lecciones sin tope diario.',
  },
  {
    q: '¿Cuánto cuesta el pase?',
    a: `Todavía no lo cobramos. Si lo pedís desde la app, te lo activamos gratis por ${PASE_PRUEBA_DIAS} días como acceso anticipado.`,
  },
  {
    q: '¿Timonel incluye Conductor?',
    a: 'Son dos cursos distintos. Timonel cubre lo de Conductor más a fondo y suma navegación.',
  },
  {
    q: '¿Sirve si ya tengo la licencia?',
    a: 'Sí, para repasar: es el programa completo.',
  },
];

export const OG_IMAGE = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: 'Teoría Náutica — El curso teórico completo para tu licencia náutica',
};
