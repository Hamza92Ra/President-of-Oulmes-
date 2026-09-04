"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

export type Lang = "fr" | "ar" | "en";

type Dict = Record<string, Record<Lang, string>>;

// Central dictionary. Add a key here, then use t("yourKey") anywhere.
const dictionary: Dict = {
    navBiography: { fr: "Biographie", ar: "السيرة الذاتية", en: "Biography" },
    navParliament: { fr: "Parlement", ar: "البرلمان", en: "Parliament" },
    navOulmes: { fr: "Oulmès", ar: "أولماس", en: "Oulmès" },
    navProjects: { fr: "Projets", ar: "المشاريع", en: "Projects" },
    navTimeline: { fr: "Parcours", ar: "المسار", en: "Timeline" },
    navMedia: { fr: "Médias", ar: "وسائل الإعلام", en: "Media" },
    navTransparency: { fr: "Transparence", ar: "الشفافية", en: "Transparency" },
    navSources: { fr: "Sources", ar: "المصادر", en: "Sources" },
    nav2026: { fr: "2026", ar: "2026", en: "2026" },
    navContact: { fr: "Contact", ar: "اتصل بنا", en: "Contact" },
    footerLastUpdated: {
        fr: "Dernière mise à jour",
        ar: "آخر تحديث",
        en: "Last updated",
    },
    footerSourcesNote: {
        fr: "Les informations sont présentées avec leurs sources lorsqu'elles sont disponibles.",
        ar: "يتم تقديم المعلومات مع مصادرها عند توفرها.",
        en: "Information is presented with sources where available.",
    },
    openMenu: { fr: "Ouvrir le menu", ar: "فتح القائمة", en: "Open menu" },
    closeMenu: { fr: "Fermer le menu", ar: "إغلاق القائمة", en: "Close menu" },
};

interface LanguageContextValue {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (key: keyof typeof dictionary) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
    undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>("fr");

    // Load saved preference on mount (client only)
    useEffect(() => {
        const saved = window.localStorage.getItem("preferredLang") as Lang | null;
        if (saved === "fr" || saved === "ar" || saved === "en") {
            setLangState(saved);
        }
    }, []);

    // Keep <html lang> / dir in sync so Arabic renders RTL correctly
    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }, [lang]);

    function setLang(next: Lang) {
        setLangState(next);
        window.localStorage.setItem("preferredLang", next);
    }

    function t(key: keyof typeof dictionary): string {
        return dictionary[key]?.[lang] ?? String(key);
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return ctx;
}