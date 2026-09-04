"use client";

import StatCard from "./StatCard";
import { sources } from "@/content/sources";
import { useLanguage } from "@/content/LanguageContext";

export default function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 border-t border-clay/30">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard
          value="31"
          label={t("stats.parliamentaryQuestions")}
          sublabel={t("stats.period2021_2026")}
          source={{
            name: sources.parliamentProfile.name,
            url: sources.parliamentProfile.url,
          }}
        />
        <StatCard
          value="2012–2015"
          label={t("stats.presidencyEngineers")}
        />
        <StatCard
          value="2017"
          label={t("stats.pamGroupLeader")}
        />
        <StatCard
          value="2026"
          label={t("stats.pamCandidate")}
          sublabel={t("stats.khemissetOulmes")}
          source={{
            name: sources.pam.name,
            url: sources.pam.url,
          }}
        />
      </div>
    </section>
  );
}