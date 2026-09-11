"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp } from "./ui/Motion";

export default function LegalPage({ title, updated, image, sections }) {
  return (
    <>
      <section className="relative min-h-[35vh] overflow-hidden bg-[#121435] flex items-center">
        <div className="absolute inset-0 opacity-40">
          <Image src={image} alt="" fill className="object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#121435] via-[#121435]/55 to-[#121435]/85" />
        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 lg:px-12 py-20 sm:py-24">
          <FadeUp>
            <h1 className="text-3xl font-bold text-white sm:text-5xl">{title}</h1>
            <div className="mt-5 h-1 w-20 rounded-full bg-orange-500" />
            <p className="mt-4 text-sm text-slate-400">Last updated: {updated}</p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
          <div className="space-y-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-sm sm:text-base leading-7 text-slate-600">
                  {section.body}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
