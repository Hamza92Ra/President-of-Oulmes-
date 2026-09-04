"use client";

import Timeline from "@/components/Timeline";
import SectionHeader from "@/components/SectionHeader";
import ImageGallery from "@/components/ImageGallery";
import MotifDivider from "@/components/MotifDivider";
import { useLanguage } from "@/content/LanguageContext";

export default function TimelinePage() {
  const { t } = useLanguage();

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow={t("storyFlow.eyebrow")}
        title={t("storyFlow.title")}
      />

      <ImageGallery
        imageKeys={["portraitFieldVisit", "portraitEventSpeech", "parliament", "oulmesCommune", "developmentForumGroup"]}
        className="mb-12"
      />

      <MotifDivider />

      <div className="mt-8">
        <Timeline />
      </div>
    </main>
  );
}
