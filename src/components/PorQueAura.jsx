import Reveal from "./Reveal";
import Seal from "./Seal";

const REASONS = [
  {
    n: "01",
    title: "Belleza, a tu hora",
    body: "Confirmas tu momento al instante y sales más tú — sin esperar una respuesta a medianoche.",
  },
  {
    n: "02",
    title: "Un solo par de manos por cita",
    body: "Cada servicio recibe el tiempo que necesita; no se agenda una cita encima de otra.",
  },
  {
    n: "03",
    title: "Cuidado, sin atajos",
    body: "El tiempo y los materiales que pide el resultado — nada se apura para encajar una cita más.",
  },
  {
    n: "04",
    title: "Un espacio pensado al detalle",
    body: "Desde el sello hasta la silla donde te sientas — nada en Aura se dejó al azar.",
  },
];

export default function PorQueAura() {
  return (
    <section
      id="por-que-aura"
      className="border-t border-nude-200 bg-ink-900 text-nude-000"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-24 lg:grid lg:grid-cols-12 lg:gap-12 lg:px-16 lg:py-40">
        <div className="mb-14 flex flex-col gap-6 lg:col-span-4 lg:mb-0">
          <div className="flex items-center gap-4">
            <Seal size={44} tone="gold-light">
              <span className="font-tabular text-xs text-gold-300">04</span>
            </Seal>
            <span className="eyebrow-label text-nude-200">Por qué Aura</span>
          </div>
          <Reveal
            as="h2"
            mask
            className="font-display text-h2 text-nude-000"
          >
            Lo que nos distingue es cómo realzamos tu belleza.
          </Reveal>
          <p className="measure text-sm text-[#C9BDB4]">
            Las reseñas de clientas aparecerán aquí cuando existan. No
            publicamos testimonios que no sean reales.
          </p>
        </div>

        <Reveal
          as="ul"
          stagger={0.08}
          className="grid gap-x-8 gap-y-12 border-t border-nude-200/20 pt-12 sm:grid-cols-2 lg:col-span-7 lg:col-start-6 lg:border-t-0 lg:pt-0"
        >
          {REASONS.map((r) => (
            <li key={r.n} className="opacity-0">
              <p className="font-tabular mb-4 text-sm text-gold-500">{r.n}</p>
              <h3 className="mb-3 font-display text-xl text-nude-000">
                {r.title}
              </h3>
              <p className="measure text-[#C9BDB4]">{r.body}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
