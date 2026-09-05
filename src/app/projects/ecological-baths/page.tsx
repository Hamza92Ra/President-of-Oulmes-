"use client";

import { projects } from "@/content/projects";
import SourceBadge from "@/components/SourceBadge";
import ImageGallery from "@/components/ImageGallery";
import { notFound } from "next/navigation";
import { useLanguage } from "@/content/LanguageContext";
import { localize } from "@/lib/localize";

export default function EcologicalBathsPage() {
  const { t, lang } = useLanguage();
  const project = projects.find((p) => p.id === "ecological-baths");
  if (!project) return notFound();

  const recognition = lang === "ar" ? project.recognition?.ar : lang === "en" ? project.recognition?.en : project.recognition?.fr;

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <span className="text-xs uppercase tracking-[0.2em] text-green-moroccan font-medium">
        {t("ui.caseStudyLabel")}
      </span>
      <h1 className="text-3xl md:text-4xl font-semibold text-ink mt-2 mb-8">
        {localize(project, "title", lang)}
      </h1>

      <ImageGallery
        imageKeys={["ecologicalBaths", "climateAward", "oulmesLandscape", "waterInfrastructure", "environmentConservation"]}
        className="mb-10"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-sm uppercase tracking-[0.15em] text-ink/50 mb-2">
            {t("ui.project")}
          </h2>
          <p className="text-ink/80 leading-relaxed">
            {localize(project, "description", lang)}
          </p>
        </div>

        {project.partners && (
          <div>
            <h2 className="text-sm uppercase tracking-[0.15em] text-ink/50 mb-2">
              {t("ui.partners")}
            </h2>
            <ul className="list-disc list-inside text-ink/80 space-y-1">
              {project.partners.map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {project.recognition && (
        <div className="border-t border-clay/30 pt-6 mb-8">
          <h2 className="text-sm uppercase tracking-[0.15em] text-ink/50 mb-2">
            {t("ui.recognition")}
          </h2>
          <p className="text-ink/80">
            {recognition} — {project.recognition.date}
          </p>
          <p className="text-xs text-ink/50 mt-2 italic">
            {t("ui.awardDisclaimer")}
          </p>
        </div>
      )}

      <SourceBadge source={project.source} url={project.source.url} />
    </main>
  );
}
