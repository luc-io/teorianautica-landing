import { EmpezarCurso } from './EmpezarCurso';
import { APP_URL, type Curso } from '@/lib/site';

export function CtaBlock({ titulo, texto, curso }: { titulo: string; texto: string; curso?: Curso }) {
  return (
    <section className="py-20 px-6 border-t border-navy-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl font-bold text-white mb-4 text-balance">{titulo}</h2>
        <p className="text-gray-400 mb-8 text-balance">{texto}</p>
        {curso ? (
          <div className="flex justify-center">
            <EmpezarCurso curso={curso} />
          </div>
        ) : (
          <a
            href={APP_URL}
            className="inline-block bg-white text-navy-950 font-bold px-10 py-3 text-sm hover:bg-gray-100 transition-colors"
          >
            EMPEZAR GRATIS
          </a>
        )}
      </div>
    </section>
  );
}
