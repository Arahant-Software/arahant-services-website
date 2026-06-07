"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Search, 
  Settings, 
  Wrench, 
  Cpu, 
  Factory, 
  ShieldCheck, 
  Zap, 
  Flame, 
  Ruler, 
  Package 
} from "lucide-react";
import Banner from "./components/Banner";
import DcsOfferings from "./components/DcsOfferings";
import TrustedPartners from "./components/TrustedPartners";
import TechnologyPartners from "./components/TechnologyPartners";
import CoreCapabilities from "./components/CoreCapabilities";
import PrecisionMechanical from "./components/PrecisionMechanical";
import ProcurementSection from "./components/ProcurementSection";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
  {/* Background Effects */}
  <div className="absolute inset-0">
    <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-orange-100/40 blur-3xl" />
    <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-50 blur-3xl" />

    <div className="absolute inset-0 opacity-[0.03]">
      <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>
  </div>

  <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10 lg:px-20">
    <div className="grid items-center gap-16 lg:grid-cols-2">
      {/* Left Content */}
      <div>
        <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
          Industrial Automation Specialists
        </span>

        <h2 className="mt-8 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
          Arahant Services
          <span className="block text-orange-600">
            Automating The World
          </span>
        </h2>

        <div className="mt-6 h-1 w-24 rounded-full bg-orange-500" />

        <p className="mt-8 text-lg leading-8 text-slate-600">
          We deliver cutting-edge automation solutions across New Zealand,
          specialising in PLCs, motion control, robotics, industrial
          networking, IIoT and Industry 4.0 technologies.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Whether enhancing standalone machinery or upgrading entire
          manufacturing facilities, we engineer smarter, safer and more
          efficient automation systems designed for long-term reliability.
        </p>

        {/* Feature Boxes */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            "PLC & SCADA Systems",
            "Motion & Drives",
            "Industry 4.0 & IIoT",
            "Machine Safety",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="h-3 w-3 rounded-full bg-orange-500" />
              <span className="font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="relative">
        {/* Orange Glow */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-200/50 blur-3xl" />

        <div className="overflow-hidden rounded-[36px] border border-orange-100 bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
          <div className="relative h-[500px] overflow-hidden rounded-[28px]">
            <Image
              src="/banner/carousel3.jpg"
              alt="Industry Expertise"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <div className="inline-flex rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                Engineering Excellence
              </div>

              <h3 className="mt-4 text-3xl font-bold text-white">
                Smart Industrial Solutions
              </h3>

              <p className="mt-2 text-slate-200">
                Delivering automation, electrical and process engineering
                solutions across New Zealand.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Card */}
        <div className="absolute -bottom-8 -left-8 hidden rounded-3xl border border-orange-100 bg-white p-6 shadow-xl lg:block">
          <div className="text-4xl font-bold text-orange-600">24/7</div>
          <div className="mt-1 text-sm text-slate-600">
            Engineering Support
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
      <section className="relative overflow-hidden bg-[#050505] py-15 px-24 text-white">
        {/* Background Glow */}
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,85,0,0.18),transparent_70%)]" />

        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr] items-center">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
                DESIGN • INTEGRATION • SUPPORT
              </span>

              <h2 className="mt-0 text-4xl md:text-5xl font-bold leading-tight max-w-xl">
                Premium engineering execution, not just advice.
              </h2>

              {/* Orange Line */}
              <div className="mt-8 h-1 w-24 rounded-full bg-orange-500" />

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                We modernise ageing machinery, build clearly labelled control
                panels and execute site works with practical maintainability in
                mind.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  "PLC, HMI, SCADA and vision control",
                  "Electrical design, panels, wiring and diagnostics",
                  "Mechanical and process installation support",
                  "Specifications, FAT, commissioning and handover",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="text-xl font-bold text-orange-500">✓</span>
                    <p className="text-lg text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Cards */}
            <div className="space-y-8">
              {[
                {
                  title: "Discover & Scope",
                  desc: "Review plant requirements, constraints and production-critical risks.",
                  iconColor: "text-blue-500",
                  icon: (
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                    </svg>
                  ),
                  iconColor: "text-[#ec6220]",
                  icon: <Search size={40} />,
                },
                {
                  title: "Engineer & Build",
                  desc: "Develop practical automation, electrical and installation packages.",
                  iconColor: "text-purple-400",
                  icon: (
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  ),
                  iconColor: "text-[#ec6220]",
                  icon: <Settings size={40} />,
                },
                {
                  title: "Commission & Support",
                  desc: "Test, commission, document and support long-term reliability.",
                  iconColor: "text-purple-400",
                  icon: (
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                    </svg>
                  ),
                  iconColor: "text-[#ec6220]",
                  icon: <Wrench size={40} />,
                },
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={false}
                  animate={{ scale: [0.98, 1.03, 0.98] }}
                  exit={{ opacity: 0, y: 24, scale: 0.95 }}
                  transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay: index * 0.35 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`relative mx-auto max-w-xl overflow-hidden rounded-[28px] border border-white/5 bg-[#2b1b12]/95 backdrop-blur-sm p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]
            ${
              index === 1 ? "translate-y-4" : index === 2 ? "translate-y-8" : ""
            }`}
                >
                  {/* Red Half Circle */}
                  <div className="absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#982b20] opacity-80" />

                  <div className="relative z-10 flex items-center gap-6">
                    <div
                      className={`flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-3xl bg-white shadow-xl ${card.iconColor}`}
                    >
                      {card.icon}
                    </div>

                    <div>
                      <h3 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
                        {card.title}
                      </h3>

                      <p className="mt-3 text-base leading-relaxed text-slate-200 max-w-xl">
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
      <PrecisionMechanical/>
      <ProcurementSection/>
      {/* Hero / Banner Section */}
      {/* Capabilities / Services Section */}
      <CoreCapabilities/>
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-orange-600">
            Our Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Research & Development",
              "Quality Control",
              "PCB & Tool Room",
              "Transformers",
              "In-House Testing",
              "NPD / Service",
            ].map((cap, idx) => (
              <motion.div
                key={idx}
                className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  {cap}
                </h3>
                <p className="text-gray-600">
                  High-quality {cap.toLowerCase()} expertise.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Experience / About Section */}
      {/* Stats / Achievements Section */}
      {/* Call to Action Section */}
      {/* <section className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-orange-400">
            Ready to Partner With Us?
          </h2>
          <p className="mb-6 text-lg">
            Contact us today to discuss your requirements and get tailored
            solutions.
          </p>
          <button className="bg-yellow-500 text-indigo-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
            Get in Touch
          </button>
        </div>
      </section> */}
      <TechnologyPartners/>
      {/* <TrustedPartners /> */}
    </>
  );
}
