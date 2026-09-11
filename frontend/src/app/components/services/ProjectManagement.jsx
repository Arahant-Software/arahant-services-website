"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Compass,
  Boxes,
  CheckCircle2,
  LifeBuoy,
  Users,
  CalendarClock,
  ArrowRight,
} from "lucide-react";
import { FadeUp, FadeLeft, FadeRight, ScaleUp, StaggerContainer, StaggerChild } from "../ui/Motion";
import FaqSection from "../ui/FaqSection";

const stages = [
  {
    icon: Compass,
    title: "Concept & Scoping",
    text: "Defining project objectives, constraints and success criteria before a single line of code or drawing is produced.",
  },
  {
    icon: Boxes,
    title: "3D Modelling & Design",
    text: "3D modelling and detailed design of mechanical, electrical and control system elements, reviewed with your team before build.",
  },
  {
    icon: Users,
    title: "Procurement & Build",
    text: "Coordinated procurement of automation, electrical and mechanical components, with fabrication and build managed to schedule.",
  },
  {
    icon: CheckCircle2,
    title: "FAT & SAT",
    text: "Factory Acceptance Testing and Site Acceptance Testing to verify every system performs to specification before go-live.",
  },
  {
    icon: CalendarClock,
    title: "Commissioning",
    text: "On-site commissioning with minimal disruption to existing production, coordinated around your shutdown windows.",
  },
  {
    icon: LifeBuoy,
    title: "Handover & Lifecycle Support",
    text: "Full documentation handover, operator training and ongoing lifecycle support after go-live.",
  },
];

const faqs = [
  {
    question: "What is FAT and SAT, and why do they matter?",
    answer:
      "Factory Acceptance Testing (FAT) verifies a system works correctly before it leaves the workshop or supplier, catching issues early when they're cheaper to fix. Site Acceptance Testing (SAT) then verifies the installed system performs correctly in its actual production environment. Running both reduces the risk of costly surprises during commissioning.",
  },
  {
    question: "Can you manage a project end-to-end, or just parts of it?",
    answer:
      "Both. We regularly run full end-to-end projects — from initial concept through design, procurement, build, commissioning and handover — and we also step into projects at a specific stage, such as managing commissioning for a system designed elsewhere, or handling procurement for a project your team is otherwise running internally.",
  },
  {
    question: "How do you minimise production downtime during commissioning?",
    answer:
      "We plan commissioning around your existing shutdown windows and production schedule wherever possible, sequence work to keep critical lines running, and use FAT results to reduce the on-site commissioning time required — since most integration issues are already resolved before the system reaches site.",
  },
  {
    question: "Do you provide project documentation after handover?",
    answer:
      "Yes — every project is handed over with full documentation: as-built drawings, control system code and configuration backups, operating and maintenance manuals, and commissioning/FAT-SAT records, plus operator training so your team is confident running the new system from day one.",
  },
];

export default function ProjectManagement() {
  return (
    <>
      <section className="relative min-h-[60vh] overflow-hidden bg-[#121435] flex items-center">
        <div className="absolute inset-0 opacity-40">
          <Image src="/services/SCADA.jpg" alt="" fill className="object-cover grayscale" />
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
              Concept Through Commissioning
            </span>
            <h1 className="mt-6 max-w-3xl text-3xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Industrial Project Management & Design
            </h1>
            <div className="mt-5 h-1 w-20 rounded-full bg-orange-500" />
            <p className="mt-6 max-w-2xl text-base sm:text-xl text-slate-300 leading-8">
              3D modelling, FAT/SAT, commissioning and lifecycle support —
              structured project delivery for automation, electrical and process
              installation projects across New Zealand and the Pacific.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50/80 via-white to-orange-50/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
            <FadeLeft>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                Why Project Management Matters
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                One Team, Accountable End To End
              </h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-orange-500" />
              <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600">
                Industrial projects fail more often from poor coordination between
                disciplines than from any single technical mistake — automation
                designed without input from electrical, procurement lead times not
                factored into the schedule, or commissioning planned without a
                realistic shutdown window.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-8 text-slate-600">
                Arahant runs projects with a single point of accountability across
                automation, electrical, mechanical and procurement — so the plan
                reflects how the whole system actually needs to come together, not
                just one discipline's piece of it.
              </p>
            </FadeLeft>
            <FadeRight delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl min-h-[360px]">
                <Image src="/banner/carousel3.jpg" alt="Industrial project design and commissioning" fill className="object-cover" />
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
                Our Delivery Framework
              </span>
              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                From Concept To Commissioning
              </h2>
              <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
            </div>
          </FadeUp>

          <StaggerContainer stagger={0.07} delay={0.05} className="mt-12 lg:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stages.map((item) => {
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

      <FaqSection items={faqs} eyebrow="Project Management FAQs" title="Common Questions" />

      <section className="relative overflow-hidden bg-[#121435] py-20 lg:py-28">
        <div className="absolute inset-0 opacity-40">
          <Image src="/banner/carousel5.jpg" alt="" fill className="object-cover grayscale" />
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
                Plan Your Project
              </span>
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Let's Scope Your Next Project
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-300">
                From a single machine upgrade to a full plant automation
                rollout, we'll help you plan it properly from day one.
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
