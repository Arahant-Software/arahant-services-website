"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu,
  MonitorSmartphone,
  Gauge,
  Settings,
  Factory,
  Wrench,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { FadeUp, FadeLeft, FadeRight, ScaleUp, StaggerContainer, StaggerChild } from "../ui/Motion";
import FaqSection from "../ui/FaqSection";

const platforms = [
  {
    icon: Cpu,
    title: "Siemens S7 PLC Programming",
    text: "Programming, upgrades and support for the full S7 range — S7-200, S7-300, S7-400, S7-1200 and S7-1500 — plus TIA Portal and classic Step 7 development.",
  },
  {
    icon: MonitorSmartphone,
    title: "Siemens WinCC & HMI",
    text: "WinCC SCADA design and configuration, plus Siemens OP, TP, MP, Comfort and Unified Series HMI panel programming.",
  },
  {
    icon: Gauge,
    title: "Siemens Drives",
    text: "Commissioning and support for Sinamics, Simotion, Simodrive and legacy Master Drives motion and drive systems.",
  },
  {
    icon: Settings,
    title: "Siemens Sinumerik CNC",
    text: "Programming, commissioning and troubleshooting for Siemens Sinumerik CNC controllers on machine tools and process equipment.",
  },
  {
    icon: Factory,
    title: "Siemens PCS7 DCS",
    text: "Distributed control system design and support on Siemens PCS7 for process-heavy FMCG, dairy, beverage and chemical facilities.",
  },
  {
    icon: Wrench,
    title: "Legacy Siemens Migration",
    text: "Migrating older S5 and early S7-300 systems to current S7-1200/1500 hardware and TIA Portal, without a full production line redesign.",
  },
];

const regions = [
  { title: "New Zealand", text: "Auckland-based, servicing sites nationwide across FMCG, manufacturing and process industries." },
  { title: "Fiji", text: "On-site and remote Siemens automation support for Pacific manufacturing and process facilities." },
  { title: "Australia", text: "Siemens PLC, SCADA and drive engineering support for Australian industrial and processing operations." },
];

const faqs = [
  {
    question: "Do you work with older Siemens S5 and S7-300 PLCs?",
    answer:
      "Yes. We regularly support legacy Siemens S5 and S7-300 systems still running in production — whether that's ongoing maintenance and fault-finding, or planning a migration path to current S7-1200/1500 hardware and TIA Portal when you're ready, without forcing a full production line redesign in the meantime.",
  },
  {
    question: "Can you program in both classic Step 7 and TIA Portal?",
    answer:
      "Yes, our engineers work across both classic Step 7 (for older S7-300/400 systems) and the current TIA Portal environment (for S7-1200/1500 and integrated WinCC projects), so we can support your existing Siemens installation regardless of which generation of software it was built on.",
  },
  {
    question: "Do you provide Siemens automation services outside New Zealand?",
    answer:
      "Yes — alongside our New Zealand-based projects, we provide Siemens PLC, SCADA, drives and DCS engineering support for clients in Fiji and Australia, covering both on-site commissioning and remote programming/troubleshooting support.",
  },
  {
    question: "What Siemens SCADA and HMI platforms do you support?",
    answer:
      "We work with Siemens WinCC for SCADA, and the full range of Siemens HMI hardware — OP, TP, MP, Comfort Panels and the newer Unified Series — configuring them to integrate cleanly with your S7 PLC and PCS7 DCS architecture where applicable.",
  },
  {
    question: "Can you integrate Siemens equipment with non-Siemens systems already on site?",
    answer:
      "Yes. Many of our projects involve a Siemens PLC or drive communicating with equipment from other manufacturers already installed — we design the communication architecture (industrial Ethernet, Profibus/Profinet, OPC) to make mixed-vendor plants work together reliably.",
  },
];

export default function SiemensAutomation() {
  return (
    <>
      <section className="relative min-h-[60vh] overflow-hidden bg-[#121435] flex items-center">
        <div className="absolute inset-0 opacity-40">
          <Image src="/services/PLCs.jpg" alt="" fill className="object-cover grayscale" />
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
              Siemens Automation Specialists
            </span>
            <h1 className="mt-6 max-w-3xl text-3xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Siemens PLC, SCADA & Drives Engineering
            </h1>
            <div className="mt-5 h-1 w-20 rounded-full bg-orange-500" />
            <p className="mt-6 max-w-2xl text-base sm:text-xl text-slate-300 leading-8">
              S7 PLC programming, WinCC SCADA, Sinamics drives, Sinumerik CNC and
              PCS7 DCS — Siemens automation engineering across New Zealand, Fiji
              and Australia.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Direct-answer intro */}
      <section className="bg-gradient-to-br from-slate-50/80 via-white to-orange-50/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
            <FadeLeft>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                Why Arahant For Siemens Systems
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Deep, Practical Siemens Platform Experience
              </h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-orange-500" />
              <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600">
                Siemens is one of the most widely deployed automation platforms
                in FMCG, dairy, beverage and process manufacturing — and one of
                the platforms we work with most. From S7-300 systems still
                running reliably after a decade in service, to new S7-1500 and
                TIA Portal rollouts, our engineers program, commission,
                troubleshoot and support Siemens control systems end to end.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-8 text-slate-600">
                That includes the full stack around the PLC itself: WinCC SCADA
                and HMI, Sinamics and Simotion drives, Sinumerik CNC control, and
                PCS7 for distributed process control — so your Siemens
                architecture is designed, built and supported as one coherent
                system, not a collection of disconnected components.
              </p>
            </FadeLeft>
            <FadeRight delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl min-h-[360px]">
                <Image src="/services/HMI.jpg" alt="Siemens HMI and control panel" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* Platforms grid */}
      <section className="relative overflow-hidden bg-[#121435] py-20 lg:py-28">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.12),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="text-center">
              <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
                Siemens Platforms We Support
              </span>
              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Full-Stack Siemens Engineering
              </h2>
              <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
            </div>
          </FadeUp>

          <StaggerContainer stagger={0.07} delay={0.05} className="mt-12 lg:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((item) => {
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

          <FadeUp delay={0.1}>
            <p className="mt-10 text-center text-sm text-slate-400">
              Looking for our full multi-vendor platform coverage (Allen Bradley, Omron, Schneider, Mitsubishi and more)?{" "}
              <Link href="/services/industrial-process-automation" className="font-semibold text-orange-400 hover:underline">
                See all industrial automation platforms →
              </Link>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Regions */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="text-center">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                Where We Work
              </span>
              <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
                Siemens Automation Support Across The Region
              </h2>
              <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
            </div>
          </FadeUp>

          <StaggerContainer stagger={0.1} delay={0.05} className="mt-12 grid gap-5 sm:grid-cols-3">
            {regions.map((region) => (
              <StaggerChild key={region.title}>
                <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 sm:p-8 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{region.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{region.text}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FaqSection items={faqs} eyebrow="Siemens FAQs" title="Siemens Automation, Answered" />

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
                Siemens Project?
              </span>
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Talk To Our Siemens Engineers
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-300">
                Whether it's a new S7-1500 rollout, a legacy S5 migration or a
                WinCC SCADA upgrade, we're ready to help — across New Zealand,
                Fiji and Australia.
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
