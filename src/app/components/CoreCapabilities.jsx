"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Zap, Wrench, Flame, ClipboardList, Package } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerChild, Counter } from "./ui/Motion";

const capabilities = [
  {
    title: "Industrial Process Automation",
    icon: Cpu,
    description: "PLC, HMI, SCADA, Motion Control, Vision, Robotics, DCS & Batch Control.",
    details: "Siemens, Rockwell, Omron, Mitsubishi, PCS7, Yokogawa & Emerson for FMCG, dairy, beverage & chemicals.",
  },
  { title: "Machine Safety", icon: ShieldCheck, description: "Risk Assessments & Safety System Design.", details: "ISO 13849 / IEC 62061 compliant. CMSE® Certified." },
  { title: "Electrical Engineering", icon: Zap, description: "Control Panels, Drawings & Diagnostics.", details: "2D/3D designs, switchboards, maintenance & troubleshooting." },
  {
    title: "Industrial Engineering Services",
    icon: Wrench,
    subsections: [
      {
        label: "Installation",
        icon: Wrench,
        text: "Turnkey line installation — conveyors, valve banks, pneumatics, hydraulics & precision alignment.",
      },
      {
        label: "Welding & Fabrication",
        icon: Flame,
        text: "Certified stainless steel fabrication — pipework, platforms, ladders, walkways & purge welding.",
      },
    ],
  },
  { title: "Design & Project Management", icon: ClipboardList, description: "Concept Through Commissioning.", details: "3D modelling, FAT/SAT, commissioning & lifecycle support." },
  { title: "Industrial Parts Procurement", icon: Package, description: "Strategic OEM Component Sourcing.", details: "Siemens, Rockwell, Schneider, Festo, SMC, Phoenix & Wago." },
];

export default function CoreCapabilities() {
  return (
    <section className="relative overflow-hidden bg-[#121435] py-20 lg:py-32">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.12),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <FadeUp>
          <div className="text-center">
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
              Core Capabilities
            </span>
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              End-to-End Industrial Engineering Services
            </h2>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-slate-400">
              Delivering automation, electrical, mechanical and process
              engineering solutions from concept through commissioning.
            </p>
          </div>
        </FadeUp>

        {/* Cards */}
        <StaggerContainer stagger={0.07} delay={0.05} className="mt-12 lg:mt-20 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerChild key={index}>
                <motion.div
                  whileHover={{ y: -8, backgroundColor: "#1A1C3A", borderColor: "rgba(255,87,34,0.2)", boxShadow: "0 20px 60px rgba(255,87,34,0.18)" }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/6 backdrop-blur-md p-6 sm:p-8 h-full"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/10 blur-2xl pointer-events-none" />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white"
                    >
                      <Icon className="h-7 w-7 text-orange-600" />
                    </motion.div>
                    <h3 className="mt-5 text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                    {item.subsections ? (
                      <div className="mt-3 space-y-3">
                        {item.subsections.map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <div key={sub.label}>
                              <div className="flex items-center gap-1.5">
                                <SubIcon className="h-3.5 w-3.5 text-orange-500" />
                                <span className="text-xs font-bold uppercase tracking-wide text-orange-300">
                                  {sub.label}
                                </span>
                              </div>
                              <p className="mt-1 text-sm leading-6 text-slate-400">{sub.text}</p>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <>
                        <p className="mt-3 text-sm sm:text-base text-slate-300">{item.description}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-500">{item.details}</p>
                      </>
                    )}
                  </div>
                </motion.div>
              </StaggerChild>
            );
          })}
        </StaggerContainer>

        {/* Bottom Banner */}
        <FadeUp delay={0.1}>
          <div className="mt-12 lg:mt-20 rounded-3xl border border-orange-500/20 bg-white/6 backdrop-blur-md p-6 sm:p-10">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-shrink-0">
                <div className="text-4xl sm:text-5xl font-bold text-orange-500">
                  <Counter to={20} suffix="+" />
                </div>
                <div className="mt-2 text-slate-400 text-sm sm:text-base">Years Combined Industry Experience</div>
              </div>
              <div className="max-w-2xl text-sm sm:text-base text-slate-300 leading-7">
                Trusted by manufacturers and industrial facilities across
                New Zealand for automation, process control, safety,
                installation and engineering excellence.
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
