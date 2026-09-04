"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ForumYearTabs from "@/components/ForumYearTabs";
import MotifDivider from "@/components/MotifDivider";
import ImageGallery from "@/components/ImageGallery";
import { programmeThemes } from "@/content/development";
import { LayoutGrid, Wifi, Building2, Leaf, HeartHandshake, TrendingUp } from "lucide-react";
import { useLanguage } from "@/content/LanguageContext";

const icons: Record<string, React.ReactNode> = {
  digital: <Wifi size={20} />,
  "local-dev": <LayoutGrid size={20} />,
  infrastructure: <Building2 size={20} />,
  environment: <Leaf size={20} />,
  social: <HeartHandshake size={20} />,
  economy: <TrendingUp size={20} />,
};

export default function DevelopmentPage() {
  const { t, lang } = useLanguage();

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow={t("pages.development.eyebrow")}
        title={t("pages.development.title")}
        description={t("pages.development.description")}
      />

      <div className="mb-10">
        <ForumYearTabs />
      </div>

      <ImageGallery
        imageKeys={["developmentForum2022", "developmentForum2023", "developmentForum2024", "developmentForum2025", "developmentForumGroup"]}
        className="mb-16"
      />

      <MotifDivider />

      <div className="mt-16">
        <SectionHeader
          eyebrow={t("pages.development.programmeEyebrow")}
          title={t("pages.development.programmeTitle")}
          description={t("pages.development.programmeDescription")}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {programmeThemes.map((theme, i) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="border border-clay/30 p-5 flex flex-col gap-3 bg-ivory"
            >
              <span className="text-green-moroccan">{icons[theme.id]}</span>
              <span className="text-sm font-medium text-ink">
                {lang === "fr" ? theme.labelFr : lang === "ar" ? theme.labelAr : theme.labelEn}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
