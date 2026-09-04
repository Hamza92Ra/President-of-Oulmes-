"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";
import { translations, Lang } from "../i18n/translations";

type LanguageContextValue = {
    lang: Lang;
    setLang: (lang: Lang) => void;
    // t("nav.biography") -> lit translations[lang].nav.biography
    t: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
    undefined
);

function getNested(obj: unknown, path: string): string {
    const result = path
        .split(".")
        .reduce<unknown>(
            (acc, key) =>
                acc && typeof acc === "object" ? (acc as Record<string, unknown>)[key] : undefined,
            obj
        );
    return typeof result === "string" ? result : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>("fr");

    // Au premier rendu côté client, on relit la langue sauvegardée
    useEffect(() => {
        const saved = window.localStorage.getItem("preferredLang") as Lang | null;
        if (saved && ["fr", "ar", "en"].includes(saved)) {
            setLangState(saved);
        }
    }, []);

    // Chaque fois que la langue change, on met à jour <html lang="" dir="">
    // pour que l'arabe s'affiche bien en RTL, et on persiste le choix.
    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        window.localStorage.setItem("preferredLang", lang);
    }, [lang]);

    function setLang(next: Lang) {
        setLangState(next);
    }

    function t(path: string): string {
        return getNested(translations[lang], path);
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(): LanguageContextValue {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage doit être utilisé à l'intérieur de <LanguageProvider>");
    }
    return ctx;
}