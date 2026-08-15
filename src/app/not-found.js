import Seal from "@/components/Seal";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <Seal size={64}>
        <span className="font-tabular text-lg text-gold-700">404</span>
      </Seal>
      <div className="flex flex-col gap-3">
        <h1 className="font-display text-h1 text-ink-900">
          Esta página se nos perdió.
        </h1>
        <p className="measure text-ink-600">
          Pero tu cita no tiene por qué esperar.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <a
          href="/"
          className="eyebrow-label rounded-[2px] bg-ink-900 px-7 py-4 text-nude-000"
        >
          Volver al inicio
        </a>
        <a
          href="https://wa.me/593995368242"
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow-label border-b border-gold-700 pb-0.5 text-ink-900"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </main>
  );
}
