"use client";

import { useEffect } from "react";
import { gsap, prefersReducedMotion } from "@/utils/animations";

export function useScrollAnimations() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Small delay to let the page render first
    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Animate all elements with data-reveal attribute
        const revealElements = document.querySelectorAll("[data-reveal]");
        if (!revealElements.length) return;

        revealElements.forEach((el) => {
          // Set initial hidden state
          gsap.set(el, { opacity: 0, y: 40 });

          // Animate to visible when scrolled into view
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });

        // Hero parallax on scroll (fades out as you scroll down)
        gsap.to("#hero", {
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          opacity: 0.2,
        });
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);
}
