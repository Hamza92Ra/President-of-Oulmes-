import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow="Oulmès"
        title="Projets et initiatives documentés"
        description="Ces projets sont associés à la commune d'Oulmès durant le mandat d'Achrourou en tant que président de la commune ; cela ne signifie pas nécessairement qu'il a personnellement exécuté chaque projet."
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
