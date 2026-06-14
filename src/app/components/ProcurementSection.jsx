"use client";

import {
  Cpu,
  Gauge,
  Settings,
  Camera,
  ShieldCheck,
  Truck,
  Clock3,
  Package,
} from "lucide-react";

const productCategories = [
  {
    icon: Cpu,
    title: "PLC Systems",
    description: "PLC CPUs, I/O modules and communication hardware.",
  },
  {
    icon: Gauge,
    title: "Drives & Motion",
    description: "Industrial drives, VSDs, servo motors and controllers.",
  },
  {
    icon: Settings,
    title: "Pneumatics",
    description: "Actuators, valve assemblies and pneumatic systems.",
  },
  {
    icon: Camera,
    title: "Sensors & Vision",
    description: "Industrial sensors, machine vision and detection systems.",
  },
];

const procurementItems = [
  "PLC CPUs & I/O Modules",
  "Industrial Drives & VSDs",
  "Servo Motors & Motion Controllers",
  "Pneumatic Actuators & Valve Assemblies",
  "Industrial Sensors & Vision Systems",
  "Welding Consumables & Torches",
  "Control Cables & Power Supplies",
  "Contactors, Breakers & Panel Components",
];

const rightCards = [
  {
    icon: Truck,
    title: "Rapid Dispatch",
    text: "Fast sourcing and delivery throughout New Zealand and the Pacific region.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine OEM Parts",
    text: "Guaranteed authentic and fully traceable components from trusted manufacturers.",
  },
  {
    icon: Clock3,
    title: "Critical Spares Support",
    text: "Supporting maintenance shutdowns and emergency breakdown requirements.",
  },
];

export default function ProcurementLogisticsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-50 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
            Procurement & Logistics
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
            Genuine OEM Components &
            <span className="block text-orange-600">Critical Spares Logistics</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-slate-600">
            Strategic inventory management for operational continuity —
            from a single sensor to a full drive retrofit.
          </p>
        </div>

        {/* Main Section */}
        <div className="mt-12 lg:mt-20 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left Content */}
          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50/30 to-white p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="mb-6 inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              OEM Procurement Specialists
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-3xl bg-orange-50">
                <Package className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Strategic Industrial Procurement
              </h3>
            </div>

            <p className="mt-6 text-sm sm:text-base leading-8 text-slate-600">
              Arahant&apos;s industrial procurement division ensures production
              continuity through rapid sourcing and delivery of authentic OEM
              components. We maintain strategic partnerships with leading
              global manufacturers to guarantee genuine, traceable parts for
              critical automation assets.
            </p>

            <p className="mt-4 text-sm sm:text-base leading-8 text-slate-600">
              Our logistics network enables expedited dispatch across New
              Zealand and the Pacific region, helping clients minimise
              downtime and maintain operational reliability.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {procurementItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                  <span className="text-sm sm:text-base text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-5">
            {rightCards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_20px_60px_rgba(249,115,22,0.15)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50">
                    <Icon className="h-7 w-7 text-orange-600" />
                  </div>
                  <h4 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm sm:text-base text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Procurement Portfolio */}
        <div className="mt-16 lg:mt-24">
          <h3 className="text-center text-2xl sm:text-3xl font-bold text-slate-900">
            Procurement Portfolio
          </h3>

          <div className="mt-8 lg:mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {productCategories.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-300 hover:shadow-[0_25px_80px_rgba(249,115,22,0.15)]"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-100 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100 pointer-events-none" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50">
                    <Icon className="h-7 w-7 text-orange-600" />
                  </div>
                  <h4 className="relative mt-5 text-lg sm:text-xl font-bold text-slate-900">{item.title}</h4>
                  <p className="relative mt-2 text-sm sm:text-base text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
