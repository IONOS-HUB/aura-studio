import Reveal from "./Reveal";
import Seal from "./Seal";

const SERVICES = [
  {
    n: "01",
    name: "Uñas",
    from: "$18",
    duration: "45–75 min",
    desc: "Manicure y pedicure clásico, esmaltado semipermanente y soft gel, diseño a mano alzada.",
  },
  {
    n: "02",
    name: "Pestañas",
    from: "$25",
    duration: "60–120 min",
    desc: "Extensión pelo a pelo, volumen ruso, lifting y tinte de pestañas naturales.",
  },
  {
    n: "03",
    name: "Cejas",
    from: "$12",
    duration: "30–45 min",
    desc: "Diseño y perfilado, laminado, henna y microblading de mantenimiento.",
  },
  {
    n: "04",
    name: "Maquillaje",
    from: "$30",
    duration: "45–90 min",
    desc: "Maquillaje social, de novia y sesiones fotográficas, con prueba previa disponible.",
  },
  {
    n: "05",
    name: "Depilación",
    from: "$10",
    duration: "20–60 min",
    desc: "Cera tibia en rostro y cuerpo, diseño de línea, tratamiento post-depilación incluido.",
  },
  {
    n: "06",
    name: "Masajes corporales",
    from: "$35",
    duration: "50–80 min",
    desc: "Masaje relajante, descontracturante y drenaje linfático manual.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="border-t border-nude-200 bg-nude-100">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-24 lg:px-16 lg:py-40">
        <div className="mb-14 flex items-end justify-between gap-6 lg:mb-20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Seal size={44}>
                <span className="font-tabular text-xs text-gold-700">02</span>
              </Seal>
              <span className="eyebrow-label text-ink-600">Servicios</span>
            </div>
            <Reveal
              as="h2"
              mask
              className="max-w-2xl font-display text-h2 text-ink-900"
            >
              Seis oficios, una misma precisión.
            </Reveal>
          </div>
          <p className="hidden max-w-xs measure text-sm text-ink-600 lg:block">
            Precios desde, referenciales — el precio final depende del
            servicio elegido y se confirma antes de la cita.{" "}
            <em className="not-italic text-gold-700">
              [Cifras de muestra — reemplazar con la tabla real de precios y
              duraciones, PRD §16 pregunta 3.]
            </em>
          </p>
        </div>

        <Reveal
          as="ul"
          stagger={0.06}
          className="grid divide-y divide-nude-200 border-y border-nude-200 lg:grid-cols-2 lg:divide-x lg:divide-y-0"
        >
          {SERVICES.map((s) => (
            <li key={s.n} className="opacity-0">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 py-7 lg:px-8">
                  <span className="flex items-baseline gap-5">
                    <span className="font-tabular text-sm text-gold-700">
                      {s.n}
                    </span>
                    <span className="font-display text-2xl text-ink-900">
                      {s.name}
                    </span>
                  </span>
                  <span className="flex items-center gap-4">
                    <span className="eyebrow-label text-ink-600">
                      Desde {s.from}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-lg text-gold-700 transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <div className="measure pb-8 pl-0 text-ink-600 lg:px-8 lg:pl-16">
                  <p>{s.desc}</p>
                  <p className="eyebrow-label mt-3 text-ink-600/70">
                    Duración aproximada: {s.duration}
                  </p>
                </div>
              </details>
            </li>
          ))}
        </Reveal>

        <p className="mt-8 measure text-sm text-ink-600 lg:hidden">
          Precios referenciales.{" "}
          <em className="not-italic text-gold-700">
            [Cifras de muestra — pendiente de confirmar.]
          </em>
        </p>
      </div>
    </section>
  );
}
