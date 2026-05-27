const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/liu-lab-website";

export default function imageLoader({ src }: { src: string }): string {
  if (src.startsWith(basePath)) return src;
  return `${basePath}${src}`;
}
