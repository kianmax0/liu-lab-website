import Link from "next/link";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import { site } from "@/data/site";
import { publications } from "@/data/publications";

const latestYear = Math.max(...publications.map((p) => p.year));
const latestPubs = publications
  .filter((p) => p.year === latestYear)
  .slice(0, 3);

export default function HomePage() {
  const sloganLines = site.slogan.split("\n");

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white">
        {/* Geometric background decoration */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 60%, #f5f5f7 0%, transparent 70%)",
          }}
        />
        {/* Faint grid lines */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#1d1d1f 1px, transparent 1px), linear-gradient(90deg, #1d1d1f 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Slogan */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[#000000]">
            {sloganLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-6 text-[clamp(1rem,2.2vw,1.3rem)] font-light text-[#86868b] max-w-xl mx-auto leading-relaxed">
            {site.fullName}
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/publications"
              className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#1d1d1f] text-white text-[14px] font-medium tracking-tight hover:bg-black transition-colors duration-200"
            >
              Latest Publications
            </Link>
            <Link
              href="/contact#openings"
              className="inline-flex items-center justify-center h-11 px-7 rounded-full border border-[#1d1d1f] text-[#1d1d1f] text-[14px] font-medium tracking-tight hover:bg-[#1d1d1f] hover:text-white transition-colors duration-200"
            >
              Open Positions
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
          <div className="w-[1px] h-10 bg-[#1d1d1f] animate-pulse" />
        </div>
      </section>

      {/* ── ABOUT THE LAB ─────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-32">
        <FadeInWhenVisible>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-[-0.025em] text-[#1d1d1f] mb-6">
            {site.aboutHeading}
          </h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)] font-light text-[#86868b] leading-[1.75] tracking-tight">
            {site.description}
          </p>
        </FadeInWhenVisible>
      </section>

      {/* ── RECENT PUBLICATIONS PREVIEW ───────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <FadeInWhenVisible>
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] text-[#1d1d1f]">
              Recent Work
            </h2>
            <Link
              href="/publications"
              className="text-[13px] text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-200 hidden sm:block"
            >
              All publications →
            </Link>
          </div>
        </FadeInWhenVisible>

        <div className="divide-y divide-[#e5e5ea]">
          {latestPubs.map((pub, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.07}>
              <div className="py-5">
                <p className="text-[15px] font-semibold text-[#1d1d1f] leading-snug mb-1 tracking-tight">
                  {pub.title}
                </p>
                <p className="text-[13px] text-[#86868b] italic">{pub.venue}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        <FadeInWhenVisible delay={0.25}>
          <Link
            href="/publications"
            className="mt-6 inline-block text-[13px] text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-200 sm:hidden"
          >
            All publications →
          </Link>
        </FadeInWhenVisible>
      </section>

      {/* ── RESEARCH HIGHLIGHTS ──────────────────────────────────── */}
      <section className="bg-[#f5f5f7] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInWhenVisible>
            <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] text-[#1d1d1f] mb-4">
              Research
            </h2>
            <p className="text-[15px] text-[#86868b] max-w-lg mb-10">
              We pursue fundamental and applied research across several
              interconnected directions.
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.1}>
            <Link
              href="/research"
              className="inline-flex items-center justify-center h-11 px-7 rounded-full border border-[#1d1d1f] text-[#1d1d1f] text-[14px] font-medium tracking-tight hover:bg-[#1d1d1f] hover:text-white transition-colors duration-200"
            >
              Explore Research Directions
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>
    </>
  );
}
