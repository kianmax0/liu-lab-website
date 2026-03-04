import type { Metadata } from "next";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import TeamCard from "@/components/TeamCard";
import { pi, currentMembers, alumni } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamPage() {
  return (
    <div className="pt-28 pb-32">
      {/* Page header */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <FadeInWhenVisible>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-[-0.03em] text-[#000000] leading-tight">
            Team
          </h1>
          <p className="mt-4 text-[15px] font-light text-[#86868b] max-w-md leading-relaxed">
            A diverse group of researchers united by curiosity and rigour. Hover
            over a card to see research interests.
          </p>
        </FadeInWhenVisible>
      </section>

      {/* PI */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <FadeInWhenVisible>
          <h2 className="text-[12px] font-semibold text-[#86868b] uppercase tracking-widest mb-10">
            Principal Investigator
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.05}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <TeamCard member={pi} large />
            <div className="max-w-lg text-center sm:text-left">
              {pi.email && (
                <a
                  href={`mailto:${pi.email}`}
                  className="mt-3 inline-block text-[13px] text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-200"
                >
                  {pi.email}
                </a>
              )}
              {pi.interests && (
                <p className="mt-3 text-[14px] text-[#86868b] font-light leading-relaxed">
                  {pi.interests}
                </p>
              )}
            </div>
          </div>
        </FadeInWhenVisible>
      </section>

      {/* Current members */}
      {currentMembers.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <FadeInWhenVisible>
            <h2 className="text-[12px] font-semibold text-[#86868b] uppercase tracking-widest mb-10">
              Current Members
            </h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {currentMembers.map((member, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.05}>
                <TeamCard member={member} />
              </FadeInWhenVisible>
            ))}
          </div>
        </section>
      )}

      {/* Alumni */}
      {alumni.length > 0 && (
        <section className="max-w-6xl mx-auto px-6">
          <FadeInWhenVisible>
            <h2 className="text-[12px] font-semibold text-[#86868b] uppercase tracking-widest mb-10">
              Alumni
            </h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {alumni.map((member, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.05}>
                <TeamCard member={member} />
              </FadeInWhenVisible>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
