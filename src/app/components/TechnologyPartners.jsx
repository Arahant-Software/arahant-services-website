"use client";

import Image from "next/image";
import { FadeUp, Counter } from "./ui/Motion";

const partners = [
  { name: "Siemens", logo: "/partners/siemens.webp" },
  { name: "Schneider Electric", logo: "/partners/Schneider_Electric.svg" },
  { name: "Omron", logo: "/partners/Omron.svg" },
  { name: "SICK", logo: "/partners/sick.jpg" },
  { name: "Festo", logo: "/partners/festo.svg" },
  { name: "Phoenix Contact", logo: "/partners/phoenix.svg" },
  { name: "WAGO", logo: "/partners/wago.png" },
  { name: "SMC", logo: "/partners/smc.png" },
  { name: "Balluff", logo: "/partners/Balluff.webp" },
  { name: "Burkert", logo: "/partners/buerkert.svg" },
];

/* Duplicate for seamless loop */
const row = [...partners, ...partners];

export default function TechnologyPartners() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50/80 via-white to-orange-50/30 pt-10 lg:pt-14 pb-20 lg:pb-32">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-orange-100/50 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-50 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#121435_1px,transparent_1px),linear-gradient(to_bottom,#121435_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <FadeUp>
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
        </FadeUp>

        {/* Banner */}
        <FadeUp delay={0.1}>
          <div className="mt-8 lg:mt-10 overflow-hidden rounded-3xl border border-white/50 bg-white/60 backdrop-blur-md p-6 sm:p-10 shadow-[0_10px_40px_rgba(255,87,34,0.08)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="text-center lg:text-left flex-shrink-0">
                <div className="text-5xl sm:text-6xl font-bold text-orange-600">
                  <Counter to={14} suffix="+" />
                </div>
                <div className="mt-2 text-sm sm:text-base text-slate-600">Global Technology Partners</div>
              </div>
              <div className="max-w-2xl text-center text-sm sm:text-lg leading-8 text-slate-600 lg:text-left">
                Access to leading automation, machine safety, process control,
                instrumentation and industrial digitalisation technologies trusted
                by manufacturers worldwide.
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ── Partner Logo Carousel ── */}
        <FadeUp delay={0.15}>
          <div className="mt-12 lg:mt-20 overflow-hidden rounded-3xl border border-white/50 bg-white/60 backdrop-blur-md py-8 sm:py-10 shadow-[0_15px_50px_rgba(255,87,34,0.07)]">
            <div className="overflow-hidden marquee-fade">
              <div className="flex animate-marquee items-center gap-10 sm:gap-14 w-max">
                {row.map((partner, i) => (
                  <div
                    key={`${partner.name}-${i}`}
                    className="flex h-16 w-32 sm:h-20 sm:w-40 flex-shrink-0 items-center justify-center"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={140}
                      height={60}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
