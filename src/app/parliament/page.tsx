"use client";

import { useMemo, useState } from "react";
import { parliamentQuestions, ParliamentCategory } from "@/content/parliament";
import FilterBar from "@/components/FilterBar";
import ParliamentaryQuestionCard from "@/components/ParliamentaryQuestionCard";
import SourceBadge from "@/components/SourceBadge";
import { sources } from "@/content/sources";
import MotifDivider from "@/components/MotifDivider";
import ImageGallery from "@/components/ImageGallery";
import { useLanguage } from "@/content/LanguageContext";

export default function ParliamentPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(
    "ALL" as ParliamentCategory | "ALL"
  );

  const filteredQuestions = useMemo(() => {
    const sorted = [...parliamentQuestions].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    if (activeCategory === "ALL") return sorted;
    return sorted.filter((q) => q.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-10 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-3 tracking-tight">
          {t("parliament.title")}
        </h1>
        <p className="text-ink/70">
          {t("parliament.description").replace("{count}", parliamentQuestions.length.toString())}
        </p>
        <div className="mt-4">
          <SourceBadge
            source={sources.parliamentProfile}
            url={sources.parliamentProfile.url}
          />
        </div>
      </header>

      <ImageGallery
        imageKeys={["parliament", "parliamentSpeech", "parliamentSession", "parliamentCommittee", "parliamentDebate"]}
      />

      <MotifDivider />

      <div className="my-8">
        <FilterBar active={activeCategory} onChange={setActiveCategory} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredQuestions.map((q) => (
          <ParliamentaryQuestionCard key={q.id} question={q} />
        ))}
      </div>

      {filteredQuestions.length === 0 && (
        <p className="text-ink/50 text-sm mt-6">
          {t("parliament.noQuestions")}
        </p>
      )}
    </main>
  );
}
