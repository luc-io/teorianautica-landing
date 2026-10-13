import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

// Imagen de preview (og:image / twitter:image) de todas las páginas. Es un route
// handler y no `opengraph-image.tsx` porque con `output: 'export'` el archivo
// convencional sale sin extensión y sin content-type.
export const dynamic = 'force-static';

const size = { width: 1200, height: 630 };

const BG = '#060e18';
const INK = '#e8ecf0';
const MUTED = '#9ca3af';
const ACCENT = '#38bdf8';

function Polaris({ px, color, dot }: { px: number; color: string; dot?: string }) {
  return (
    <svg width={px} height={px} viewBox="0 0 64 64">
      <path d="M32 6 L36 30 L58 32 L36 34 L32 58 L28 34 L6 32 L28 30 Z" fill={color} />
      {dot && <circle cx="32" cy="32" r="2" fill={dot} />}
    </svg>
  );
}

export async function GET() {
  const dir = join(process.cwd(), 'src/app/_og');
  const [grotesk, mono] = await Promise.all([
    readFile(join(dir, 'SpaceGrotesk-Bold.ttf')),
    readFile(join(dir, 'IBMPlexMono-Medium.ttf')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: BG,
          padding: '64px 72px',
          position: 'relative',
          fontFamily: 'Grotesk',
        }}
      >
        <div style={{ position: 'absolute', right: -90, top: 40, display: 'flex', opacity: 0.09 }}>
          <Polaris px={620} color={INK} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Polaris px={44} color={INK} dot={ACCENT} />
          <span style={{ color: INK, fontSize: 26, letterSpacing: 2 }}>TEORÍA NÁUTICA</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: 'Mono', color: ACCENT, fontSize: 24, letterSpacing: 4, marginBottom: 24 }}>
            CONDUCTOR NÁUTICO · TIMONEL DE YATE
          </span>
          <span style={{ color: '#ffffff', fontSize: 72, lineHeight: 1.08, maxWidth: 900, letterSpacing: -1 }}>
            El curso teórico completo para tu licencia náutica
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: 96, height: 2, background: ACCENT, marginBottom: 24 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Mono', fontSize: 24 }}>
            <span style={{ color: MUTED }}>Programa de la Prefectura · Curso gratis</span>
            <span style={{ color: INK }}>teorianautica.com</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Grotesk', data: grotesk, weight: 700, style: 'normal' },
        { name: 'Mono', data: mono, weight: 500, style: 'normal' },
      ],
    },
  );
}
