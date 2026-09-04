"use client";

import SectionHeader from "@/components/SectionHeader";
import MotifDivider from "@/components/MotifDivider";
import ImageGallery from "@/components/ImageGallery";
import { useLanguage } from "@/content/LanguageContext";

export default function EducationPage() {
  const { t, ta } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow={t("pages.education.eyebrow")}
        title={t("pages.education.title")}
      />
      <p className="text-editorial text-ink/80 mb-8">
        {t("pages.education.description")}
      </p>

      <ImageGallery
        imageKeys={["educationSchool", "educationStudents", "educationScholarship", "educationTeachers", "educationCampus"]}
      />

      <MotifDivider />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {ta("pages.education.topics").map((topic, i) => (
          <div key={i} className="border border-clay/30 p-4 text-center text-sm">{topic}</div>
        ))}
      </div>
    </main>
  );
}
