"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Line-masked reveal for section titles and staggered fade for groups
 * (PRD §9.3). transform + opacity only; a straight cut to the visible state
 * under prefers-reduced-motion, per §9.4.
 */
export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  y = 24,
  stagger = 0,
  mask = false,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = stagger ? Array.from(el.children) : el;

    if (reduce) {
      gsap.set(targets, { opacity: 1, y: 0, clearProps: "clipPath" });
      return;
    }

    if (mask) gsap.set(el, { clipPath: "inset(0 0 100% 0)" });
    else gsap.set(targets, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (mask) {
          gsap.to(el, {
            clipPath: "inset(0 0 0% 0)",
            duration: 0.8,
            ease: "power3.out",
          });
        } else {
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: stagger || 0,
            ease: "power2.out",
          });
        }
      },
    });

    return () => trigger.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
