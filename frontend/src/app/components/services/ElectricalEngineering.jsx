"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Zap,
  PenTool,
  Box,
  Wrench,
  Search,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { FadeUp, FadeLeft, FadeRight, ScaleUp, StaggerContainer, StaggerChild } from "../ui/Motion";
import FaqSection from "../ui/FaqSection";

const services = [
  {
    icon: PenTool,
    title: "Electrical Design & Drawings",
    text: "2D and 3D electrical schematics, single-line diagrams and panel layouts produced to AS/NZS 3000 and 61439 standards.",
  },
  {
    icon: Box,
    title: "Control Panel Build",
    text: "Custom-built, clearly labelled control panels and switchboards — from motor control centres to complex PLC-driven control cabinets.",
  },
  {
    icon: Zap,
    title: "Site Installation & Wiring",
    text: "Field wiring, cable routing, termination and power distribution installed to New Zealand electrical code, minimising downtime during changeovers.",
  },
  {
    icon: Search,
    title: "Fault Finding & Diagnostics",
    text: "Rapid electrical fault diagnosis for breakdowns and intermittent faults, backed by up-to-date as-built documentation.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Upgrades",
    text: "Scheduled electrical maintenance programs and modernisation of ageing switchboards, motor control centres and distribution systems.",
  },
  {
    icon: ClipboardList,
    title: "As-Built Documentation",
    text: "Accurate, up-to-date electrical drawings and documentation handed over on project completion, so your team always knows what's installed.",
  },
];

const faqs = [
  {
    question: "Do you design electrical systems, install them, or both?",
    answer:
      "Both. Arahant handles the full electrical engineering lifecycle — schematic design and drawings, control panel fabrication, on-site installation and wiring, commissioning, and ongoing maintenance or fault diagnostics. You can engage us for a single stage or the complete project.",
  },
  {
    question: "What standards do your electrical designs comply with?",
    answer:
      "Our electrical design, panel build and installation work is carried out to AS/NZS 3000 (the Australian/New Zealand wiring rules) and IEC/AS 61439 for switchgear and control gear assemblies, with documentation to support electrical compliance certification.",
  },
  {
    question: "Can you fix an existing electrical fault without a full redesign?",
    answer:
      "Yes — fault finding and diagnostics is one of our core services. Our engineers can often trace and resolve intermittent or hard-to-find electrical faults using existing drawings and on-site testing, without needing to redesign the whole system.",
  },
  {
    question: "Do you build custom control panels or only install pre-built ones?",
    answer:
      "We design and build custom control panels and switchboards in-house, tailored to your specific PLC, drive and I/O requirements, rather than working only with off-the-shelf enclosures. Every panel is clearly labelled and documented for easy maintenance.",
  },
];

export default function ElectricalEngineering() {
  return (
    <>
      <section className="relative min-h-[60vh] overflow-hidden bg-[#121435] flex items-center">
        <div className="absolute inset-0 opacity-40">
          <Image src="/services/DCS.jpg" alt="" fill className="object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#121435] via-[#121435]/55 to-[#121435]/85" />
        <motion.div
          className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-orange-500/15 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-24 sm:py-32">
          <FadeUp>
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
              Design • Build • Install • Maintain
            </span>
            <h1 className="mt-6 max-w-3xl text-3xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Electrical Engineering, Installation & Maintenance
            </h1>
            <div className="mt-5 h-1 w-20 rounded-full bg-orange-500" />
            <p className="mt-6 max-w-2xl text-base sm:text-xl text-slate-300 leading-8">
              Control panel design, switchboard fabrication, site installation and
              electrical maintenance for industrial and FMCG facilities across
              New Zealand and the Pacific region.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50/80 via-white to-orange-50/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
            <FadeLeft>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                Industrial Electrical Engineering
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                From Schematic To Switchboard
              </h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-orange-500" />
              <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600">
                Industrial electrical engineering covers everything between a
                process requirement and a working, compliant electrical
                installation — schematic design, panel fabrication, cable and
                conduit installation, and the testing that proves it all works
                safely and reliably.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-8 text-slate-600">
                Arahant's electrical team works alongside our automation
                engineers, so control panels are built to suit the PLC, HMI and
                SCADA platform they'll be driving — not designed in isolation
                and retrofitted later.
              </p>
            </FadeLeft>
            <FadeRight delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl min-h-[360px]">
                <Image src="/services/PLCs.jpg" alt="Industrial control panel and PLC wiring" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#121435] py-20 lg:py-28">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.12),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="text-center">
              <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
                What We Deliver
              </span>
              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Electrical Engineering Services
              </h2>
              <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
            </div>
          </FadeUp>

          <StaggerContainer stagger={0.07} delay={0.05} className="mt-12 lg:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerChild key={item.title}>
                  <motion.div
                    whileHover={{ y: -6, borderColor: "rgba(255,87,34,0.3)" }}
                    transition={{ duration: 0.25 }}
                    className="rounded-3xl border border-white/12 bg-white/8 backdrop-blur-md p-6 sm:p-8 h-full"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                      <Icon className="h-7 w-7 text-orange-600" />
                    </div>
                    <h3 className="mt-5 text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm sm:text-base leading-7 text-slate-400">{item.text}</p>
                  </motion.div>
                </StaggerChild>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <FaqSection items={faqs} eyebrow="Electrical Engineering FAQs" title="Common Questions" />

      <section className="relative overflow-hidden bg-[#121435] py-20 lg:py-28">
        <div className="absolute inset-0 opacity-40">
          <Image src="/services/PLCs.jpg" alt="" fill className="object-cover grayscale" />
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
                Start Your Project
              </span>
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Talk To Our Electrical Team
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-300">
                Whether it's a new control panel, a full switchboard upgrade or a
                stubborn fault, our engineers are ready to help.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition hover:bg-orange-600"
                >
                  Contact Us
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
