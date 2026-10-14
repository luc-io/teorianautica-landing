import type { Metadata } from 'next';
import { OG_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site';
import './globals.css';
import { PasarUtm } from '@/components/PasarUtm';

// Cada página define su title, description, canonical y preview con
// `pageMetadata` (src/lib/meta.ts). Esto es el respaldo.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Teoría Náutica — El curso teórico para tu licencia náutica',
    template: '%s · Teoría Náutica',
  },
  description:
    'El programa de la Prefectura completo para Conductor Náutico y Timonel de Yate: lecciones y quizzes gratis, instructor con IA y simulacros de examen.',
  applicationName: SITE_NAME,
  openGraph: {
    siteName: SITE_NAME,
    locale: 'es_AR',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <body>
        {children}
        <PasarUtm />
      </body>
    </html>
  );
}
