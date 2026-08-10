"use client";

import { useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { siteConfig } from "@/site.config";
import {
  HomeIcon,
  UserIcon,
  SparklesIcon,
  BookOpenIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  HomeIcon,
  UserIcon,
  SparklesIcon,
  BookOpenIcon,
  PhoneIcon,
};

export function LiquidDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();

  const handleNavClick = useCallback(
    (item: (typeof siteConfig.navigation.items)[number]) => {
      if (item.href) {
        router.push(item.href);
      } else if (pathname === "/") {
        const element = document.getElementById(item.targetSection);
        if (element) lenis?.scrollTo(element, { offset: -92 });
      } else {
        router.push(`/#${item.targetSection}`);
      }
    },
    [router, pathname, lenis],
  );

  return (
    <nav
      className="fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2"
      aria-label="Main navigation"
    >
      <div className="glass-panel rounded-full px-3 py-2.5 md:px-4 md:py-3">
        <ul className="flex items-end gap-1 md:gap-1.5">
          {siteConfig.navigation.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            const isHovered = hoveredIndex === index;
            const isAdjacent =
              hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1;

            const scale = isHovered ? 1.4 : isAdjacent ? 1.15 : 1;
            const translateY = isHovered ? -8 : isAdjacent ? -4 : 0;

            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative flex h-10 w-10 items-center justify-center transition-all duration-200 ease-out md:h-12 md:w-12"
                  style={{
                    transform: `scale(${scale}) translateY(${translateY}px)`,
                  }}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {/* Glass circle */}
                  <div className="border-glass-border bg-glass-white group-hover:border-glass-border-hover group-hover:bg-glass-white-strong absolute inset-0 rounded-full border transition-colors duration-200" />

                  {/* Icon */}
                  {Icon && (
                    <Icon className="text-forest group-hover:text-orange-accent relative z-10 h-5 w-5 transition-colors duration-200 md:h-6 md:w-6" />
                  )}

                  {/* Tooltip */}
                  {isHovered && (
                    <span className="border-glass-border bg-forest/90 text-cream absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg border px-3 py-1 text-xs font-medium whitespace-nowrap backdrop-blur-md">
                      {item.label}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
