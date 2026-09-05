"use client";

import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ImageGallery from "@/components/ImageGallery";
import { images } from "@/config/images";
import Link from "next/link";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import MotifDivider from "@/components/MotifDivider";
import { useLanguage } from "@/content/LanguageContext";

export default function OulmesPage() {
  const { t, lang } = useLanguage();

  const oulmesAreas = [
    {
      href: "/agriculture",
      titleKey: "pages.territoryAgriculture",
      descKey: "pages.agriculture.support",
    },
    {
      href: "/water-environment",
      titleKey: "pages.water.title",
      descKey: "pages.water.description",
    },
    {
      href: "/health",
      titleKey: "pages.health.title",
      descKey: "pages.health.intro",
    },
    {
      href: "/education",
      titleKey: "pages.education.title",
      descKey: "pages.education.description",
    },
    {
      href: "/culture",
      titleKey: "pages.culture.title",
      descKey: "pages.culture.description",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow={t("pages.oulmes.eyebrow")}
        title={t("pages.oulmes.title")}
        description={t("pages.oulmes.description")}
      />

      <ImagePlaceholder
        src={images.oulmesLandscape}
        alt={t("pages.oulmes.title")}
        label="oulmes-landscape.jpg"
        aspectRatio="21/9"
        className="mb-8"
      />

      <ImageGallery
        imageKeys={["oulmesTown", "oulmesCommune", "oulmesMarket", "oulmesMountains", "cultureOulmes"]}
        className="mb-12"
      />

      <section className="mb-16">
        <h2 className="text-xl font-semibold text-ink mb-6 tracking-tight">
          {t("pages.oulmes.projectsTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              href={`/projects/${project.id}`}
            />
          ))}
        </div>
      </section>

      <MotifDivider />

      <section className="mt-16">
        <h2 className="text-xl font-semibold text-ink mb-6 tracking-tight">
          {t("pages.oulmes.themesTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {oulmesAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="border border-clay/30 p-5 hover:border-ink/40 transition-colors"
            >
              <h3 className="font-medium text-ink mb-2">{t(area.titleKey)}</h3>
              <p className="text-sm text-ink/70">{t(area.descKey)}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
