import SectionHeader from "@/components/SectionHeader";
import MotifDivider from "@/components/MotifDivider";
import ImageGallery from "@/components/ImageGallery";

export default function EducationPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader eyebrow="Éducation & Jeunesse" title="Éducation & Jeunesse" />
      <p className="text-editorial text-ink/80 mb-8">
        Sujets parlementaires documentés incluant la formation des
        enseignants d&apos;éducation physique, le personnel administratif de
        l&apos;éducation, les bourses universitaires pour les étudiants de la
        province de Khémisset, et la formation professionnelle.
      </p>

      <ImageGallery
        imageKeys={["educationSchool", "educationStudents", "educationScholarship", "educationTeachers", "educationCampus"]}
      />

      <MotifDivider />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="border border-clay/30 p-4 text-center text-sm">Éducation</div>
        <div className="border border-clay/30 p-4 text-center text-sm">Formation</div>
        <div className="border border-clay/30 p-4 text-center text-sm">Soutien étudiant</div>
        <div className="border border-clay/30 p-4 text-center text-sm">Jeunesse</div>
      </div>
    </main>
  );
}
