import type { Metadata } from "next";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-32">
      {/* Page header */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <FadeInWhenVisible>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-[-0.03em] text-[#000000] leading-tight">
            Contact
          </h1>
          <p className="mt-4 text-[15px] font-light text-[#86868b] max-w-md leading-relaxed">
            We welcome enquiries from prospective students, collaborators, and
            members of the press.
          </p>
        </FadeInWhenVisible>
      </section>

      {/* Contact info + address */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeInWhenVisible>
            <div>
              <h2 className="text-[12px] font-semibold text-[#86868b] uppercase tracking-widest mb-6">
                Get in Touch
              </h2>
              <a
                href={`mailto:${site.contact.email}`}
                className="text-[clamp(1.1rem,2.5vw,1.5rem)] font-semibold text-[#1d1d1f] hover:text-black underline underline-offset-4 decoration-[#d2d2d7] hover:decoration-[#1d1d1f] transition-all duration-200 tracking-tight"
              >
                {site.contact.email}
              </a>
              <p className="mt-8 text-[14px] text-[#86868b] font-light whitespace-pre-line leading-[1.8]">
                {site.contact.address}
              </p>
            </div>
          </FadeInWhenVisible>

          {/* Map placeholder or embed */}
          <FadeInWhenVisible delay={0.08}>
            <div>
              <h2 className="text-[12px] font-semibold text-[#86868b] uppercase tracking-widest mb-6">
                Location
              </h2>
              {site.contact.mapEmbedUrl ? (
                <iframe
                  src={site.contact.mapEmbedUrl}
                  className="w-full aspect-video rounded-2xl border border-[#e5e5ea]"
                  loading="lazy"
                  title="Lab location map"
                  style={{ filter: "grayscale(100%)" }}
                />
              ) : (
                <div className="w-full aspect-video rounded-2xl bg-[#f5f5f7] flex items-center justify-center">
                  <p className="text-[13px] text-[#86868b]">
                    Add a Google Maps embed URL to{" "}
                    <code className="font-mono text-[12px] bg-[#e5e5ea] px-1.5 py-0.5 rounded">
                      src/data/site.ts
                    </code>
                  </p>
                </div>
              )}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="max-w-6xl mx-auto px-6 scroll-mt-20">
        <FadeInWhenVisible>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[-0.025em] text-[#1d1d1f] mb-3">
            Open Positions
          </h2>
          <p className="text-[15px] font-light text-[#86868b] max-w-lg mb-12 leading-relaxed">
            We are actively recruiting motivated individuals at all levels.
            Please send your CV and a brief statement of research interest to{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="text-[#1d1d1f] underline underline-offset-2 decoration-[#d2d2d7] hover:decoration-[#1d1d1f] transition-all"
            >
              {site.contact.email}
            </a>
            .
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {site.openPositions.map((pos, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.07}>
              <div className="p-8 bg-[#f5f5f7] rounded-2xl h-full">
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] tracking-tight mb-3">
                  {pos.title}
                </h3>
                <p className="text-[14px] text-[#86868b] font-light leading-relaxed">
                  {pos.description}
                </p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>
    </div>
  );
}
