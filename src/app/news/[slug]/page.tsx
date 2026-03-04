import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { Metadata } from "next";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import { notFound } from "next/navigation";

const newsDir = path.join(process.cwd(), "content/news");

export async function generateStaticParams() {
  if (!fs.existsSync(newsDir)) return [];
  const files = fs.readdirSync(newsDir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(newsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  return {
    title: data.title ?? slug,
    description: data.excerpt ?? "",
  };
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(newsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return (
    <div className="pt-28 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <FadeInWhenVisible>
          <Link
            href="/news"
            className="inline-block text-[13px] text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-200 mb-10"
          >
            ← All News
          </Link>
        </FadeInWhenVisible>

        {/* Article header */}
        <FadeInWhenVisible delay={0.05}>
          <header className="mb-12">
            {data.date && (
              <time className="block text-[12px] text-[#86868b] font-light uppercase tracking-wider mb-4">
                {formatDate(data.date)}
              </time>
            )}
            <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[-0.025em] text-[#000000] leading-tight">
              {data.title}
            </h1>
            {data.excerpt && (
              <p className="mt-4 text-[17px] font-light text-[#86868b] leading-relaxed">
                {data.excerpt}
              </p>
            )}
          </header>
        </FadeInWhenVisible>

        {/* Divider */}
        <div className="border-t border-[#e5e5ea] mb-10" />

        {/* MDX body */}
        <FadeInWhenVisible delay={0.1}>
          <div className="prose">
            <MDXRemote source={content} />
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}
