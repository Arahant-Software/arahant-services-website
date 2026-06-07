"use client";

import {
  Cpu,
  Factory,
  ShieldCheck,
  Zap,
  Wrench,
  Flame,
  ClipboardList,
  Package,
} from "lucide-react";

const capabilities = [
  {
    title: "Industrial Automation",
    icon: Cpu,
    description:
      "PLC, HMI, SCADA, Motion Control, Vision & Robotics.",
    details:
      "Siemens, Rockwell, Omron, Mitsubishi & Beckhoff experts.",
  },
  {
    title: "Process Automation",
    icon: Factory,
    description:
      "DCS, Batch Control & Data Acquisition Systems.",
    details:
      "PCS7, Yokogawa, Emerson for FMCG, dairy, beverage & chemicals.",
  },
  {
    title: "Machine Safety",
    icon: ShieldCheck,
    description:
      "Risk Assessments & Safety System Design.",
    details:
      "ISO 13849 / IEC 62061 compliant. CMSE® Certified.",
  },
  {
    title: "Electrical Engineering",
    icon: Zap,
    description:
      "Control Panels, Drawings & Diagnostics.",
    details:
      "2D/3D designs, switchboards, maintenance & troubleshooting.",
  },
  {
    title: "Mechanical Installation",
    icon: Wrench,
    description:
      "Turnkey Line Installation Solutions.",
    details:
      "Conveyors, valve banks, pneumatics, hydraulics & precision alignment.",
  },
  {
    title: "Welding Services",
    icon: Flame,
    description:
      "Certified Stainless Steel Fabrication.",
    details:
      "Pipework, platforms, ladders, walkways & purge welding.",
  },
  {
    title: "Design & Project Management",
    icon: ClipboardList,
    description:
      "Concept Through Commissioning.",
    details:
      "3D modelling, FAT/SAT, commissioning & lifecycle support.",
  },
  {
    title: "Industrial Parts Procurement",
    icon: Package,
    description:
      "Strategic OEM Component Sourcing.",
    details:
      "Siemens, Rockwell, Schneider, Festo, SMC, Phoenix & Wago.",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">
      {/* Orange Glow */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,102,0,0.12),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-8 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
            CORE CAPABILITIES
          </span>

          <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
            End-to-End Industrial Engineering Services
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-500" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Delivering automation, electrical, mechanical and process
            engineering solutions from concept through commissioning.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/5
                  bg-[#111111]
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-orange-500/20
                  hover:bg-[#181818]
                  hover:shadow-[0_20px_60px_rgba(255,102,0,0.15)]
                "
              >
                {/* Orange Circle */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/10 blur-2xl" />

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white">
                    <Icon className="h-8 w-8 text-orange-600" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-300">
                    {item.description}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 rounded-[32px] border border-orange-500/10 bg-[#0f0f0f] p-10">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <div className="text-5xl font-bold text-orange-500">
                20+
              </div>
              <div className="mt-2 text-slate-400">
                Years Combined Industry Experience
              </div>
            </div>

            <div className="max-w-3xl text-center text-slate-300 lg:text-left">
              Trusted by manufacturers and industrial facilities across
              New Zealand for automation, process control, safety,
              installation and engineering excellence.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}