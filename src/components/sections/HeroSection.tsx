"use client";

import { Fragment } from "react";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { GlassButton } from "@/components/ui/GlassButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig, getWhatsAppLink } from "@/site.config";

export function HeroSection() {
  const { hero, whatsapp } = siteConfig;

  return (
    <Section
      id="hero"
      fullHeight
      className="flex items-center justify-center overflow-hidden pt-[92px]"
    >
      {/* Background image */}
      <Image
        src={hero.imageUrl}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center gap-10 px-6 text-center md:gap-14">
        {/* Heading */}
        <h1
          className="font-headline text-6xl font-medium tracking-[-0.03em] text-white md:text-8xl lg:text-[145px] lg:leading-[0.9]"
          data-reveal
        >
          {hero.headline.map((line, i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto max-w-2xl font-serif text-xl text-white/70 md:text-2xl"
          data-reveal
        >
          {hero.subtitle}
        </p>

        {/* CTA */}
        <GlassButton
          href={getWhatsAppLink()}
          size="lg"
          className="btn-ortiz-light"
        >
          <span className="flex items-center gap-2.5">
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            <span>{whatsapp.displayPhone}</span>
          </span>
        </GlassButton>
      </div>
    </Section>
  );
}
