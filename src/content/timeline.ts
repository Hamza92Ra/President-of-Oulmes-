export type TimelineEvent = {
  id: string;
  year: string; // e.g. "2022" or "2021–2026"
  titleFr: string;
  titleEn: string;
  descriptionFr?: string;
  descriptionEn?: string;
  source?: {
    name: string;
    url: string;
  };
};

export const timelineEvents: TimelineEvent[] = [
  {
    id: "surveying-council-presidency",
    year: "2012–2015",
    titleFr: "Présidence du Conseil national de l'Ordre des ingénieurs géomètres-topographes",
    titleEn: "President of the National Council of Surveying Engineers",
  },
  {
    id: "pam-group-leadership-2017",
    year: "2017",
    titleFr: "Élection rapportée à la présidence du groupe parlementaire PAM à la Chambre des Représentants",
    titleEn: "Reported election as president of the PAM parliamentary group in the House of Representatives",
  },
  {
    id: "cattle-federation-1",
    year: "2019",
    titleFr: "Présidence de la fédération nationale associée aux éleveurs de bovins Oulmès-Zaër",
    titleEn: "Presidency of the national federation associated with Oulmès-Zaër cattle breeders",
  },
  {
    id: "legislature-2021-2026",
    year: "2021–2026",
    titleFr: "Membre de la Chambre des Représentants",
    titleEn: "Member of the House of Representatives",
    source: {
      name: "House of Representatives",
      url: "https://www.chambredesrepresentants.ma/m/mchrourou",
    },
  },
  {
    id: "pam-provincial-secretary-2022",
    year: "2022",
    titleFr: "Élection au poste de secrétaire provincial du PAM à Khémisset",
    titleEn: "Election as PAM provincial secretary for Khémisset",
  },
  {
    id: "climate-award-2022",
    year: "2022",
    titleFr: "Reconnaissance climatique de la commune d'Oulmès",
    titleEn: "Oulmès commune climate recognition",
    source: {
      name: "Commune d'Oulmès",
      url: "https://www.communeoulmes.ma/",
    },
  },
  {
    id: "commune-president",
    year: "To be verified",
    titleFr: "Président de la commune d'Oulmès",
    titleEn: "President of the Oulmès commune",
  },
  {
    id: "candidate-2026",
    year: "2026",
    titleFr: "Candidat du PAM pour la circonscription de Khémisset–Oulmès",
    titleEn: "PAM candidate for Khémisset–Oulmès",
  },
];