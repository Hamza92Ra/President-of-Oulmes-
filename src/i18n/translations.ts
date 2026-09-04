export type Lang = "fr" | "ar" | "en";

// Ajoute une clé ici pour chaque texte du site que tu veux traduire.
// Chaque composant qui affiche du texte doit utiliser t("cléIci") au lieu
// d'écrire le texte en dur en français.
export const translations = {
    fr: {
        nav: {
            biography: "Biographie",
            parliament: "Parlement",
            oulmes: "Oulmès",
            projects: "Projets",
            timeline: "Parcours",
            media: "Médias",
            transparency: "Transparence",
            sources: "Sources",
            contact: "Contact",
        },
        footer: {
            updatedAt: "Dernière mise à jour :",
            sourcesNote:
                "Les informations sont présentées avec leurs sources lorsqu'elles sont disponibles.",
        },
        hero: {
            role: "Ingénieur · Élu local · Parlementaire",
            intro:
                "Découvrez son parcours professionnel, son expérience politique, son activité parlementaire et les initiatives documentées au niveau local.",
            ctaBiography: "Découvrir le parcours",
            ctaParliament: "Voir l'activité parlementaire",
        },
        pillars: {
            parliament: { title: "Parlement", description: "Son activité et bilan parlementaires." },
            oulmes: { title: "Oulmès", description: "Activité au niveau de la commune locale." },
            territory: { title: "Territoire", description: "Infrastructure, agriculture, eau et développement." },
            biography: { title: "Parcours", description: "Biographie professionnelle et politique." },
        },
    },
    ar: {
        nav: {
            biography: "السيرة الذاتية",
            parliament: "البرلمان",
            oulmes: "أولماس",
            projects: "المشاريع",
            timeline: "المسار",
            media: "وسائل الإعلام",
            transparency: "الشفافية",
            sources: "المصادر",
            contact: "اتصل بنا",
        },
        footer: {
            updatedAt: "آخر تحديث:",
            sourcesNote: "المعلومات معروضة مع مصادرها عند توفرها.",
        },
        hero: {
            role: "مهندس · منتخب محلي · برلماني",
            intro:
                "اكتشف مساره المهني، تجربته السياسية، نشاطه البرلماني والمبادرات الموثقة على المستوى المحلي.",
            ctaBiography: "اكتشف المسار",
            ctaParliament: "شاهد النشاط البرلماني",
        },
        pillars: {
            parliament: { title: "البرلمان", description: "نشاطه وحصيلته البرلمانية." },
            oulmes: { title: "أولماس", description: "النشاط على مستوى الجماعة المحلية." },
            territory: { title: "التراب", description: "البنية التحتية، الفلاحة، الماء والتنمية." },
            biography: { title: "المسار", description: "السيرة المهنية والسياسية." },
        },
    },
    en: {
        nav: {
            biography: "Biography",
            parliament: "Parliament",
            oulmes: "Oulmès",
            projects: "Projects",
            timeline: "Timeline",
            media: "Media",
            transparency: "Transparency",
            sources: "Sources",
            contact: "Contact",
        },
        footer: {
            updatedAt: "Last updated:",
            sourcesNote: "Information is presented with its sources when available.",
        },
        hero: {
            role: "Engineer · Local elected official · Member of Parliament",
            intro:
                "Discover his professional background, political experience, parliamentary activity and documented local initiatives.",
            ctaBiography: "Discover his background",
            ctaParliament: "View parliamentary activity",
        },
        pillars: {
            parliament: { title: "Parliament", description: "His parliamentary activity and record." },
            oulmes: { title: "Oulmès", description: "Activity at the local municipality level." },
            territory: { title: "Territory", description: "Infrastructure, agriculture, water and development." },
            biography: { title: "Background", description: "Professional and political biography." },
        },
    },
} as const;

export type TranslationShape = typeof translations.fr;