import Seal from "./Seal";

/**
 * RAISE (donated from an airline-ticket-wallet structural challenger): the
 * reservation summary renders as a tactile, carbon-copy-style appointment
 * card rather than a generic confirmation box — filled fields plus a
 * perforated tear-line on the confirmed state — while staying entirely
 * inside Aura's nude/gold/ink palette (no travel color or iconography).
 */
export default function AppointmentCard({ service, date, time, price, confirmed }) {
  return (
    <div className="relative overflow-hidden rounded-[2px] border border-ink-900 bg-nude-000">
      <div className="flex items-center justify-between gap-4 bg-ink-900 px-6 py-4 text-nude-000">
        <div className="flex items-center gap-3">
          <Seal size={26} tone="gold-light">
            <span className="text-[10px] text-gold-300">A</span>
          </Seal>
          <span className="eyebrow-label">Aura Beauty Studio</span>
        </div>
        <span className="eyebrow-label text-gold-300">
          {confirmed ? "Confirmada" : "Solicitud"}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-5 px-6 py-6 font-tabular text-ink-900 sm:grid-cols-4">
        <Field label="Servicio" value={service || "—"} />
        <Field label="Fecha" value={date || "—"} />
        <Field label="Hora" value={time || "—"} />
        <Field label="Desde" value={price || "—"} />
      </div>

      <div
        aria-hidden="true"
        className="relative h-0 border-t border-dashed border-ink-900/25"
      >
        <span className="absolute -left-2.5 -top-2.5 h-5 w-5 rounded-full bg-nude-100" />
        <span className="absolute -right-2.5 -top-2.5 h-5 w-5 rounded-full bg-nude-100" />
      </div>

      <div className="flex items-center justify-between px-6 py-4">
        <p className="text-xs text-ink-600">
          Zona horaria America/Guayaquil (UTC−5) · esta reserva es una
          solicitud hasta que Aura la confirme.
        </p>
        <Seal size={30}>
          <svg
            viewBox="0 0 24 24"
            width="12"
            height="12"
            fill="none"
            stroke="var(--color-gold-700)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12.5 9.5 17 19 7" />
          </svg>
        </Seal>
      </div>
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div>
      <p className="eyebrow-label mb-1.5 text-ink-600">{label}</p>
      <p className="text-base">{value}</p>
    </div>
  );
}
