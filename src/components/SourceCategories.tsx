import Link from "next/link";

const categories = [
  { label: "Parlement officiel", href: "/sources" },
  { label: "PAM", href: "/sources" },
  { label: "Commune d'Oulmès", href: "/sources" },
  { label: "Médias", href: "/media" },
  { label: "Documents publics", href: "/transparency" },
];

export default function SourceCategories() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-clay/30 text-center">
      <p className="text-ink/70 max-w-lg mx-auto mb-8">
        Tout ce que vous lisez sur ce site devrait être traçable.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <span
            key={cat.label}
            className="text-xs uppercase tracking-[0.1em] px-4 py-2 border border-clay/40 text-ink/70"
          >
            {cat.label}
          </span>
        ))}
      </div>
      <Link
        href="/sources"
        className="inline-block px-5 py-3 bg-ink text-ivory text-sm font-medium hover:bg-ink/90 transition-colors"
      >
        Explorer les sources
      </Link>
    </section>
  );
}
