"use client";

import Image from "next/image";

const partners = [
  { name: "Siemens", logo: "/partners/siemens.webp" },
  { name: "Rockwell Automation", logo: "/partners/Rockwell.svg" },
  { name: "Schneider Electric", logo: "/partners/Schneider_Electric.svg" },
  { name: "ABB", logo: "/partners/abb.svg" },
  { name: "Omron", logo: "/partners/Omron.svg" },
  { name: "Mitsubishi Electric", logo: "/partners/mistubishi.png" },
  { name: "SICK", logo: "/partners/sick.jpg" },
  { name: "Festo", logo: "/partners/festo.svg" },
  { name: "Phoenix Contact", logo: "/partners/phoenix.svg" },
  { name: "WAGO", logo: "/partners/wago.png" },
  { name: "SMC", logo: "/partners/smc.png" },
  { name: "Balluff", logo: "/partners/Balluff.webp" },
  { name: "Burkert", logo: "/partners/buerkert.svg" },
];

const capabilityCards = [
  {
    tag: "PLC",
    title: "Automation Platforms",
    description:
      "Siemens, Rockwell, Omron and Mitsubishi control systems for machine automation, process plants and industrial production.",
  },
  {
    tag: "IIoT",
    title: "Industry 4.0",
    description:
      "Industrial connectivity, data acquisition, cloud integration, analytics and digital transformation solutions.",
  },
  {
    tag: "OEM",
    title: "Genuine Components",
    description:
      "Authorised sourcing of genuine manufacturer-supported automation, instrumentation, drives and industrial control products.",
  },
];

export default function TechnologyPartners() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-orange-100/50 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-50 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
            Technology Partners
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
            Trusted Industrial
            <span className="block text-orange-600">Technology Partners</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-slate-600">
            We collaborate with globally recognised automation,
            instrumentation, motion control and process technology
            manufacturers to deliver reliable, scalable and future-ready
            industrial solutions.
          </p>
        </div>

        {/* Banner */}
        <div className="mt-12 lg:mt-20 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-orange-50 via-white to-orange-50 p-6 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-center lg:text-left flex-shrink-0">
              <div className="text-5xl sm:text-6xl font-bold text-orange-600">14+</div>
              <div className="mt-2 text-sm sm:text-base text-slate-600">Global Technology Partners</div>
            </div>
            <div className="max-w-2xl text-center text-sm sm:text-lg leading-8 text-slate-600 lg:text-left">
              Access to leading automation, machine safety, process control,
              instrumentation and industrial digitalisation technologies trusted
              by manufacturers worldwide.
            </div>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="mt-12 lg:mt-20">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 lg:p-14 shadow-[0_15px_50px_rgba(0,0,0,0.06)]">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="group flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_15px_40px_rgba(249,115,22,0.12)]"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={70}
                    className="h-[45px] sm:h-[55px] w-auto max-w-[120px] sm:max-w-[140px] object-contain transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Capability Cards */}
        <div className="mt-10 lg:mt-16 grid gap-5 sm:grid-cols-3">
          {capabilityCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-orange-300"
            >
              <div className="text-4xl sm:text-5xl font-bold text-orange-600">{card.tag}</div>
              <h4 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">{card.title}</h4>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-7">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
