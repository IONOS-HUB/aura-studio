"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import PlaceholderMedia from "./PlaceholderMedia";
import Seal from "./Seal";
import { gsap } from "@/lib/gsap";
import { GALLERY_ITEMS } from "@/lib/galeria-items";

const CATEGORIES = [
  "Todos",
  "Uñas",
  "Pestañas",
  "Cejas",
  "Maquillaje",
  "Depilación",
  "Masajes",
];

export default function Galeria() {
  const [filter, setFilter] = useState("Todos");
  const listRef = useRef(null);

  const visible = useMemo(
    () => GALLERY_ITEMS.filter((item) => filter === "Todos" || item.category === filter),
    [filter]
  );

  useEffect(() => {
    const items = listRef.current?.querySelectorAll("li");
    if (!items?.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      items,
      { clipPath: "inset(0 0 100% 0)" },
      {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.7,
        stagger: 0.04,
        ease: "power2.out",
      }
    );
  }, [visible]);

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
          El trabajo que realza tu belleza.
        </Reveal>
        <p className="mb-10 measure text-ink-600 lg:mb-14">
          Estamos preparando la galería de trabajos reales. Mientras tanto,
          el sello ocupa el lugar de cada foto.
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

        <ul ref={listRef} className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {visible.map((item) => (
            <li
              key={item.id}
              className={`overflow-hidden ${item.tall ? "row-span-2" : ""}`}
            >
              {item.placeholder ? (
                <PlaceholderMedia
                  label={item.category}
                  variant={item.variant}
                  className={`h-full w-full ${
                    item.tall ? "aspect-[3/5]" : "aspect-square"
                  }`}
                />
              ) : (
                <div
                  className={`relative h-full w-full overflow-hidden rounded-[var(--radius-aura)] ${
                    item.tall ? "aspect-[3/5]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
