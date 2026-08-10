import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/navigation/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { LiquidDock } from "@/components/navigation/LiquidDock";
import { ScrollAnimations } from "@/components/providers/ScrollAnimations";
import { siteConfig } from "@/site.config";

const { articles, practitioner } = siteConfig;

export const metadata: Metadata = {
  title: `${articles.pageTitle} | ${practitioner.name}`,
  description: `Insights and guidance from ${practitioner.name}, ${practitioner.brandName}.`,
};

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <ScrollAnimations />

      {/* ── Hero ── */}
      <section className="bg-forest text-cream flex min-h-[40vh] items-end pt-[92px] pb-16">
        <div className="container mx-auto px-6">
          <span className="section-label text-cream/60 mb-4 block" data-reveal>
            {articles.sectionLabel}
          </span>
          <h1
            className="font-headline text-cream text-5xl font-medium tracking-[-0.03em] md:text-7xl"
            data-reveal
          >
            {articles.pageTitle}
          </h1>
        </div>
      </section>

      {/* ── Articles grid ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-12 space-y-4">
            <hr className="editorial-hr" />
            <span className="section-label" data-reveal>
              {articles.gridLabel}
            </span>
          </div>

          {articles.items.length === 0 ? (
            <p
              className="text-forest/60 font-serif text-xl leading-relaxed"
              data-reveal
            >
              New articles are on the way — check back soon.
            </p>
          ) : (
            <div
              className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
              data-reveal
            >
              {articles.items.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-black/5 shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  {/* Card image */}
                  <div className="relative aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="text-forest absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium tracking-widest uppercase">
                      {article.category}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="bg-cream p-6">
                    <p className="text-forest/40 mb-3 text-xs tracking-widest uppercase">
                      {article.date} &nbsp;·&nbsp; {article.readTime}
                    </p>
                    <h2 className="font-headline text-forest group-hover:text-forest/70 mb-3 text-xl leading-snug font-medium tracking-[-0.02em] transition-colors duration-200">
                      {article.title}
                    </h2>
                    <p className="text-forest/60 mb-5 font-serif text-base leading-relaxed">
                      {article.excerpt}
                    </p>
                    <span className="text-forest/50 group-hover:text-forest text-sm font-medium tracking-widest uppercase transition-colors duration-200">
                      Read Article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactSection />
      <LiquidDock />
    </>
  );
}
