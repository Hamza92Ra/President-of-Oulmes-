"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { forumEditions, forumThemes } from "@/content/development";

export default function ForumYearTabs() {
  const [active, setActive] = useState(forumEditions[forumEditions.length - 1].year);
  const activeEdition = forumEditions.find((e) => e.year === active);

  return (
    <div>
      <div className="flex gap-2 mb-8 border-b border-clay/30">
        {forumEditions.map((edition) => (
          <button
            key={edition.year}
            onClick={() => setActive(edition.year)}
            className={`relative px-4 py-3 text-sm font-medium transition-colors ${
              active === edition.year
                ? "text-ink"
                : "text-ink/40 hover:text-ink/70"
            }`}
          >
            {edition.year}
            {active === edition.year && (
              <motion.span
                layoutId="forum-tab-underline"
                className="absolute left-0 right-0 -bottom-px h-[2px] bg-green-moroccan"
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {activeEdition?.hasDocumentedDetails ? (
            <p className="text-ink/80">Détails de l&apos;édition {active}.</p>
          ) : (
            <div className="border border-dashed border-clay/40 p-6">
              <p className="text-ink/70 mb-4">
                Détails spécifiques de l&apos;édition {active} du Forum de
                développement local d&apos;Oulmès — à vérifier.
              </p>
              <p className="text-sm text-ink/50 uppercase tracking-[0.1em] mb-3">
                Thématiques généralement rapportées dans la couverture du
                forum
              </p>
              <div className="flex flex-wrap gap-2">
                {forumThemes.map((theme) => (
                  <span
                    key={theme}
                    className="text-xs px-3 py-1.5 border border-clay/40 text-ink/70"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
