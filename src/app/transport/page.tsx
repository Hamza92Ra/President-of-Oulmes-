"use client";

import SectionHeader from "@/components/SectionHeader";
import ParliamentaryQuestionCard from "@/components/ParliamentaryQuestionCard";
import { parliamentQuestions } from "@/content/parliament";
import HomeMap from "@/components/HomeMap";
import ImageGallery from "@/components/ImageGallery";
import MotifDivider from "@/components/MotifDivider";
import { useLanguage } from "@/content/LanguageContext";

export default function TransportPage() {
  const { t } = useLanguage();

  const transportQuestions = parliamentQuestions.filter(
    (q) => q.category === "Infrastructure" || q.category === "Transport"
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow={t("pages.transport.eyebrow")}
        title={t("pages.transport.title")}
        description={t("pages.transport.description")}
      />

      <ImageGallery
        imageKeys={["road704", "road4316", "transportBridge", "transportRoad", "transportInfrastructure"]}
        className="mb-12"
      />

      <div className="mb-12">
        <HomeMap />
      </div>

      <MotifDivider />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {transportQuestions.map((q) => (
          <ParliamentaryQuestionCard key={q.id} question={q} />
        ))}
      </div>
    </main>
  );
}
