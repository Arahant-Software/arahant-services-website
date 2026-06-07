"use client";

import {
  Wrench,
  Cog,
  Flame,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function PrecisionMechanical() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,102,0,0.12),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-8 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
            MECHANICAL & WELDING
          </span>

          <h2 className="mt-8 text-4xl md:text-5xl font-bold text-white">
            Precision Mechanical & Welding
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-500" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Engineered installations, fabrication and welding services
            designed for reliability, safety and long-term performance.
          </p>
        </div>

        {/* Main Section */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/5">
            <Image
              src="/images/welding-industrial.png"
              alt="Industrial Welding"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
                <ShieldCheck className="h-4 w-4" />
                AS/NZS 1554 Compliant
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <div className="rounded-[32px] border border-white/5 bg-[#111111] p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white">
                  <Cog className="h-8 w-8 text-orange-600" />
                </div>

                <h3 className="text-3xl font-bold text-white">
                  Mechanical Works
                </h3>
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Our mechanical division delivers robust installations for
                heavy industry and production environments. We combine
                3D modelling with hands-on execution to minimise downtime.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Full line installations",
                  "Conveyor alignment",
                  "Gearbox replacements",
                  "Hydraulic system overhauls",
                  "Pneumatic system upgrades",
                  "Valve bank assemblies",
                  "Preventive maintenance programs",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <ArrowRight className="h-4 w-4 text-orange-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Welding Section */}
        <div className="mt-10 rounded-[32px] border border-white/5 bg-[#111111] p-10">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white">
              <Flame className="h-8 w-8 text-orange-600" />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                Certified Welding & Fabrication
              </h3>

              <p className="mt-2 text-slate-400">
                Precision welding for critical industrial applications.
              </p>
            </div>
          </div>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Specialising in TIG, MIG and Stick welding, including purge
            welding for hygienic stainless steel lines in food and beverage
            facilities. We fabricate custom platforms, ladders, walkways,
            structural supports and industrial gates.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Stainless Steel & Carbon Steel Fabrication",
              "Pipe Welding & Process Line Modifications",
              "On-Site Mobile Welding & Workshop Assembly",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-orange-500/10 bg-[#171717] p-6 text-center"
              >
                <Wrench className="mx-auto mb-4 h-8 w-8 text-orange-500" />
                <p className="font-medium text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}