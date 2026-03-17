import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Teoría Náutica — Aprendé navegación con práctica inteligente',
  description: 'Plataforma de estudio para habilitaciones náuticas de la Prefectura Naval Argentina. Flashcards, tutor IA y teoría para Conductor Náutico y Timonel de Yate.',
  openGraph: {
    title: 'Teoría Náutica',
    description: 'Aprendé navegación con práctica inteligente',
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
