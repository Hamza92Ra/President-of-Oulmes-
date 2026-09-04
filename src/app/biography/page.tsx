import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ImageGallery from "@/components/ImageGallery";
import { images } from "@/config/images";
import SourceBadge from "@/components/SourceBadge";
import { sources } from "@/content/sources";
import MotifDivider from "@/components/MotifDivider";

export default function BiographyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow="Biographie"
        title="Mohamed Achrourou"
        description="Ingénieur topographe de formation, il a occupé des responsabilités professionnelles, associatives et politiques documentées ci-dessous."
      />

      <ImagePlaceholder
        src={images.portrait}
        alt="Mohamed Achrourou"
        label="portrait-mohamed-achrourou.jpg"
        aspectRatio="3/4"
        className="max-w-sm mb-12"
      />

      <ImageGallery
        imageKeys={["portraitFieldVisit", "portraitEventSpeech", "portraitCommunityMeeting", "parliament", "oulmesTown"]}
        className="mb-12"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-ink mb-4 tracking-tight">
          Parcours professionnel
        </h2>
        <p className="text-ink/80 leading-relaxed mb-3">
          Ingénieur topographe / géomètre, avec une expérience professionnelle
          associée à l&apos;administration topographique et à
          l&apos;immatriculation foncière.
        </p>
        <p className="text-ink/80 leading-relaxed mb-3">
          Expérience professionnelle rapportée à Khénifra, Casablanca, Tétouan
          et Rabat, avant l&apos;exercice en pratique privée de géomètre.
        </p>
        <p className="text-ink/80 leading-relaxed mb-3">
          Présidence du Conseil national de l&apos;Ordre des ingénieurs
          géomètres-topographes, 2012–2015.
        </p>
        <p className="text-sm text-ink/50 italic">
          Formation d&apos;ingénieur — établissement à vérifier.
        </p>
      </section>

      <MotifDivider />

      <section className="mt-12 mb-12">
        <h2 className="text-2xl font-semibold text-ink mb-4 tracking-tight">
          Parcours politique
        </h2>
        <ul className="space-y-3 text-ink/80">
          <li>
            <strong>2017</strong> — Élection rapportée à la présidence du
            groupe parlementaire PAM à la Chambre des Représentants.
          </li>
          <li>
            <strong>2019</strong> — Présidence de la fédération nationale
            associée aux éleveurs de bovins Oulmès-Zaër.
          </li>
          <li>
            <strong>2021–2026</strong> — Membre de la Chambre des
            Représentants pour la circonscription de Khémisset–Oulmès.
          </li>
          <li>
            <strong>2022</strong> — Élection au poste de secrétaire
            provincial du PAM à Khémisset.
          </li>
          <li>
            <strong>À vérifier</strong> — Président de la commune d&apos;Oulmès
            (date d&apos;entrée en fonction à confirmer).
          </li>
          <li>
            <strong>2026</strong> — Candidat du PAM pour la circonscription de
            Khémisset–Oulmès.
          </li>
        </ul>
      </section>

      <SourceBadge
        source={sources.parliamentProfile.name}
        url={sources.parliamentProfile.url}
      />
    </main>
  );
}
