import Link from "next/link";
import { Project } from "@/content/projects";
import { useLanguage } from "@/content/LanguageContext";
import { localize } from "@/lib/localize";

type Props = {
  project: Project;
  href: string;
};

export default function ProjectCard({ project, href }: Props) {
  const { lang } = useLanguage();

  const title = localize(project, "title", lang);
  const recognition = lang === "ar" ? project.recognition?.ar : lang === "en" ? project.recognition?.en : project.recognition?.fr;
  const description = localize(project, "description", lang);

  return (
    <Link
      href={href}
      className="block border border-clay/30 bg-ivory p-6 hover:border-ink/40 transition-colors"
    >
      <h3 className="text-lg font-semibold text-ink mb-2">
        {title}
      </h3>
      {recognition && (
        <p className="text-sm text-green-moroccan mb-2">
          {recognition} — {project.recognition?.date}
        </p>
      )}
      {description && (
        <p className="text-sm text-ink/70 line-clamp-3">
          {description}
        </p>
      )}
    </Link>
  );
}