"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeUp } from "./Motion";

function FaqItem({ question, answer, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-slate-200 last:border-b-0"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base sm:text-lg font-bold text-slate-900">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-orange-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm sm:text-base leading-7 text-slate-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * Renders an FAQ accordion plus matching FAQPage JSON-LD (for search/AI-answer visibility).
 * `items`: [{ question, answer }]
 */
export default function FaqSection({
  items,
  eyebrow = "FAQs",
  title = "Frequently Asked Questions",
  className = "",
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className={`bg-gradient-to-br from-slate-50/80 via-white to-orange-50/30 py-20 lg:py-28 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
        <FadeUp>
          <div className="text-center">
            <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
              {eyebrow}
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              {title}
            </h2>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
          </div>
        </FadeUp>

        <div className="mt-12 rounded-3xl border border-white/60 bg-white/70 backdrop-blur-md px-6 sm:px-10 shadow-[0_10px_40px_rgba(18,20,53,0.05)]">
          {items.map((item, index) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
