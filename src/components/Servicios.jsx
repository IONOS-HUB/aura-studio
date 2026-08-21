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
  {
    n: "07",
    name: "Ritual de Barro Volcánico Aura",
    from: "$45",
    duration: "60–90 min",
    desc: "Servicio premium con barro volcánico: exfolia la piel, favorece la relajación, realiza una limpieza profunda, mejora la sensación y apariencia de la piel, aporta minerales a la superficie, brinda sensación de bienestar muscular y una experiencia diferente.",
    premium: true,
    benefits: [
      "Ayuda a exfoliar la piel",
      "Favorece la relajación",
      "Limpieza de la piel",
      "Mejora la sensación y apariencia de la piel",
      "Aporta minerales a la superficie de la piel",
      "Sensación de bienestar muscular",
      "Experiencia diferente",
    ],
  },
];

// Un ícono de línea dorado distinto por beneficio, en el mismo orden que
// SERVICES[6].benefits.
const BENEFIT_ICON_PATHS = [
  <>
    <path d="M12 4a8 8 0 1 1-6.93 4" />
    <path d="M4 4v4h4" />
  </>,
  <>
    <path d="M5 19c8-1 13-6 14-14-8 1-13 6-14 14Z" />
    <path d="M6 18c2.5-3 5-5.5 8-8" />
  </>,
  <path d="M12 3.5s6 6.6 6 10.8a6 6 0 1 1-12 0c0-4.2 6-10.8 6-10.8Z" />,
  <path d="M12 3c.6 3.4 2.6 5.4 6 6-3.4.6-5.4 2.6-6 6-.6-3.4-2.6-5.4-6-6 3.4-.6 5.4-2.6 6-6Z" />,
  <>
    <path d="M4 9 8 4h8l4 5-8 11z" />
    <path d="M4 9h16M9 4l3 5-3 11M15 4l-3 5 3 11" />
  </>,
  <>
    <path d="M12 20s-7-4.4-9.3-9C1.2 7.8 3 4.5 6.4 4.5c2 0 3.2 1.1 3.9 2.1.7-1 1.9-2.1 3.9-2.1 3.4 0 5.2 3.3 3.7 6.5C19 15.6 12 20 12 20Z" />
    <path d="M6 12h2.5l1.3-2.4 1.7 4 1.4-2.4H15" />
  </>,
  <>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M15.2 8.8 13 13l-4.2 2.2L11 11l4.2-2.2Z" />
  </>,
];

function PlusIcon({ stroke, size = 17 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={stroke}
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-300 group-open:rotate-45"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="var(--color-ink-900)"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.5 17.5h15M4.5 17.5 3 9l4.6 3.6L12 6l4.4 6.6L21 9l-1.5 8.5" />
      <circle cx="3" cy="8.6" r="0.9" fill="var(--color-ink-900)" stroke="none" />
      <circle cx="12" cy="5.6" r="0.9" fill="var(--color-ink-900)" stroke="none" />
      <circle cx="21" cy="8.6" r="0.9" fill="var(--color-ink-900)" stroke="none" />
    </svg>
  );
}

function BenefitIcon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="var(--color-gold-700)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      {children}
    </svg>
  );
}

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
              Siete formas de realzar tu belleza.
            </Reveal>
          </div>
          <p className="hidden max-w-xs measure text-sm text-ink-600 lg:block">
            Precios referenciales. El precio final depende del servicio
            elegido y se confirma antes de la cita.
          </p>
        </div>

        <Reveal
          as="ul"
          stagger={0.06}
          className="grid items-start gap-4 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-5"
        >
          {SERVICES.map((s) =>
            s.premium ? (
              <li
                key={s.n}
                className="opacity-0 lg:col-span-2 lg:flex lg:justify-center"
              >
                <details className="group glass-panel w-full rounded-[var(--radius-aura)] lg:max-w-[468px]">
                  <summary className="relative grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-x-5 gap-y-3.5 rounded-[var(--radius-aura)] bg-ink-900 px-5 py-[18px] text-nude-000 group-open:rounded-b-none">
                    <span className="flex min-w-0 items-start gap-3">
                      <span className="font-tabular text-[13px] text-gold-300">
                        {s.n}
                      </span>
                      <span className="line-clamp-2 min-w-0 font-display text-xl leading-tight sm:text-[1.375rem] lg:text-2xl">
                        {s.name}
                      </span>
                    </span>
                    <span className="flex shrink-0 flex-col items-end gap-3">
                      <span className="relative inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gold-500 bg-ink-900/45 px-3 py-[7px]">
                        <span className="eyebrow-label text-gold-300">
                          Premium
                        </span>
                        <span
                          aria-hidden="true"
                          className="absolute -right-3 -top-3 flex h-7 w-7 -rotate-[16deg] items-center justify-center rounded-full border-[1.5px] border-nude-000 bg-gold-500 shadow-[0_4px_10px_-3px_rgba(20,16,14,0.55)] motion-safe:animate-[crown-pulse_2.8s_ease-in-out_infinite]"
                        >
                          <CrownIcon />
                        </span>
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="eyebrow-label whitespace-nowrap">
                          Desde {s.from}
                        </span>
                        <PlusIcon stroke="var(--color-gold-300)" size={18} />
                      </span>
                    </span>
                  </summary>
                  <div className="rounded-b-[var(--radius-aura)] bg-nude-000 px-5 pb-6 pt-5">
                    <p className="mb-3.5 text-[0.9375rem] font-semibold tracking-[0.01em] text-ink-900">
                      Beneficios del RITUAL DE BARRO VOLCÁNICO AURA
                    </p>
                    <ul className="mb-5">
                      {s.benefits.map((b, i) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 border-t border-nude-200/70 py-3 first:border-t-0"
                        >
                          <BenefitIcon>{BENEFIT_ICON_PATHS[i]}</BenefitIcon>
                          <span className="text-sm leading-snug text-ink-600">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="eyebrow-label text-ink-600/70">
                      Duración aproximada: {s.duration}
                    </p>
                  </div>
                </details>
              </li>
            ) : (
              <li key={s.n} className="opacity-0">
                <details className="group h-full overflow-hidden rounded-[var(--radius-aura)] border border-nude-200 bg-nude-000 shadow-[0_14px_32px_-26px_rgba(20,16,14,0.35)]">
                  <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-[18px]">
                    <span className="flex min-w-0 items-baseline gap-3">
                      <span className="eyebrow-label shrink-0 font-tabular text-[0.8125rem] text-gold-700">
                        {s.n}
                      </span>
                      <span className="min-w-0 flex-1 truncate font-display text-xl text-ink-900">
                        {s.name}
                      </span>
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="eyebrow-label whitespace-nowrap text-ink-600">
                        Desde {s.from}
                      </span>
                      <PlusIcon stroke="var(--color-gold-700)" />
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="mb-2.5 mt-1 text-[0.9375rem] leading-[1.55] text-ink-600">
                      {s.desc}
                    </p>
                    <p className="eyebrow-label text-ink-600/70">
                      Duración aproximada: {s.duration}
                    </p>
                  </div>
                </details>
              </li>
            )
          )}
        </Reveal>

        <p className="mt-8 measure text-sm text-ink-600 lg:hidden">
          Precios referenciales. Se confirman antes de la cita.
        </p>
      </div>
    </section>
  );
}
