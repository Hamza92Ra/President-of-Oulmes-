"use client";

import { projects } from "@/content/projects";
import SourceBadge from "@/components/SourceBadge";
import ImageGallery from "@/components/ImageGallery";
import { notFound } from "next/navigation";
import { useLanguage } from "@/content/LanguageContext";
import { localize } from "@/lib/localize";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const { t, lang } = useLanguage();
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  const title = localize(project, "title", lang);
  const description = localize(project, "description", lang);
  const details = lang === "ar" ? project.detailsAr : lang === "en" ? project.detailsEn : project.detailsFr;
  const problem = lang === "ar" ? project.problemAr : lang === "en" ? project.problemEn : project.problemFr;
  const impact = lang === "ar" ? project.impactAr : lang === "en" ? project.impactEn : project.impactFr;
  const status = lang === "ar" ? project.statusAr : lang === "en" ? project.statusEn : project.statusFr;
  const recognition = lang === "ar" ? project.recognition?.ar : lang === "en" ? project.recognition?.en : project.recognition?.fr;

  const imageKeys: Record<string, string[]> = {
    "ecological-baths": ["ecologicalBaths", "climateAward", "oulmesLandscape", "waterInfrastructure", "environmentConservation"],
    "water-supply-infrastructure": ["waterSupply", "waterInfrastructure", "waterWell", "environmentConservation", "oulmesMountains"],
    "local-economic-development": ["agricultureFields", "cattleOulmesZaer", "farmersOulmes", "oulmesMarket", "agricultureMarket"],
    "education-capacity-building": ["educationSchool", "educationStudents", "educationTeachers", "educationCampus", "educationScholarship"],
    "road-infrastructure-rehabilitation": ["road704", "road4316", "transportBridge", "transportRoad", "transportInfrastructure"],
    "healthcare-services-expansion": ["healthCampaign", "healthClinic", "healthMedicalTeam", "healthCenter", "healthCampaign2"],
    "cultural-heritage-preservation": ["cultureOulmes", "cultureAmazigh", "cultureFestival", "cultureHeritage", "cultureCeremony"],
    "bus-terminal-oulmès": ["transportBridge", "transportRoad", "transportInfrastructure", "oulmesTown", "oulmesCommune"],
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-[0.2em] text-green-moroccan font-medium">
          {t("ui.caseStudyLabel")}
        </span>
        <h1 className="text-3xl md:text-4xl font-semibold text-ink mt-2 mb-4">
          {title}
        </h1>
        <div className="flex items-center gap-4 text-sm">
          <span className="inline-block px-3 py-1 bg-green-moroccan/10 text-green-moroccan border border-green-moroccan/20">
            {status}
          </span>
          {project.startDate && (
            <span className="text-ink/60">
              {t("pages.projects.startDate")}: {project.startDate}
            </span>
          )}
          {project.endDate && (
            <span className="text-ink/60">
              {t("pages.projects.endDate")}: {project.endDate}
            </span>
          )}
        </div>
      </div>

      <ImageGallery
        imageKeys={imageKeys[params.id] || ["oulmesTown", "oulmesCommune", "oulmesMarket", "oulmesMountains", "cultureOulmes"]}
        className="mb-12"
      />

      {problem && (
        <section className="mb-12 border-l-4 border-green-moroccan pl-6">
          <h2 className="text-lg font-semibold text-ink mb-3">
            {t("pages.projects.problem")}
          </h2>
          <p className="text-ink/80 leading-relaxed">
            {problem}
          </p>
        </section>
      )}

      <section className="mb-12">
        <h2 className="text-lg font-semibold text-ink mb-3">
          {t("ui.project")}
        </h2>
        <p className="text-ink/80 leading-relaxed mb-6">
          {description}
        </p>
        {details && (
          <p className="text-ink/70 leading-relaxed italic">
            {details}
          </p>
        )}
      </section>

      {impact && (
        <section className="mb-12 bg-ivory p-6 border border-clay/30">
          <h2 className="text-lg font-semibold text-ink mb-3">
            {t("pages.projects.impact")}
          </h2>
          <p className="text-ink/80 leading-relaxed">
            {impact}
          </p>
        </section>
      )}

      {project.partners && project.partners.length > 0 && (
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-ink mb-3">
            {t("pages.projects.partners")}
          </h2>
          <ul className="list-disc list-inside text-ink/80 space-y-2">
            {project.partners.map((partner) => (
              <li key={partner} className="text-ink/80">
                {partner}
              </li>
            ))}
          </ul>
        </section>
      )}

      {recognition && (
        <section className="mb-12 border-t border-clay/30 pt-8">
          <h2 className="text-lg font-semibold text-ink mb-3">
            {t("ui.recognition")}
          </h2>
          <div className="bg-green-moroccan/5 p-6 border-l-4 border-green-moroccan">
            <p className="text-ink/80 font-medium">
              {recognition}
            </p>
            {project.recognition?.date && (
              <p className="text-sm text-ink/50 mt-2">
                {project.recognition.date}
              </p>
            )}
          </div>
          <p className="text-xs text-ink/50 mt-4 italic">
            {t("ui.awardDisclaimer")}
          </p>
        </section>
      )}

      <div className="border-t border-clay/30 pt-8">
        <SourceBadge source={project.source} url={project.source.url} />
      </div>
    </main>
  );
}
