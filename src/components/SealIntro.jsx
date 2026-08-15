"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const SESSION_KEY = "aura-seal-seen";

/**
 * The signature moment (PRD §9.2), raised with a Miura-fold-derived structural
 * device: the mark doesn't just draw a ring, it unfolds along four creases like
 * a pressed gold packet, then contracts into the fixed nav mark. ≤1.4s, once per
 * session, transform/opacity + stroke-dashoffset only, and a straight cut to the
 * final state under prefers-reduced-motion.
 *
 * DrawSVG is a GSAP club-plugin not published on the public npm registry; the
 * crease strokes below are driven by hand with strokeDashoffset tweens on core
 * GSAP instead, which reaches the same reveal without the paid dependency.
 */
export default function SealIntro({ onDone }) {
  const rootRef = useRef(null);
  const packetRef = useRef(null);
  const ringRef = useRef(null);
  const creaseRefs = useRef([]);
  const glyphMaskRef = useRef(null);
  const [active, setActive] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    // Guards against React 18 Strict Mode's dev-only double effect invocation
    // (mount → cleanup → mount again on the same instance).
    if (startedRef.current) return;

    const alreadySeen =
      typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY);
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (alreadySeen || reduce) {
      onDone?.();
      return;
    }

    startedRef.current = true;
    sessionStorage.setItem(SESSION_KEY, "1");
    // Only flip the state here; the overlay's refs don't exist in the DOM
    // until the render this triggers has committed, so the timeline itself
    // is built in a second effect keyed on `active` below.
    setActive(true);
  }, []);

  useEffect(() => {
    if (!active) return;

    const creases = creaseRefs.current.filter(Boolean);
    creases.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    });

    const target = document.querySelector("[data-seal-target]");
    const packetRect = packetRef.current.getBoundingClientRect();
    const packetCenterX = packetRect.left + packetRect.width / 2;
    const packetCenterY = packetRect.top + packetRect.height / 2;
    let landing = { x: 0, y: 0, scale: 0.18, opacity: 1 };
    if (target) {
      const targetRect = target.getBoundingClientRect();
      landing = {
        x: targetRect.left + targetRect.width / 2 - packetCenterX,
        y: targetRect.top + targetRect.height / 2 - packetCenterY,
        scale: targetRect.width / packetRect.width,
        opacity: 1,
      };
    } else {
      landing.opacity = 0;
    }

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        onDone?.();
        gsap.delayedCall(0.3, () => setActive(false));
      },
    });

    tl.set(packetRef.current, { transformOrigin: "50% 50%" })
      .fromTo(
        packetRef.current,
        { scale: 0.55, rotate: 45, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      )
      .to(
        creases,
        { strokeDashoffset: 0, duration: 0.4, stagger: 0.06, ease: "power1.inOut" },
        "-=0.3"
      )
      .fromTo(
        ringRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" },
        "-=0.15"
      )
      .fromTo(
        glyphMaskRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 0.35, ease: "power2.inOut" },
        "-=0.1"
      )
      .to(
        creases,
        { opacity: 0, duration: 0.2, ease: "power1.out" },
        "<"
      )
      .to(
        rootRef.current,
        {
          x: landing.x,
          y: landing.y,
          scale: landing.scale,
          opacity: landing.opacity,
          duration: 0.45,
          ease: "power2.inOut",
        },
        "<"
      );

    // No cleanup kill: this effect only ever runs once, the moment `active`
    // flips true (guarded upstream by startedRef), and by then this is a
    // genuine update — not React 18 Strict Mode's mount-time double-invoke —
    // so there is no synthetic second run to guard against here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  if (!active) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-nude-000"
      style={{ transformOrigin: "50% 50%" }}
    >
      <div ref={packetRef} className="relative h-40 w-40">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          {[
            "M50 6 L50 94",
            "M6 50 L94 50",
            "M17 17 L83 83",
            "M83 17 L17 83",
          ].map((d, i) => (
            <path
              key={d}
              ref={(el) => (creaseRefs.current[i] = el)}
              d={d}
              stroke="var(--color-gold-500)"
              strokeWidth="0.6"
              fill="none"
            />
          ))}
        </svg>
        <svg
          ref={ringRef}
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full opacity-0"
        >
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke="var(--color-gold-700)"
            strokeWidth="1.4"
          />
        </svg>
        <div
          ref={glyphMaskRef}
          className="absolute inset-0 flex items-center justify-center font-display text-4xl text-ink-900"
          style={{ clipPath: "inset(0 100% 0 0)" }}
        >
          A
        </div>
      </div>
    </div>
  );
}
