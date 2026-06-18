"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Settings, Wrench } from "lucide-react";
import Banner from "./components/Banner";
import TechnologyPartners from "./components/TechnologyPartners";
import CoreCapabilities from "./components/CoreCapabilities";
import ProcurementSection from "./components/ProcurementSection";
import {
  FadeUp,
  FadeLeft,
  FadeRight,
  StaggerContainer,
  StaggerChild,
} from "./components/ui/Motion";

const VIEW = { once: true, margin: "-80px" };

export default function Home() {
  return (
    <>
      <Banner />

      {/* About / Intro Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50/80 via-white to-orange-50/30 py-20 lg:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-orange-200/30 blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-100/40 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full bg-[linear-gradient(to_right,#121435_1px,transparent_1px),linear-gradient(to_bottom,#121435_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <FadeLeft>
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
                Arahant delivers advanced automation solutions, combining PLCs,
                robotics, motion control, and IIoT technologies to drive
                performance and innovation.
              </p>

              <p className="mt-4 text-base sm:text-lg leading-8 text-slate-600">
                Whether enhancing standalone equipment or upgrading full-scale
                manufacturing plants, we create automation systems that maximise
                uptime, improve safety, and deliver long-term operational
                efficiency.
              </p>

              <StaggerContainer
                stagger={0.08}
                delay={0.2}
                className="mt-8 grid grid-cols-2 gap-3 sm:gap-4"
              >
                {[
                  "PLC & SCADA Systems",
                  "Motion & Drives",
                  "Industry 4.0 & IIoT",
                  "Machine Safety",
                ].map((item) => (
                  <StaggerChild key={item}>
                    <motion.div
                      whileHover={{ scale: 1.03, borderColor: "#FF5722" }}
                      className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/65 backdrop-blur-md p-3 sm:p-4 shadow-sm transition-colors"
                    >
                      <div className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-orange-500" />
                      <span className="text-sm sm:text-base font-medium text-slate-700">
                        {item}
                      </span>
                    </motion.div>
                  </StaggerChild>
                ))}
              </StaggerContainer>
            </FadeLeft>

            {/* Right Image */}
            <FadeRight delay={0.15}>
              <div className="relative">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-200/50 blur-3xl pointer-events-none" />
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden rounded-3xl border border-white/60 bg-white/70 backdrop-blur-md p-2 sm:p-3 shadow-[0_30px_80px_rgba(255,87,34,0.10)]"
                >
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
                        Delivering automation, electrical and process
                        engineering solutions across New Zealand.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* Engineering Execution Section */}
      <section className="relative overflow-hidden bg-[#121435] py-20 lg:py-28 text-white">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.18),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
            {/* Left Content */}
            <FadeLeft>
              <span className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
                DESIGN • INTEGRATION • SUPPORT
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                From idea to execution engineered to perform.
              </h2>

              <div className="mt-6 h-1 w-20 rounded-full bg-orange-500" />

              <p className="mt-6 text-base sm:text-lg leading-8 text-slate-400 max-w-xl">
                We modernise ageing machinery, build clearly labelled control
                panels and execute site works with practical maintainability in
                mind.
              </p>

              <StaggerContainer
                stagger={0.1}
                delay={0.2}
                className="mt-8 space-y-5"
              >
                {[
                  "PLC, HMI, SCADA and vision control",
                  "Electrical design, panels, wiring and diagnostics",
                  "Mechanical and process installation support",
                  "Specifications, FAT, commissioning and handover",
                ].map((item) => (
                  <StaggerChild key={item} className="flex items-start gap-3">
                    <span className="text-lg font-bold text-orange-500 mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <p className="text-base sm:text-lg text-slate-300">
                      {item}
                    </p>
                  </StaggerChild>
                ))}
              </StaggerContainer>
            </FadeLeft>

            {/* Right Cards */}
            <StaggerContainer
              stagger={0.15}
              delay={0.1}
              className="space-y-5 lg:space-y-6"
            >
              {[
                {
                  title: "Discover & Scope",
                  desc: "Review plant requirements, constraints and production-critical risks.",
                  icon: <Search size={36} />,
                },
                {
                  title: "Engineer & Build",
                  desc: "Develop practical automation, electrical and installation packages.",
                  icon: <Settings size={36} />,
                },
                {
                  title: "Commission & Support",
                  desc: "Test, commission, document and support long-term reliability.",
                  icon: <Wrench size={36} />,
                },
              ].map((card) => (
                <StaggerChild key={card.title} variant="fadeRight">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/8 backdrop-blur-xl p-5 sm:p-6 shadow-[0_20px_60px_rgba(18,20,53,0.35)]"
                  >
                    <div className="absolute -right-12 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#8C3013] opacity-70 pointer-events-none" />
                    <div className="relative z-10 flex items-center gap-5">
                      <div className="flex h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 items-center justify-center rounded-3xl bg-white shadow-xl text-[#FF5722]">
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
                </StaggerChild>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <CoreCapabilities />
      <ProcurementSection />
      <TechnologyPartners />
    </>
  );
}
