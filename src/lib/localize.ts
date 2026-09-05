import { Lang } from "@/i18n/translations";

export function localize<T extends Record<string, unknown>>(
  obj: T,
  field: string,
  lang: Lang
): string {
  // Try language-specific key first (titleFr, titleEn, titleAr)
  const langKey = `${field}${lang.charAt(0).toUpperCase() + lang.slice(1)}` as keyof T;
  const langValue = obj[langKey] as string | undefined;
  if (langValue) return langValue;

  // Fallback: try English, then French
  const enKey = `${field}En` as keyof T;
  const frKey = `${field}Fr` as keyof T;
  const enValue = obj[enKey] as string | undefined;
  const frValue = obj[frKey] as string | undefined;

  return enValue || frValue || "";
}