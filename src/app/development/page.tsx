"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ForumYearTabs from "@/components/ForumYearTabs";
import MotifDivider from "@/components/MotifDivider";
import ImageGallery from "@/components/ImageGallery";
import { programmeThemes } from "@/content/development";
import { LayoutGrid, Wifi, Building2, Leaf, HeartHandshake, TrendingUp } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  digital: <Wifi size={20} />,
  "local-dev": <LayoutGrid size={20} />,
  infrastructure: <Building2 size={20} />,
  environment: <Leaf size={20} />,
  social: <HeartHandshake size={20} />,
  economy: <TrendingUp size={20} />,
};

export default function DevelopmentPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow="Oulmès"
        title="Forum de développement local d'Oulmès"
        description="Un rendez-vous documenté autour du développement local, de l'agriculture, de l'élevage Oulmès-Zaër, de la culture amazighe et de la société civile."
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
          eyebrow="Oulmès 2023–2028"
          title="Programme d'action communal"
          description="Thématiques documentées dans la consultation autour du Programme d'Action Communale 2023–2028. Ces thématiques ne constituent pas des engagements sauf indication officielle contraire."
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
                {theme.labelFr}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
