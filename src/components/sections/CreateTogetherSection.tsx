"use client";

import { siteConfig, getWhatsAppLink } from "@/site.config";

export function CreateTogetherSection() {
  const { marqueeText, repeatCount, ctaText, backgroundColor, textColor } =
    siteConfig.createTogether;

  return (
    <section
      id="create-together"
      className="flex flex-col items-center justify-center overflow-hidden py-24"
      style={{ backgroundColor }}
    >
      {/* Accessible heading (visually hidden) */}
      <span className="sr-only">{marqueeText}</span>

      {/* Marquee — large watermark text scrolling horizontally */}
      <div
        className="pointer-events-none w-full select-none"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        <div className="marquee-track flex whitespace-nowrap">
          {Array.from({ length: repeatCount }, (_, i) => (
            <span
              key={i}
              className="font-headline text-[clamp(6rem,13vw,9.8rem)] font-bold italic"
              style={{
                color: textColor,
                marginRight: "0.4em",
              }}
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ortiz z-10 mt-12 px-10 py-3 text-sm tracking-widest"
      >
        <span>{ctaText}</span>
      </a>
    </section>
  );
}
