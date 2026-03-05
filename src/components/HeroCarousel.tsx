"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
  caption?: string;
}

interface HeroCarouselProps {
  slides: Slide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [idx, setIdx] = useState(0);

  const prev = useCallback(
    () => setIdx((i) => (i - 1 + slides.length) % slides.length),
    [slides.length],
  );
  const next = useCallback(
    () => setIdx((i) => (i + 1) % slides.length),
    [slides.length],
  );

  // Auto-advance every 5 s
  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, slides.length]);

  if (slides.length === 0) {
    return (
      <div className="w-full max-w-xl mx-auto aspect-square rounded-2xl bg-[var(--bg-off)] flex items-center justify-center mt-12">
        <p className="text-[13px] text-[var(--fg-2)] text-center px-8 leading-relaxed">
          Add images to{" "}
          <code className="font-mono text-[12px] bg-[var(--border)] px-1.5 py-0.5 rounded">
            /public/images/
          </code>{" "}
          and list them in the carousel on the home page.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-14 select-none">
      {/* Main image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-[var(--bg-off)]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        ))}
      </div>

      {/* Caption */}
      {slides[idx]?.caption && (
        <p className="mt-3 text-center text-[12px] text-[var(--fg-2)] tracking-wide">
          {slides[idx].caption}
        </p>
      )}

      {/* Prev / Next arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-9 h-9 flex items-center justify-center text-[var(--fg-2)] hover:text-[var(--fg)] transition-colors"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-9 h-9 flex items-center justify-center text-[var(--fg-2)] hover:text-[var(--fg)] transition-colors"
          >
            ›
          </button>
        </>
      )}

      {/* Dot indicators */}
      {slides.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === idx
                  ? "bg-[var(--fg)] scale-125"
                  : "bg-[var(--border)] hover:bg-[var(--fg-2)]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
