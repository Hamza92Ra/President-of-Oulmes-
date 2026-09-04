"use client";

import SectionHeader from "@/components/SectionHeader";
import MotifDivider from "@/components/MotifDivider";
import ImageGallery from "@/components/ImageGallery";
import { useLanguage } from "@/content/LanguageContext";

export default function WaterEnvironmentPage() {
  const { t, ta } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow={t("pages.water.eyebrow")}
        title={t("pages.water.title")}
      />
      <p className="text-editorial text-ink/80 mb-6">
        {t("pages.water.description")}
      </p>
      <div className="flex flex-wrap gap-3 text-sm mb-8">
        {ta("pages.water.items").map((item, i) => (
          <span key={i} className="border border-clay/40 px-3 py-1">{item}</span>
        ))}
      </div>

      <ImageGallery
        imageKeys={["waterSupply", "waterInfrastructure", "environmentLandscape", "environmentConservation", "waterWell"]}
      />

      <MotifDivider />

      <p className="text-ink/70 mt-8">
        {t("pages.water.projectLinkText")}{" "}
        <a href="/projects/ecological-baths" className="underline text-green-moroccan">
          {t("pages.water.projectLink")}
        </a>
        .
      </p>
    </main>
  );
}
