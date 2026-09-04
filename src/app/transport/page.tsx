import SectionHeader from "@/components/SectionHeader";
import ParliamentaryQuestionCard from "@/components/ParliamentaryQuestionCard";
import { parliamentQuestions } from "@/content/parliament";
import HomeMap from "@/components/HomeMap";
import ImageGallery from "@/components/ImageGallery";
import MotifDivider from "@/components/MotifDivider";

export default function TransportPage() {
  const transportQuestions = parliamentQuestions.filter(
    (q) => q.category === "Infrastructure" || q.category === "Transport"
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow="Territoire"
        title="Transport & Infrastructure"
        description="Route régionale 704, routes provinciales 4316 et 4325, routes rurales, sécurité routière, connexion ferroviaire à Khémisset."
      />

      <ImageGallery
        imageKeys={["road704", "road4316", "transportBridge", "transportRoad", "transportInfrastructure"]}
        className="mb-12"
      />

      <div className="mb-12">
        <HomeMap />
      </div>

      <MotifDivider />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {transportQuestions.map((q) => (
          <ParliamentaryQuestionCard key={q.id} question={q} />
        ))}
      </div>
    </main>
  );
}
