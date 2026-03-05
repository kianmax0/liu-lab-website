import type { Metadata } from "next";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import PublicationEntry from "@/components/PublicationEntry";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications",
};

function groupByYear(pubs: typeof publications) {
  const map = new Map<number, typeof publications>();
  for (const pub of pubs) {
    if (!map.has(pub.year)) map.set(pub.year, []);
    map.get(pub.year)!.push(pub);
  }
  return Array.from(map.entries()).sort(([a], [b]) => b - a);
}

export default function PublicationsPage() {
  const grouped = groupByYear(publications);

  return (
    <div className="pt-28 pb-32">
      {/* Page header */}
      <section className="max-w-[1400px] mx-auto px-8 mb-20">
        <FadeInWhenVisible>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-[-0.03em] text-[var(--heading)] leading-tight">
            Publications
          </h1>
          <p className="mt-4 text-[15px] font-light text-[var(--fg-2)] max-w-md leading-relaxed">
            Lab members are{" "}
            <span className="font-semibold text-[var(--fg)] underline underline-offset-2 decoration-[var(--border)]">
              underlined
            </span>
            . Links appear inline.
          </p>
        </FadeInWhenVisible>
      </section>

      {/* Publications list grouped by year */}
      <section className="max-w-[1400px] mx-auto px-8">
        {grouped.map(([year, pubs], groupIdx) => (
          <div key={year} className="mb-16">
            {/* Year divider */}
            <FadeInWhenVisible delay={groupIdx * 0.04}>
              <h2 className="text-[clamp(3.5rem,9vw,7rem)] font-extrabold tracking-[-0.04em] text-[var(--ghost)] leading-none select-none mb-0 -ml-1">
                {year}
              </h2>
              <div className="-mt-3 mb-1" />
            </FadeInWhenVisible>

            {pubs.map((pub, i) => (
              <FadeInWhenVisible key={i} delay={groupIdx * 0.04 + i * 0.05}>
                <PublicationEntry pub={pub} />
              </FadeInWhenVisible>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}
