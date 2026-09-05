"use client";

import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ImageGallery from "@/components/ImageGallery";
import { images } from "@/config/images";
import SourceBadge from "@/components/SourceBadge";
import { sources } from "@/content/sources";
import MotifDivider from "@/components/MotifDivider";
import { useLanguage } from "@/content/LanguageContext";

export default function BiographyPage() {
  const { t } = useLanguage();
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow={t("pages.biography.eyebrow")}
        title={t("ui.mohamedAchrourou")}
        description={t("pages.biography.description")}
      />

      <ImagePlaceholder
        src={images.portrait}
        alt={t("ui.mohamedAchrourou")}
        label="portrait-mohamed-achrourou.jpg"
        aspectRatio="3/4"
        className="max-w-sm mb-12"
      />

      <ImageGallery
        imageKeys={["portraitFieldVisit", "portraitEventSpeech", "portraitCommunityMeeting", "parliament", "oulmesTown"]}
        className="mb-12"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-ink mb-4 tracking-tight">
          {t("biography.professionalPath")}
        </h2>
        <p className="text-ink/80 leading-relaxed mb-3">
          {t("pages.biography.professionalIntro")}
        </p>
        <p className="text-ink/80 leading-relaxed mb-3">
          {t("pages.biography.professionalExperience")}
        </p>
        <p className="text-ink/80 leading-relaxed mb-3">
          {t("pages.biography.professionalPresidency")}
        </p>
        <p className="text-sm text-ink/50 italic">
          {t("pages.biography.engineeringNote")}
        </p>
      </section>

      <MotifDivider />

      <section className="mt-12 mb-12">
        <h2 className="text-2xl font-semibold text-ink mb-4 tracking-tight">
          {t("biography.politicalPath")}
        </h2>
        <ul className="space-y-3 text-ink/80">
          <li>
            <strong>2017</strong> — {t("pages.biography.political2017")}
          </li>
          <li>
            <strong>2019</strong> — {t("pages.biography.political2019")}
          </li>
          <li>
            <strong>2021–2026</strong> — {t("pages.biography.political2021")}
          </li>
          <li>
            <strong>2022</strong> — {t("pages.biography.political2022")}
          </li>
          <li>
            <strong>{t("common.toBeVerified")}</strong> — {t("pages.biography.politicalToVerify")}
          </li>
          <li>
            <strong>2026</strong> — {t("pages.biography.political2026")}
          </li>
        </ul>
      </section>

      <SourceBadge
        source={sources.parliamentProfile.name}
        url={sources.parliamentProfile.url}
      />
    </main>
  );
}
