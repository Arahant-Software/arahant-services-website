"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MagneticButton } from "../ui/Motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#121435]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#242640] via-[#121435] to-[#121435]" />

      {/* Automation background image — subtle, blended into navy */}
      <div className="absolute inset-0 opacity-40">
        <Image src="/banner/carousel6.jpg" alt="" fill className="object-cover grayscale" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#121435] via-[#121435]/55 to-[#121435]/85" />

      <motion.div
        className="absolute -left-20 top-1/4 h-[480px] w-[480px] rounded-full bg-orange-500/15 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,249,240,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(250,249,240,.07) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 min-h-screen flex flex-col items-center justify-center pt-20 pb-12 lg:pt-24 lg:pb-16">
        <div className="grid w-full items-center gap-12 lg:gap-16 lg:grid-cols-2">

          {/* ── Left: Text ── */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.span
              variants={item}
              className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300"
            >
              About Arahant Services
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl"
            >
              Engineering Intelligence
              <span className="block text-orange-500 mt-2">For Modern Industry</span>
            </motion.h1>

            <motion.div variants={item} className="mt-5 h-1 w-20 rounded-full bg-orange-500" />

            <motion.p variants={item} className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-slate-300">
              Arahant Services Ltd is a premier New Zealand-based engineering
              and industrial automation firm delivering end-to-end control
              system solutions across the Pacific region.
            </motion.p>

            <motion.p variants={item} className="mt-4 max-w-xl text-sm sm:text-base leading-7 text-slate-400">
              We architect, automate and optimise industrial operations — from
              discrete machine control to full-scale production facilities.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
              <MagneticButton strength={12}>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block rounded-full bg-orange-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition hover:bg-orange-600"
                >
                  Discuss Your Project
                </motion.a>
              </MagneticButton>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block rounded-full border border-white/20 backdrop-blur-sm px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition hover:border-orange-500"
              >
                Explore Services
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right: Image Collage ── */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[560px]">
              {/* Tall left image */}
              <div className="relative row-span-2 overflow-hidden rounded-3xl">
                <Image
                  src="/banner/carousel3.jpg"
                  alt="Industrial Engineering"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-5 right-5">
                  <span className="inline-block rounded-full bg-orange-500/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-white">
                    Industrial Automation
                  </span>
                  <p className="mt-2 text-sm font-semibold text-white leading-snug">
                    End-to-End Control Systems
                  </p>
                </div>
              </div>

              {/* Top-right image */}
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/services/PLCs.jpg"
                  alt="PLC Systems"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1 text-[11px] font-semibold text-white">
                    PLC Systems
                  </span>
                </div>
              </div>

              {/* Bottom-right image */}
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/services/Robotics.jpg"
                  alt="Robotics & Automation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1 text-[11px] font-semibold text-white">
                    Robotics
                  </span>
                </div>
              </div>
            </div>

            {/* Floating glass badge */}
            <motion.div
              className="absolute -bottom-5 -left-6 flex items-center gap-3 rounded-2xl border border-white/12 bg-white/8 backdrop-blur-md px-4 py-3 shadow-xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500 text-sm font-bold text-white">
                15+
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Years Experience</div>
                <div className="text-xs text-slate-400">NZ &amp; Pacific Region</div>
              </div>
            </motion.div>

            {/* Top-right float */}
            <motion.div
              className="absolute -top-4 -right-4 flex items-center gap-2 rounded-2xl border border-orange-500/30 bg-orange-500/10 backdrop-blur-md px-4 py-2.5"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              <div className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-xs font-semibold text-orange-300">CMSE® Certified Safety</span>
            </motion.div>
          </motion.div>

        </div>

        {/* ── Highlights — full-width horizontal strip ── */}
        <motion.div
          className="w-full mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
            {[
              "CMSE® TÜV NORD Certified",
              "IIoT & Industry 4.0 Ready",
              "Multi-Vendor Automation Expertise",
              "End-to-End Project Delivery",
              "Pacific Region Coverage",
              "24/7 Technical Support",
            ].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(255,87,34,0.4)", backgroundColor: "rgba(250,249,240,0.1)" }}
                className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-3 py-5 text-center cursor-default"
              >
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-orange-500" />
                <span className="text-xs sm:text-sm font-semibold text-white leading-tight">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
