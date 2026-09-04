import { notFound } from "next/navigation";

const checklistItems = [
  "Confirmer le nom arabe complet",
  "Confirmer l'orthographe latine préférée",
  "Confirmer les informations de naissance",
  "Confirmer l'école d'ingénieur",
  "Confirmer le CV professionnel complet",
  "Confirmer la chronologie politique",
  "Confirmer les comptes sociaux officiels",
  "Confirmer la documentation de candidature 2026",
  "Confirmer l'identité de campagne",
  "Confirmer la liste des projets",
  "Confirmer les budgets de projets le cas échéant",
  "Obtenir les photos originales des projets",
  "Obtenir les documents parlementaires",
  "Obtenir une réponse officielle concernant la controverse de marché public rapportée",
  "Vérifier chaque statistique",
  "Vérifier chaque citation",
];

export default function VerificationPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <span className="text-xs uppercase tracking-[0.2em] text-burgundy font-medium">
        Interne — avant lancement
      </span>
      <h1 className="text-3xl font-semibold text-ink mt-2 mb-2">
        Vérifier avant lancement
      </h1>
      <p className="text-ink/60 mb-10">
        Cette page est un outil de travail interne et devrait être masquée
        des builds de production publics.
      </p>

      <ul className="space-y-3">
        {checklistItems.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 w-4 h-4 border border-ink/40 flex-shrink-0" />
            <span className="text-ink/80">{item}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
