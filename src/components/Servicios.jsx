import Reveal from "./Reveal";
import Seal from "./Seal";
import {
  SERVICE_MENUS,
  categoryFromPrice,
  formatItemPrice,
} from "@/lib/servicios";

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
              La carta para realzar tu belleza.
            </Reveal>
          </div>
          <p className="hidden max-w-xs measure text-sm text-ink-600 lg:block">
            Precios referenciales. El precio final depende del servicio
            elegido y se confirma antes de la cita.
          </p>
        </div>

        <Reveal
          as="ul"
          stagger={0.05}
          className="grid items-start gap-4 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-5"
        >
          {SERVICE_MENUS.map((s) => {
            const from = categoryFromPrice(s.items);
            return (
              <li key={s.n} className="opacity-0">
                <details className="group overflow-hidden rounded-[var(--radius-aura)] border border-nude-200 bg-nude-000 shadow-[0_14px_32px_-26px_rgba(20,16,14,0.35)]">
                  <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-[18px] sm:px-6 [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-baseline gap-3">
                      <span className="eyebrow-label shrink-0 font-tabular text-[0.8125rem] text-gold-700">
                        {s.n}
                      </span>
                      <span className="min-w-0 flex-1 truncate font-display text-xl text-ink-900">
                        {s.name}
                      </span>
                    </span>
                    <span className="flex items-center gap-3">
                      {from ? (
                        <span className="eyebrow-label whitespace-nowrap text-ink-600">
                          Desde {from}
                        </span>
                      ) : null}
                      <PlusIcon stroke="var(--color-gold-700)" />
                    </span>
                  </summary>

                  <div className="px-5 pb-6 sm:px-6">
                    {s.tagline ? (
                      <p className="mb-4 text-sm leading-snug text-ink-600">
                        {s.tagline}
                      </p>
                    ) : null}

                    <ul>
                      {s.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-baseline gap-3 border-t border-nude-200/70 py-2.5 first:border-t-0 first:pt-0"
                        >
                          <span className="min-w-0 text-[0.9375rem] leading-snug text-ink-900">
                            {item.name}
                          </span>
                          <span
                            aria-hidden="true"
                            className="min-w-4 flex-1 border-b border-dotted border-nude-200"
                          />
                          <span className="font-tabular shrink-0 text-sm text-gold-700">
                            {formatItemPrice(item)}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {s.approximate ? (
                      <p className="mt-4 text-xs tracking-[0.04em] text-ink-600/80">
                        Precios aproximados.
                      </p>
                    ) : null}
                  </div>
                </details>
              </li>
            );
          })}
        </Reveal>

        <p className="mt-8 measure text-sm text-ink-600 lg:hidden">
          Precios referenciales. Se confirman antes de la cita.
        </p>
      </div>
    </section>
  );
}
