"use client";

import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function SmoothHash() {
  useEffect(() => {
    function onClick(event) {
      const a = event.target.closest("a[href^='#']");
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      event.preventDefault();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        el.scrollIntoView();
        return;
      }
      gsap.to(window, {
        duration: 0.85,
        ease: "power2.inOut",
        scrollTo: { y: el, offsetY: 12 },
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
