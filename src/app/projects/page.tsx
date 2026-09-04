"use client";

import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/content/LanguageContext";

export default function ProjectsPage() {
  const { t } = useLanguage();
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow={t("pages.projects.eyebrow")}
        title={t("pages.projects.title")}
        description={t("pages.projects.description")}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            href={`/projects/${project.id}`}
          />
        ))}
      </div>
    </main>
  );
}
