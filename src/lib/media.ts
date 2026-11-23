import type { ImageMetadata } from 'astro';

type Mod = { default: ImageMetadata };

const photos = import.meta.glob<Mod>('../content/photos/*.{jpg,jpeg,png,webp,avif}', { eager: true });
const screens = import.meta.glob<Mod>('../content/screens/*.{jpg,jpeg,png,webp,avif}', { eager: true });

function find(files: Record<string, Mod>, folder: string, name: string | null) {
  if (!name) return null;
  const file = files[`../content/${folder}/${name}`];
  if (!file) throw new Error(`Image "${name}" not found in src/content/${folder}/. Check src/content/site.ts.`);
  return file.default;
}

export const categoryPhoto = (name: string | null) => find(photos, 'photos', name);
export const screenImage = (name: string | null) => find(screens, 'screens', name);
