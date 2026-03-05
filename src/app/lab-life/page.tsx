import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Image from "next/image";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

export const metadata: Metadata = {
  title: "Lab Life",
};

interface LabPhoto {
  src: string;
  alt: string;
}

function getLabPhotos(): LabPhoto[] {
  const dir = path.join(process.cwd(), "public/lab-life");
  if (!fs.existsSync(dir)) return [];
  const exts = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
  return fs
    .readdirSync(dir)
    .filter((f) => exts.includes(path.extname(f).toLowerCase()))
    .map((f) => ({
      src: `/liu-lab-website/lab-life/${f}`,
      alt: f.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
    }));
}

export default function LabLifePage() {
  const photos = getLabPhotos();

  return (
    <div className="pt-28 pb-32">
      {/* Page header */}
      <section className="max-w-[1400px] mx-auto px-8 mb-20">
        <FadeInWhenVisible>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-[-0.03em] text-[var(--heading)] leading-tight">
            Lab Life
          </h1>
          <p className="mt-4 text-[16px] font-light text-[var(--fg-2)] max-w-lg leading-relaxed">
            A glimpse into life in the lab — experiments, retreats, and the
            moments in between.
          </p>
        </FadeInWhenVisible>
      </section>

      {/* Photo grid */}
      <section className="max-w-[1400px] mx-auto px-8">
        {photos.length === 0 ? (
          <FadeInWhenVisible>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-off)] p-16 text-center">
              <p className="text-[14px] text-[var(--fg-2)] leading-relaxed">
                Add photos to{" "}
                <code className="font-mono text-[12px] bg-[var(--border)] px-1.5 py-0.5 rounded">
                  /public/lab-life/
                </code>{" "}
                and they will appear here automatically.
              </p>
            </div>
          </FadeInWhenVisible>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {photos.map((photo, i) => (
              <FadeInWhenVisible key={photo.src} delay={i * 0.04}>
                <div className="break-inside-avoid mb-4 rounded-xl overflow-hidden bg-[var(--bg-off)]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
