import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import { images } from "@/config/images";
import { projects } from "@/content/projects";

export default function OulmesPreview() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-clay/30">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-ink">
          Oulmès
        </h2>
        <Link
          href="/oulmes"
          className="text-sm text-green-moroccan underline underline-offset-2 hidden md:block"
        >
          Voir l&apos;action à Oulmès →
        </Link>
      </div>

      <ImagePlaceholder
        src={images.oulmesLandscape}
        alt="Oulmès"
        label="oulmes-landscape.jpg"
        aspectRatio="21/9"
        className="mb-10"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="border border-clay/30 p-4 hover:border-ink/40 transition-colors"
          >
            <h3 className="text-sm font-medium text-ink mb-1">
              {project.titleFr}
            </h3>
            {project.recognition && (
              <p className="text-xs text-green-moroccan">
                {project.recognition.date}
              </p>
            )}
          </Link>
        ))}
        <Link
          href="/development"
          className="border border-clay/30 p-4 hover:border-ink/40 transition-colors"
        >
          <h3 className="text-sm font-medium text-ink mb-1">
            Forum de développement local
          </h3>
        </Link>
        <Link
          href="/development"
          className="border border-clay/30 p-4 hover:border-ink/40 transition-colors"
        >
          <h3 className="text-sm font-medium text-ink mb-1">
            Programme d&apos;action communal 2023–2028
          </h3>
        </Link>
      </div>

      <Link
        href="/oulmes"
        className="text-sm text-green-moroccan underline underline-offset-2 mt-8 inline-block md:hidden"
      >
        Voir l&apos;action à Oulmès →
      </Link>
    </section>
  );
}
