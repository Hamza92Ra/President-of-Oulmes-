"use client";

import SectionHeader from "@/components/SectionHeader";
import MotifDivider from "@/components/MotifDivider";
import ImageGallery from "@/components/ImageGallery";
import { useLanguage } from "@/content/LanguageContext";

export default function CulturePage() {
  const { t } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow={t("pages.culture.eyebrow")}
        title={t("pages.culture.title")}
      />
      <p className="text-editorial text-ink/80 mb-8">
        {t("pages.culture.description")}
      </p>

      <ImageGallery
        imageKeys={["cultureOulmes", "cultureAmazigh", "cultureFestival", "cultureHeritage", "cultureCeremony"]}
      />

      <MotifDivider />

      <p className="text-xs text-ink/50 italic mt-8">
        {t("pages.culture.disclaimer")}
      </p>
    </main>
  );
}
