"use client";

import SectionHeader from "@/components/SectionHeader";
import { sources } from "@/content/sources";
import SourceBadge from "@/components/SourceBadge";
import { useLanguage } from "@/content/LanguageContext";

export default function SourcesPage() {
  const { t } = useLanguage();
  const sourceList = Object.values(sources);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow="Transparence"
        title="Sources"
        description="Tout ce qui est présenté sur ce site devrait pouvoir être tracé jusqu'à une source vérifiable."
      />

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-ink mb-4">
          {t("sources.howWeSource")}
        </h2>
        <ul className="space-y-2 text-ink/80 list-disc list-inside">
          <li>
            {t("sources.method1")}
          </li>
          <li>
            {t("sources.method2")}
          </li>
          <li>
            {t("sources.method3")}
          </li>
          <li>
            {t("sources.method4")}
          </li>
          <li>{t("sources.method5")}</li>
          <li>
            {t("sources.method6")}
          </li>
        </ul>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sourceList.map((source) => (
          <SourceBadge key={source.id} source={source.name} url={source.url} />
        ))}
      </section>
    </main>
  );
}
