"use client";

import { ParliamentQuestion } from "@/content/parliament";
import SourceBadge from "./SourceBadge";
import { useLanguage } from "@/content/LanguageContext";
import { localize } from "@/lib/localize";

type Props = {
  question: ParliamentQuestion;
};

export default function ParliamentaryQuestionCard({ question }: Props) {
  const { t, lang } = useLanguage();

  const formatDate = (iso: string): string => {
    const d = new Date(iso);
    const locale = lang === "fr" ? "fr-FR" : lang === "ar" ? "ar-MA" : "en-US";
    return d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="border border-clay/30 bg-ivory p-5 flex flex-col gap-3">
      <span className="inline-block w-fit text-[10px] uppercase tracking-[0.15em] bg-green-moroccan/10 text-green-moroccan px-2 py-1">
        {t(`parliament.categories.${question.category}`)}
      </span>

      <h3 className="text-lg font-semibold leading-snug text-ink">
        {localize(question, "title", lang)}
      </h3>

      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink/70">
        <span>
          <strong className="text-ink/50 uppercase text-[10px] tracking-[0.1em] block">
            {t("common.date")}
          </strong>
          {formatDate(question.date)}
        </span>
        {question.ministry && (
          <span>
            <strong className="text-ink/50 uppercase text-[10px] tracking-[0.1em] block">
              {t("common.ministry")}
            </strong>
            {question.ministry}
          </span>
        )}
      </div>

      {question.descriptionFr && (
        <p className="text-sm text-ink/80">
          {localize(question, "description", lang)}
        </p>
      )}

      <div className="text-sm text-ink/60 italic">
        {lang === "ar" && question.responseStatusAr
          ? question.responseStatusAr
          : question.responseStatus}
      </div>

      <SourceBadge source={question.source} url={question.source.url} />
    </div>
  );
}
