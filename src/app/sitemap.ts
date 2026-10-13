import type { MetadataRoute } from 'next';
import { CURSOS, SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/rendir-libre`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    ...CURSOS.map((c) => ({
      url: `${SITE_URL}/${c.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
