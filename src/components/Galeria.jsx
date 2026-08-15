"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import PlaceholderMedia from "./PlaceholderMedia";
import Seal from "./Seal";

const CATEGORIES = [
  "Todos",
  "Uñas",
  "Pestañas",
  "Cejas",
  "Maquillaje",
  "Depilación",
  "Masajes",
];

const TALL = new Set([1, 4, 7, 10]);

const ITEMS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  category: CATEGORIES[(i % 6) + 1],
  variant: i % 3 === 0 ? "work" : i % 3 === 1 ? "portrait" : "studio",
}));

export default function Galeria() {
  const [filter, setFilter] = useState("Todos");

  const visible = useMemo(
    () => ITEMS.filter((item) => filter === "Todos" || item.category === filter),
    [filter]
  );

  return (
    <section id="galeria" className="border-t border-nude-200">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-24 lg:px-16 lg:py-40">
        <div className="mb-10 flex items-center gap-4">
          <Seal size={44}>
            <span className="font-tabular text-xs text-gold-700">03</span>
          </Seal>
          <span className="eyebrow-label text-ink-600">Galería</span>
        </div>

        <Reveal
          as="h2"
          mask
          className="mb-4 max-w-2xl font-display text-h2 text-ink-900"
        >
          El trabajo habla antes que nosotros.
        </Reveal>
        <p className="mb-10 measure text-sm text-gold-700 lg:mb-14">
          [Galería de muestra — reemplazar cada imagen con fotografía real del
          estudio, PRD §13.2: mínimo 12–18 trabajos, 2 por servicio, luz
          natural, sin comprimir por WhatsApp.]
        </p>

        <Reveal
          as="div"
          stagger={0.05}
          role="group"
          aria-label="Filtrar galería por servicio"
          className="glass-pill mb-10 flex flex-wrap gap-x-2 gap-y-2 rounded-[var(--radius-aura)] px-4 py-3"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`eyebrow-label rounded-full px-3.5 py-1.5 transition-colors ${
                filter === cat
                  ? "bg-ink-900 text-nude-000"
                  : "text-ink-600 hover:text-gold-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {visible.map((item) => (
            <li
              key={item.id}
              className={TALL.has(item.id % 12) ? "row-span-2" : ""}
            >
              <PlaceholderMedia
                label={`${item.category} #${item.id + 1}`}
                variant={item.variant}
                className={`h-full w-full ${
                  TALL.has(item.id % 12) ? "aspect-[3/5]" : "aspect-square"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
