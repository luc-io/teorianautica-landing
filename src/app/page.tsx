// Copy: `docs/producto/landing-copy.md` en teoria-nautica-conductor.
// Los números (lecciones, temas, precios, tope diario) salen del catálogo y de
// `src/lib/mercadopago.ts` de la app. Si cambian allá, se cambian acá: un número
// desactualizado en la landing es peor que ninguno.

const APP_URL = 'https://app.teorianautica.com';

function Check() {
  return <span className="text-gold-500 flex-shrink-0">→</span>;
}

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
            <a href="#incluye" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">Qué incluye</a>
            <a href="#cursos" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">Cursos</a>
            <a href="#rendir" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">Cómo se rinde</a>
            <a
              href={APP_URL}
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
          <p className="text-gold-400 font-mono text-sm tracking-widest uppercase mb-4">Conductor Náutico · Timonel de Yate</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 text-balance">
            El curso teórico completo para tu licencia náutica
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 text-balance">
            El examen de Conductor Náutico y de Timonel de Yate es 80% teoría. Esa parte la estudiás acá: el programa
            de la Prefectura completo, en tu casa, empezando el día que quieras. Sin esperar a que abra una cohorte.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={APP_URL}
              className="bg-white text-navy-950 font-bold px-8 py-3 text-sm hover:bg-gray-100 transition-colors w-full sm:w-auto text-center"
            >
              EMPEZAR GRATIS
            </a>
            <a
              href="#incluye"
              className="border border-navy-600 text-gray-300 px-8 py-3 text-sm hover:border-navy-500 hover:text-white transition-colors w-full sm:w-auto text-center"
            >
              VER QUÉ INCLUYE
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">Todas las lecciones gratis, sin tarjeta.</p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-navy-800 bg-navy-900/50 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: '77', label: 'Lecciones de Conductor' },
            { value: '146+', label: 'Lecciones de Timonel' },
            { value: '748', label: 'Preguntas' },
            { value: '$0', label: 'Para estudiar el curso' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-2xl font-bold text-gold-400">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* El problema */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12 text-balance">
            Hoy tenés dos caminos, y los dos te cobran algo
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-navy-800 border border-navy-700 p-6">
              <p className="text-gold-400 font-mono text-xs tracking-widest uppercase mb-3">El curso de un día</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Un día para conductor, dos para timonel, una vez por mes. Te enseñan lo que se toma en el examen y nada
                más. Salís con la licencia rápido, y sin saber qué hacer cuando cambia el viento.
              </p>
            </div>
            <div className="bg-navy-800 border border-navy-700 p-6">
              <p className="text-gold-400 font-mono text-xs tracking-widest uppercase mb-3">El curso por cohortes</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                De uno a cuatro meses según la licencia. Una clase teórica y una práctica por semana, presenciales, con
                fecha fija de inicio. Se aprende de verdad, pero hay que estar, viajar cada semana y esperar a que abra
                la próxima.
              </p>
            </div>
          </div>
          <p className="text-center text-gray-300 mt-10 max-w-2xl mx-auto text-balance">
            Uno te da la licencia sin el conocimiento. El otro te da el conocimiento y te cobra meses de tu vida.
          </p>
        </div>
      </section>

      {/* La propuesta */}
      <section className="py-20 px-6 bg-navy-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-6 text-balance">
            La teoría del curso largo, en el tiempo del corto
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              La teoría no necesita que estés en un aula un martes a las 19. Necesita estar bien escrita, estar completa
              y que puedas volver sobre lo que no te entró.
            </p>
            <p>
              Eso es lo que hacemos: el programa de la Prefectura entero, tema por tema, escrito para que se entienda y
              se recuerde. Lo abrís cuando podés, avanzás a tu ritmo, y cuando estás listo te presentás a rendir.
            </p>
            <p>
              La práctica sigue siendo en el agua, con un instructor y un barco. Eso no lo reemplaza ninguna app, y no
              pretendemos que lo haga.
            </p>
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section id="incluye" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 font-mono text-xs tracking-widest uppercase mb-2 text-center">Qué incluye</p>
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12 text-balance">
            El programa completo, no un resumen de lo que se toma
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Todo el programa de la PNA',
                desc: '77 lecciones en Conductor Náutico. Más de 140 en Timonel, que suma la materia de navegación entera: cartas, rumbos, mareas, situación.',
              },
              {
                title: 'Una pregunta por cada idea',
                desc: '748 preguntas escritas sobre las ideas que el programa exige. Tu progreso se registra idea por idea, no por lección terminada.',
              },
              {
                title: 'Repaso de lo que te cuesta',
                desc: 'El sistema detecta qué conceptos fallás y te arma el repaso sobre eso. No perdés tiempo en lo que ya sabés.',
              },
              {
                title: 'Un instructor que conoce tu progreso',
                desc: 'Chat uno a uno con IA para las dudas, que sabe por dónde vas y qué tenés flojo.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-navy-800 border border-navy-700 p-5">
                <h3 className="font-display font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section id="cursos" className="py-20 px-6 bg-navy-900/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 font-mono text-xs tracking-widest uppercase mb-2 text-center">Cursos</p>
          <h2 className="font-display text-3xl font-bold text-white text-center mb-4">Dos licencias, dos cursos</h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 text-balance">
            El curso es gratis. El pase suma el instructor sin límite, los exámenes y simulacros, el repaso y las
            lecciones sin tope diario.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🚤',
                nombre: 'Conductor Náutico',
                desc: 'La licencia inicial, para embarcaciones a motor cerca de la costa.',
                datos: '77 lecciones · 17 temas de seguridad y legislación',
                precio: '$20.000',
                duracion: '3 meses',
                tope: 2,
              },
              {
                icon: '⛵',
                nombre: 'Timonel de Yate',
                desc: 'La licencia superior: embarcaciones más grandes y navegación más lejos de la costa. Agrega la materia de navegación, que conductor no tiene. A motor, o a vela y motor.',
                datos: '146 lecciones a motor, 159 a vela y motor · 26 temas',
                precio: '$40.000',
                duracion: '6 meses',
                tope: 4,
              },
            ].map((c) => (
              <div key={c.nombre} className="bg-navy-800 border border-navy-700 p-6 flex flex-col">
                <span className="text-2xl mb-4">{c.icon}</span>
                <h3 className="font-display text-xl font-bold text-white mb-2">{c.nombre}</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">{c.desc}</p>
                <ul className="space-y-2 mb-6">
                  {[
                    c.datos,
                    `Gratis: todas las lecciones y sus quizzes, hasta ${c.tope} lecciones nuevas por día`,
                    `Pase: ${c.precio} por ${c.duracion}, pago único`,
                  ].map((feat) => (
                    <li key={feat} className="text-sm text-gray-400 flex gap-2">
                      <Check />
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href={APP_URL}
                  className="mt-auto block w-full bg-white text-navy-950 font-bold py-2.5 text-sm text-center hover:bg-gray-100 transition-colors"
                >
                  EMPEZAR GRATIS
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-6">
            Pago único con Mercado Pago, sin renovación automática. Cada pase habilita su curso.
          </p>
        </div>
      </section>

      {/* Cómo se rinde */}
      <section id="rendir" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold-400 font-mono text-xs tracking-widest uppercase mb-2 text-center">Cómo se rinde</p>
          <h2 className="font-display text-3xl font-bold text-white text-center mb-8 text-balance">
            No hace falta anotarse en un curso para rendir
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>Prefectura toma examen de dos formas.</p>
            <p>
              <strong className="text-white">En un club náutico.</strong> El club pide el examen por escrito, presenta
              los contenidos y los exámenes con quince días de anticipación, y Prefectura va a tomarlo. Es el camino de
              quien cursa en un club.
            </p>
            <p>
              <strong className="text-white">Libre.</strong> Prefectura toma examen teórico y práctico a alumnos libres
              una vez por mes. No necesitás estar inscripto en ningún curso: necesitás saber la teoría y haber hecho la
              práctica.
            </p>
            <p>
              El segundo camino es el que casi nadie conoce, y es para el que esta app está hecha. Estudiás la teoría
              cuando podés, hacés tus prácticas, y te presentás en el turno del mes.
            </p>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-20 px-6 bg-navy-900/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-10">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {[
              {
                q: '¿Esto reemplaza al curso presencial?',
                a: 'La teoría sí, y es el 80% del examen. La práctica no: eso se hace en el agua, con instructor y embarcación.',
              },
              {
                q: '¿Puedo rendir sin hacer un curso?',
                a: 'Sí. Prefectura toma examen a alumnos libres una vez por mes, teórico y práctico.',
              },
              {
                q: '¿Qué es gratis y qué se paga?',
                a: 'Todas las lecciones y sus quizzes son gratis, con un tope de lecciones nuevas por día (2 en Conductor, 4 en Timonel). El pase suma el instructor con IA sin límite, los exámenes por materia, el examen general, los simulacros, el repaso y las lecciones sin tope.',
              },
              {
                q: '¿Cuánto dura el pase?',
                a: 'Tres meses en Conductor y seis en Timonel, porque el programa es más largo. Es un pago único: no se renueva solo.',
              },
              {
                q: '¿Timonel incluye Conductor?',
                a: 'Son dos cursos distintos y cada pase habilita el suyo. Timonel es una licencia superior: su curso cubre la seguridad y la legislación de conductor, más a fondo, y suma navegación.',
              },
              {
                q: '¿Sirve si ya tengo la licencia?',
                a: 'Sí, para repasar. El contenido es el programa completo, no un resumen para aprobar.',
              },
            ].map((f) => (
              <div key={f.q} className="border-b border-navy-800 pb-6">
                <h3 className="font-display font-bold text-white mb-2">{f.q}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-6 border-t border-navy-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Probalo antes de pagar</h2>
          <p className="text-gray-400 mb-8">
            El curso completo, con sus lecciones y sus quizzes, gratis y sin tarjeta. El pase lo comprás cuando te
            preparás para rendir.
          </p>
          <a
            href={APP_URL}
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
          <p className="text-xs text-gray-600 text-center">
            Contenido basado en el programa de la PNA. No es un producto oficial de la Prefectura Naval Argentina.
          </p>
          <a href="mailto:hola@teorianautica.com" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
            hola@teorianautica.com
          </a>
        </div>
      </footer>
    </main>
  );
}
