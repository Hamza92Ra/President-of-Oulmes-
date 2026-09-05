import { useLanguage } from "@/content/LanguageContext";

type SourceBadgeProps = {
  source?: {
    nameFr?: string;
    nameEn?: string;
    nameAr?: string;
    name?: string;
    url: string;
  };
  sourceName?: string;
  url: string;
  date?: string;
};

export default function SourceBadge({
  source,
  sourceName,
  url,
  date,
}: SourceBadgeProps) {
  const { t, lang } = useLanguage();

  // Determine the display name
  let displayName = sourceName || url;
  if (source) {
    if (lang === "ar" && source.nameAr) displayName = source.nameAr;
    else if (lang === "en" && source.nameEn) displayName = source.nameEn;
    else if (source.nameFr) displayName = source.nameFr;
    else if (source.name) displayName = source.name;
  }

  const finalUrl = source?.url || url;

  return (
    <div className="inline-flex flex-col gap-1 border-l-2 border-green-moroccan/60 pl-3 py-1 text-sm">
      <span className="uppercase text-[10px] tracking-[0.15em] text-ink/50">
        {t("common.source")}
      </span>

      <a
        href={finalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-ink hover:text-green-moroccan underline underline-offset-2"
      >
        {displayName}
      </a>

      {date && (
        <span className="text-xs text-ink/50">
          {date}
        </span>
      )}
    </div>
  );
}

