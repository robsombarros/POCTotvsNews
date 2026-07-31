/** Base path for assets — matches vite.config.ts `base` setting */
export const BASE = import.meta.env.BASE_URL;

/** Helper to resolve asset paths relative to the base URL */
export function asset(path: string): string {
  return `${BASE}assets/${path}`;
}
