import Link from "next/link";
import { Landmark, MapPin, TreePine, User } from "lucide-react";

const pillars = [
  {
    href: "/parliament",
    icon: Landmark,
    title: "Parlement",
    description: "Son activité et bilan parlementaires.",
  },
  {
    href: "/oulmes",
    icon: MapPin,
    title: "Oulmès",
    description: "Activité au niveau de la commune locale.",
  },
  {
    href: "/transport",
    icon: TreePine,
    title: "Territoire",
    description: "Infrastructure, agriculture, eau et développement.",
  },
  {
    href: "/biography",
    icon: User,
    title: "Parcours",
    description: "Biographie professionnelle et politique.",
  },
];

export default function FourPillars() {
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
              <h3 className="font-semibold text-ink mb-2">{pillar.title}</h3>
              <p className="text-sm text-ink/70">{pillar.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
