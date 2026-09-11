"use client";

import { motion } from "framer-motion";
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
import { FadeUp, FadeLeft, StaggerContainer, StaggerChild } from "./ui/Motion";

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

const procurementItems = [
  "PLC CPUs & I/O Modules",
  "Industrial Drives & VSDs",
  "Servo Motors & Motion Controllers",
  "Pneumatic Actuators & Valve Assemblies",
  "Industrial Sensors & Vision Systems",
  "Welding Consumables & Torches",
  "Control Cables & Power Supplies",
  "Contactors, Breakers & Panel Components",
];

const rightCards = [
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
];

export default function ProcurementLogisticsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50/80 via-white to-orange-50/30 py-20 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#121435_1px,transparent_1px),linear-gradient(to_bottom,#121435_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <FadeUp>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
              Procurement & Logistics
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
              Reliable OEM Components &
              <span className="block text-orange-600">
                Critical Spares for Continuous Operations
              </span>
            </h2>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-slate-600">
              Strategic inventory management for operational continuity — from a
              single sensor to a full drive retrofit.
            </p>
          </div>
        </FadeUp>

        {/* Main Section */}
        <div className="mt-12 lg:mt-20 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left Content */}
          <FadeLeft>
            <div className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-md p-6 sm:p-10 shadow-[0_20px_60px_rgba(255,87,34,0.08)] h-full">
              <div className="mb-6 inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                OEM Procurement Specialists
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-3xl bg-orange-50">
                  <Package className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Strategic Industrial Procurement
                </h3>
              </div>
              <p className="mt-6 text-sm sm:text-base leading-8 text-slate-600">
                Arahant&apos;s industrial procurement division ensures
                production continuity through rapid sourcing and delivery of
                authentic OEM components. We maintain strategic partnerships
                with leading global manufacturers to guarantee genuine,
                traceable parts for critical automation assets.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-8 text-slate-600">
                Our logistics network enables expedited dispatch across New
                Zealand and the Pacific region, helping clients minimise
                downtime and maintain operational reliability.
              </p>
              <StaggerContainer
                stagger={0.06}
                delay={0.1}
                className="mt-8 grid gap-3 sm:grid-cols-2"
              >
                {procurementItems.map((item) => (
                  <StaggerChild key={item} className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                    <span className="text-sm sm:text-base text-slate-700">
                      {item}
                    </span>
                  </StaggerChild>
                ))}
              </StaggerContainer>
            </div>
          </FadeLeft>

          {/* Right Cards */}
          <StaggerContainer
            stagger={0.12}
            delay={0.05}
            className="flex flex-col gap-5"
          >
            {rightCards.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerChild key={item.title}>
                  <motion.div
                    whileHover={{
                      y: -4,
                      borderColor: "#FF9A7A",
                      boxShadow: "0 20px_60px rgba(255,87,34,0.15)",
                    }}
                    transition={{ duration: 0.25 }}
                    className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-md p-6 shadow-[0_10px_40px_rgba(18,20,53,0.05)]"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50"
                    >
                      <Icon className="h-7 w-7 text-orange-600" />
                    </motion.div>
                    <h4 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm sm:text-base text-slate-600">
                      {item.text}
                    </p>
                  </motion.div>
                </StaggerChild>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Procurement Portfolio */}
        <FadeUp delay={0.05}>
          <div className="mt-16 lg:mt-24">
            <h3 className="text-center text-2xl sm:text-3xl font-bold text-slate-900">
              Procurement Portfolio
            </h3>
            <StaggerContainer
              stagger={0.1}
              delay={0.05}
              className="mt-8 lg:mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
            >
              {productCategories.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerChild key={item.title}>
                    <motion.div
                      whileHover={{
                        y: -8,
                        borderColor: "#FF9A7A",
                        boxShadow: "0 25px 80px rgba(255,87,34,0.15)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-[0_10px_40px_rgba(18,20,53,0.05)] h-full"
                    >
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-100 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100 pointer-events-none" />
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                        className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50"
                      >
                        <Icon className="h-7 w-7 text-orange-600" />
                      </motion.div>
                      <h4 className="relative mt-5 text-lg sm:text-xl font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="relative mt-2 text-sm sm:text-base text-slate-600">
                        {item.description}
                      </p>
                    </motion.div>
                  </StaggerChild>
                );
              })}
            </StaggerContainer>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
