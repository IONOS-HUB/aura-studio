"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import SealIntro from "./SealIntro";
import Nav from "./Nav";
import { SITE } from "@/lib/site";

export default function Hero() {
  const [markVisible, setMarkVisible] = useState(false);
  const heroRef = useRef(null);
  const imgRef = useRef(null);

  // Text must stay visible if JS fails, so it ships visible by default.
  // This layout effect hides it imperatively, synchronously before paint,
  // and only when the seal intro is actually about to play.
  useLayoutEffect(() => {
    const alreadySeen =
      typeof window !== "undefined" && sessionStorage.getItem("aura-seal-seen");
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (alreadySeen || reduce) return;

    const els = heroRef.current?.querySelectorAll("[data-hero-reveal]");
    if (els?.length) gsap.set(els, { opacity: 0, y: 20 });
  }, []);

  function handleSealDone() {
    setMarkVisible(true);
    const els = heroRef.current?.querySelectorAll("[data-hero-reveal]");
    if (!els?.length) return;
    gsap.fromTo(
      els,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power2.out" }
    );

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 1.4, ease: "power2.out" }
      );

      if (window.innerWidth >= 1024) {
        gsap.to(imgRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }
  }

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative grid min-h-screen grid-rows-[auto_1fr] overflow-hidden bg-nude-000 lg:grid-cols-2 lg:grid-rows-1"
    >
      <SealIntro onDone={handleSealDone} />
      <Nav markVisible={markVisible} />

      <div className="relative z-10 order-2 flex flex-col justify-center gap-8 px-6 pb-14 pt-8 lg:order-1 lg:px-16 lg:pb-16 lg:pt-32">
        <p data-hero-reveal className="eyebrow-label text-gold-700">
          {SITE.descriptor}
        </p>
        <h1
          data-hero-reveal
          className="max-w-xl font-display leading-[0.98] text-ink-900"
          style={{ fontSize: "var(--text-display-xl)" }}
        >
          {SITE.slogan}
          <span className="sr-only">
            {" "}
            — Uñas, pestañas y maquillaje en {SITE.city}
          </span>
        </h1>
        <p data-hero-reveal className="measure text-lg text-ink-600">
          Uñas, pestañas, cejas, maquillaje, depilación y masajes en{" "}
          {SITE.city} — reserva tu cita en línea, a cualquier hora, sin
          esperar respuesta por WhatsApp.
        </p>
        <div data-hero-reveal className="flex flex-wrap items-center gap-5">
          <a
            href="#reserva"
            className="eyebrow-label rounded-[var(--radius-aura)] bg-ink-900 px-7 py-4 text-nude-000 transition-colors hover:bg-ink-600"
          >
            Reservar cita
          </a>
          <a
            href="#servicios"
            className="eyebrow-label border-b border-gold-700 pb-0.5 text-ink-900 transition-colors hover:text-gold-700"
          >
            Ver servicios
          </a>
        </div>
        <p data-hero-reveal className="eyebrow-label text-ink-600/70">
          {SITE.hoursWeek} · {SITE.hoursSunday} · {SITE.city}
        </p>
      </div>

      <div className="relative order-1 h-[46vh] overflow-hidden bg-black lg:order-2 lg:h-full">
        <div ref={imgRef} className="absolute inset-0">
          <Image
            src="/imgs/icon.PNG"
            alt={`${SITE.name}, ${SITE.descriptor}`}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain p-[10%] lg:p-[14%]"
          />
        </div>
      </div>
    </section>
  );
}
