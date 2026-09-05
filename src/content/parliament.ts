export type ParliamentCategory =
  | "Infrastructure"
  | "Transport"
  | "Health"
  | "Education"
  | "Agriculture"
  | "Water"
  | "Employment"
  | "Local Government"
  | "Economy"
  | "Environment"
  | "Other";

export type ParliamentQuestion = {
  id: string;
  titleAr: string;
  titleFr: string;
  titleEn: string;
  date: string;
  category: ParliamentCategory;
  ministry?: string;
  descriptionFr?: string;
  descriptionEn?: string;
  descriptionAr?: string;
  status: "documented-question";
  responseStatus: string;
  responseStatusAr?: string;
  source: {
    name: string;
    url: string;
  };
};

export const parliamentQuestions: ParliamentQuestion[] = [
  {
    id: "road-704-2026",
    titleFr: "Route régionale 704 reliant Oulmès et Aklimous",
    titleEn: "Regional Road 704 connecting Oulmès and Aklimous",
    titleAr: "الطريق الإقليمية 704 التي تربط أولماس وأكليموس",
    date: "2026-05-12",
    category: "Infrastructure",
    ministry: "Equipment and Water",
    status: "documented-question",
    responseStatus: "Response/status not yet documented on this website.",
    responseStatusAr: "لم يتم توثيق الرد / الحالة على هذا الموقع حتى الآن.",
    source: {
      name: "House of Representatives",
      url: "https://www.chambredesrepresentants.ma/m/mchrourou",
    },
  },
  {
    id: "road-4316-aitaiko-houdrane",
    titleFr:
      "État de la route provinciale 4316 reliant Aït Aïko et Houdrane",
    titleEn:
      "Poor condition of Provincial Road 4316 connecting Aït Aïko and Houdrane",
    titleAr: "حالة الطريق الإقليمية 4316 التي تربط آيت آيكو وهودران",
    date: "2026-06-11",
    category: "Infrastructure",
    ministry: "Equipment and Water",
    status: "documented-question",
    responseStatus: "Response/status not yet documented on this website.",
    responseStatusAr: "لم يتم توثيق الرد / الحالة على هذا الموقع حتى الآن.",
    source: {
      name: "House of Representatives",
      url: "https://www.chambredesrepresentants.ma/m/mchrourou",
    },
  },
  {
    id: "territorial-centers-upgrade",
    titleFr: "Mise à niveau des centres des collectivités territoriales",
    titleEn: "Upgrading and development of territorial-collectivity centers",
    titleAr: "ترقية وتطوير مراكز الجماعات الترابية",
    date: "2026-02-23",
    category: "Local Government",
    status: "documented-question",
    responseStatus: "Response/status not yet documented on this website.",
    responseStatusAr: "لم يتم توثيق الرد / الحالة على هذا الموقع حتى الآن.",
    source: {
      name: "House of Representatives",
      url: "https://www.chambredesrepresentants.ma/m/mchrourou",
    },
  },
  {
    id: "urban-centers-upgrade",
    titleFr: "Mise à niveau des centres urbains au Maroc",
    titleEn: "Upgrading urban centers in Morocco",
    titleAr: "ترقية المراكز الحضرية في المغرب",
    date: "2026-02-23",
    category: "Local Government",
    status: "documented-question",
    responseStatus: "Response/status not yet documented on this website.",
    responseStatusAr: "لم يتم توثيق الرد / الحالة على هذا الموقع حتى الآن.",
    source: {
      name: "House of Representatives",
      url: "https://www.chambredesrepresentants.ma/m/mchrourou",
    },
  },
  {
    id: "vocational-apprenticeship-expansion",
    titleFr: "Extension de la formation par apprentissage professionnel",
    titleEn: "Expansion of vocational apprenticeship training",
    titleAr: "توسيع برامج التكوين بالتمرين المهني",
    date: "2026-01-29",
    category: "Education",
    status: "documented-question",
    responseStatus: "Response/status not yet documented on this website.",
    responseStatusAr: "لم يتم توثيق الرد / الحالة على هذا الموقع حتى الآن.",
    source: {
      name: "House of Representatives",
      url: "https://www.chambredesrepresentants.ma/m/mchrourou",
    },
  },
  {
    id: "khemisset-railway-connection",
    titleFr: "Connexion de Khémisset au réseau ferroviaire national",
    titleEn: "Connecting Khémisset to the national railway network",
    titleAr: "ربط الخميسات بالشبكة السكك الحديدية الوطنية",
    date: "2025-01-15",
    category: "Transport",
    status: "documented-question",
    responseStatus: "Response/status not yet documented on this website.",
    responseStatusAr: "لم يتم توثيق الرد / الحالة على هذا الموقع حتى الآن.",
    source: {
      name: "House of Representatives",
      url: "https://www.chambredesrepresentants.ma/m/mchrourou",
    },
  },
  {
    id: "university-scholarships-khemisset",
    titleFr:
      "Augmentation des bourses universitaires pour les étudiants de la province de Khémisset",
    titleEn:
      "Increasing university scholarships allocated to students from Khémisset Province",
    titleAr: "زيادة المنح الجامعية للطلاب من محافظة الخميسات",
    date: "2024-07-19",
    category: "Education",
    status: "documented-question",
    responseStatus: "Response/status not yet documented on this website.",
    responseStatusAr: "لم يتم توثيق الرد / الحالة على هذا الموقع حتى الآن.",
    source: {
      name: "House of Representatives",
      url: "https://www.chambredesrepresentants.ma/m/mchrourou",
    },
  },
  {
    id: "industrial-zones-generalization",
    titleFr:
      "Généralisation des zones industrielles à l'ensemble des provinces et préfectures",
    titleEn: "Generalization of industrial zones across provinces and prefectures",
    titleAr: "تعميم المناطق الصناعية على جميع المحافظات والعمالات",
    date: "2024-11-15",
    category: "Economy",
    status: "documented-question",
    responseStatus: "Response/status not yet documented on this website.",
    responseStatusAr: "لم يتم توثيق الرد / الحالة على هذا الموقع حتى الآن.",
    source: {
      name: "House of Representatives",
      url: "https://www.chambredesrepresentants.ma/m/mchrourou",
    },
  },
  {
    id: "road-safety-strategy",
    titleFr:
      "Stratégie de sécurité routière / Agence nationale de la sécurité routière",
    titleEn: "Road-safety strategy / National Road Safety Agency",
    titleAr: "استراتيجية السلامة الطرقية / الوكالة الوطنية لسلامة الطرقات",
    date: "2024-05-31",
    category: "Transport",
    status: "documented-question",
    responseStatus: "Response/status not yet documented on this website.",
    responseStatusAr: "لم يتم توثيق الرد / الحالة على هذا الموقع حتى الآن.",
    source: {
      name: "House of Representatives",
      url: "https://www.chambredesrepresentants.ma/m/mchrourou",
    },
  },
  {
    id: "pe-teachers-training",
    titleFr: "Formation des enseignants d'éducation physique",
    titleEn: "Training of physical-education teachers",
    titleAr: "تكوين معلمي التربية البدنية",
    date: "2024-05-31",
    category: "Education",
    status: "documented-question",
    responseStatus: "Response/status not yet documented on this website.",
    responseStatusAr: "لم يتم توثيق الرد / الحالة على هذا الموقع حتى الآن.",
    source: {
      name: "House of Representatives",
      url: "https://www.chambredesrepresentants.ma/m/mchrourou",
    },
  },
  {
    id: "roads-4316-4325-maintenance",
    titleFr: "Entretien des routes provinciales 4316 et 4325",
    titleEn: "Maintenance of Provincial Roads 4316 and 4325",
    titleAr: "صيانة الطرق الإقليمية 4316 و 4325",
    date: "2021-12-14",
    category: "Infrastructure",
    status: "documented-question",
    responseStatus: "Response/status not yet documented on this website.",
    responseStatusAr: "لم يتم توثيق الرد / الحالة على هذا الموقع حتى الآن.",
    source: {
      name: "House of Representatives",
      url: "https://www.chambredesrepresentants.ma/m/mchrourou",
    },
  },
  {
    id: "food-safety-office-hr",
    titleFr:
      "Ressources humaines de l'Office national de sécurité sanitaire des aliments",
    titleEn: "Human resources at the National Office for Food Safety",
    titleAr: "الموارد البشرية بالمكتب الوطني لسلامة المنتجات الغذائية",
    date: "2021-11-23",
    category: "Health",
    status: "documented-question",
    responseStatus: "Response/status not yet documented on this website.",
    responseStatusAr: "لم يتم توثيق الرد / الحالة على هذا الموقع حتى الآن.",
    source: {
      name: "House of Representatives",
      url: "https://www.chambredesrepresentants.ma/m/mchrourou",
    },
  },
  {
    id: "vocational-training-fees",
    titleFr: "Frais d'inscription élevés à la formation professionnelle",
    titleEn: "High vocational-training registration fees",
    titleAr: "رسوم التسجيل المرتفعة في التكوين المهني",
    date: "2021-12-21",
    category: "Education",
    status: "documented-question",
    responseStatus: "Response/status not yet documented on this website.",
    responseStatusAr: "لم يتم توثيق الرد / الحالة على هذا الموقع حتى الآن.",
    source: {
      name: "House of Representatives",
      url: "https://www.chambredesrepresentants.ma/m/mchrourou",
    },
  },
];
