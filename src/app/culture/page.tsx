import SectionHeader from "@/components/SectionHeader";
import MotifDivider from "@/components/MotifDivider";
import ImageGallery from "@/components/ImageGallery";

export default function CulturePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader eyebrow="Culture & Identité" title="Culture & Identité" />
      <p className="text-editorial text-ink/80 mb-8">
        Des documents du PAM décrivent la participation d&apos;Achrourou à des
        discussions concernant l&apos;identité amazighe, la mise en œuvre
        après la Constitution de 2011, la langue amazighe, et la
        régionalisation avancée.
      </p>

      <ImageGallery
        imageKeys={["cultureOulmes", "cultureAmazigh", "cultureFestival", "cultureHeritage", "cultureCeremony"]}
      />

      <MotifDivider />

      <p className="text-xs text-ink/50 italic mt-8">
        Ne pas transformer ceci en un programme culturel plus large en
        l&apos;absence d&apos;un programme officiel fourni.
      </p>
    </main>
  );
}
