"use client";

import { useLanguage } from "../content/LanguageContext";
import { Lang } from "@/i18n/translations";

const languages: { code: Lang; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "ar", label: "ع" },
  { code: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 border border-clay/40 rounded-full p-0.5">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-2.5 py-1 text-xs rounded-full transition-colors ${
            lang === l.code
              ? "bg-ink text-ivory"
              : "text-ink/60 hover:text-ink"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}