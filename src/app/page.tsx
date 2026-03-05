import Link from "next/link";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import HeroCarousel from "@/components/HeroCarousel";
import { site } from "@/data/site";
import { publications } from "@/data/publications";

const latestYear = Math.max(...publications.map((p) => p.year));
const latestPubs = publications
  .filter((p) => p.year === latestYear)
  .slice(0, 3);

// ── Add your lab microscopy / hero images here ─────────────────
// Drop files into /public/images/ and list them below.
const heroSlides: { src: string; alt: string; caption?: string }[] = [
  // Example:
  // { src: "/images/hero-1.jpg", alt: "Hypothalamic neurons", caption: "Preoptic neurons, confocal" },
];

export default function HomePage() {
  const sloganLines = site.slogan.split("\n");

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-28 pb-20 bg-[var(--bg)]">
        {/* Slogan */}
        <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[var(--heading)]">
          {sloganLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-6 text-[clamp(1rem,2.2vw,1.3rem)] font-light text-[var(--fg-2)] max-w-2xl mx-auto leading-relaxed">
          {site.fullName}
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/publications"
            className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[var(--fg)] text-[var(--bg)] text-[14px] font-medium tracking-tight hover:opacity-80 transition-opacity duration-200"
          >
            Latest Publications
          </Link>
          <Link
            href="/contact#openings"
            className="inline-flex items-center justify-center h-11 px-7 rounded-full border border-[var(--fg)] text-[var(--fg)] text-[14px] font-medium tracking-tight hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors duration-200"
          >
            Open Positions
          </Link>
        </div>

        {/* Image carousel */}
        <HeroCarousel slides={heroSlides} />
      </section>

      {/* ── ABOUT THE LAB ─────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-8 py-32">
        <FadeInWhenVisible>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-[-0.025em] text-[var(--heading)] mb-6">
            {site.aboutHeading}
          </h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)] font-light text-[var(--fg-2)] leading-[1.75] tracking-tight">
            {site.description}
          </p>
        </FadeInWhenVisible>
      </section>

      {/* ── RECENT PUBLICATIONS PREVIEW ───────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <FadeInWhenVisible>
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] text-[var(--heading)]">
              Recent Work
            </h2>
            <Link
              href="/publications"
              className="text-[13px] text-[var(--fg-2)] hover:text-[var(--fg)] transition-colors duration-200 hidden sm:block"
            >
              All publications →
            </Link>
          </div>
        </FadeInWhenVisible>

        <div className="divide-y divide-[var(--border)]">
          {latestPubs.map((pub, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.07}>
              <div className="py-5">
                <p className="text-[15px] font-semibold text-[var(--fg)] leading-snug mb-1 tracking-tight">
                  {pub.title}
                </p>
                <p className="text-[13px] text-[var(--fg-2)] italic">
                  {pub.venue}
                </p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        <FadeInWhenVisible delay={0.25}>
          <Link
            href="/publications"
            className="mt-6 inline-block text-[13px] text-[var(--fg-2)] hover:text-[var(--fg)] transition-colors duration-200 sm:hidden"
          >
            All publications →
          </Link>
        </FadeInWhenVisible>
      </section>

      {/* ── RESEARCH HIGHLIGHTS ──────────────────────────────────── */}
      <section className="border-t border-[var(--border)] py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeInWhenVisible>
            <p className="text-[12px] font-semibold text-[var(--fg-2)] uppercase tracking-widest mb-4">
              Research
            </p>
            <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] text-[var(--heading)] mb-4">
              Frontier Questions in Social Neuroscience
            </h2>
            <p className="text-[15px] text-[var(--fg-2)] max-w-lg mb-10">
              We pursue fundamental and applied research across several
              interconnected directions.
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.1}>
            <Link
              href="/research"
              className="inline-flex items-center justify-center h-11 px-7 rounded-full border border-[var(--fg)] text-[var(--fg)] text-[14px] font-medium tracking-tight hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors duration-200"
            >
              Explore Research Directions
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>
    </>
  );
}
