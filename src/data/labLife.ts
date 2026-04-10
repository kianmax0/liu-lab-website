import fs from "fs";
import path from "path";

export interface LabPhoto {
  src: string;
  alt: string;
}

export interface LabEventConfig {
  id: string;
  date: string;
  theme: string;
  caption: string;
  prefix: string;
}

export interface LabEvent extends LabEventConfig {
  photos: LabPhoto[];
  coverPhoto: LabPhoto;
}

const labEventConfigs: LabEventConfig[] = [
  {
    id: "2026-02-15",
    date: "2026-2-15",
    theme: "搬新家 过新年",
    caption: "鲜衣怒马，骐骥驰骋~\n搬新家，穿新衣，过新年！",
    prefix: "02152026-",
  },
];

function getPhotosByPrefix(prefix: string): LabPhoto[] {
  const dir = path.join(process.cwd(), "public/lab-life");
  if (!fs.existsSync(dir)) return [];
  const exts = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

  return fs
    .readdirSync(dir)
    .filter(
      (file) =>
        file.startsWith(prefix) &&
        exts.includes(path.extname(file).toLowerCase()),
    )
    .sort((a, b) => {
      const aNum = Number(a.replace(prefix, "").replace(/\.[^.]+$/, ""));
      const bNum = Number(b.replace(prefix, "").replace(/\.[^.]+$/, ""));
      if (Number.isNaN(aNum) || Number.isNaN(bNum)) return a.localeCompare(b);
      return aNum - bNum;
    })
    .map((file) => ({
      src: `/lab-life/${file}`,
      alt: file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
    }));
}

export function getLabEvents(): LabEvent[] {
  return labEventConfigs
    .map((config) => {
      const photos = getPhotosByPrefix(config.prefix);
      if (photos.length === 0) return null;
      return {
        ...config,
        photos,
        coverPhoto: photos[0],
      };
    })
    .filter((event): event is LabEvent => event !== null);
}

export function getLabEventById(eventId: string): LabEvent | undefined {
  return getLabEvents().find((event) => event.id === eventId);
}
