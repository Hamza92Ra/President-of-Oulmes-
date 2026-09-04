import SectionHeader from "@/components/SectionHeader";
import ImageGallery from "@/components/ImageGallery";

export default function MediaPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow="Transparence"
        title="Couverture médiatique et controverses publiques"
        description="Cette page distingue les allégations et litiges rapportés des faits établis."
      />

      <ImageGallery
        imageKeys={["mediaCoverage", "mediaInterview", "mediaPressConference", "mediaPublication", "mediaEvent"]}
        className="mb-10"
      />

      <section className="border border-clay/30 bg-ivory p-6 mb-8">
        <span className="inline-block text-[10px] uppercase tracking-[0.15em] bg-burgundy/10 text-burgundy px-2 py-1 mb-4">
          Litige rapporté
        </span>

        <h2 className="text-xl font-semibold text-ink mb-3">
          Litige concernant un marché public — gare routière d&apos;Oulmès
          (2025)
        </h2>

        <div className="space-y-4 text-ink/80 leading-relaxed">
          <div>
            <h3 className="text-sm uppercase tracking-[0.1em] text-ink/50 mb-1">
              Ce qui a été rapporté
            </h3>
            <p>
              Des reportages médiatiques en 2025 ont décrit un litige
              concernant la procédure de passation de marché du projet de
              gare routière d&apos;Oulmès et rapporté une plainte relative à la
              procédure d&apos;appel d&apos;offres.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.1em] text-ink/50 mb-1">
              Réponse officielle
            </h3>
            <p className="italic text-ink/60">
              Réponse officielle : non trouvée dans les sources examinées.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.1em] text-ink/50 mb-1">
              Statut actuel
            </h3>
            <p className="italic text-ink/60">À vérifier.</p>
          </div>
        </div>

        <p className="text-xs text-ink/50 mt-6 border-t border-clay/20 pt-4">
          Cette page sera mise à jour si une réponse officielle vérifiée
          devient disponible. Les allégations rapportées ne constituent pas
          des faits établis.
        </p>
      </section>

      <p className="text-sm text-ink/60">
        Aucune autre controverse documentée n&apos;a été identifiée dans les
        sources examinées à ce jour.
      </p>
    </main>
  );
}
