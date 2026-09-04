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
    t: (path: string) => string;
    ta: (path: string) => string[];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
    undefined
);

function getNested(obj: unknown, path: string): unknown {
    return path
        .split(".")
        .reduce<unknown>(
            (acc, key) =>
                acc && typeof acc === "object"
                    ? (acc as Record<string, unknown>)[key]
                    : undefined,
            obj
        );
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>("fr");

    useEffect(() => {
        const saved = window.localStorage.getItem("preferredLang") as Lang | null;
        if (saved && ["fr", "ar", "en"].includes(saved)) {
            setLangState(saved);
        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        window.localStorage.setItem("preferredLang", lang);
    }, [lang]);

    function setLang(next: Lang) {
        setLangState(next);
    }

    function t(path: string): string {
        const result = getNested(translations[lang], path);
        return typeof result === "string" ? result : path;
    }

    function ta(path: string): string[] {
        const result = getNested(translations[lang], path);
        return Array.isArray(result)
            ? result.filter((item): item is string => typeof item === "string")
            : [];
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang, t, ta }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(): LanguageContextValue {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error(
            "useLanguage doit être utilisé à l'intérieur de <LanguageProvider>"
        );
    }
    return ctx;
}