// Datos compartidos por las páginas, el sitemap y los datos estructurados.
// Los números (lecciones, temas, precios, tope diario) salen del catálogo y de
// `src/lib/mercadopago.ts` de la app. Si cambian allá, se cambian acá: un número
// desactualizado en la landing es peor que ninguno.

export const SITE_URL = 'https://teorianautica.com';
export const APP_URL = 'https://app.teorianautica.com';
export const SITE_NAME = 'Teoría Náutica';
export const EMAIL = 'hola@teorianautica.com';

/** +54 9 341 611-2731, como lo pide `wa.me`. El mismo que `WHATSAPP_NUMERO` en la app. */
export const WHATSAPP_NUMERO = '5493416112731';

/** Abre WhatsApp con un mensaje a Teoría Náutica, ya escrito. */
export function whatsappContacto(texto = 'Hola, tengo una consulta sobre Teoría Náutica.') {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

/**
 * Abre WhatsApp para mandarle a quien quiera el texto con un enlace a la
 * portada. Las UTM hacen que la app cuente a quien llega por ahí (`contenido`
 * dice qué se compartió).
 */
export function whatsappCompartir(texto: string, contenido: string, ancla = '') {
  const url = `${SITE_URL}/?utm_source=whatsapp&utm_medium=compartir&utm_campaign=landing&utm_content=${encodeURIComponent(contenido)}${ancla}`;
  return `https://wa.me/?text=${encodeURIComponent(`${texto} ${url}`)}`;
}

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
  /** Días de acceso de Pro (`PLANS` × `duracionMultiplicador` en la app). */
  dias: number;
  tope: number;
  /** Los botones para empezar, cada uno con el curso de la app que abre. */
  empezar: { texto: string; curso: CursoApp }[];
};

/**
 * Las claves de curso que entiende la app en `?curso=`: el onboarding salta
 * las preguntas de la embarcación y arranca con ese curso.
 */
export type CursoApp = 'conductor' | 'timonel-motor' | 'timonel-vela';

export function appUrlCurso(curso: CursoApp) {
  return `${APP_URL}/?curso=${curso}`;
}

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
    dias: 45,
    tope: 2,
    empezar: [{ texto: 'Empezar gratis', curso: 'conductor' }],
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
    dias: 90,
    tope: 4,
    empezar: [
      { texto: 'Empezar a motor', curso: 'timonel-motor' },
      { texto: 'Empezar a vela y motor', curso: 'timonel-vela' },
    ],
  },
];

export function precioARS(n: number) {
  return `$${n.toLocaleString('es-AR')}`;
}

/** «45 días», «3 meses»: la misma regla que `etiquetaDias` en la app. */
export function duracion(dias: number) {
  return dias >= 60 && dias % 30 === 0 ? `${dias / 30} meses` : `${dias} días`;
}

/** «$20.000 por 45 días»: Pro de un curso, como lo cobra la app (`PLANS`). */
export function precioPro(c: Curso) {
  return `${precioARS(c.precio)} por ${duracion(c.dias)}`;
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
    a: 'Las lecciones y sus cuestionarios son gratis. Pro suma instructor con IA sin límite, simulacros, repaso y lecciones sin tope diario.',
  },
  {
    q: '¿Cuánto cuesta Pro?',
    a: `Conductor Náutico, ${precioPro(CURSOS[0])}. Timonel de Yate, ${precioPro(CURSOS[1])}. Pago único con Mercado Pago, no se renueva solo.`,
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
