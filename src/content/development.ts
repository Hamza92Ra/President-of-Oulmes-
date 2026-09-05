export type ForumEdition = {
  year: string;
  hasDocumentedDetails: boolean;
};

export const forumEditions: ForumEdition[] = [
  { year: "2022", hasDocumentedDetails: false },
  { year: "2023", hasDocumentedDetails: false },
  { year: "2024", hasDocumentedDetails: false },
  { year: "2025", hasDocumentedDetails: false },
  { year: "2026", hasDocumentedDetails: false },
];

export const forumThemesFr: string[] = [
  "Développement local",
  "Agriculture",
  "Élevage bovin Oulmès-Zaër",
  "Culture amazighe",
  "Produits du terroir",
  "Société civile",
  "Projets de développement",
  "Sport",
  "Activité économique locale",
];

export const forumThemesEn: string[] = [
  "Local development",
  "Agriculture",
  "Oulmès-Zaër cattle breeding",
  "Amazigh culture",
  "Local products",
  "Civil society",
  "Development projects",
  "Sports",
  "Local economic activity",
];

export const forumThemesAr: string[] = [
  "التنمية المحلية",
  "الفلاحة",
  "تربية الماشية أولماس-زاير",
  "الثقافة الأمازيغية",
  "المنتجات المحلية",
  "المجتمع المدني",
  "مشاريع التنمية",
  "الرياضة",
  "النشاط الاقتصادي المحلي",
];

export type ProgrammeTheme = {
  id: string;
  labelFr: string;
  labelEn: string;
  labelAr: string;
};

export const programmeThemes: ProgrammeTheme[] = [
  { id: "digital", labelFr: "Administration numérique", labelEn: "Digital administration", labelAr: "الإدارة الرقمية" },
  { id: "local-dev", labelFr: "Développement local", labelEn: "Local development", labelAr: "التنمية المحلية" },
  { id: "infrastructure", labelFr: "Infrastructure", labelEn: "Infrastructure", labelAr: "البنية التحتية" },
  { id: "environment", labelFr: "Environnement", labelEn: "Environment", labelAr: "البيئة" },
  { id: "social", labelFr: "Services sociaux", labelEn: "Social services", labelAr: "الخدمات الاجتماعية" },
  { id: "economy", labelFr: "Économie locale", labelEn: "Local economy", labelAr: "الاقتصاد المحلي" },
];
