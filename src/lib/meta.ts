import type { Metadata } from 'next';
import { OG_IMAGE, SITE_NAME } from './site';

// Next reemplaza (no fusiona) `openGraph` y `twitter` del layout cuando una
// página los define, así que cada página arma los suyos completos acá.
export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
}: {
  title: string | { absolute: string };
  description: string;
  path: string;
  type?: 'website' | 'article';
}): Metadata {
  const ogTitle = typeof title === 'string' ? title : title.absolute;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      title: ogTitle,
      description,
      siteName: SITE_NAME,
      locale: 'es_AR',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
