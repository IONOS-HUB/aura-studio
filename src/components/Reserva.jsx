import Reveal from "./Reveal";
import Seal from "./Seal";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Reserva({ eager = false }) {
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
          <span className="eyebrow-label text-ink-600">Tu momento</span>
        </div>

        <Reveal
          as="h2"
          mask
          className="mb-4 max-w-2xl font-display text-h2 text-ink-900"
        >
          Este momento es tuyo.
        </Reveal>
        <p className="mb-10 measure text-ink-600">
          Elige el servicio y la hora. Te esperamos para realzar tu belleza —
          la cita queda confirmada al instante.
        </p>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="overflow-hidden rounded-[var(--radius-aura)] border border-nude-200 bg-white lg:col-span-8">
            <iframe
              title={`Reservar cita en ${SITE.name}`}
              src={SITE.appointmentsEmbed}
              loading={eager ? "eager" : "lazy"}
              className="block h-[720px] w-full border-0 sm:h-[800px]"
            />
          </div>

          <div className="flex flex-col gap-6 border-t border-nude-200 pt-10 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="eyebrow-label text-ink-600">También puedes</p>
            <p className="text-sm text-ink-600">
              Si prefieres hablar antes de elegir hora, escríbenos. La
              reserva en el calendario confirma el cupo al momento.
            </p>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow-label w-fit border-b border-gold-700 pb-0.5 text-ink-900 transition-colors hover:text-gold-700"
            >
              ¿Prefieres coordinar por WhatsApp?
            </a>
            <a
              href={SITE.appointmentsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow-label w-fit border-b border-gold-700 pb-0.5 text-ink-900 transition-colors hover:text-gold-700"
            >
              Abrir el calendario en una pestaña
            </a>
            <p className="text-xs text-ink-600">
              Al reservar aceptas el tratamiento de tus datos según la{" "}
              <Link
                href="/privacidad"
                className="text-gold-700 underline underline-offset-2"
              >
                Política de Privacidad
              </Link>
              . Precios referenciales, se confirman en la cita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
