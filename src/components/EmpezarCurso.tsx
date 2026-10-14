import { appUrlCurso, type Curso } from '@/lib/site';

/** Los botones para empezar un curso: uno en Conductor, motor y vela en Timonel. */
export function EmpezarCurso({ curso, grande = false }: { curso: Curso; grande?: boolean }) {
  const tam = grande ? 'px-10 py-4 text-base' : 'px-6 py-3 text-sm';
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {curso.empezar.map((e) => (
        <a
          key={e.curso}
          href={appUrlCurso(e.curso)}
          className={`inline-block text-center bg-white text-navy-950 font-bold hover:bg-gray-100 transition-colors ${tam}`}
        >
          {e.texto}
        </a>
      ))}
    </div>
  );
}
