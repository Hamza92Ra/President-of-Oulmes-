import Link from "next/link";
import { parliamentQuestions } from "@/content/parliament";

export default function ParliamentFeed() {
  const latest = [...parliamentQuestions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-clay/30">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-ink">
          Dernière activité parlementaire
        </h2>
        <Link
          href="/parliament"
          className="text-sm text-green-moroccan underline underline-offset-2 hidden md:block"
        >
          Voir le registre complet →
        </Link>
      </div>

      <div className="divide-y divide-clay/20 border-y border-clay/20">
        {latest.map((q) => (
          <div
            key={q.id}
            className="flex flex-col md:flex-row md:items-center justify-between gap-2 py-4"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.1em] text-ink/40 mr-3">
                {new Date(q.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span className="text-ink font-medium">{q.titleFr}</span>
            </div>
            <span className="text-xs text-green-moroccan">{q.category}</span>
          </div>
        ))}
      </div>

      <Link
        href="/parliament"
        className="text-sm text-green-moroccan underline underline-offset-2 mt-6 inline-block md:hidden"
      >
        Voir le registre complet →
      </Link>
    </section>
  );
}
