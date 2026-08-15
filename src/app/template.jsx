"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Template({ children }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.fromTo(
      el,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out", clearProps: "transform" }
    );
  }, []);

  return <div ref={ref}>{children}</div>;
}
