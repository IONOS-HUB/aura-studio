"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";

const SLIDES = [
  {
    src: "/imgs/conoce/conoce.JPEG",
    alt: "Maquilladora de Aura Beauty Studio aplicando rubor a una clienta, ambas de blanco",
  },
  {
    src: "/imgs/conoce/1.JPEG",
    alt: "Especialista de Aura Beauty Studio con uniforme negro y brochas, frente al sello dorado del estudio",
  },
  {
    src: "/imgs/conoce/2.JPEG",
    alt: "Fundadora de Aura Beauty Studio sentada con un cepillo, frente al logo dorado del estudio",
  },
  {
    src: "/imgs/conoce/3.JPEG",
    alt: "Especialista de Aura Beauty Studio con pinza de pestañas, frente al sello dorado del estudio",
  },
  {
    src: "/imgs/conoce/4.JPEG",
    alt: "El equipo de Aura Beauty Studio con uniformes negros y brochas, frente al logo del estudio",
  },
];

const INTERVAL_MS = 5000;

export default function ConoceCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const labelId = useId();

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  function goTo(next) {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }

  return (
    <div
      className="relative aspect-[4/5] h-full w-full overflow-hidden lg:aspect-auto"
      role="region"
      aria-roledescription="carrusel"
      aria-labelledby={labelId}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <p id={labelId} className="sr-only">
        Fotos del equipo de Aura Beauty Studio
      </p>
      <div aria-live="polite" className="sr-only">
        Foto {index + 1} de {SLIDES.length}
      </div>

      {SLIDES.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={i === index ? slide.alt : ""}
          fill
          priority={i === 0}
          sizes="(min-width: 1024px) 42vw, 100vw"
          className={`object-cover object-[center_18%] transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-3 bg-gradient-to-t from-ink-900/55 to-transparent px-4 pb-4 pt-16">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Foto anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-nude-000/40 bg-ink-900/40 text-nude-000 backdrop-blur-sm transition-colors hover:bg-ink-900/70"
        >
          <Chevron dir="prev" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Elegir foto">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Foto ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-gold-500"
                  : "w-2 bg-nude-000/55 hover:bg-nude-000"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Foto siguiente"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-nude-000/40 bg-ink-900/40 text-nude-000 backdrop-blur-sm transition-colors hover:bg-ink-900/70"
        >
          <Chevron dir="next" />
        </button>
      </div>
    </div>
  );
}

function Chevron({ dir }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === "prev" ? (
        <path d="M14.5 6 8.5 12l6 6" />
      ) : (
        <path d="M9.5 6 15.5 12l-6 6" />
      )}
    </svg>
  );
}
