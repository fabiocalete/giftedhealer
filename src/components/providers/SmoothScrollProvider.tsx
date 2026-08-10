"use client";

import { type ReactNode } from "react";
import { ReactLenis } from "lenis/react";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <ReactLenis
      root
      options={{
        duration: prefersReduced ? 0 : 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: !prefersReduced,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}
