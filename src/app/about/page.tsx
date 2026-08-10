import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Header } from "@/components/navigation/Header";
import { GlassButton } from "@/components/ui/GlassButton";
import { ContactSection } from "@/components/sections/ContactSection";
import { LiquidDock } from "@/components/navigation/LiquidDock";
import { ScrollAnimations } from "@/components/providers/ScrollAnimations";
import { siteConfig, getWhatsAppLink } from "@/site.config";

const { aboutPage, practitioner, navigation } = siteConfig;

export default function AboutPage() {
  return (
    <>
      <Header />
      <ScrollAnimations />

      {/* ── Section 1: Page Hero ── */}
      <section className="bg-forest text-cream relative flex min-h-[60vh] items-end pt-[92px] pb-16">
        <div className="absolute inset-0">
          <Image
            src={aboutPage.hero.portrait}
            alt={practitioner.name}
            fill
            className="object-cover object-top"
            priority
          />
          <div className="bg-forest/70 absolute inset-0" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <span className="section-label text-cream/60 mb-4 block">
            {aboutPage.hero.sectionLabel}
          </span>
          <h1
            className="font-headline text-cream mb-4 text-5xl font-medium tracking-[-0.03em] md:text-7xl"
            data-reveal
          >
            {practitioner.name}
          </h1>
          <p
            className="text-cream/80 mb-8 font-serif text-xl md:text-2xl"
            data-reveal
          >
            {aboutPage.hero.tagline}
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

      {/* ── Section 2: Who Is Mama Aisha Najat ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-12 space-y-4">
            <hr className="editorial-hr" />
            <span className="section-label" data-reveal>
              {aboutPage.story.sectionLabel}
            </span>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div>
              <h2
                className="font-headline mb-8 text-4xl font-medium tracking-[-0.03em] md:text-5xl"
                data-reveal
              >
                {aboutPage.story.headline}
              </h2>
              <div className="space-y-6" data-reveal>
                {aboutPage.story.paragraphs.map((para, i) => (
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
                src={aboutPage.hero.portrait}
                alt={`${practitioner.name} portrait`}
                width={600}
                height={800}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Our Approach ── */}
      <section className="bg-forest text-cream py-24 md:py-32">
        <div className="container mx-auto px-6">
          <span className="section-label text-cream/60 mb-6 block" data-reveal>
            {aboutPage.approach.sectionLabel}
          </span>
          <h2
            className="font-headline text-cream mb-8 text-4xl font-medium tracking-[-0.03em] md:text-6xl"
            data-reveal
          >
            {aboutPage.approach.headline}
          </h2>
          <p
            className="text-cream/70 mb-12 max-w-2xl font-serif text-xl"
            data-reveal
          >
            {aboutPage.approach.description}
          </p>

          <ul className="mb-12 max-w-xl space-y-5" data-reveal>
            {aboutPage.approach.principles.map((item) => (
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
            {aboutPage.approach.disclaimer}
          </p>
        </div>
      </section>

      {/* ── Section 4: Spiritual Services ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-12 space-y-4">
            <hr className="editorial-hr" />
            <span className="section-label" data-reveal>
              {aboutPage.services.sectionLabel}
            </span>
          </div>

          <h2
            className="font-headline mb-12 text-4xl font-medium tracking-[-0.03em] md:text-5xl"
            data-reveal
          >
            {aboutPage.services.headline}
          </h2>

          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <ul className="space-y-5" data-reveal>
              {aboutPage.services.items.map((service) => (
                <li key={service.name} className="flex items-start gap-3">
                  <CheckCircleIcon className="text-orange-accent mt-0.5 h-6 w-6 flex-shrink-0" />
                  <span className="text-forest/80 font-serif text-xl">
                    <strong className="text-forest font-medium">
                      {service.name}
                    </strong>{" "}
                    — {service.desc}
                  </span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 gap-4" data-reveal>
              {aboutPage.gallery.map((img) => (
                <div
                  key={img.src}
                  className="aspect-video overflow-hidden rounded-xl"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Contact ── */}
      <ContactSection />

      <LiquidDock />
    </>
  );
}
