import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const recordSections = [
  { label: "Biographie", href: "/biography" },
  { label: "Parcours politique", href: "/timeline" },
  { label: "Activité parlementaire", href: "/parliament" },
  { label: "Projets locaux", href: "/projects" },
  { label: "Sources", href: "/sources" },
  { label: "Couverture médiatique", href: "/media" },
];

export default function TransparencyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow="Public Record"
        title="Registre public"
        description="Ce site vise à donner une vue transparente, sourcée et vérifiable du parcours et de l'activité de Mohamed Achrourou."
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {recordSections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="border border-clay/30 p-4 hover:border-ink/40 transition-colors text-ink/80"
          >
            {section.label}
          </Link>
        ))}
      </section>

      <section className="border-t border-clay/30 pt-8">
        <h2 className="text-lg font-semibold text-ink mb-2">Corrections</h2>
        <p className="text-ink/70 mb-6">
          Si une information présentée sur ce site est inexacte ou incomplète,
          merci de nous contacter afin qu&apos;elle puisse être corrigée.
        </p>
        <p className="text-sm text-ink/50">
          Dernière mise à jour : {siteConfig.lastUpdated}
        </p>
      </section>
    </main>
  );
}
