export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-md border-b border-navy-800/50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚓</span>
            <span className="font-display font-bold text-white text-sm tracking-wide">TEORÍA NÁUTICA</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#cursos" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">Cursos</a>
            <a href="#como-funciona" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">Cómo funciona</a>
            <a href="#clubes" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">Clubes</a>
            <a
              href="https://conductor.teorianautica.com"
              className="bg-white text-navy-950 text-sm font-semibold px-4 py-1.5 hover:bg-gray-100 transition-colors"
            >
              Empezar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-400 font-mono text-sm tracking-widest uppercase mb-4">Prefectura Naval Argentina</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 text-balance">
            Estudiá teoría náutica y aprobá tu licencia de navegación
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 text-balance">
            Ejercicios con repetición espaciada, tutor IA y teoría completa para rendir tu habilitación náutica recreativa ante la PNA.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://conductor.teorianautica.com"
              className="bg-white text-navy-950 font-bold px-8 py-3 text-sm hover:bg-gray-100 transition-colors w-full sm:w-auto text-center"
            >
              EMPEZAR GRATIS
            </a>
            <a
              href="#como-funciona"
              className="border border-navy-600 text-gray-300 px-8 py-3 text-sm hover:border-navy-500 hover:text-white transition-colors w-full sm:w-auto text-center"
            >
              VER CÓMO FUNCIONA
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-navy-800 bg-navy-900/50 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: '400+', label: 'Ejercicios' },
            { value: '14', label: 'Capítulos de teoría' },
            { value: '3', label: 'Simuladores interactivos' },
            { value: 'IA', label: 'Tutor por sección' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-2xl font-bold text-gold-400">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cursos */}
      <section id="cursos" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 font-mono text-xs tracking-widest uppercase mb-2 text-center">Cursos disponibles</p>
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">Elegí tu habilitación</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Conductor Náutico */}
            <div className="bg-navy-800 border border-navy-700 p-6 group hover:border-gold-500/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">🚤</span>
                <span className="text-xs font-mono text-gold-400 bg-gold-500/10 px-2 py-0.5 border border-gold-500/20">DISPONIBLE</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Conductor Náutico</h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Motor hasta 150 HP, eslora hasta 10m. Navegación en aguas interiores y Río de la Plata.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  '400+ ejercicios con repetición espaciada',
                  '14 capítulos de teoría con referencias oficiales',
                  'Tutor IA por sección',
                  'Simuladores: boyas, nomenclatura, luces',
                  'Seguimiento de progreso por habilidad',
                ].map((feat) => (
                  <li key={feat} className="text-sm text-gray-400 flex gap-2">
                    <span className="text-gold-500 flex-shrink-0">→</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="https://conductor.teorianautica.com"
                className="block w-full bg-white text-navy-950 font-bold py-2.5 text-sm text-center hover:bg-gray-100 transition-colors"
              >
                EMPEZAR
              </a>
            </div>

            {/* Timonel */}
            <div className="bg-navy-800 border border-navy-700/50 p-6 opacity-60">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">⛵</span>
                <span className="text-xs font-mono text-gray-500 bg-navy-700 px-2 py-0.5 border border-navy-600">PRÓXIMAMENTE</span>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-400 mb-2">Timonel de Yate</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                Vela y motor. Navegación deportiva sin límite de zona en aguas interiores.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Todo el contenido de Conductor Náutico',
                  'Vela: maniobras, regateo, meteorología avanzada',
                  'Carta náutica y navegación costera',
                  'Nuevos simuladores interactivos',
                ].map((feat) => (
                  <li key={feat} className="text-sm text-gray-500 flex gap-2">
                    <span className="text-gray-600 flex-shrink-0">→</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="block w-full bg-navy-700 text-gray-500 font-bold py-2.5 text-sm text-center cursor-not-allowed">
                EN DESARROLLO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="py-20 px-6 bg-navy-900/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 font-mono text-xs tracking-widest uppercase mb-2 text-center">Método</p>
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">Cómo funciona</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '📖',
                title: 'Teoría completa',
                desc: '14 capítulos con contenido oficial de la PNA y referencias a RIPA, REGINAVE e IALA.',
              },
              {
                icon: '🃏',
                title: 'Ejercicios inteligentes',
                desc: 'Repetición espaciada: el sistema refuerza lo que más te cuesta y avanza lo que dominás.',
              },
              {
                icon: '💬',
                title: 'Tutor IA',
                desc: 'Preguntá lo que no entiendas. Un tutor con el contenido de cada sección te responde al instante.',
              },
              {
                icon: '🎮',
                title: 'Simuladores',
                desc: 'Practicá boyas, nomenclatura y luces de navegación con simuladores interactivos.',
              },
            ].map((step) => (
              <div key={step.title} className="bg-navy-800 border border-navy-700 p-5">
                <span className="text-2xl block mb-3">{step.icon}</span>
                <h3 className="font-display font-bold text-white text-sm mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para Clubes */}
      <section id="clubes" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold-400 font-mono text-xs tracking-widest uppercase mb-2">Para instituciones</p>
              <h2 className="font-display text-3xl font-bold text-white mb-4">Clubes Náuticos</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Proporcionamos a tu club un plan de estudio completo con ejercicios, teoría y simuladores para que tus alumnos lleguen preparados al examen.
                Seguí el progreso de cada uno, identificá los temas que más les cuestan y mejorá la tasa de aprobación.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Plan de estudio alineado al programa oficial PNA',
                  'Ejercicios y exámenes aprobados por Prefectura Naval',
                  'Dashboard de progreso por alumno en tiempo real',
                  'Asistencia para práctica de nudos y maniobras con embarcaciones',
                  'Marca personalizada para tu club',
                  'Soporte prioritario',
                ].map((feat) => (
                  <li key={feat} className="text-sm text-gray-400 flex gap-2">
                    <span className="text-gold-500 flex-shrink-0">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/5493416112731?text=Hola%2C%20me%20interesa%20el%20servicio%20para%20clubes%20n%C3%A1uticos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-2.5 text-sm hover:bg-[#20bd5a] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  CONTACTAR POR WHATSAPP
                </a>
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-6 py-2.5 text-sm hover:bg-white/5 transition-colors"
                >
                  VER DEMO
                </a>
              </div>
            </div>
            <div className="bg-navy-800 border border-navy-700 p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-white">Panel del Club</span>
                <span className="text-xs font-mono text-gold-400">Vista previa</span>
              </div>
              <div className="h-px bg-navy-700 mb-4" />
              <div className="space-y-3">
                {[
                  { name: 'Martín López', progress: 85, status: 'Avanzado' },
                  { name: 'Lucía García', progress: 62, status: 'Intermedio' },
                  { name: 'Pablo Ruiz', progress: 41, status: 'Inicial' },
                ].map((student) => (
                  <div key={student.name} className="bg-navy-900/50 p-3 border border-navy-700/50">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-gray-300">{student.name}</span>
                      <span className="text-xs font-mono text-gray-500">{student.status}</span>
                    </div>
                    <div className="h-1.5 bg-navy-700">
                      <div className="h-full bg-gold-500 transition-all" style={{ width: `${student.progress}%` }} />
                    </div>
                    <span className="text-xs font-mono text-gray-500 mt-1 block">{student.progress}% completado</span>
                  </div>
                ))}
              </div>
              <a href="/demo" className="block text-center text-xs text-gold-400 mt-4 hover:text-gold-300 transition-colors">
                Ver panel completo →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-6 bg-navy-900/50 border-t border-navy-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Empezá a estudiar hoy</h2>
          <p className="text-gray-400 mb-8">
            Creá tu cuenta gratis y accedé a todos los ejercicios, la teoría completa y el tutor IA.
          </p>
          <a
            href="https://conductor.teorianautica.com"
            className="inline-block bg-white text-navy-950 font-bold px-10 py-3 text-sm hover:bg-gray-100 transition-colors"
          >
            EMPEZAR GRATIS
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy-800 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>⚓</span>
            <span className="font-display font-bold text-sm text-gray-400">TEORÍA NÁUTICA</span>
          </div>
          <p className="text-xs text-gray-600">
            Contenido alineado al Programa Oficial de la PNA. No es un producto oficial de Prefectura Naval Argentina.
          </p>
          <a href="mailto:hola@teorianautica.com" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
            hola@teorianautica.com
          </a>
        </div>
      </footer>
    </main>
  );
}
