import SectionHeader from "@/components/SectionHeader";
import MotifDivider from "@/components/MotifDivider";
import ImageGallery from "@/components/ImageGallery";

export default function AgriculturePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow="Territoire & Agriculture"
        title="Territoire & Agriculture"
      />
      <p className="text-editorial text-ink/80 mb-6">
        Achrourou a été rapporté comme président de la fédération nationale
        associée aux éleveurs de la race bovine Oulmès-Zaër.
      </p>
      <div className="flex flex-wrap items-center gap-3 text-sm text-ink/70 mb-8">
        <span className="border border-clay/40 px-3 py-1">Terre</span>
        <span>→</span>
        <span className="border border-clay/40 px-3 py-1">Éleveurs</span>
        <span>→</span>
        <span className="border border-clay/40 px-3 py-1">Oulmès-Zaër</span>
        <span>→</span>
        <span className="border border-clay/40 px-3 py-1">Économie locale</span>
        <span>→</span>
        <span className="border border-clay/40 px-3 py-1">Patrimoine</span>
      </div>

      <ImageGallery
        imageKeys={["agricultureOulmes", "cattleOulmesZaer", "farmersOulmes", "agricultureFields", "agricultureMarket"]}
      />

      <MotifDivider />

      <ul className="list-disc list-inside text-ink/80 space-y-1 mt-8">
        <li>Soutien aux éleveurs</li>
        <li>Programmes de prévention / santé animale</li>
        <li>Coopération avec le ministère de l&apos;Agriculture</li>
        <li>Préservation de la race Oulmès-Zaër</li>
        <li>Économie rurale</li>
      </ul>
      <p className="text-xs text-ink/50 italic mt-6">
        Ces thématiques ne constituent pas des promesses sauf indication
        officielle contraire.
      </p>
    </main>
  );
}
