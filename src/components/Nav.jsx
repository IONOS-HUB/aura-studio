"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import BrandMark from "./BrandMark";
import GoldButton from "./GoldButton";

const LINKS = [
  { href: "#conoce-aura", label: "Conoce Aura" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#por-que-aura", label: "Por qué Aura" },
  { href: "#horario-ubicacion", label: "Horario" },
];

export default function Nav({ markVisible }) {
  const navRef = useRef(null);
  const menuListRef = useRef(null);
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: 96,
      onUpdate: (self) => setCompact(self.scroll() > 8),
    });
    return () => trigger.kill();
  }, []);

  useEffect(() => {
    const items = menuListRef.current?.querySelectorAll("li");
    if (!open || !items?.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      items,
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
    );
  }, [open]);

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-[padding,background-color,border-color] duration-[400ms] ease-out ${
        compact
          ? "glass-nav border-b border-nude-200 py-3"
          : "border-b border-transparent bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <a
          href="#inicio"
          className={`flex items-center transition-opacity duration-300 ${
            markVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <BrandMark
            size={compact ? 40 : 48}
            priority
            data-seal-target
          />
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="eyebrow-label text-ink-600 transition-colors hover:text-gold-700"
            >
              {link.label}
            </a>
          ))}
          <GoldButton href="#reserva" className="!px-5 !py-2.5">
            Quiero mi cita
          </GoldButton>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-ink-900 transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink-900 transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Navegación móvil"
        className={`overflow-hidden bg-nude-000 lg:hidden ${
          open ? "max-h-[500px] border-b border-nude-200" : "max-h-0"
        }`}
      >
        <ul ref={menuListRef} className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-xl text-ink-900"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <GoldButton
              href="#reserva"
              className="mt-2 w-full justify-center !px-5 !py-3"
              onClick={() => setOpen(false)}
            >
              Quiero mi cita
            </GoldButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}
