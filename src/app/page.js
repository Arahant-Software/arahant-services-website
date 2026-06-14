"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Settings, Wrench } from "lucide-react";
import Banner from "./components/Banner";
import DcsOfferings from "./components/DcsOfferings";
import TechnologyPartners from "./components/TechnologyPartners";
import CoreCapabilities from "./components/CoreCapabilities";
import PrecisionMechanical from "./components/PrecisionMechanical";
import ProcurementSection from "./components/ProcurementSection";

export default function Home() {
  return (
    <>
      <Banner />

      {/* About / Intro Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-orange-100/40 blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-50 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
                Industrial Automation Specialists
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                Arahant Services
                <span className="block text-orange-600 text-2xl sm:text-3xl lg:text-4xl mt-2">
                  Automating The World
                </span>
              </h2>

              <div className="mt-5 h-1 w-20 rounded-full bg-orange-500" />

              <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600">
                We deliver cutting-edge automation solutions across New Zealand,
                specialising in PLCs, motion control, robotics, industrial
                networking, IIoT and Industry 4.0 technologies.
              </p>

              <p className="mt-4 text-base sm:text-lg leading-8 text-slate-600">
                Whether enhancing standalone machinery or upgrading entire
                manufacturing facilities, we engineer smarter, safer and more
                efficient automation systems designed for long-term reliability.
              </p>

              {/* Feature Boxes */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  "PLC & SCADA Systems",
                  "Motion & Drives",
                  "Industry 4.0 & IIoT",
                  "Machine Safety",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 shadow-sm"
                  >
                    <div className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-orange-500" />
                    <span className="text-sm sm:text-base font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-200/50 blur-3xl pointer-events-none" />
              <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white p-2 sm:p-3 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                <div className="relative h-[260px] sm:h-[380px] lg:h-[480px] overflow-hidden rounded-2xl">
                  <Image
                    src="/banner/carousel3.jpg"
                    alt="Industry Expertise"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                    <div className="inline-flex rounded-full bg-orange-500 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                      Engineering Excellence
                    </div>
                    <h3 className="mt-3 text-xl sm:text-3xl font-bold text-white">
                      Smart Industrial Solutions
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-200">
                      Delivering automation, electrical and process engineering
                      solutions across New Zealand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Execution Section */}
      <section className="relative overflow-hidden bg-[#333333] py-20 lg:py-28 text-white">
        {/* Background Glow */}
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,85,0,0.18),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
                DESIGN • INTEGRATION • SUPPORT
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Premium engineering execution, not just advice.
              </h2>

              <div className="mt-6 h-1 w-20 rounded-full bg-orange-500" />

              <p className="mt-6 text-base sm:text-lg leading-8 text-slate-400 max-w-xl">
                We modernise ageing machinery, build clearly labelled control
                panels and execute site works with practical maintainability in
                mind.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "PLC, HMI, SCADA and vision control",
                  "Electrical design, panels, wiring and diagnostics",
                  "Mechanical and process installation support",
                  "Specifications, FAT, commissioning and handover",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-lg font-bold text-orange-500 mt-0.5 flex-shrink-0">✓</span>
                    <p className="text-base sm:text-lg text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Cards */}
            <div className="space-y-5 lg:space-y-6">
              {[
                {
                  title: "Discover & Scope",
                  desc: "Review plant requirements, constraints and production-critical risks.",
                  iconColor: "text-[#ec6220]",
                  icon: <Search size={36} />,
                },
                {
                  title: "Engineer & Build",
                  desc: "Develop practical automation, electrical and installation packages.",
                  iconColor: "text-[#ec6220]",
                  icon: <Settings size={36} />,
                },
                {
                  title: "Commission & Support",
                  desc: "Test, commission, document and support long-term reliability.",
                  iconColor: "text-[#ec6220]",
                  icon: <Wrench size={36} />,
                },
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={false}
                  animate={{ scale: [0.98, 1.02, 0.98] }}
                  transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay: index * 0.35 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#2b1b12]/95 backdrop-blur-sm p-5 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                >
                  {/* Decorative circle */}
                  <div className="absolute -right-12 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#982b20] opacity-70" />

                  <div className="relative z-10 flex items-center gap-5">
                    <div className={`flex h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 items-center justify-center rounded-3xl bg-white shadow-xl ${card.iconColor}`}>
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight text-white">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-300">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DcsOfferings />
      <PrecisionMechanical />
      <ProcurementSection />
      <CoreCapabilities />
      <TechnologyPartners />
    </>
  );
}
