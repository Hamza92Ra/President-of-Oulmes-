"use client";

import Link from "next/link";
import { Landmark, MapPin, TreePine, User } from "lucide-react";
import { useLanguage } from "@/content/LanguageContext";

export default function FourPillars() {
  const { t } = useLanguage();

  const pillars = [
    { href: "/parliament", icon: Landmark, key: "parliament" },
    { href: "/oulmes", icon: MapPin, key: "oulmes" },
    { href: "/transport", icon: TreePine, key: "territory" },
    { href: "/biography", icon: User, key: "biography" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-clay/30">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="border border-clay/30 p-6 hover:border-ink/40 hover:-translate-y-0.5 transition-all bg-ivory"
            >
              <Icon className="text-green-moroccan mb-4" size={24} />
              <h3 className="font-semibold text-ink mb-2">
                {t(`pillars.${pillar.key}.title`)}
              </h3>
              <p className="text-sm text-ink/70">
                {t(`pillars.${pillar.key}.description`)}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}