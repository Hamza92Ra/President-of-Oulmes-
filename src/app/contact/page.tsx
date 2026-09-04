"use client";

import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/config/site";
import ImageGallery from "@/components/ImageGallery";
import { useLanguage } from "@/content/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <SectionHeader eyebrow={t("nav.contact")} title={t("pages.contact.title")} />

      <ImageGallery
        imageKeys={["portraitEventSpeech", "parliament", "oulmesTown", "mediaEvent", "developmentForumGroup"]}
        className="mb-10"
      />

      <div className="space-y-6">
        <div>
          <h2 className="text-sm uppercase tracking-[0.1em] text-ink/50 mb-1">
            {t("pages.contact.email")}
          </h2>
          <p className="text-ink/80">{siteConfig.contact.email}</p>
        </div>

        <div>
          <h2 className="text-sm uppercase tracking-[0.1em] text-ink/50 mb-1">
            {t("pages.contact.phone")}
          </h2>
          <p className="text-ink/80">{siteConfig.contact.phone}</p>
        </div>

        <div>
          <h2 className="text-sm uppercase tracking-[0.1em] text-ink/50 mb-1">
            {t("pages.contact.office")}
          </h2>
          <p className="text-ink/80">{siteConfig.contact.address}</p>
        </div>
      </div>

      <p className="text-xs text-ink/40 mt-10">
        {t("pages.contact.configNote")}
      </p>
    </main>
  );
}
