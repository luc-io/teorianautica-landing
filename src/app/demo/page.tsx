'use client';

import { useState } from 'react';

const STUDENTS = [
  {
    name: 'Martín López',
    email: 'martin.l@email.com',
    joined: '15 Feb 2026',
    lastActive: 'Hace 2 horas',
    overall: 85,
    status: 'Avanzado',
    sections: [
      { name: 'Atribuciones', progress: 95 },
      { name: 'Nomenclatura', progress: 88 },
      { name: 'Términos de navegación', progress: 90 },
      { name: 'Averías e incendios', progress: 82 },
      { name: 'Seguridad con motores', progress: 78 },
      { name: 'Señales de socorro', progress: 85 },
      { name: 'Fondeo', progress: 92 },
      { name: 'Reglas de paso', progress: 70 },
      { name: 'Luces y marcas', progress: 65 },
      { name: 'Balizamiento IALA', progress: 80 },
      { name: 'Documentación', progress: 98 },
      { name: 'Hombre al agua', progress: 88 },
      { name: 'Nudos marineros', progress: 90 },
      { name: 'Meteorología', progress: 72 },
    ],
    competencies: [
      { name: 'Conocimiento normativo', level: 'Dominado' },
      { name: 'Seguridad a bordo', level: 'Avanzado' },
      { name: 'Maniobras', level: 'Avanzado' },
      { name: 'Navegación', level: 'Intermedio' },
      { name: 'Señalización', level: 'Intermedio' },
    ],
    exercisesDone: 312,
    accuracy: 81,
  },
  {
    name: 'Lucía García',
    email: 'lucia.g@email.com',
    joined: '20 Feb 2026',
    lastActive: 'Hace 1 día',
    overall: 62,
    status: 'Intermedio',
    sections: [
      { name: 'Atribuciones', progress: 80 },
      { name: 'Nomenclatura', progress: 72 },
      { name: 'Términos de navegación', progress: 65 },
      { name: 'Averías e incendios', progress: 55 },
      { name: 'Seguridad con motores', progress: 50 },
      { name: 'Señales de socorro', progress: 60 },
      { name: 'Fondeo', progress: 68 },
      { name: 'Reglas de paso', progress: 45 },
      { name: 'Luces y marcas', progress: 40 },
      { name: 'Balizamiento IALA', progress: 55 },
      { name: 'Documentación', progress: 85 },
      { name: 'Hombre al agua', progress: 70 },
      { name: 'Nudos marineros', progress: 58 },
      { name: 'Meteorología', progress: 48 },
    ],
    competencies: [
      { name: 'Conocimiento normativo', level: 'Avanzado' },
      { name: 'Seguridad a bordo', level: 'Intermedio' },
      { name: 'Maniobras', level: 'Intermedio' },
      { name: 'Navegación', level: 'Inicial' },
      { name: 'Señalización', level: 'Inicial' },
    ],
    exercisesDone: 187,
    accuracy: 68,
  },
  {
    name: 'Pablo Ruiz',
    email: 'pablo.r@email.com',
    joined: '01 Mar 2026',
    lastActive: 'Hace 3 días',
    overall: 41,
    status: 'Inicial',
    sections: [
      { name: 'Atribuciones', progress: 60 },
      { name: 'Nomenclatura', progress: 52 },
      { name: 'Términos de navegación', progress: 45 },
      { name: 'Averías e incendios', progress: 38 },
      { name: 'Seguridad con motores', progress: 30 },
      { name: 'Señales de socorro', progress: 35 },
      { name: 'Fondeo', progress: 40 },
      { name: 'Reglas de paso', progress: 25 },
      { name: 'Luces y marcas', progress: 20 },
      { name: 'Balizamiento IALA', progress: 30 },
      { name: 'Documentación', progress: 65 },
      { name: 'Hombre al agua', progress: 50 },
      { name: 'Nudos marineros', progress: 35 },
      { name: 'Meteorología', progress: 28 },
    ],
    competencies: [
      { name: 'Conocimiento normativo', level: 'Intermedio' },
      { name: 'Seguridad a bordo', level: 'Inicial' },
      { name: 'Maniobras', level: 'Inicial' },
      { name: 'Navegación', level: 'Sin iniciar' },
      { name: 'Señalización', level: 'Sin iniciar' },
    ],
    exercisesDone: 89,
    accuracy: 54,
  },
  {
    name: 'Carolina Méndez',
    email: 'caro.m@email.com',
    joined: '18 Feb 2026',
    lastActive: 'Hace 5 horas',
    overall: 74,
    status: 'Avanzado',
    sections: [
      { name: 'Atribuciones', progress: 90 },
      { name: 'Nomenclatura', progress: 82 },
      { name: 'Términos de navegación', progress: 78 },
      { name: 'Averías e incendios', progress: 70 },
      { name: 'Seguridad con motores', progress: 65 },
      { name: 'Señales de socorro', progress: 75 },
      { name: 'Fondeo', progress: 80 },
      { name: 'Reglas de paso', progress: 60 },
      { name: 'Luces y marcas', progress: 55 },
      { name: 'Balizamiento IALA', progress: 72 },
      { name: 'Documentación', progress: 92 },
      { name: 'Hombre al agua', progress: 78 },
      { name: 'Nudos marineros', progress: 75 },
      { name: 'Meteorología', progress: 62 },
    ],
    competencies: [
      { name: 'Conocimiento normativo', level: 'Dominado' },
      { name: 'Seguridad a bordo', level: 'Avanzado' },
      { name: 'Maniobras', level: 'Avanzado' },
      { name: 'Navegación', level: 'Intermedio' },
      { name: 'Señalización', level: 'Intermedio' },
    ],
    exercisesDone: 256,
    accuracy: 76,
  },
  {
    name: 'Tomás Fernández',
    email: 'tomas.f@email.com',
    joined: '25 Feb 2026',
    lastActive: 'Hace 4 días',
    overall: 33,
    status: 'Inicial',
    sections: [
      { name: 'Atribuciones', progress: 50 },
      { name: 'Nomenclatura', progress: 40 },
      { name: 'Términos de navegación', progress: 35 },
      { name: 'Averías e incendios', progress: 28 },
      { name: 'Seguridad con motores', progress: 22 },
      { name: 'Señales de socorro', progress: 30 },
      { name: 'Fondeo', progress: 32 },
      { name: 'Reglas de paso', progress: 18 },
      { name: 'Luces y marcas', progress: 15 },
      { name: 'Balizamiento IALA', progress: 25 },
      { name: 'Documentación', progress: 55 },
      { name: 'Hombre al agua', progress: 38 },
      { name: 'Nudos marineros', progress: 30 },
      { name: 'Meteorología', progress: 20 },
    ],
    competencies: [
      { name: 'Conocimiento normativo', level: 'Inicial' },
      { name: 'Seguridad a bordo', level: 'Sin iniciar' },
      { name: 'Maniobras', level: 'Sin iniciar' },
      { name: 'Navegación', level: 'Sin iniciar' },
      { name: 'Señalización', level: 'Sin iniciar' },
    ],
    exercisesDone: 52,
    accuracy: 47,
  },
];

