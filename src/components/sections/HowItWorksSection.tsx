import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/site.config";

export function HowItWorksSection() {
  const { howItWorks } = siteConfig;

  return (
    <Section id="how-it-works" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <hr className="editorial-hr mb-8" />

        <span className="section-label" data-reveal>
          {howItWorks.sectionLabel}
        </span>

        <h2
          className="font-headline text-forest mt-6 text-5xl font-medium tracking-[-0.03em] md:text-7xl"
          data-reveal
        >
          {howItWorks.headline}
        </h2>

        <p
          className="text-forest/70 mt-6 max-w-2xl font-serif text-xl"
          data-reveal
        >
          {howItWorks.subtitle}
        </p>

        <div
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
          data-reveal
        >
          {howItWorks.steps.map((step) => (
            <div key={step.title} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={step.src}
                  alt={step.alt}
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark scrim */}
                <div className="pointer-events-none absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/55" />
                {/* Inset border */}
                <div className="group-hover:border-orange-accent/60 pointer-events-none absolute inset-3 rounded-xl border border-white/30 transition-colors duration-500" />
                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <h3 className="font-headline group-hover:text-orange-accent text-xl font-medium text-white transition-colors duration-300 md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="group-hover:text-orange-accent/80 mt-2 text-base leading-relaxed text-white/80 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
