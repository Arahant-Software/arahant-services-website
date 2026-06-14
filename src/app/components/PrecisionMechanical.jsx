"use client";

import { motion } from "framer-motion";
import { Wrench, Cog, Flame, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import { FadeUp, FadeLeft, FadeRight, StaggerContainer, StaggerChild } from "./ui/Motion";

const mechanicalItems = [
  "Full line installations",
  "Conveyor alignment",
  "Gearbox replacements",
  "Hydraulic system overhauls",
  "Pneumatic system upgrades",
  "Valve bank assemblies",
  "Preventive maintenance programs",
];

const weldingCards = [
  "Stainless Steel & Carbon Steel Fabrication",
  "Pipe Welding & Process Line Modifications",
  "On-Site Mobile Welding & Workshop Assembly",
];

export default function PrecisionMechanical() {
  return (
    <section className="relative overflow-hidden bg-[#1e2428] py-20 lg:py-32">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,102,0,0.12),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <FadeUp>
          <div className="text-center">
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
              Mechanical & Welding
            </span>
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Precision Mechanical & Welding
            </h2>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-slate-400">
              Engineered installations, fabrication and welding services
              designed for reliability, safety and long-term performance.
            </p>
          </div>
        </FadeUp>

        {/* Main Section */}
        <div className="mt-12 lg:mt-20 grid gap-8 lg:grid-cols-2">
          {/* Left Image */}
          <FadeLeft>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl border border-white/5 min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]"
            >
              <Image src="/images/welding-industrial.png" alt="Industrial Welding" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white"
                >
                  <ShieldCheck className="h-4 w-4" />
                  AS/NZS 1554 Compliant
                </motion.div>
              </div>
            </motion.div>
          </FadeLeft>

          {/* Right Content */}
          <FadeRight delay={0.1}>
            <div className="rounded-3xl border border-white/12 bg-white/8 backdrop-blur-md p-6 sm:p-8 h-full">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white"
                >
                  <Cog className="h-7 w-7 text-orange-600" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Mechanical Works</h3>
              </div>

              <p className="mt-5 text-sm sm:text-base leading-7 text-slate-300">
                Our mechanical division delivers robust installations for
                heavy industry and production environments. We combine
                3D modelling with hands-on execution to minimise downtime.
              </p>

              <StaggerContainer stagger={0.06} delay={0.15} className="mt-6 grid gap-3 sm:grid-cols-2">
                {mechanicalItems.map((item) => (
                  <StaggerChild key={item} className="flex items-start gap-2 text-slate-300">
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </StaggerChild>
                ))}
              </StaggerContainer>
            </div>
          </FadeRight>
        </div>

        {/* Welding Section */}
        <FadeUp delay={0.1}>
          <div className="mt-8 rounded-3xl border border-white/12 bg-white/8 backdrop-blur-md p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white"
              >
                <Flame className="h-7 w-7 text-orange-600" />
              </motion.div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Certified Welding & Fabrication</h3>
                <p className="mt-1 text-sm text-slate-400">Precision welding for critical industrial applications.</p>
              </div>
            </div>

            <p className="mt-6 text-sm sm:text-base leading-7 text-slate-300">
              Specialising in TIG, MIG and Stick welding, including purge
              welding for hygienic stainless steel lines in food and beverage
              facilities. We fabricate custom platforms, ladders, walkways,
              structural supports and industrial gates.
            </p>

            <StaggerContainer stagger={0.1} delay={0.1} className="mt-8 grid gap-4 sm:grid-cols-3">
              {weldingCards.map((item) => (
                <StaggerChild key={item}>
                  <motion.div
                    whileHover={{ scale: 1.03, borderColor: "rgba(249,115,22,0.4)" }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-white/10 bg-white/6 backdrop-blur-sm p-5 text-center"
                  >
                    <Wrench className="mx-auto mb-3 h-7 w-7 text-orange-500" />
                    <p className="text-sm sm:text-base font-medium text-slate-200">{item}</p>
                  </motion.div>
                </StaggerChild>
              ))}
            </StaggerContainer>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
