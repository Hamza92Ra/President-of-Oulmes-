import SectionHeader from "@/components/SectionHeader";
import MotifDivider from "@/components/MotifDivider";
import ImageGallery from "@/components/ImageGallery";

export default function WaterEnvironmentPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow="Eau & Environnement"
        title="Eau & Environnement"
      />
      <p className="text-editorial text-ink/80 mb-6">
        Thématiques documentées dans son activité parlementaire et locale :
        accès à l&apos;eau potable, ressources en eau, gestion durable de
        l&apos;eau, développement écologique.
      </p>
      <div className="flex flex-wrap gap-3 text-sm mb-8">
        <span className="border border-clay/40 px-3 py-1">Eau</span>
        <span className="border border-clay/40 px-3 py-1">Environnement</span>
        <span className="border border-clay/40 px-3 py-1">Territoire</span>
        <span className="border border-clay/40 px-3 py-1">Durabilité</span>
      </div>

      <ImageGallery
        imageKeys={["waterSupply", "waterInfrastructure", "environmentLandscape", "environmentConservation", "waterWell"]}
      />

      <MotifDivider />

      <p className="text-ink/70 mt-8">
        Voir aussi le projet des{" "}
        <a href="/projects/ecological-baths" className="underline text-green-moroccan">
          Bains écologiques d&apos;Oulmès
        </a>.
      </p>
    </main>
  );
}
