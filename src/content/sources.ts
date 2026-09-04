export type Source = {
  id: string;
  name: string;
  url: string;
};

export const sources: Record<string, Source> = {
  parliament: {
    id: "parliament",
    name: "Moroccan House of Representatives",
    url: "https://www.chambredesrepresentants.ma/",
  },
  parliamentProfile: {
    id: "parliamentProfile",
    name: "Mohamed Achrourou — Parliamentary Profile",
    url: "https://www.chambredesrepresentants.ma/m/mchrourou",
  },
  pam: {
    id: "pam",
    name: "Parti Authenticité et Modernité (PAM)",
    url: "https://pam.ma/",
  },
  oulmesCommune: {
    id: "oulmesCommune",
    name: "Commune d'Oulmès — Official Website",
    url: "https://www.communeoulmes.ma/",
  },
};