import { PASE_PRUEBA_DIAS, type Curso } from '@/lib/site';

// Qué es gratis y qué no, en dos líneas. El botón ya está arriba y abajo.
export function CursoResumen({ curso }: { curso: Curso }) {
  return (
    <div className="bg-navy-800 border border-navy-700 p-6 !mt-12">
      <p className="text-white font-display font-bold">Gratis: las {curso.lecciones.toLowerCase()} y sus quizzes.</p>
      <p className="text-gray-400 !mt-2">
        El Pase suma instructor con IA, simulacros y repaso. Por ahora te lo regalamos {PASE_PRUEBA_DIAS} días.
      </p>
    </div>
  );
}
