"use client";

import Link from "next/link";
import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/site.config";

export function ServicesSection() {
  const { services } = siteConfig;
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = services.items.find((service) => service.id === selectedId);

  return (
    <Section
      id="services"
      className="bg-cream-dark/30 pt-24 pb-12 md:pt-32 md:pb-14"
    >
      <div className="container mx-auto px-6">
        {/* Editorial HR */}
        <hr className="editorial-hr mb-8" />

        {/* Section label */}
        <span className="section-label" data-reveal>
          {services.sectionLabel}
        </span>

        {/* Heading */}
        <h2
          className="font-headline text-forest mt-6 text-5xl font-medium tracking-[-0.03em] md:text-7xl"
          data-reveal
        >
          {services.headline}
        </h2>

        <p
          className="text-forest/70 mt-6 max-w-2xl font-serif text-xl"
          data-reveal
        >
          {services.subtitle}
        </p>

        {/* Selected service detail panel */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            selected ? "mt-10 max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {selected && (
            <div className="glass-panel mb-6 rounded-2xl p-8">
              <span className="section-label">{selected.title}</span>
              <h3 className="font-headline text-forest mt-3 text-3xl font-medium tracking-[-0.02em] md:text-4xl">
                {selected.title}
              </h3>
              {selected.subtitle && (
                <p className="text-forest/70 mt-2 font-serif text-lg">
                  {selected.subtitle}
                </p>
              )}
              {!!selected.children?.length && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {selected.children.map((child) => (
                    <Link
                      key={child.id}
                      href={`/services/${child.id}`}
                      className="border-forest/20 text-forest/70 hover:border-orange-accent hover:text-orange-accent rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
              <div className="mt-6">
                <Link
                  href={`/services/${selected.id}`}
                  className="btn-ortiz px-6 py-2.5 text-sm"
                >
                  <span>View Full Details →</span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Service grid */}
        <div
          className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
          data-reveal
        >
          {services.items.map((service) => {
            const childCount = service.children?.length ?? 0;
            const isSelected = selectedId === service.id;

            return (
              <button
                key={service.id}
                onClick={() =>
                  setSelectedId((prev) =>
                    prev === service.id ? null : service.id,
                  )
                }
                className={`group rounded-2xl p-5 text-left transition-all duration-200 ${
                  isSelected
                    ? "bg-forest text-cream shadow-lg"
                    : "glass-panel hover:scale-[1.02]"
                }`}
              >
                <h3
                  className={`font-headline text-lg leading-tight font-medium md:text-xl ${
                    isSelected
                      ? "text-cream"
                      : "text-forest group-hover:text-orange-accent transition-colors duration-200"
                  }`}
                >
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p
                    className={`mt-1.5 text-xs leading-relaxed ${
                      isSelected ? "text-cream/70" : "text-forest/50"
                    }`}
                  >
                    {service.subtitle}
                  </p>
                )}
                {childCount > 0 && (
                  <p
                    className={`mt-3 text-xs font-medium ${
                      isSelected ? "text-cream/60" : "text-orange-accent/70"
                    }`}
                  >
                    {childCount} services
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
