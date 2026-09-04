"use client";

import Link from "next/link";
import { useLanguage } from "@/content/LanguageContext";

export default function SourceCategories() {
  const { t } = useLanguage();

  const categories = [
    { key: "officialParliament", href: "/sources" },
    { key: "pam", href: "/sources" },
    { key: "oulmesCommune", href: "/sources" },
    { key: "media", href: "/media" },
    { key: "publicDocuments", href: "/transparency" },
  ];

  const getCategoryLabel = (key: string) => {
    const labels: { [key: string]: string } = {
      officialParliament: t("sources.categories.officialParliament"),
      pam: t("sources.categories.pam"),
      oulmesCommune: t("sources.categories.oulmesCommune"),
      media: t("sources.categories.media"),
      publicDocuments: t("sources.categories.publicDocuments"),
    };
    return labels[key] || key;
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-clay/30 text-center">
      <p className="text-ink/70 max-w-lg mx-auto mb-8">
        {t("home.sourcesIntro")}
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <span
            key={cat.key}
            className="text-xs uppercase tracking-[0.1em] px-4 py-2 border border-clay/40 text-ink/70"
          >
            {getCategoryLabel(cat.key)}
          </span>
        ))}
      </div>
      <Link
        href="/sources"
        className="inline-block px-5 py-3 bg-ink text-ivory text-sm font-medium hover:bg-ink/90 transition-colors"
      >
        {t("home.exploreSources")}
      </Link>
    </section>
  );
}
