import SectionHeader from "@/components/SectionHeader";
import MotifDivider from "@/components/MotifDivider";
import ImageGallery from "@/components/ImageGallery";

export default function HealthPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader eyebrow="Santé" title="Santé" />
      <p className="text-editorial text-ink/80 mb-4">
        Une publication du PAM en 2026 rapporte qu&apos;Achrourou a évoqué la
        réforme de la santé et l&apos;importance d&apos;un personnel médical
        qualifié.
      </p>
      <p className="text-xs text-ink/50 italic mb-8">
        Position exprimée lors d&apos;une discussion parlementaire — non une
        affirmation objective de résultats obtenus.
      </p>

      <ImageGallery
        imageKeys={["healthCampaign", "healthClinic", "healthMedicalTeam", "healthCenter", "healthCampaign2"]}
      />

      <MotifDivider />

      <ul className="list-disc list-inside text-ink/80 space-y-1 mt-8">
        <li>Réforme de la santé</li>
        <li>Santé rurale</li>
        <li>Personnel médical et paramédical</li>
        <li>Disponibilité des médicaments</li>
        <li>Campagnes médicales locales</li>
      </ul>
    </main>
  );
}
