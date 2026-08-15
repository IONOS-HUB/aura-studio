"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import SealIntro from "./SealIntro";
import Nav from "./Nav";
import GoldButton from "./GoldButton";
import { SITE } from "@/lib/site";

const HEADLINE = SITE.slogan.split(" ");

export default function Hero() {
  const [markVisible, setMarkVisible] = useState(false);
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const alreadySeen =
      typeof window !== "undefined" && sessionStorage.getItem("aura-seal-seen");
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (alreadySeen || reduce) {
      setMarkVisible(true);
      return;
    }

    const els = heroRef.current?.querySelectorAll("[data-hero-reveal]");
    if (els?.length) gsap.set(els, { opacity: 0, y: 20 });
    if (lineRef.current) gsap.set(lineRef.current, { scaleX: 0 });
  }, []);

  function handleSealDone() {
    setMarkVisible(true);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = heroRef.current?.querySelectorAll("[data-hero-reveal]");

    if (reduce) return;

    if (els?.length) {
      gsap.fromTo(
        els,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "power3.out",
        }
      );
    }

    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          delay: 0.25,
          ease: "power2.out",
          transformOrigin: "left center",
        }
      );
    }

    gsap.fromTo(
      imgRef.current,
      { scale: 1.1, clipPath: "inset(12% 12% 12% 12%)" },
      {
        scale: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.35,
        ease: "power3.out",
      }
    );

    if (window.innerWidth >= 1024) {
      gsap.to(imgRef.current, {
        yPercent: 10,
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
          Belleza para ella · {SITE.city}
        </p>
        <h1
          data-hero-reveal
          className="max-w-xl font-display leading-[0.98] text-ink-900"
          style={{ fontSize: "var(--text-display-xl)" }}
        >
          {HEADLINE.map((word) => (
            <span key={word} className="mr-[0.22em] inline-block">
              {word}
            </span>
          ))}
          <span className="sr-only">
            {" "}
            — Realzamos la belleza de cada mujer en {SITE.city}
          </span>
        </h1>
        <span
          ref={lineRef}
          aria-hidden="true"
          className="block h-px w-24 origin-left bg-gold-700"
        />
        <p data-hero-reveal className="measure text-lg text-ink-600">
          Realzamos la belleza de cada mujer: uñas, pestañas, cejas y
          maquillaje con la precisión de una pieza de joyería. El detalle que
          te hace sentir tú.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <GoldButton href="#reserva">Quiero mi cita</GoldButton>
          <a
            data-hero-reveal
            href="#servicios"
            className="eyebrow-label border-b border-gold-700 pb-0.5 text-ink-900 transition-colors hover:text-gold-700"
          >
            Descubre los servicios
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
            alt={`${SITE.name} — realzamos la belleza de cada mujer`}
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
