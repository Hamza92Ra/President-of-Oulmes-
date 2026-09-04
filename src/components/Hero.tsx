import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
      <div>
        <p className="text-3xl text-ink/50 mb-3 font-arabic">
          {siteConfig.name.ar}
        </p>
        <h1 className="text-display md:text-display-lg font-semibold text-ink leading-[1.05] mb-6 tracking-tight">
          {siteConfig.name.fr}
        </h1>
        <p className="text-ink/70 mb-1 text-lg">
          Ingénieur · Élu local · Parlementaire
        </p>
        <p className="text-ink/70 mb-8 text-lg">{siteConfig.constituency.fr}</p>

        <p className="text-editorial text-ink/80 mb-10 max-w-prose2">
          Découvrez son parcours professionnel, son expérience politique, son
          activité parlementaire et les initiatives documentées au niveau
          local.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/biography"
            className="px-6 py-3.5 bg-ink text-ivory text-sm font-medium tracking-wide hover:bg-ink/90 transition-colors"
          >
            Découvrir le parcours
          </Link>
          <Link
            href="/parliament"
            className="px-6 py-3.5 border border-ink/30 text-ink text-sm font-medium tracking-wide hover:border-ink transition-colors"
          >
            Voir l&apos;activité parlementaire
          </Link>
        </div>
      </div>

      <ImagePlaceholder
        src={images.hero}
        alt="Mohamed Achrourou"
        label="hero-mohamed-achrourou.jpg"
        aspectRatio="4/5"
      />
    </section>
  );
}
