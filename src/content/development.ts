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

export const forumThemes: string[] = [
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

export type ProgrammeTheme = {
  id: string;
  labelFr: string;
};

export const programmeThemes: ProgrammeTheme[] = [
  { id: "digital", labelFr: "Administration numérique" },
  { id: "local-dev", labelFr: "Développement local" },
  { id: "infrastructure", labelFr: "Infrastructure" },
  { id: "environment", labelFr: "Environnement" },
  { id: "social", labelFr: "Services sociaux" },
  { id: "economy", labelFr: "Économie locale" },
];
