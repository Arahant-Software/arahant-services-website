"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp, FadeLeft, FadeRight, StaggerContainer, StaggerChild, Counter } from "./ui/Motion";

const partners = [
  { name: "Siemens", logo: "/partners/siemens.webp" },
  { name: "Rockwell Automation", logo: "/partners/Rockwell.svg" },
  { name: "Schneider Electric", logo: "/partners/Schneider_Electric.svg" },
  { name: "ABB", logo: "/partners/abb.svg" },
  { name: "Omron", logo: "/partners/Omron.svg" },
  { name: "Mitsubishi Electric", logo: "/partners/mistubishi.png" },
  { name: "SICK", logo: "/partners/sick.jpg" },
  { name: "Festo", logo: "/partners/festo.svg" },
  { name: "Phoenix Contact", logo: "/partners/phoenix.svg" },
  { name: "WAGO", logo: "/partners/wago.png" },
  { name: "SMC", logo: "/partners/smc.png" },
  { name: "Balluff", logo: "/partners/Balluff.webp" },
  { name: "Burkert", logo: "/partners/buerkert.svg" },
];

const capabilityCards = [
  {
    tag: "PLC",
    title: "Automation Platforms",
    description:
      "Siemens, Rockwell, Omron and Mitsubishi control systems for machine automation, process plants and industrial production.",
  },
  {
    tag: "IIoT",
    title: "Industry 4.0",
    description:
      "Industrial connectivity, data acquisition, cloud integration, analytics and digital transformation solutions.",
  },
  {
    tag: "OEM",
    title: "Genuine Components",
    description:
      "Authorised sourcing of genuine manufacturer-supported automation, instrumentation, drives and industrial control products.",
  },
];

export default function TechnologyPartners() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50/80 via-white to-orange-50/30 py-20 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-orange-100/50 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-50 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <FadeUp>
          <div className="text-center">
            <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
              Technology Partners
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
              Trusted Industrial
              <span className="block text-orange-600">Technology Partners</span>
            </h2>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-slate-600">
              We collaborate with globally recognised automation,
              instrumentation, motion control and process technology
              manufacturers to deliver reliable, scalable and future-ready
              industrial solutions.
            </p>
          </div>
        </FadeUp>

        {/* Banner */}
        <FadeUp delay={0.1}>
          <div className="mt-12 lg:mt-20 overflow-hidden rounded-3xl border border-white/50 bg-white/60 backdrop-blur-md p-6 sm:p-10 shadow-[0_10px_40px_rgba(249,115,22,0.08)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="text-center lg:text-left flex-shrink-0">
                <div className="text-5xl sm:text-6xl font-bold text-orange-600">
                  <Counter to={14} suffix="+" />
                </div>
                <div className="mt-2 text-sm sm:text-base text-slate-600">Global Technology Partners</div>
              </div>
              <div className="max-w-2xl text-center text-sm sm:text-lg leading-8 text-slate-600 lg:text-left">
                Access to leading automation, machine safety, process control,
                instrumentation and industrial digitalisation technologies trusted
                by manufacturers worldwide.
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ── Logo Grid ── */}
        <FadeUp delay={0.15}>
          <div className="mt-12 lg:mt-20 rounded-3xl border border-white/50 bg-white/60 backdrop-blur-md p-6 sm:p-8 shadow-[0_15px_50px_rgba(249,115,22,0.07)]">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
              {partners.map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{
                    y: -6,
                    scale: 1.06,
                    borderColor: "#fb923c",
                    boxShadow: "0 12px 32px rgba(249,115,22,0.18)",
                  }}
                  className="flex items-center justify-center rounded-2xl border border-white/50 bg-white/70 backdrop-blur-sm p-4 sm:p-5 h-[80px] sm:h-[95px] cursor-pointer"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={50}
                    className="h-[35px] sm:h-[45px] w-auto max-w-[90px] sm:max-w-[110px] object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Capability Cards */}
        <StaggerContainer stagger={0.12} delay={0.05} className="mt-10 lg:mt-16 grid gap-5 sm:grid-cols-3">
          {capabilityCards.map((card) => (
            <StaggerChild key={card.title}>
              <motion.div
                whileHover={{ y: -6, borderColor: "#fdba74" }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-[0_10px_30px_rgba(249,115,22,0.06)]"
              >
                <div className="text-4xl sm:text-5xl font-bold text-orange-600">{card.tag}</div>
                <h4 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">{card.title}</h4>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-7">{card.description}</p>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
