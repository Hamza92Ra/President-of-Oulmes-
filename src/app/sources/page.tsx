import SectionHeader from "@/components/SectionHeader";
import { sources } from "@/content/sources";
import SourceBadge from "@/components/SourceBadge";

export default function SourcesPage() {
  const sourceList = Object.values(sources);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow="Transparence"
        title="Sources"
        description="Tout ce qui est présenté sur ce site devrait pouvoir être tracé jusqu'à une source vérifiable."
      />

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-ink mb-4">
          Comment nous sourçons l&apos;information
        </h2>
        <ul className="space-y-2 text-ink/80 list-disc list-inside">
          <li>
            Les sources officielles du Parlement sont priorisées pour
            l&apos;activité parlementaire.
          </li>
          <li>
            Les sources municipales officielles sont priorisées pour les
            projets communaux.
          </li>
          <li>
            Les sources officielles du PAM sont utilisées pour les
            déclarations du parti.
          </li>
          <li>
            Les médias réputés sont utilisés pour le contexte historique et
            le reportage.
          </li>
          <li>Les allégations contestées sont clairement identifiées.</li>
          <li>
            Les allégations ne sont jamais présentées comme des faits établis.
          </li>
        </ul>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sourceList.map((source) => (
          <SourceBadge key={source.id} source={source.name} url={source.url} />
        ))}
      </section>
    </main>
  );
}
