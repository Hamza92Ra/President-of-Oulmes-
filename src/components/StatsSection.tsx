import StatCard from "./StatCard";
import { sources } from "@/content/sources";

export default function StatsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 border-t border-clay/30">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard
          value="31"
          label="Questions parlementaires"
          sublabel="2021–2026"
          source={{
            name: sources.parliamentProfile.name,
            url: sources.parliamentProfile.url,
          }}
        />
        <StatCard
          value="2012–2015"
          label="Présidence du Conseil national des ingénieurs géomètres-topographes"
        />
        <StatCard
          value="2017"
          label="Élection rapportée à la tête du groupe parlementaire PAM"
        />
        <StatCard
          value="2026"
          label="Candidat PAM"
          sublabel="Khémisset–Oulmès"
          source={{
            name: sources.pam.name,
            url: sources.pam.url,
          }}
        />
      </div>
    </section>
  );
}