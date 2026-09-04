import Timeline from "@/components/Timeline";
import SectionHeader from "@/components/SectionHeader";
import ImageGallery from "@/components/ImageGallery";
import MotifDivider from "@/components/MotifDivider";

export default function TimelinePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow="Parcours"
        title="Un parcours entre expertise, territoire et service public"
      />

      <ImageGallery
        imageKeys={["portraitFieldVisit", "portraitEventSpeech", "parliament", "oulmesCommune", "developmentForumGroup"]}
        className="mb-12"
      />

      <MotifDivider />

      <div className="mt-8">
        <Timeline />
      </div>
    </main>
  );
}
