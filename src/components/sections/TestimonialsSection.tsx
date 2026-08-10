"use client";

import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/site.config";
import { StarIcon } from "@heroicons/react/24/solid";

export function TestimonialsSection() {
  const { sectionLabel, items } = siteConfig.testimonials;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <Section id="testimonials" className="bg-forest text-cream py-24 md:py-32">
      <div className="container mx-auto space-y-16 px-6">
        {/* Section label */}
        <span className="section-label" data-reveal>
          {sectionLabel}
        </span>

        {/* Featured testimonial */}
        {featured && (
          <div className="space-y-6" data-reveal>
            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: featured.rating }, (_, i) => (
                <StarIcon key={i} className="text-orange-accent h-5 w-5" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-headline text-3xl leading-snug font-medium italic md:text-5xl">
              &ldquo;{featured.content}&rdquo;
            </blockquote>

            {/* Attribution */}
            <p className="text-cream/60 text-sm">
              <span className="text-orange-accent font-medium">
                {featured.author}
              </span>{" "}
              &bull; {featured.role}
            </p>
          </div>
        )}

        {/* Remaining testimonials — simple grid */}
        <div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          data-reveal
        >
          {rest.map((t) => (
            <div key={t.id} className="border-cream/10 space-y-4 border-t pt-6">
              <blockquote className="text-cream/80 font-serif text-lg leading-relaxed italic">
                &ldquo;{t.content}&rdquo;
              </blockquote>
              <div>
                <p className="text-orange-accent text-sm font-medium">
                  {t.author}
                </p>
                <p className="text-cream/50 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
