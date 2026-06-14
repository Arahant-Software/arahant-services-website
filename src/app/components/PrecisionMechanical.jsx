"use client";

import { Wrench, Cog, Flame, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";

const mechanicalItems = [
  "Full line installations",
  "Conveyor alignment",
  "Gearbox replacements",
  "Hydraulic system overhauls",
  "Pneumatic system upgrades",
  "Valve bank assemblies",
  "Preventive maintenance programs",
];

const weldingCards = [
  "Stainless Steel & Carbon Steel Fabrication",
  "Pipe Welding & Process Line Modifications",
  "On-Site Mobile Welding & Workshop Assembly",
];

export default function PrecisionMechanical() {
  return (
    <section className="relative overflow-hidden bg-[#333333] py-20 lg:py-32">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,102,0,0.12),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
            Mechanical & Welding
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Precision Mechanical & Welding
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-slate-400">
            Engineered installations, fabrication and welding services
            designed for reliability, safety and long-term performance.
          </p>
        </div>

        {/* Main Section */}
        <div className="mt-12 lg:mt-20 grid gap-8 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative overflow-hidden rounded-3xl border border-white/5 min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]">
            <Image
              src="/images/welding-industrial.png"
              alt="Industrial Welding"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
                <ShieldCheck className="h-4 w-4" />
                AS/NZS 1554 Compliant
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <div className="rounded-3xl border border-white/5 bg-[#2a2a2a] p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white">
                  <Cog className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Mechanical Works</h3>
              </div>

              <p className="mt-5 text-sm sm:text-base leading-7 text-slate-300">
                Our mechanical division delivers robust installations for
                heavy industry and production environments. We combine
                3D modelling with hands-on execution to minimise downtime.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {mechanicalItems.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-slate-300">
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Welding Section */}
        <div className="mt-8 rounded-3xl border border-white/5 bg-[#2a2a2a] p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white">
              <Flame className="h-7 w-7 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Certified Welding & Fabrication
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Precision welding for critical industrial applications.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm sm:text-base leading-7 text-slate-300">
            Specialising in TIG, MIG and Stick welding, including purge
            welding for hygienic stainless steel lines in food and beverage
            facilities. We fabricate custom platforms, ladders, walkways,
            structural supports and industrial gates.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {weldingCards.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-orange-500/10 bg-[#333333] p-5 text-center"
              >
                <Wrench className="mx-auto mb-3 h-7 w-7 text-orange-500" />
                <p className="text-sm sm:text-base font-medium text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
