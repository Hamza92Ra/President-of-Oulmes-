import { Lang } from "@/i18n/translations";

export function localize<T extends Record<string, unknown>>(
  obj: T,
  field: string,
  lang: Lang
): string {
  const key = `${field}${
    lang.charAt(0).toUpperCase() + lang.slice(1)
  }` as keyof T;
  const fallbackKey = `${field}Fr` as keyof T;
  const value =
    (obj[key] as string | undefined) ||
    (obj[fallbackKey] as string | undefined);
  return value || "";
}