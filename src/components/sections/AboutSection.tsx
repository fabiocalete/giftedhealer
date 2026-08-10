"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { GlassButton } from "@/components/ui/GlassButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig, getWhatsAppLink } from "@/site.config";

export function AboutSection() {
  const { about, whatsapp } = siteConfig;

  return (
    <Section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Editorial HR */}
        <hr className="editorial-hr mb-8" />

        {/* Section label */}
        <span className="section-label" data-reveal>
          {about.sectionLabel}
        </span>

        {/* Heading */}
        <h2
          className="font-headline text-forest mt-6 text-5xl font-medium tracking-[-0.03em] md:text-7xl"
          data-reveal
        >
          {about.headline}
        </h2>

        {/* Two-column layout */}
        <div className="mt-12 grid items-start gap-12 md:grid-cols-2 md:gap-16">
          {/* Portrait */}
          <div className="relative overflow-hidden rounded-2xl" data-reveal>
            <Image
              src={about.portrait.src}
              alt={about.portrait.alt}
              width={800}
              height={1000}
              className="h-[480px] w-full object-cover"
            />
          </div>

          {/* Bio text */}
          <div className="space-y-6" data-reveal>
            <p className="text-forest/80 font-serif text-xl leading-relaxed md:text-2xl">
              {about.bio}
            </p>

            <hr className="editorial-hr" />

            <div className="flex flex-wrap gap-2">
              {about.tags.map((tag) => (
                <span
                  key={tag}
                  className="border-forest/20 text-forest/70 rounded-full border px-3 py-1 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <GlassButton href={getWhatsAppLink()} size="md">
              <span className="flex items-center gap-2.5">
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>{whatsapp.displayPhone}</span>
              </span>
            </GlassButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
