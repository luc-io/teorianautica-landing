import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Teoría Náutica — El curso teórico para tu licencia náutica',
  description: 'El programa de la Prefectura completo para Conductor Náutico y Timonel de Yate: lecciones y quizzes gratis, instructor con IA y simulacros de examen.',
  openGraph: {
    title: 'Teoría Náutica',
    description: 'El curso teórico completo para tu licencia náutica',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
