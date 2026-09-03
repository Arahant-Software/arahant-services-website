"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ContactHero() {
  return (
    <section className="relative min-h-[55vh] bg-[#121435] overflow-hidden">
      {/* Automation background image — subtle, blended into navy */}
      <div className="absolute inset-0 opacity-40">
        <Image src="/services/Vision.jpg" alt="" fill className="object-cover grayscale" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#121435] via-[#121435]/55 to-[#121435]/85" />
      <motion.div
        className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-orange-500/15 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-24 sm:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300"
          >
            Contact Us
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="mt-6 text-3xl font-bold text-white sm:text-5xl lg:text-7xl"
          >
            Let&apos;s Discuss
            <span className="block text-orange-500">Your Next Project</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base sm:text-xl text-slate-300 leading-8"
          >
            Whether you require industrial automation, machine safety,
            electrical engineering, process optimisation or OEM components,
            our team is ready to help.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
