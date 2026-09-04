"use client";

import { ParliamentCategory } from "@/content/parliament";

const categories: (ParliamentCategory | "ALL")[] = [
  "ALL",
  "Infrastructure",
  "Transport",
  "Health",
  "Education",
  "Agriculture",
  "Water",
  "Employment",
  "Local Government",
  "Economy",
  "Environment",
  "Other",
];

type Props = {
  active: ParliamentCategory | "ALL";
  onChange: (category: ParliamentCategory | "ALL") => void;
};

export default function FilterBar({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-3 py-1.5 text-sm border transition-colors ${
            active === cat
              ? "bg-ink text-ivory border-ink"
              : "bg-transparent text-ink/70 border-clay/40 hover:border-ink/60"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}