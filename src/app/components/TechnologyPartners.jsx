"use client";

import { FadeUp, Counter } from "./ui/Motion";

const partners = [
  "Siemens",
  "Rockwell Automation",
  "Schneider Electric",
  "ABB",
  "Omron",
  "Mitsubishi Electric",
  "SICK",
  "Festo",
  "Phoenix Contact",
  "WAGO",
  "SMC",
  "Balluff",
  "Burkert",
];

/* Duplicate for seamless loop */
const row1 = [...partners, ...partners];
const row2 = [...partners].reverse();
const row2Loop = [...row2, ...row2];

export default function TechnologyPartners() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50/80 via-white to-orange-50/30 py-20 lg:py-32">
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
          <div className="mt-12 lg:mt-20 overflow-hidden rounded-3xl border border-white/50 bg-white/60 backdrop-blur-md p-6 sm:p-10 shadow-[0_10px_40px_rgba(255,87,34,0.08)]">
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

        {/* ── Partner Carousel ── */}
        <FadeUp delay={0.15}>
          <div className="mt-12 lg:mt-20 space-y-4 sm:space-y-5 overflow-hidden rounded-3xl border border-white/50 bg-white/60 backdrop-blur-md py-8 sm:py-10 shadow-[0_15px_50px_rgba(255,87,34,0.07)]">
            {/* Row 1 */}
            <div className="overflow-hidden marquee-fade">
              <div className="flex animate-marquee gap-4 w-max">
                {row1.map((name, i) => (
                  <span
                    key={`r1-${name}-${i}`}
                    className="flex-shrink-0 whitespace-nowrap rounded-full border border-orange-200 bg-white px-6 py-3 text-sm sm:text-base font-semibold text-slate-700 shadow-sm"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 2 — opposite direction */}
            <div className="overflow-hidden marquee-fade">
              <div className="flex animate-marquee-reverse gap-4 w-max">
                {row2Loop.map((name, i) => (
                  <span
                    key={`r2-${name}-${i}`}
                    className="flex-shrink-0 whitespace-nowrap rounded-full border border-orange-200 bg-orange-50 px-6 py-3 text-sm sm:text-base font-semibold text-orange-700 shadow-sm"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
