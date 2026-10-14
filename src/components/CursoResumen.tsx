import { APP_URL, PASE_PRUEBA_DIAS, type Curso } from '@/lib/site';

// Bloque de precio y acceso que comparten las páginas de curso.
export function CursoResumen({ curso }: { curso: Curso }) {
  return (
    <div className="bg-navy-800 border border-navy-700 p-6 !mt-10">
      <p className="text-gold-400 font-mono text-xs tracking-widest uppercase mb-3">Qué es gratis y qué se paga</p>
      <ul className="!pl-0 !list-none space-y-2 text-sm text-gray-300">
        <li>
          <strong>Gratis:</strong> {curso.datos}. Todas las lecciones y sus quizzes, hasta {curso.tope} lecciones
          nuevas por día.
        </li>
        <li>
          <strong>Pase: acceso anticipado gratis por {PASE_PRUEBA_DIAS} días.</strong> Instructor con IA sin límite,
          exámenes por materia, examen general, simulacros, repaso y lecciones sin tope diario. Todavía no lo
          cobramos: lo pedís desde la app.
        </li>
      </ul>
      <a
        href={APP_URL}
        className="!no-underline mt-6 inline-block bg-white !text-navy-950 font-bold px-8 py-2.5 text-sm hover:bg-gray-100 transition-colors"
      >
        EMPEZAR GRATIS
      </a>
    </div>
  );
}
