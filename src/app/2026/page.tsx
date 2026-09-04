import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/config/site";
import SourceBadge from "@/components/SourceBadge";
import { sources } from "@/content/sources";
import ImageGallery from "@/components/ImageGallery";

export default function Election2026Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow="2026"
        title="Khémisset–Oulmès"
        description="Élections législatives marocaines de 2026."
      />

      <ImageGallery
        imageKeys={["portraitEventSpeech", "parliament", "oulmesTown", "mediaPressConference", "developmentForumGroup"]}
        className="mb-10"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="border-t-2 border-ink/80 pt-3">
          <span className="text-xs uppercase tracking-[0.1em] text-ink/50 block mb-1">
            Candidat
          </span>
          <span className="text-lg font-medium text-ink">
            {siteConfig.name.fr}
          </span>
        </div>
        <div className="border-t-2 border-ink/80 pt-3">
          <span className="text-xs uppercase tracking-[0.1em] text-ink/50 block mb-1">
            Parti
          </span>
          <span className="text-lg font-medium text-ink">
            {siteConfig.party.en}
          </span>
        </div>
        <div className="border-t-2 border-ink/80 pt-3">
          <span className="text-xs uppercase tracking-[0.1em] text-ink/50 block mb-1">
            Circonscription
          </span>
          <span className="text-lg font-medium text-ink">
            {siteConfig.constituency.fr}
          </span>
        </div>
      </div>

      <p className="text-ink/60 italic mb-8">
        Détails officiels de la liste des candidats à vérifier.
      </p>

      <SourceBadge source={sources.pam.name} url={sources.pam.url} />
    </main>
  );
}
