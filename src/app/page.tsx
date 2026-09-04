import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import StoryFlow from "@/components/StoryFlow";
import FourPillars from "@/components/FourPillars";
import ParliamentFeed from "@/components/ParliamentFeed";
import OulmesPreview from "@/components/OulmesPreview";
import SourceCategories from "@/components/SourceCategories";
import HomeMap from "@/components/HomeMap";
import MotifDivider from "@/components/MotifDivider";
import ImageGallery from "@/components/ImageGallery";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <MotifDivider />
      <StatsSection />
      <StoryFlow />
      <FourPillars />

      <MotifDivider />
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-clay/30">
        <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-8 tracking-tight">
          Territoire — Khémisset &amp; Oulmès
        </h2>
        <HomeMap />

        <div className="mt-10">
          <ImageGallery
            imageKeys={["oulmesLandscape", "oulmesTown", "oulmesMountains", "agricultureFields", "cultureOulmes"]}
          />
        </div>
      </section>

      <ParliamentFeed />
      <MotifDivider />
      <OulmesPreview />
      <SourceCategories />
    </main>
  );
}
