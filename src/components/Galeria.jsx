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

const PAGE_SIZE = 8;

export default function Galeria() {
  const [filter, setFilter] = useState("Todos");
  const [shown, setShown] = useState(PAGE_SIZE);
  const listRef = useRef(null);
  const revealedCount = useRef(0);

  const filtered = useMemo(
    () => GALLERY_ITEMS.filter((item) => filter === "Todos" || item.category === filter),
    [filter]
  );
  const visible = filtered.slice(0, shown);
  const hasMore = shown < filtered.length;

  function selectFilter(cat) {
    revealedCount.current = 0;
    setShown(PAGE_SIZE);
    setFilter(cat);
  }

  useEffect(() => {
    const items = [...(listRef.current?.querySelectorAll("li") ?? [])];
    if (!items.length) return;
    const fresh = items.slice(revealedCount.current);
    revealedCount.current = items.length;
    if (!fresh.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      fresh,
      { clipPath: "inset(0 0 100% 0)" },
      {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.7,
        stagger: 0.04,
        ease: "power2.out",
      }
    );
  }, [filter, shown]);

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
          Trabajos reales del estudio en Ibarra. Pestañas, depilación y masajes
          se irán sumando a medida que lleguen las fotos.
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
              onClick={() => selectFilter(cat)}
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
                  {item.type === "video" ? (
                    <GalleryVideo src={item.src} ariaLabel={item.ariaLabel} />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        {hasMore ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShown((n) => n + PAGE_SIZE)}
              className="eyebrow-label rounded-[var(--radius-aura)] border border-nude-200 bg-nude-000 px-7 py-4 text-ink-900 transition-colors hover:border-gold-700 hover:text-gold-700"
            >
              Ver más
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function GalleryVideo({ src, ariaLabel }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      aria-label={ariaLabel}
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
