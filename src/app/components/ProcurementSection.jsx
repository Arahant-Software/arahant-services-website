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

const partners = [
  "SIEMENS",
  "ROCKWELL AUTOMATION",
  "SCHNEIDER ELECTRIC",
  "ABB",
  "FESTO",
  "SMC",
  "BALLUFF",
  "PHOENIX CONTACT",
  "WAGO",
  "IFM",
];

export default function ProcurementLogisticsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-50 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
            PROCUREMENT & LOGISTICS
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Genuine OEM Components &
            <br />
            Critical Spares Logistics
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-500" />

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-600">
            Strategic inventory management for operational continuity —
            from a single sensor to a full drive retrofit.
          </p>
        </div>

        {/* Main Section */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Left Content */}
          <div className="rounded-[36px] border border-orange-100 bg-gradient-to-br from-white via-orange-50/30 to-white p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="mb-8 inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              OEM PROCUREMENT SPECIALISTS
            </div>

            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-50">
                <Package className="h-10 w-10 text-orange-600" />
              </div>

              <h3 className="text-3xl font-bold text-slate-900">
                Strategic Industrial Procurement
              </h3>
            </div>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Arahant&apos;s industrial procurement division ensures production
              continuity through rapid sourcing and delivery of authentic OEM
              components. We maintain strategic partnerships with leading
              global manufacturers to guarantee genuine, traceable parts for
              critical automation assets.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our logistics network enables expedited dispatch across New
              Zealand and the Pacific region, helping clients minimise
              downtime and maintain operational reliability.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                "PLC CPUs & I/O Modules",
                "Industrial Drives & VSDs",
                "Servo Motors & Motion Controllers",
                "Pneumatic Actuators & Valve Assemblies",
                "Industrial Sensors & Vision Systems",
                "Welding Consumables & Torches",
                "Control Cables & Power Supplies",
                "Contactors, Breakers & Panel Components",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-orange-500" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            {[
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
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-300 hover:shadow-[0_20px_60px_rgba(249,115,22,0.15)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
                    <Icon className="h-8 w-8 text-orange-600" />
                  </div>

                  <h4 className="mt-5 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Procurement Portfolio */}
        <div className="mt-24">
          <h3 className="text-center text-3xl font-bold text-slate-900">
            Procurement Portfolio
          </h3>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {productCategories.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:border-orange-300 hover:shadow-[0_25px_80px_rgba(249,115,22,0.15)]"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-100 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
                    <Icon className="h-8 w-8 text-orange-600" />
                  </div>

                  <h4 className="relative mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="relative mt-3 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Partners */}
        <div className="mt-24">
          <h3 className="text-center text-3xl font-bold text-slate-900">
            Strategic Technology Partners
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
            Access to leading global automation and industrial technology
            manufacturers.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-center font-semibold tracking-wide text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:text-orange-600"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 overflow-hidden rounded-[40px] border border-orange-100 bg-gradient-to-r from-orange-50 via-white to-orange-50 p-14 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="text-center">
              <div className="text-6xl font-bold text-orange-600">100%</div>
              <div className="mt-3 text-slate-600">
                Genuine OEM Components
              </div>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-orange-600">NZ</div>
              <div className="mt-3 text-slate-600">
                Nationwide Logistics Network
              </div>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-orange-600">24/7</div>
              <div className="mt-3 text-slate-600">
                Critical Breakdown Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}