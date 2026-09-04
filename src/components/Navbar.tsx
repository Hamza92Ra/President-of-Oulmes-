"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/content/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "/biography", label: t("nav.biography") },
    { href: "/parliament", label: t("nav.parliament") },
    { href: "/oulmes", label: t("nav.oulmes") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/timeline", label: t("nav.timeline") },
    { href: "/media", label: t("nav.media") },
    { href: "/transparency", label: t("nav.transparency") },
    { href: "/sources", label: t("nav.sources") },
    { href: "/2026", label: "2026" },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-clay/30">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-ink tracking-tight">
          Mohamed Achrourou
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        <button
          className="lg:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-clay/30 bg-ivory px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink/80"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>
      )}
    </header>
  );
}