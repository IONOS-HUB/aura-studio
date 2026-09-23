"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function ReservaCalendar({ eager = false }) {
  const [acceptedPolicies, setAcceptedPolicies] = useState(false);

  return (
    <div className="overflow-hidden rounded-[var(--radius-aura)] border border-nude-200 bg-white lg:col-span-8">
      <div className="border-b border-nude-200 bg-nude-100/60 px-5 py-4 sm:px-6">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-600">
          <input
            type="checkbox"
            checked={acceptedPolicies}
            onChange={(e) => setAcceptedPolicies(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-gold-700)]"
          />
          <span>
            Al reservar confirmo que he leído y acepto las{" "}
            <Link
              href="/politicas-servicio"
              className="text-gold-700 underline underline-offset-2"
            >
              Políticas y Condiciones de Servicio
            </Link>{" "}
            de {SITE.name}.
          </span>
        </label>
      </div>

      {acceptedPolicies ? (
        <iframe
          title={`Reservar cita en ${SITE.name}`}
          src={SITE.appointmentsEmbed}
          loading={eager ? "eager" : "lazy"}
          className="block h-[720px] w-full border-0 sm:h-[800px]"
        />
      ) : (
        <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 px-6 py-16 text-center sm:min-h-[720px]">
          <p className="max-w-sm text-ink-600">
            Marca la casilla de arriba para abrir el calendario y elegir tu
            hora.
          </p>
          <Link
            href="/politicas-servicio"
            className="eyebrow-label border-b border-gold-700 pb-0.5 text-ink-900 transition-colors hover:text-gold-700"
          >
            Leer políticas antes de reservar
          </Link>
        </div>
      )}
    </div>
  );
}
