export type Source = {
  id: string;
  nameFr: string;
  nameEn: string;
  nameAr: string;
  url: string;
};

export const sources: Record<string, Source> = {
  parliament: {
    id: "parliament",
    nameFr: "Chambre des Représentants",
    nameEn: "Moroccan House of Representatives",
    nameAr: "مجلس النواب المغربي",
    url: "https://www.chambredesrepresentants.ma/",
  },
  parliamentProfile: {
    id: "parliamentProfile",
    nameFr: "Mohamed Achrourou — Profil parlementaire",
    nameEn: "Mohamed Achrourou — Parliamentary Profile",
    nameAr: "محمد أشرورو — الملف البرلماني",
    url: "https://www.chambredesrepresentants.ma/m/mchrourou",
  },
  pam: {
    id: "pam",
    nameFr: "Parti Authenticité et Modernité (PAM)",
    nameEn: "Party of Authenticity and Modernity (PAM)",
    nameAr: "حزب الأصالة والمعاصرة",
    url: "https://pam.ma/",
  },
  oulmesCommune: {
    id: "oulmesCommune",
    nameFr: "Commune d'Oulmès — Site officiel",
    nameEn: "Commune d'Oulmès — Official Website",
    nameAr: "جماعة أولماس — الموقع الرسمي",
    url: "https://www.communeoulmes.ma/",
  },
};
