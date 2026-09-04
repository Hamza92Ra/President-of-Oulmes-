import Link from "next/link";
import { Project } from "@/content/projects";

type Props = {
  project: Project;
  href: string;
};

export default function ProjectCard({ project, href }: Props) {
  return (
    <Link
      href={href}
      className="block border border-clay/30 bg-ivory p-6 hover:border-ink/40 transition-colors"
    >
      <h3 className="text-lg font-semibold text-ink mb-2">
        {project.titleFr}
      </h3>
      {project.recognition && (
        <p className="text-sm text-green-moroccan mb-2">
          {project.recognition.fr} — {project.recognition.date}
        </p>
      )}
      {project.descriptionFr && (
        <p className="text-sm text-ink/70 line-clamp-3">
          {project.descriptionFr}
        </p>
      )}
    </Link>
  );
}