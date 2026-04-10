import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import { getLabEvents } from "@/data/labLife";

export const metadata: Metadata = {
  title: "Lab Life",
};

export default function LabLifePage() {
  const events = getLabEvents();

  return (
    <div className="pt-28 pb-32">
      {/* Page header */}
      <section className="max-w-[1400px] mx-auto px-8 mb-20">
        <FadeInWhenVisible>
          <h1 className="text-[clamp(2.7rem,6.3vw,5.4rem)] font-extrabold tracking-[-0.03em] text-[var(--heading)] leading-tight">
            Lab Life
          </h1>
          <p className="mt-4 text-[18px] font-light text-[var(--fg-2)] max-w-xl leading-relaxed">
            Moments from the lab, shared like a timeline.
          </p>
        </FadeInWhenVisible>
      </section>

      {/* Event list */}
      <section className="max-w-[1400px] mx-auto px-8">
        {events.length === 0 ? (
          <FadeInWhenVisible>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-off)] p-16 text-center">
              <p className="text-[16px] text-[var(--fg-2)] leading-relaxed">
                Add activity photos to{" "}
                <code className="font-mono text-[14px] bg-[var(--border)] px-1.5 py-0.5 rounded">
                  /public/lab-life/
                </code>{" "}
                and match a date prefix (for example: 02152026-1.jpg).
              </p>
            </div>
          </FadeInWhenVisible>
        ) : (
          <div className="flex flex-col gap-10">
            {events.map((event, i) => (
              <FadeInWhenVisible key={event.id} delay={i * 0.05}>
                <Link
                  href={`/lab-life/${event.id}`}
                  className="block max-w-2xl mx-auto"
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={event.coverPhoto.src}
                      alt={event.coverPhoto.alt}
                      fill
                      className="object-cover hover:scale-[1.01] transition-transform duration-200"
                      sizes="(max-width: 768px) 100vw, 672px"
                    />
                  </div>
                  <div className="mt-5">
                    <p className="text-[16px] text-[var(--fg-2)]">
                      Time: {event.date}
                    </p>
                    <p className="mt-1 text-[20px] text-[var(--fg)] leading-relaxed">
                      Theme: {event.theme}
                    </p>
                  </div>
                  <p className="mt-3 text-[15px] text-[var(--fg-2)]">
                    View all photos ({event.photos.length})
                  </p>
                </Link>
              </FadeInWhenVisible>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
