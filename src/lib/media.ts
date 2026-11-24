import type { ImageMetadata } from 'astro';

type Mod = { default: ImageMetadata };

const photos = import.meta.glob<Mod>('../content/photos/*.{jpg,jpeg,png,webp,avif}', { eager: true });
const screens = import.meta.glob<Mod>('../content/screens/*.{jpg,jpeg,png,webp,avif}', { eager: true });
const logos = import.meta.glob<Mod>('../content/logos/*.{jpg,jpeg,png,webp,avif,svg}', { eager: true });

export type ImageFolder = 'photos' | 'screens' | 'logos';
const folders: Record<ImageFolder, Record<string, Mod>> = { photos, screens, logos };

function find(files: Record<string, Mod>, folder: string, name: string | null) {
  if (!name) return null;
  const file = files[`../content/${folder}/${name}`];
  if (!file) throw new Error(`Image "${name}" not found in src/content/${folder}/. Check src/content/site.ts.`);
  return file.default;
}

export const categoryPhoto = (name: string | null) => find(photos, 'photos', name);
export const screenImage = (name: string | null) => find(screens, 'screens', name);

/** A file name from `src/content/<folder>/`, a full https:// URL, or null (empty box). */
export function resolveImage(folder: ImageFolder, value: string | null): ImageMetadata | string | null {
  if (!value) return null;
  if (/^https?:\/\//.test(value)) return value;
  return find(folders[folder], folder, value);
}
