export type Project = {
  id: string;
  titleFr: string;
  titleEn: string;
  titleAr: string;
  problemFr?: string;
  problemEn?: string;
  problemAr?: string;
  descriptionFr?: string;
  descriptionEn?: string;
  descriptionAr?: string;
  partners?: string[];
  recognition?: {
    fr: string;
    en: string;
    ar: string;
    date: string;
  };
  source: {
    name: string;
    url: string;
  };
};

export const projects: Project[] = [
  {
    id: "ecological-baths",
    titleFr: "Bains écologiques d'Oulmès",
    titleEn: "Ecological Oulmès Baths",
    titleAr: "حمامات أولماس البيئية",
    descriptionFr:
      "Le site officiel de la commune d'Oulmès indique que ce projet a été développé par la commune en partenariat avec l'Association Ingénierie et Développement et la Coalition marocaine des collectivités territoriales pour le climat.",
    descriptionEn:
      "The Oulmès commune's official website documents that this project was developed by the commune in partnership with Association Ingénierie et Développement and the Moroccan Coalition for Territorial Communities for Climate.",
    descriptionAr:
      "يوثق الموقع الرسمي لجماعة أولماس أن هذا المشروع تم تطويره من قبل الجماعة بالشراكة مع جمعية الهندسة والتنمية والتحالف المغربي للجماعات الترابية من أجل المناخ.",
    partners: [
      "Association Ingénierie et Développement",
      "Moroccan Coalition for Territorial Communities for Climate",
    ],
    recognition: {
      fr: "Prix international des maires pour le climat (International Climate Mayors Award), Paris",
      en: "International Climate Mayors Award, Paris",
      ar: "جائزة الرؤساء البلديين الدوليين للمناخ، باريس",
      date: "2022-09",
    },
    source: {
      name: "Commune d'Oulmès",
      url: "https://www.communeoulmes.ma/",
    },
  },
];