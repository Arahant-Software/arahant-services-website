"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, RefreshCw, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import { FadeUp, ScaleUp, StaggerContainer, StaggerChild } from "./ui/Motion";

const projectTypes = [
  {
    icon: Factory,
    title: "Greenfield Automation Installs",
    text: "New production lines and control systems designed and commissioned from a blank sheet — PLC, HMI, SCADA and electrical infrastructure built together from day one.",
  },
  {
    icon: RefreshCw,
    title: "Brownfield Upgrades & Retrofits",
    text: "Modernising ageing PLCs, obsolete HMIs and legacy control systems on live production equipment, sequenced around your shutdown windows to minimise downtime.",
  },
  {
    icon: ShieldCheck,
    title: "Machine Safety Compliance Retrofits",
    text: "Bringing existing machinery up to current ISO 13849 / IEC 62061 safety standards with guarding, interlocking and safety-rated control upgrades.",
  },
  {
    icon: Truck,
    title: "Procurement-Only Engagements",
    text: "Sourcing and supplying genuine OEM components and critical spares for projects and maintenance programs you're managing in-house.",
  },
];

const industries = [
  { title: "FMCG", subtitle: "Food & beverage, dairy and other fast-moving consumer goods production lines.", image: "/banner/carousel1.jpg" },
  { title: "Manufacturing", subtitle: "Sugar, paper, wood products and general industrial manufacturing.", image: "/banner/carousel3.jpg" },
  { title: "Chemical Processing", subtitle: "Pharmaceutical and biotech plants requiring precise process control.", image: "/services/SCADA.jpg" },
  { title: "Infrastructure", subtitle: "Water & wastewater, energy and mining sector automation and electrical.", image: "/banner/carousel7.jpeg" },
];

export default function ProjectsOverview() {
  return (
    <>
      <section className="relative min-h-[55vh] overflow-hidden bg-[#121435] flex items-center">
        <div className="absolute inset-0 opacity-40">
          <Image src="/banner/carousel4.jpg" alt="" fill className="object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#121435] via-[#121435]/55 to-[#121435]/85" />
        <motion.div
          className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-orange-500/15 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-24 sm:py-28">
          <FadeUp>
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
              Our Projects
            </span>
            <h1 className="mt-6 max-w-3xl text-3xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Project Capabilities Across New Zealand & The Pacific
            </h1>
            <div className="mt-5 h-1 w-20 rounded-full bg-orange-500" />
            <p className="mt-6 max-w-2xl text-base sm:text-xl text-slate-300 leading-8">
              From new production lines to safety-critical retrofits, here's the
              kind of work we deliver — and the industries we deliver it for.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50/80 via-white to-orange-50/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="text-center">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                What We Deliver
              </span>
              <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
                Project Types We Take On
              </h2>
              <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
            </div>
          </FadeUp>

          <StaggerContainer stagger={0.08} delay={0.05} className="mt-12 grid gap-5 sm:grid-cols-2">
            {projectTypes.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerChild key={item.title}>
                  <motion.div
                    whileHover={{ y: -6, borderColor: "#FF9A7A" }}
                    transition={{ duration: 0.25 }}
                    className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-md p-6 sm:p-8 h-full shadow-sm"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50">
                      <Icon className="h-7 w-7 text-orange-600" />
                    </div>
                    <h3 className="mt-5 text-lg sm:text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm sm:text-base leading-7 text-slate-600">{item.text}</p>
                  </motion.div>
                </StaggerChild>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="text-center">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                Industries
              </span>
              <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
                Industries We Work In
              </h2>
              <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
            </div>
          </FadeUp>

          <StaggerContainer stagger={0.09} delay={0.05} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <StaggerChild key={industry.title}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-3xl h-[260px]"
                >
                  <Image src={industry.image} alt={industry.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{industry.title}</h3>
                    <p className="mt-1.5 text-sm leading-snug text-slate-300">{industry.subtitle}</p>
                  </div>
                </motion.div>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#121435] py-20 lg:py-28">
        <div className="absolute inset-0 opacity-40">
          <Image src="/services/Robotics.jpg" alt="" fill className="object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#121435] via-[#121435]/55 to-[#121435]/85" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.2),transparent_50%)] pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <ScaleUp>
            <div className="rounded-3xl border border-white/10 bg-white/6 backdrop-blur-md p-8 sm:p-12">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                Start A Project
              </span>
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Have A Project In Mind?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-300">
                Tell us about it and we'll let you know exactly how we'd approach it.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition hover:bg-orange-600"
                >
                  Discuss Your Project
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </div>
          </ScaleUp>
        </div>
      </section>
    </>
  );
}
