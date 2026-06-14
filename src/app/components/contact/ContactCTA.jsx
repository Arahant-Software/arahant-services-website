"use client";

import { motion } from "framer-motion";
import { ScaleUp } from "../ui/Motion";

export default function ContactCTA() {
  return (
    <section className="relative bg-[#1e2428] py-20 lg:py-28 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.18),transparent_50%)] pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <ScaleUp>
          <div className="rounded-3xl border border-white/10 bg-white/6 backdrop-blur-md p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Engineering Solutions That Deliver Results
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-8">
            From automation and machine safety to electrical engineering
            and industrial procurement, Arahant Services is your trusted
            engineering partner.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 sm:mt-10 inline-block rounded-full bg-orange-500 px-8 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-orange-600 transition"
          >
            Speak With Our Team
          </motion.a>
          </div>
        </ScaleUp>
      </div>
    </section>
  );
}
