"use client";

import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/content/LanguageContext";

const getRecordSections = (t: any) => [
  { label: t("nav.biography"), href: "/biography" },
  { label: t("nav.timeline"), href: "/timeline" },
  { label: t("nav.parliament"), href: "/parliament" },
  { label: t("nav.projects"), href: "/projects" },
  { label: t("nav.sources"), href: "/sources" },
  { label: t("nav.media"), href: "/media" },
];

export default function TransparencyPage() {
  const { t } = useLanguage();
  const recordSections = getRecordSections(t);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow={t("transparency.eyebrow")}
        title={t("transparency.title")}
        description={t("transparency.description")}
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {recordSections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="border border-clay/30 p-4 hover:border-ink/40 transition-colors text-ink/80"
          >
            {section.label}
          </Link>
        ))}
      </section>

      <section className="border-t border-clay/30 pt-8">
        <h2 className="text-lg font-semibold text-ink mb-2">
          {t("transparency.corrections")}
        </h2>
        <p className="text-ink/70 mb-6">
          {t("transparency.correctionsText")}
        </p>
        <p className="text-sm text-ink/50">
          {t("footer.updatedAt")} {siteConfig.lastUpdated}
        </p>
      </section>
    </main>
  );
}
