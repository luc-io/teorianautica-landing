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
            Aprendé navegación con práctica inteligente
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 text-balance">
            Flashcards con repetición espaciada, tutor IA y teoría completa para aprobar tu examen de habilitación náutica.
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
            { value: '400+', label: 'Flashcards' },
            { value: '14', label: 'Capítulos de teoría' },
            { value: '3', label: 'Juegos interactivos' },
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
                  '400+ flashcards con repetición espaciada',
                  '14 capítulos de teoría con referencias oficiales',
                  'Tutor IA por sección',
                  'Juegos: boyas, nomenclatura, luces',
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
                  'Nuevos juegos y simulaciones',
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
                title: 'Flashcards inteligentes',
                desc: 'Repetición espaciada: el sistema refuerza lo que más te cuesta y avanza lo que dominás.',
              },
              {
                icon: '💬',
                title: 'Tutor IA',
                desc: 'Preguntá lo que no entiendas. Un tutor con el contenido de cada sección te responde al instante.',
              },
              {
                icon: '🎮',
                title: 'Juegos',
                desc: 'Aprendé boyas, nomenclatura y luces de navegación jugando.',
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
                Ofrecé a tus alumnos una herramienta de estudio moderna que complementa las clases presenciales.
                Seguí su progreso, identificá los temas que más les cuestan y mejorá la tasa de aprobación.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Dashboard de progreso por alumno',
                  'Estadísticas de la cohorte en tiempo real',
                  'Contenido alineado al programa oficial PNA',
                  'Marca personalizada para tu club',
                  'Soporte prioritario',
                ].map((feat) => (
                  <li key={feat} className="text-sm text-gray-400 flex gap-2">
                    <span className="text-gold-500 flex-shrink-0">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hola@teorianautica.com?subject=Consulta%20para%20clubes"
                className="inline-block border border-white/20 text-white font-semibold px-6 py-2.5 text-sm hover:bg-white/5 transition-colors"
              >
                CONTACTAR
              </a>
            </div>
            <div className="bg-navy-800 border border-navy-700 p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Club Náutico Demo</span>
                  <span className="text-xs font-mono text-gold-400">15 alumnos</span>
                </div>
                <div className="h-px bg-navy-700" />
                {[
                  { name: 'Promedio general', value: '72%', bar: 72 },
                  { name: 'Atribuciones', value: '89%', bar: 89 },
                  { name: 'Nomenclatura', value: '65%', bar: 65 },
                  { name: 'Reglas de paso', value: '54%', bar: 54 },
                  { name: 'Balizamiento', value: '71%', bar: 71 },
                ].map((row) => (
                  <div key={row.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-400">{row.name}</span>
                      <span className="text-sm font-mono text-gray-300">{row.value}</span>
                    </div>
                    <div className="h-1.5 bg-navy-700">
                      <div className="h-full bg-gold-500 transition-all" style={{ width: `${row.bar}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-6 bg-navy-900/50 border-t border-navy-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Empezá a estudiar hoy</h2>
          <p className="text-gray-400 mb-8">
            Creá tu cuenta gratis y accedé a todas las flashcards, la teoría completa y el tutor IA.
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
