import fs from "fs";
import path from "path";

/**
 * Checks whether a file referenced by a public-relative path (e.g. "/images/hero.jpg")
 * actually exists on disk under /public. Server-side only (used in Server Components).
 */
export function fileExistsInPublic(publicPath: string): boolean {
  try {
    const cleanPath = publicPath.startsWith("/")
      ? publicPath.slice(1)
      : publicPath;
    const fullPath = path.join(process.cwd(), "public", cleanPath);
    return fs.existsSync(fullPath) && fs.statSync(fullPath).isFile();
  } catch {
    return false;
  }
}