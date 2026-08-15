import Reveal from "./Reveal";
import Seal from "./Seal";
import { FULL_ADDRESS, MAPS_EMBED, MAPS_LINK, SITE } from "@/lib/site";

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
          <p className="text-sm text-ink-600">
            La última cita se agenda según la duración del servicio, dentro
            de este horario.
          </p>

          <address className="not-italic text-lg text-ink-600">
            {SITE.streetAddress}
            <br />
            {SITE.city}, {SITE.region}
          </address>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow-label w-fit border-b border-gold-700 pb-0.5 text-ink-900 transition-colors hover:text-gold-700"
            >
              Cómo llegar
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow-label w-fit border-b border-gold-700 pb-0.5 text-ink-900 transition-colors hover:text-gold-700"
            >
              Coordinar por WhatsApp
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[var(--radius-aura)] border border-nude-200 lg:col-span-7">
          <iframe
            title={`Mapa de ${SITE.name} en ${FULL_ADDRESS}`}
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
