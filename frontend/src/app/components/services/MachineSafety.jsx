"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ClipboardCheck,
  AlertTriangle,
  Settings2,
  FileCheck2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { FadeUp, FadeLeft, FadeRight, ScaleUp, StaggerContainer, StaggerChild } from "../ui/Motion";
import FaqSection from "../ui/FaqSection";

const services = [
  {
    icon: ClipboardCheck,
    title: "Machine Risk Assessments",
    text: "Comprehensive risk assessments identifying mechanical, electrical and process hazards across your production line, benchmarked against ISO 12100.",
  },
  {
    icon: ShieldCheck,
    title: "Safety System Design",
    text: "Design of safety-rated control circuits, interlocking, light curtains, e-stop systems and safety PLCs compliant with ISO 13849-1 and IEC 62061.",
  },
  {
    icon: AlertTriangle,
    title: "Hazard Identification & Mitigation",
    text: "Practical guarding, sensing and control solutions that reduce risk to an acceptable level without compromising production output.",
  },
  {
    icon: Settings2,
    title: "Safety-Rated Retrofits",
    text: "Upgrading legacy machinery with modern safety relays, safety PLCs and guarding to bring existing equipment into compliance.",
  },
  {
    icon: FileCheck2,
    title: "Compliance Documentation",
    text: "Full technical files, risk assessment reports and validation documentation to support your Health and Safety at Work Act obligations.",
  },
  {
    icon: GraduationCap,
    title: "Safety Training & Handover",
    text: "On-site training for operations and maintenance teams so machine safety systems are understood, trusted and maintained correctly.",
  },
];

const process = [
  { step: "01", title: "Assess", text: "On-site risk assessment against ISO 12100, identifying every credible hazard on the machine or line." },
  { step: "02", title: "Design", text: "Safety system design and category/PL (Performance Level) selection per ISO 13849-1 or IEC 62061." },
  { step: "03", title: "Implement", text: "Installation, wiring and commissioning of safety-rated control hardware with minimal production disruption." },
  { step: "04", title: "Validate", text: "Functional testing and validation of every safety function, with full documentation handed over on completion." },
];

const faqs = [
  {
    question: "What is CMSE® certification, and why does it matter?",
    answer:
      "CMSE® (Certified Machinery Safety Expert) is a TÜV NORD-certified qualification recognising expertise in machinery safety standards, risk assessment methodology and safety system design under ISO 13849 and IEC 62061. Arahant's machine safety engineers hold this certification, meaning your risk assessments and safety designs are backed by internationally recognised, audited expertise rather than general electrical knowledge.",
  },
  {
    question: "Is a machine safety risk assessment a legal requirement in New Zealand?",
    answer:
      "Under the Health and Safety at Work Act 2015, businesses must eliminate or minimise risks to workers so far as is reasonably practicable — for machinery, this generally means a documented risk assessment and appropriate safeguarding. WorkSafe NZ can request this documentation following an incident or audit, so having current risk assessments and safety system documentation is both a legal safeguard and an operational one.",
  },
  {
    question: "What's the difference between ISO 13849 and IEC 62061?",
    answer:
      "Both standards define how to design safety-related control systems, but they use different methodologies. ISO 13849-1 uses Performance Levels (PL a–e) and is common for machinery with simpler electromechanical or hydraulic/pneumatic safety functions. IEC 62061 uses Safety Integrity Levels (SIL 1–3) and is typically applied to more complex, PLC-based safety systems. We select the appropriate standard based on your machine's architecture and complexity.",
  },
  {
    question: "Can you upgrade existing machinery instead of replacing it?",
    answer:
      "In most cases, yes. Rather than requiring a full machine replacement, we typically design a safety retrofit — adding safety relays, safety PLCs, interlocked guarding, light curtains or presence-sensing devices to bring an existing machine's safety functions up to current standards, at a fraction of replacement cost.",
  },
  {
    question: "How long does a typical machine safety project take?",
    answer:
      "A single-machine risk assessment and report can often be completed within a week. Full safety system design, retrofit and validation for a production line typically runs from a few weeks to a couple of months, depending on complexity and the extent of guarding or control system work required. We scope and quote every project individually after an initial site assessment.",
  },
];

export default function MachineSafety() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden bg-[#121435] flex items-center">
        <div className="absolute inset-0 opacity-40">
          <Image src="/services/Safety.jpg" alt="" fill className="object-cover grayscale" />
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
              CMSE® TÜV NORD Certified
            </span>
            <h1 className="mt-6 max-w-3xl text-3xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Machine Safety Engineering for New Zealand Industry
            </h1>
            <div className="mt-5 h-1 w-20 rounded-full bg-orange-500" />
            <p className="mt-6 max-w-2xl text-base sm:text-xl text-slate-300 leading-8">
              Risk assessments, safety system design and compliance documentation to
              ISO 13849 and IEC 62061 — protecting your people and your business
              across New Zealand and the Pacific region.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* What is machine safety — direct-answer intro for SEO/AEO */}
      <section className="bg-gradient-to-br from-slate-50/80 via-white to-orange-50/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
            <FadeLeft>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                What Is Machine Safety Engineering?
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Reducing Risk Without Reducing Production
              </h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-orange-500" />
              <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600">
                Machine safety engineering is the process of identifying hazards on
                industrial equipment and designing controls — guarding, interlocking,
                safety-rated circuits and procedures — that reduce risk to an
                acceptable level under recognised international standards.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-8 text-slate-600">
                Done well, it protects your workforce, satisfies WorkSafe NZ
                obligations under the Health and Safety at Work Act, and is designed
                around your actual production process — not a generic checklist.
                Our CMSE® certified engineers assess, design, implement and validate
                safety systems for FMCG, manufacturing and process facilities across
                New Zealand.
              </p>
            </FadeLeft>
            <FadeRight delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl min-h-[360px]">
                <Image src="/services/Safety.jpg" alt="Machine safety guarding and controls" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative overflow-hidden bg-[#121435] py-20 lg:py-28">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.12),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="text-center">
              <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
                Our Machine Safety Services
              </span>
              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                End-to-End Machinery Safety Compliance
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

      {/* Process */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="text-center">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                Our Process
              </span>
              <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
                How We Deliver Machine Safety Projects
              </h2>
              <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
            </div>
          </FadeUp>

          <StaggerContainer stagger={0.1} delay={0.05} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <StaggerChild key={item.step}>
                <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 sm:p-8 h-full">
                  <span className="text-3xl font-bold text-orange-300">{item.step}</span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FaqSection items={faqs} eyebrow="Machine Safety FAQs" title="Machine Safety, Answered" />

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#121435] py-20 lg:py-28">
        <div className="absolute inset-0 opacity-40">
          <Image src="/services/HMI.jpg" alt="" fill className="object-cover grayscale" />
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
                Protect Your People
              </span>
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Book A Machine Safety Assessment
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-300">
                Talk to a CMSE® certified engineer about risk assessment, safety
                system design or bringing legacy equipment up to current standards.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition hover:bg-orange-600"
                >
                  Talk To Our Team
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