function levelColor(level: string) {
  switch (level) {
    case 'Dominado': return 'text-green-400';
    case 'Avanzado': return 'text-gold-400';
    case 'Intermedio': return 'text-yellow-400';
    case 'Inicial': return 'text-orange-400';
    default: return 'text-gray-600';
  }
}

function statusBadge(status: string) {
  switch (status) {
    case 'Avanzado': return 'bg-gold-500/10 text-gold-400 border-gold-500/20';
    case 'Intermedio': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
    default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
  }
}

function barColor(progress: number) {
  if (progress >= 80) return 'bg-green-500';
  if (progress >= 60) return 'bg-gold-500';
  if (progress >= 40) return 'bg-yellow-500';
  return 'bg-orange-500';
}

export default function DemoPage() {
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);
  const student = selectedStudent !== null ? STUDENTS[selectedStudent] : null;

  const avgProgress = Math.round(STUDENTS.reduce((s, st) => s + st.overall, 0) / STUDENTS.length);
  const totalExercises = STUDENTS.reduce((s, st) => s + st.exercisesDone, 0);
  const avgAccuracy = Math.round(STUDENTS.reduce((s, st) => s + st.accuracy, 0) / STUDENTS.length);

  // Aggregate section averages for the cohort view
  const sectionAverages = STUDENTS[0].sections.map((_, i) => ({
    name: STUDENTS[0].sections[i].name,
    avg: Math.round(STUDENTS.reduce((s, st) => s + st.sections[i].progress, 0) / STUDENTS.length),
  })).sort((a, b) => a.avg - b.avg);

  return (
    <main className="min-h-screen bg-navy-950">
      {/* Header */}
      <div className="bg-navy-900 border-b border-navy-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <a href="/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">← Volver</a>
              <div className="w-px h-4 bg-navy-700" />
              <h1 className="font-display font-bold text-white">Club Náutico del Paraná</h1>
              <span className="text-xs font-mono bg-gold-500/10 text-gold-400 border border-gold-500/20 px-2 py-0.5">DEMO</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Cohorte Marzo 2026 — Conductor Náutico</p>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-center">
            <div>
              <p className="font-mono text-lg font-bold text-white">{STUDENTS.length}</p>
              <p className="text-xs text-gray-500">Alumnos</p>
            </div>
            <div className="w-px h-8 bg-navy-700" />
            <div>
              <p className="font-mono text-lg font-bold text-gold-400">{avgProgress}%</p>
              <p className="text-xs text-gray-500">Progreso</p>
            </div>
            <div className="w-px h-8 bg-navy-700" />
            <div>
              <p className="font-mono text-lg font-bold text-white">{avgAccuracy}%</p>
              <p className="text-xs text-gray-500">Precisión</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Cohort overview */}
        {!student && (
          <>
            {/* Stats cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-navy-800 border border-navy-700 p-4">
                <p className="text-xs text-gray-500 mb-1">Alumnos activos</p>
                <p className="font-mono text-2xl font-bold text-white">{STUDENTS.length}</p>
              </div>
              <div className="bg-navy-800 border border-navy-700 p-4">
                <p className="text-xs text-gray-500 mb-1">Progreso promedio</p>
                <p className="font-mono text-2xl font-bold text-gold-400">{avgProgress}%</p>
              </div>
              <div className="bg-navy-800 border border-navy-700 p-4">
                <p className="text-xs text-gray-500 mb-1">Ejercicios resueltos</p>
                <p className="font-mono text-2xl font-bold text-white">{totalExercises}</p>
              </div>
              <div className="bg-navy-800 border border-navy-700 p-4">
                <p className="text-xs text-gray-500 mb-1">Precisión promedio</p>
                <p className="font-mono text-2xl font-bold text-white">{avgAccuracy}%</p>
              </div>
            </div>

            {/* Weakest sections */}
            <div className="bg-navy-800 border border-navy-700 p-5 mb-8">
              <h2 className="font-display font-bold text-white text-sm mb-4">Progreso por sección (promedio cohorte)</h2>
              <div className="space-y-3">
                {sectionAverages.map((sec) => (
                  <div key={sec.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-400">{sec.name}</span>
                      <span className="text-sm font-mono text-gray-300">{sec.avg}%</span>
                    </div>
                    <div className="h-2 bg-navy-700">
                      <div className={`h-full ${barColor(sec.avg)} transition-all`} style={{ width: `${sec.avg}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Student list */}
            <h2 className="font-display font-bold text-white text-sm mb-4">Alumnos</h2>
            <div className="space-y-2">
              {STUDENTS.map((st, i) => (
                <button
                  key={st.name}
                  onClick={() => setSelectedStudent(i)}
                  className="w-full bg-navy-800 border border-navy-700 p-4 flex items-center justify-between hover:border-gold-500/30 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 bg-navy-700 flex items-center justify-center text-sm font-mono text-gray-400">
                      {st.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{st.name}</p>
                      <p className="text-xs text-gray-500">{st.lastActive}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono px-2 py-0.5 border ${statusBadge(st.status)}`}>{st.status}</span>
                    <div className="w-24 hidden sm:block">
                      <div className="h-1.5 bg-navy-700">
                        <div className={`h-full ${barColor(st.overall)} transition-all`} style={{ width: `${st.overall}%` }} />
                      </div>
                    </div>
                    <span className="font-mono text-sm text-gray-300 w-10 text-right">{st.overall}%</span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Student detail */}
        {student && (
          <>
            <button
              onClick={() => setSelectedStudent(null)}
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors mb-6 block"
            >
              ← Volver a la lista
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-navy-700 flex items-center justify-center text-lg font-mono text-gray-300">
                {student.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-white">{student.name}</h2>
                <p className="text-xs text-gray-500">{student.email} · Inscripto: {student.joined}</p>
              </div>
              <span className={`text-xs font-mono px-2 py-0.5 border ${statusBadge(student.status)} ml-auto`}>{student.status}</span>
            </div>

            {/* Student stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-navy-800 border border-navy-700 p-4">
                <p className="text-xs text-gray-500 mb-1">Progreso general</p>
                <p className="font-mono text-2xl font-bold text-gold-400">{student.overall}%</p>
              </div>
              <div className="bg-navy-800 border border-navy-700 p-4">
                <p className="text-xs text-gray-500 mb-1">Ejercicios resueltos</p>
                <p className="font-mono text-2xl font-bold text-white">{student.exercisesDone}</p>
              </div>
              <div className="bg-navy-800 border border-navy-700 p-4">
                <p className="text-xs text-gray-500 mb-1">Precisión</p>
                <p className="font-mono text-2xl font-bold text-white">{student.accuracy}%</p>
              </div>
              <div className="bg-navy-800 border border-navy-700 p-4">
                <p className="text-xs text-gray-500 mb-1">Última actividad</p>
                <p className="font-mono text-sm font-bold text-white mt-1.5">{student.lastActive}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Progress by section */}
              <div className="bg-navy-800 border border-navy-700 p-5">
                <h3 className="font-display font-bold text-white text-sm mb-4">Progreso por sección</h3>
                <div className="space-y-3">
                  {student.sections.map((sec) => (
                    <div key={sec.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-400">{sec.name}</span>
                        <span className="text-xs font-mono text-gray-300">{sec.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-navy-700">
                        <div className={`h-full ${barColor(sec.progress)} transition-all`} style={{ width: `${sec.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competencies */}
              <div className="bg-navy-800 border border-navy-700 p-5">
                <h3 className="font-display font-bold text-white text-sm mb-4">Competencias</h3>
                <div className="space-y-4">
                  {student.competencies.map((comp) => (
                    <div key={comp.name} className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{comp.name}</span>
                      <span className={`text-sm font-mono font-semibold ${levelColor(comp.level)}`}>{comp.level}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-navy-700">
                  <h4 className="text-xs text-gray-500 mb-3">Secciones más débiles</h4>
                  <div className="space-y-2">
                    {student.sections
                      .sort((a, b) => a.progress - b.progress)
                      .slice(0, 3)
                      .map((sec) => (
                        <div key={sec.name} className="flex items-center justify-between bg-navy-900/50 px-3 py-2 border border-navy-700/50">
                          <span className="text-xs text-gray-400">{sec.name}</span>
                          <span className="text-xs font-mono text-orange-400">{sec.progress}%</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* CTA bar */}
      <div className="border-t border-navy-800 bg-navy-900/50 mt-12 py-8 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Este es un panel de demostración. Contactanos para implementarlo en tu club.
          </p>
          <a
            href="https://wa.me/5493416112731?text=Hola%2C%20vi%20la%20demo%20y%20me%20interesa%20el%20servicio%20para%20clubes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-2.5 text-sm hover:bg-[#20bd5a] transition-colors"
          >
            CONTACTAR POR WHATSAPP
          </a>
        </div>
      </div>
    </main>
  );
}
