"use client";

import Image from "next/image";

const offerings = [
  {
    title: "PLCs",
    subtitle: "Programmable Logic Controller",
    description:
      "Siemens (S5, S7-200, S7-300, S7-400, S7-1200, S7-1500), Allen Bradley (Control/Compact/Micro Logix, PLC-5, SLC500, 5000 Series), Schneider (Quantum, M340), Omron (CX Series), Mitsubishi (FX, Q Series), Wago.",
    image: "/services/PLCs.jpg",
  },
  {
    title: "IIoT - Industry 4.0",
    subtitle: "Industrial Internet of Things",
    description:
      "Data collection, data gathering, OPCs, database integration for Industry 4.0 implementations.",
    image: "/services/IIOT.jpg",
  },
  {
    title: "HMI",
    subtitle: "Human Machine Interface",
    description:
      "Siemens (OP, TP, MP, Comfort, Unified Series), Allen Bradley, Omron.",
    image: "/services/HMI.jpg",
  },
  {
    title: "Robotics",
    subtitle: "Smart Automation Solutions",
    description: "ABB, Kuka, Hyundai, Fanuc.",
    image: "/services/Robotics.jpg",
  },
  {
    title: "Drives",
    subtitle: "Precision Motion Control",
    description:
      "Siemens (Simotion, Sinamics, Simodrive, Master Drives), Allen Bradley, Schneider, SEW, Danfoss.",
    image: "/services/Drives&Motion.jpg",
  },
  {
    title: "LabVIEW",
    subtitle: "Smart Inspection Systems",
    description:
      "Control systems, data acquisition, custom applications, TestStand, test jigs.",
    image: "/services/Vision.jpg",
  },
  {
    title: "Safety",
    subtitle: "Industrial Safety Systems",
    description:
      "CMSE® (Certified Machinery Safety Expert) – TÜV NORD certified. Risk assessment, safety evaluation, compliance with safety standards.",
    image: "/services/Safety.jpg",
  },
  {
    title: "SCADA",
    subtitle: "Supervisory Control & Data Acquisition",
    description:
      "Siemens WINCC, FactoryTalk View, Vijeo Citect, GE Ifix, Wonderware, Ignition.",
    image: "/services/SCADA.jpg",
  },
  {
    title: "CNC Controllers",
    subtitle: "Advanced Machine Control",
    description:
      "Siemens Sinumerik CNC controllers — programming, commissioning, troubleshooting and support.",
    image: "/services/CNC.jpg",
  },
  {
    title: "DCS",
    subtitle: "Distributed Control Systems",
    description:
      "Siemens PCS7, Yokogawa, ABB and Emerson DCS solutions for process industries.",
    image: "/services/DCS.jpg",
  },
];

const stats = [
  { value: "10+", label: "Technology Platforms" },
  { value: "24/7", label: "Engineering Support" },
  { value: "100%", label: "Platform Independent" },
  { value: "NZ", label: "Nationwide Coverage" },
];

export default function DcsOfferings() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-50 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
            Technical Expertise
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
            Technical Capabilities &
            <span className="block text-orange-600">Platform Expertise</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />

          <p className="mx-auto mt-6 max-w-4xl text-base sm:text-lg leading-8 text-slate-600">
            Arahant provides comprehensive service and support for all types of
            industrial control systems. No matter what your automation platform
            or equipment manufacturer, our team has the expertise to support it.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-300 hover:shadow-[0_25px_80px_rgba(249,115,22,0.15)]"
            >
              {/* Hover Glow */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-100 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100 pointer-events-none" />

              {/* Image */}
              <div className="relative h-[220px] sm:h-[240px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-block rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    {item.subtitle}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                <p className="text-sm sm:text-base leading-7 text-slate-600">{item.description}</p>
                <div className="mt-5 h-[2px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 lg:mt-24 overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-r from-orange-50 via-white to-orange-50 p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-orange-600">{s.value}</div>
                <div className="mt-2 text-sm sm:text-base text-slate-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 text-center">
          <p className="mx-auto max-w-4xl text-base sm:text-lg leading-8 text-slate-600">
            Whether you require PLC programming, SCADA upgrades, robotics,
            machine safety, motion control, DCS integration or Industry 4.0
            solutions, Arahant delivers practical engineering expertise backed
            by decades of industrial automation experience.
          </p>
        </div>
      </div>
    </section>
  );
}
