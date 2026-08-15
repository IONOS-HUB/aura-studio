import Reveal from "./Reveal";
import Seal from "./Seal";

const HOURS = [
  { day: "Lunes – Sábado", time: "08:00 – 19:00" },
  { day: "Domingo", time: "08:00 – 16:00" },
];

export default function HorarioUbicacion() {
  return (
    <section id="horario-ubicacion" className="border-t border-nude-200">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:gap-12 lg:px-16 lg:py-40">
        <div className="flex flex-col gap-8 lg:col-span-5">
          <div className="flex items-center gap-4">
            <Seal size={44}>
              <span className="font-tabular text-xs text-gold-700">05</span>
            </Seal>
            <span className="eyebrow-label text-ink-600">
              Horario y ubicación
            </span>
          </div>

          <Reveal as="h2" mask className="font-display text-h2 text-ink-900">
            Un lugar cerca, siempre a tiempo.
          </Reveal>

          <dl className="flex flex-col gap-3 border-y border-nude-200 py-6">
            {HOURS.map((h) => (
              <div key={h.day} className="flex items-baseline justify-between">
                <dt className="text-ink-900">{h.day}</dt>
                <dd className="font-tabular text-ink-600">{h.time}</dd>
              </div>
            ))}
          </dl>
          <p className="eyebrow-label text-gold-700">
            [Confirmar pausa de almuerzo, feriados, y si la última cita
            inicia o termina a las 19:00 — PRD §8.4]
          </p>

          <address className="not-italic text-lg text-ink-600">
            Armando Hidrovo y Daniel Reyes (casa esquinera)
            <br />
            <span className="text-gold-700">
              [Falta ciudad y sector — PRD §16 pregunta 11]
            </span>
          </address>

          <a
            href="https://wa.me/593995368242"
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow-label w-fit border-b border-gold-700 pb-0.5 text-ink-900 transition-colors hover:text-gold-700"
          >
            Coordinar por WhatsApp
          </a>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[var(--radius-aura)] border border-nude-200 lg:col-span-7">
          {/* Real embed: <iframe src="https://www.google.com/maps/embed?..." /> once the exact address is confirmed. */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(138,106,40,0.12) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(138,106,40,0.12) 40px)",
              backgroundColor: "var(--color-nude-100)",
            }}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Seal size={56}>
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="var(--color-gold-700)"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="6" />
              </svg>
            </Seal>
          </div>
          <span className="eyebrow-label absolute bottom-4 left-4 rounded-[var(--radius-aura)] bg-ink-900/85 px-2.5 py-1.5 text-nude-000">
            Mapa de muestra — insertar Google Maps embebido con la dirección
            confirmada
          </span>
        </div>
      </div>
    </section>
  );
}
