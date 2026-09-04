"use client";

import SectionHeader from "@/components/SectionHeader";
import MotifDivider from "@/components/MotifDivider";
import ImageGallery from "@/components/ImageGallery";
import { useLanguage } from "@/content/LanguageContext";

export default function AgriculturePage() {
  const { t, ta } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow={t("pages.agriculture.eyebrow")}
        title={t("pages.agriculture.title")}
      />
      <p className="text-editorial text-ink/80 mb-6">
        {t("pages.agriculture.intro")}
      </p>
      <div className="flex flex-wrap items-center gap-3 text-sm text-ink/70 mb-8">
        {ta("pages.agriculture.items").map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="border border-clay/40 px-3 py-1">{item}</span>
            {i < ta("pages.agriculture.items").length - 1 && <span>→</span>}
          </div>
        ))}
      </div>

      <ImageGallery
        imageKeys={["agricultureOulmes", "cattleOulmesZaer", "farmersOulmes", "agricultureFields", "agricultureMarket"]}
      />

      <MotifDivider />

      <ul className="list-disc list-inside text-ink/80 space-y-1 mt-8">
        {ta("pages.agriculture.support").map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p className="text-xs text-ink/50 italic mt-6">
        {t("pages.agriculture.disclaimer")}
      </p>
    </main>
  );
}
