"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

/**
 * Primary conversion control. Gold hairline sweep on hover (transform only).
 * The CTA stays visible even if other motion is reduced.
 */
export default function GoldButton({
  href,
  children,
  className = "",
  onClick,
}) {
  const sweepRef = useRef(null);
  const internal = href.startsWith("/") && !href.startsWith("//");

  function enter() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      sweepRef.current,
      { xPercent: -100 },
      { xPercent: 100, duration: 0.55, ease: "power2.out" }
    );
  }

  const classes = `relative inline-flex overflow-hidden rounded-[var(--radius-aura)] bg-ink-900 px-7 py-4 text-nude-000 ${className}`;

  const inner = (
    <>
      <span
        ref={sweepRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold-300/25 to-transparent"
      />
      <span className="eyebrow-label relative z-10">{children}</span>
    </>
  );

  if (internal) {
    return (
      <Link href={href} className={classes} onMouseEnter={enter} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} onMouseEnter={enter} onClick={onClick}>
      {inner}
    </a>
  );
}
