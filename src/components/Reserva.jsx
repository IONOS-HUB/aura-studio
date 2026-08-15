"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import Seal from "./Seal";
import AppointmentCard from "./AppointmentCard";

const SERVICE_OPTIONS = [
  { name: "Uñas", price: "$18" },
  { name: "Pestañas", price: "$25" },
  { name: "Cejas", price: "$12" },
  { name: "Maquillaje", price: "$30" },
  { name: "Depilación", price: "$10" },
  { name: "Masajes corporales", price: "$35" },
];

const TIMES = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00", "18:00"];

function nextDays(n) {
  return Array.from({ length: n }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  });
}

/**
 * PLACEHOLDER BOOKING UI — no Cal.com account/API key exists yet (PRD §8.2).
 * This mock reproduces the confirmed UX (service → date → time → consent →
 * confirmation) so layout, copy, and interaction are production-complete.
 *
 * TO WIRE THE REAL INTEGRATION: replace the state/markup between the
 * "CAL.COM EMBED START" and "CAL.COM EMBED END" comments below with the
 * Cal.com embed script (`@calcom/embed-react`'s <Cal /> component or the
 * inline embed snippet), pointed at Aura's event types per service
 * (PRD §8.3 RF-01–RF-04). Keep the WhatsApp fallback and consent checkbox
 * outside the embed exactly as placed here.
 */
export default function Reserva() {
  const [service, setService] = useState(null);
  const [dateIdx, setDateIdx] = useState(null);
  const [time, setTime] = useState(null);
  const [consent, setConsent] = useState(false);
  const [birthday, setBirthday] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const days = useMemo(() => nextDays(7), []);
  const canSubmit = service && dateIdx !== null && time && consent;

  const formattedDate =
    dateIdx !== null
      ? days[dateIdx].toLocaleDateString("es-EC", {
          weekday: "short",
          day: "numeric",
          month: "short",
        })
      : null;

  return (
    <section
      id="reserva"
      className="border-t border-nude-200 bg-nude-100 scroll-mt-20"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-24 lg:px-16 lg:py-40">
        <div className="mb-14 flex items-center gap-4">
          <Seal size={44}>
            <span className="font-tabular text-xs text-gold-700">06</span>
          </Seal>
          <span className="eyebrow-label text-ink-600">Reserva tu cita</span>
        </div>

        <Reveal
          as="h2"
          mask
          className="mb-14 max-w-2xl font-display text-h2 text-ink-900"
        >
          Elige tu hora. La agenda es real.
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {/* CAL.COM EMBED START — replace this block with the real embed */}
            {submitted ? (
              <div className="flex flex-col gap-6">
                <AppointmentCard
                  service={service}
                  date={formattedDate}
                  time={time}
                  price={SERVICE_OPTIONS.find((s) => s.name === service)?.price}
                  confirmed
                />
                <p className="measure text-sm text-ink-600">
                  Solicitud recibida. Te escribiremos a tu correo para
                  confirmar disponibilidad — revisa también tu WhatsApp.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-10">
                <Field label="Servicio">
                  <div className="flex flex-wrap gap-2.5">
                    {SERVICE_OPTIONS.map((s) => (
                      <button
                        key={s.name}
                        type="button"
                        onClick={() => setService(s.name)}
                        aria-pressed={service === s.name}
                        className={`eyebrow-label rounded-[2px] border px-4 py-2.5 transition-colors ${
                          service === s.name
                            ? "border-ink-900 bg-ink-900 text-nude-000"
                            : "border-nude-200 text-ink-600 hover:border-ink-900 hover:text-ink-900"
                        }`}
                      >
                        {s.name} · {s.price}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Fecha">
                  <div className="flex gap-2.5 overflow-x-auto pb-1">
                    {days.map((d, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setDateIdx(i)}
                        aria-pressed={dateIdx === i}
                        className={`flex w-16 shrink-0 flex-col items-center gap-1 rounded-[2px] border py-3 transition-colors ${
                          dateIdx === i
                            ? "border-ink-900 bg-ink-900 text-nude-000"
                            : "border-nude-200 text-ink-600 hover:border-ink-900 hover:text-ink-900"
                        }`}
                      >
                        <span className="eyebrow-label">
                          {d.toLocaleDateString("es-EC", { weekday: "short" })}
                        </span>
                        <span className="font-tabular text-lg">
                          {d.getDate()}
                        </span>
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Hora — America/Guayaquil (UTC−5)">
                  <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                    {TIMES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTime(t)}
                        aria-pressed={time === t}
                        className={`eyebrow-label rounded-[2px] border py-2.5 font-tabular transition-colors ${
                          time === t
                            ? "border-ink-900 bg-ink-900 text-nude-000"
                            : "border-nude-200 text-ink-600 hover:border-ink-900 hover:text-ink-900"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="¿Quieres tu regalo de cumpleaños? (opcional)">
                  <input
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    className="w-full max-w-xs rounded-[2px] border border-nude-200 bg-white px-4 py-3 text-ink-900 outline-none focus-visible:border-gold-700"
                  />
                  <p className="mt-2 text-xs text-ink-600">
                    Solo lo usamos para enviarte un beneficio de cumpleaños.
                    Nunca es obligatorio.
                  </p>
                </Field>

                <label className="flex items-start gap-3 text-sm text-ink-600">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 accent-[var(--color-gold-700)]"
                  />
                  Acepto el tratamiento de mis datos según la{" "}
                  <a href="/privacidad" className="text-gold-700 underline underline-offset-2">
                    Política de Privacidad
                  </a>
                  .
                </label>

                <div className="flex flex-wrap items-center gap-6">
                  <button
                    type="button"
                    disabled={!canSubmit}
                    onClick={() => setSubmitted(true)}
                    className="eyebrow-label rounded-[2px] bg-ink-900 px-7 py-4 text-nude-000 transition-colors disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    Confirmar solicitud
                  </button>
                  <a
                    href="https://wa.me/593995368242"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eyebrow-label border-b border-gold-700 pb-0.5 text-ink-900 transition-colors hover:text-gold-700"
                  >
                    ¿Prefieres coordinar por WhatsApp?
                  </a>
                </div>
              </div>
            )}
            {/* CAL.COM EMBED END */}
          </div>

          <div className="flex flex-col gap-6 border-t border-nude-200 pt-10 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="eyebrow-label text-ink-600">Vista previa</p>
            <AppointmentCard
              service={service}
              date={formattedDate}
              time={time}
              price={SERVICE_OPTIONS.find((s) => s.name === service)?.price}
              confirmed={submitted}
            />
            <p className="text-xs text-ink-600">
              [Módulo de reserva de muestra — conectar el embed real de
              Cal.com cuando exista la cuenta, PRD §8.2/§8.3.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="eyebrow-label text-ink-600">{label}</p>
      {children}
    </div>
  );
}
