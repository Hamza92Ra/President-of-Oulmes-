"use client";

import SectionHeader from "@/components/SectionHeader";
import MotifDivider from "@/components/MotifDivider";
import ImageGallery from "@/components/ImageGallery";
import { useLanguage } from "@/content/LanguageContext";

export default function HealthPage() {
  const { t, ta } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow={t("pages.health.eyebrow")}
        title={t("pages.health.title")}
      />
      <p className="text-editorial text-ink/80 mb-4">
        {t("pages.health.intro")}
      </p>
      <p className="text-xs text-ink/50 italic mb-8">
        {t("pages.health.disclaimer")}
      </p>

      <ImageGallery
        imageKeys={["healthCampaign", "healthClinic", "healthMedicalTeam", "healthCenter", "healthCampaign2"]}
      />

      <MotifDivider />

      <ul className="list-disc list-inside text-ink/80 space-y-1 mt-8">
        {ta("pages.health.topics").map((topic, i) => (
          <li key={i}>{topic}</li>
        ))}
      </ul>
    </main>
  );
}
