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
  const { t } = useLanguage();

  const oulmesAreas = [
    {
      href: "/agriculture",
      title: t("pages.territoryAgriculture"),
      description: "Éleveurs, race bovine Oulmès-Zaër, économie rurale.",
    },
    {
      href: "/water-environment",
      title: t("pages.water.title"),
      description: "Accès à l'eau potable, gestion durable, écologie.",
    },
    {
      href: "/health",
      title: t("pages.health.title"),
      description: "Réforme de la santé, personnel médical, campagnes locales.",
    },
    {
      href: "/education",
      title: t("pages.education.title"),
      description: "Formation, bourses, encadrement des jeunes.",
    },
    {
      href: "/culture",
      title: t("pages.culture.title"),
      description: "Culture amazighe, régionalisation avancée.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow="العمل في أولماس"
        title="Action à Oulmès"
        description="Ces projets et initiatives sont associés à la commune d'Oulmès durant le mandat d'Achrourou en tant que président de la commune ; cela ne signifie pas nécessairement qu'il a personnellement exécuté chaque projet."
      />

      <ImagePlaceholder
        src={images.oulmesLandscape}
        alt="Oulmès"
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
          Projets communaux documentés
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
          Thématiques locales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {oulmesAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="border border-clay/30 p-5 hover:border-ink/40 transition-colors"
            >
              <h3 className="font-medium text-ink mb-2">{area.title}</h3>
              <p className="text-sm text-ink/70">{area.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
