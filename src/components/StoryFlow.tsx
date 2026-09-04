"use client";

import { motion } from "framer-motion";

const steps = [
  "Ingénierie",
  "Expertise professionnelle",
  "Expérience politique",
  "Parlement",
  "Oulmès",
  "Candidature 2026",
];

export default function StoryFlow() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-clay/30">
      <p className="text-xs uppercase tracking-[0.2em] text-green-moroccan font-medium mb-3">
        Parcours
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-ink leading-tight mb-12 max-w-2xl">
        Un parcours entre expertise, territoire et service public
      </h2>

      <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="text-sm md:text-base font-medium text-ink border border-clay/40 px-4 py-2"
            >
              {step}
            </motion.span>
            {i < steps.length - 1 && (
              <span className="text-clay/60 text-lg">→</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
