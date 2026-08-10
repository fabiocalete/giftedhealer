import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/navigation/Header";
import { GlassButton } from "@/components/ui/GlassButton";
import { ContactSection } from "@/components/sections/ContactSection";
import { LiquidDock } from "@/components/navigation/LiquidDock";
import { ScrollAnimations } from "@/components/providers/ScrollAnimations";
import { siteConfig, getWhatsAppLink, getServicePageData } from "@/site.config";

const { servicePages, navigation, howItWorks } = siteConfig;

export function generateStaticParams() {
  return servicePages.pages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePageData(slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${siteConfig.practitioner.name}`,
    description: service.tagline,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServicePageData(slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <ScrollAnimations />

      {/* ── Section 1: Hero ── */}
      <section className="bg-forest text-cream relative flex min-h-[60vh] items-end pt-[92px] pb-16">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="bg-forest/70 absolute inset-0" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <span className="section-label text-cream/60 mb-4 block">
            {service.category}
          </span>
          <h1
            className="font-headline text-cream mb-4 text-5xl font-medium tracking-[-0.03em] md:text-7xl"
            data-reveal
          >
            {service.title}
          </h1>
          <p
            className="text-cream/80 mb-8 font-serif text-xl md:text-2xl"
            data-reveal
          >
            {service.tagline}
          </p>
          <div className="flex flex-wrap gap-4" data-reveal>
            <GlassButton href="/#contact" size="md" className="btn-ortiz-light">
              {navigation.headerCta.text}
            </GlassButton>
            <GlassButton
              href={getWhatsAppLink()}
              size="md"
              className="btn-ortiz-light"
            >
              WhatsApp
            </GlassButton>
          </div>
        </div>
      </section>

      {/* ── Section 2: What Is This Service — cream bg ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-12 space-y-4">
            <hr className="editorial-hr" />
            <span className="section-label" data-reveal>
              {service.category}
            </span>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div>
              <h2
                className="font-headline mb-8 text-4xl font-medium tracking-[-0.03em] md:text-5xl"
                data-reveal
              >
                What Are {service.title}?
              </h2>
              <div className="space-y-6" data-reveal>
                {service.intro.map((para, i) => (
                  <p
                    key={i}
                    className="text-forest/80 font-serif text-xl leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div
              className="aspect-[3/4] overflow-hidden rounded-2xl"
              data-reveal
            >
              <Image
                src={service.contentImage}
                alt={service.title}
                width={600}
                height={800}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Who Benefits — forest bg ── */}
      <section className="bg-forest text-cream py-24 md:py-32">
        <div className="container mx-auto px-6">
          <span className="section-label text-cream/60 mb-6 block" data-reveal>
            {service.category}
          </span>
          <h2
            className="font-headline text-cream mb-8 text-4xl font-medium tracking-[-0.03em] md:text-6xl"
            data-reveal
          >
            {service.benefitTitle}
          </h2>

          <ul className="mb-12 max-w-xl space-y-5" data-reveal>
            {service.benefits.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-orange-accent mt-0.5 text-xl font-bold">
                  ✓
                </span>
                <span className="text-cream/80 font-serif text-xl">{item}</span>
              </li>
            ))}
          </ul>

          <p
            className="text-cream/60 max-w-2xl font-serif text-lg italic"
            data-reveal
          >
            {service.benefitNote}
          </p>
        </div>
      </section>

      {/* ── Section 4: The Spiritual Truth — cream bg ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-12 space-y-4">
            <hr className="editorial-hr" />
            <span className="section-label" data-reveal>
              {service.category}
            </span>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            {/* Left: image (alternates with Section 2 where text is left) */}
            <div
              className="aspect-[4/3] overflow-hidden rounded-2xl"
              data-reveal
            >
              <Image
                src={service.contentImage}
                alt={service.deepDiveHeading}
                width={900}
                height={675}
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Right: heading + paragraphs */}
            <div>
              <h2
                className="font-headline mb-8 text-4xl font-medium tracking-[-0.03em] md:text-5xl"
                data-reveal
              >
                {service.deepDiveHeading}
              </h2>
              <div className="space-y-6" data-reveal>
                {service.deepDive.map((para, i) => (
                  <p
                    key={i}
                    className="text-forest/80 font-serif text-xl leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
              <div className="mt-10" data-reveal>
                <GlassButton
                  href="/#contact"
                  size="md"
                  className="btn-ortiz-dark"
                >
                  {navigation.headerCta.text}
                </GlassButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: How It Works — forest bg ── */}
      <section className="bg-forest text-cream py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-12 space-y-4">
            <hr className="border-cream/20" />
            <span className="section-label text-cream/60" data-reveal>
              {howItWorks.sectionLabel}
            </span>
          </div>

          <h2
            className="font-headline text-cream mb-12 text-4xl font-medium tracking-[-0.03em] md:text-5xl"
            data-reveal
          >
            {servicePages.howItWorksHeadline}
          </h2>

          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            data-reveal
          >
            {service.processSteps.map((step, index) => (
              <div
                key={step.title}
                className="bg-cream overflow-hidden rounded-2xl shadow-md"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="space-y-2 p-6">
                  <span className="font-headline text-orange-accent block text-4xl leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-headline text-forest text-xl font-medium tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="text-forest/70 font-serif text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <LiquidDock />
    </>
  );
}
