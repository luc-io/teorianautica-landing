import { CURSOS, EMAIL, FAQS, SITE_NAME, SITE_URL, type Curso } from './site';

const ORG_ID = `${SITE_URL}/#organization`;

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: EMAIL,
    areaServed: 'AR',
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'es-AR',
    publisher: { '@id': ORG_ID },
  };
}

// El curso es gratis; el pase es la oferta paga. Van las dos para que el
// buscador no muestre el curso como pago.
export function courseLd(c: Curso) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `Curso teórico de ${c.nombre}`,
    description: `${c.desc} El programa de la Prefectura Naval Argentina completo: ${c.datos}.`,
    url: `${SITE_URL}/${c.slug}`,
    inLanguage: 'es-AR',
    isAccessibleForFree: true,
    provider: { '@id': ORG_ID, '@type': 'Organization', name: SITE_NAME, sameAs: SITE_URL },
    offers: [
      {
        '@type': 'Offer',
        category: 'Free',
        name: 'Curso gratis',
        price: 0,
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/${c.slug}`,
      },
      {
        '@type': 'Offer',
        category: 'Paid',
        name: `Pase ${c.nombre} · ${c.meses} meses`,
        description: `Pago único por ${c.meses} meses: instructor con IA sin límite, exámenes, simulacros, repaso y lecciones sin tope diario.`,
        price: c.precio,
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/${c.slug}`,
      },
    ],
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Online',
    },
  };
}

export function faqLd(faqs = FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbLd(nombre: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: SITE_NAME, item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: nombre, item: `${SITE_URL}${path}` },
    ],
  };
}

export const homeLd = () => [organizationLd(), websiteLd(), ...CURSOS.map(courseLd), faqLd()];
