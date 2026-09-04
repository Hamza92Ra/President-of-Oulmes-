"use client";

import Link from "next/link";
import { parliamentQuestions } from "@/content/parliament";
import { useLanguage } from "@/content/LanguageContext";
import { localize } from "@/lib/localize";

export default function ParliamentFeed() {
  const { lang, t } = useLanguage();
  const latest = [...parliamentQuestions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-clay/30">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-ink">
          {t("home.latestParliamentaryActivity")}
        </h2>
        <Link
          href="/parliament"
          className="text-sm text-green-moroccan underline underline-offset-2 hidden md:block"
        >
          {t("home.seeFullRegistry")}
        </Link>
      </div>

      <div className="divide-y divide-clay/20 border-y border-clay/20">
        {latest.map((q) => (
          <div
            key={q.id}
            className="flex flex-col md:flex-row md:items-center justify-between gap-2 py-4"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.1em] text-ink/40 mr-3">
                {new Date(q.date).toLocaleDateString(
                  lang === "ar" ? "ar-MA" : lang === "en" ? "en-US" : "fr-FR",
                  { day: "numeric", month: "short", year: "numeric" }
                )}
              </span>
              <span className="text-ink font-medium">
                {localize(q, "title", lang)}
              </span>
            </div>
            <span className="text-xs text-green-moroccan">
              {t(`parliament.categories.${q.category}`)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}