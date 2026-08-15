import Reveal from "./Reveal";
import PlaceholderMedia from "./PlaceholderMedia";
import Seal from "./Seal";

export default function ConoceAura() {
  return (
    <section
      id="conoce-aura"
      className="grid gap-0 border-t border-nude-200 lg:grid-cols-12"
    >
      <div className="relative order-2 lg:order-1 lg:col-span-5">
        <PlaceholderMedia
          label="María en el estudio"
          variant="studio"
          className="aspect-[4/5] w-full lg:h-full"
        />
      </div>

      <div className="order-1 flex flex-col justify-center gap-8 px-6 py-20 sm:py-24 lg:order-2 lg:col-span-6 lg:col-start-7 lg:py-0">
        <div className="flex items-center gap-4">
          <Seal size={44}>
            <span className="font-tabular text-xs text-gold-700">01</span>
          </Seal>
          <span className="eyebrow-label text-ink-600">Conoce Aura</span>
        </div>

        <Reveal as="h2" mask className="font-display text-h2 text-ink-900">
          Un estudio para realzar tu belleza, no para pasar de largo.
        </Reveal>

        <div className="measure flex flex-col gap-5 text-lg text-ink-600">
          <p>
            Cada gesto en Aura está pensado para que te veas — y te sientas —
            más tú. Uñas, pestañas, cejas y maquillaje tratados con la misma
            precisión que una pieza de joyería: nada se apresura, nada se
            improvisa.
          </p>
          <p>
            María Chamorro fundó el estudio en Ibarra para que cada mujer
            tenga un lugar cercano donde su belleza se cuida de verdad, con
            tiempo y con detalle.
          </p>
        </div>
      </div>
    </section>
  );
}
