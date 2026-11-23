/** Adds the GitHub Pages base path to a root-relative path. */
export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
