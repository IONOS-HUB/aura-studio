import Seal from "@/components/Seal";

export const metadata = {
  title: "Gracias",
  robots: { index: false },
};

export default function GraciasPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <Seal size={64}>
        <span className="text-2xl">A</span>
      </Seal>

      <div className="measure flex flex-col gap-3">
        <p className="text-lg text-ink-900">
          ✨ ¡Hola! Bienvenida a Aura Beauty Studio 💛
        </p>
        <p className="text-lg text-ink-600">
          Gracias por escribirnos. Será un gusto atenderte y ayudarte a
          elegir el servicio ideal para ti. ✨
        </p>
        <p className="text-lg text-ink-600">
          En breve te responderemos para confirmar disponibilidad. 🤍
        </p>
        <p className="mt-2 font-display text-xl text-ink-900">
          Aura Beauty Studio — ✨ La belleza de sentirte tú ✨
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <a
          href="https://wa.me/593995368242"
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow-label rounded-[2px] bg-ink-900 px-7 py-4 text-nude-000"
        >
          Escribir por WhatsApp
        </a>
        <a
          href="https://instagram.com/beautystudio_aura1"
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow-label border-b border-gold-700 pb-0.5 text-ink-900"
        >
          Seguir en Instagram
        </a>
      </div>

      <a href="/" className="mt-4 text-sm text-ink-600 underline underline-offset-4">
        Volver al inicio
      </a>
    </main>
  );
}
