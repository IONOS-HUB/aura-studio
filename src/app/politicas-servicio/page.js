import Link from "next/link";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Políticas y condiciones de servicio",
  description: `Políticas y condiciones de servicio de ${SITE.name} en ${SITE.city}.`,
};

export default function PoliticasServicioPage() {
  const pdfSrc = SITE.servicePoliciesPath;

  return (
    <main className="flex min-h-screen flex-col bg-nude-000">
      <SiteHeader />

      <article className="mx-auto w-full max-w-[960px] flex-1 px-6 py-16 lg:py-24">
        <p className="eyebrow-label mb-4 text-ink-600">
          Documento oficial del estudio
        </p>
        <h1 className="mb-4 font-display text-h1 text-ink-900">
          Políticas y condiciones de servicio
        </h1>
        <p className="mb-8 measure text-ink-600">
          Este documento aplica a todas las citas en {SITE.name}. Al reservar en
          el calendario aceptas estas condiciones.
        </p>

        <div className="mb-6 flex flex-wrap gap-4">
          <a
            href={pdfSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow-label rounded-[var(--radius-aura)] bg-ink-900 px-5 py-3 text-nude-000 transition-opacity hover:opacity-90"
          >
            Abrir PDF en nueva pestaña
          </a>
          <a
            href={pdfSrc}
            download
            className="eyebrow-label rounded-[var(--radius-aura)] border border-nude-200 bg-nude-000 px-5 py-3 text-ink-900 transition-colors hover:border-gold-700 hover:text-gold-700"
          >
            Descargar PDF
          </a>
          <Link
            href="/reservar"
            className="eyebrow-label border-b border-gold-700 pb-0.5 text-ink-900 transition-colors hover:text-gold-700"
          >
            Volver a reservar
          </Link>
        </div>

        <div className="overflow-hidden rounded-[var(--radius-aura)] border border-nude-200 bg-white">
          <iframe
            title="Políticas y condiciones de servicio de Aura Beauty Studio"
            src={pdfSrc}
            className="block h-[min(80vh,900px)] w-full border-0"
          />
        </div>
      </article>

      <Footer />
    </main>
  );
}
