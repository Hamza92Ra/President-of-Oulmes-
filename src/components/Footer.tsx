"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/content/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    { label: t("nav.biography"), href: "/biography" },
    { label: t("nav.parliament"), href: "/parliament" },
    { label: t("nav.oulmes"), href: "/projects" },
    { label: t("nav.sources"), href: "/sources" },
    { label: t("nav.transparency"), href: "/transparency" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  return (
    <footer className="border-t border-clay/30 bg-ivory mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div>
            <p className="text-lg font-semibold text-ink">{siteConfig.name.ar}</p>
            <p className="text-ink/70">{siteConfig.name.fr}</p>
            <p className="text-sm text-ink/50 mt-1">{siteConfig.constituency.fr}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink/70 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-clay/20 mt-8 pt-6 text-xs text-ink/50 flex flex-col md:flex-row md:justify-between gap-2">
          <span>
            {t("footer.updatedAt")} {siteConfig.lastUpdated}
          </span>
          <span>{t("footer.sourcesNote")}</span>
        </div>
      </div>
    </footer>
  );
}