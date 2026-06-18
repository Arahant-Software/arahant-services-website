"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Factory, Zap, Wrench, ShieldCheck, Package, ArrowUpRight } from "lucide-react";
import { FadeUp } from "../ui/Motion";

const capabilities = [
  {
    number: "01",
    icon: Cpu,
    title: "Industrial Automation",
    services: ["PLC", "HMI", "SCADA", "Robotics", "Motion Control"],
    href: "/services/industrial-process-automation",
  },
  {
    number: "02",
    icon: Factory,
    title: "Process Automation",
    services: ["DCS", "Batch Control", "Data Acquisition", "Industry 4.0"],
    href: "/services/industrial-process-automation",
  },
  {
    number: "03",
    icon: Zap,
    title: "Electrical Engineering",
    services: ["Panels", "Switchboards", "Drawings", "Diagnostics"],
  },
  {
    number: "04",
    icon: Wrench,
    title: "Mechanical Installation",
    services: ["Conveyors", "Hydraulics", "Pneumatics", "Process Equipment"],
    href: "/services/industrial-engineering",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Machine Safety",
    services: ["ISO 13849", "IEC 62061", "Risk Assessment"],
  },
  {
    number: "06",
    icon: Package,
    title: "OEM Procurement",
    services: ["Critical Spares", "Logistics", "Genuine Components"],
  },
];

export default function CoreCapabilities() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <FadeUp>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
                Core Capabilities
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                Comprehensive
                <span className="text-orange-600"> Engineering Services</span>
              </h2>
              <div className="mt-5 h-1 w-20 rounded-full bg-orange-500" />
            </div>
            <p className="max-w-xs text-sm sm:text-base text-slate-500 leading-7 sm:text-right sm:pb-1">
              Full-spectrum industrial engineering from concept through commissioning.
            </p>
          </div>
        </FadeUp>

        {/* Row list */}
        <div className="mt-8 lg:mt-10">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const RowWrapper = cap.href ? Link : "div";
            const rowWrapperProps = cap.href ? { href: cap.href } : {};
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.07 }}
                whileHover={{ backgroundColor: "#FFEEE9" }}
                className={`group -mx-4 rounded-2xl px-4 transition-colors duration-200 border-b border-slate-100 last:border-b-0 ${cap.href ? "cursor-pointer" : "cursor-default"}`}
              >
              <RowWrapper {...rowWrapperProps} className="block">
                {/* Desktop row */}
                <div className="hidden sm:flex items-center gap-5 py-5 lg:py-6">
                  {/* Number */}
                  <span className="w-9 flex-shrink-0 text-xs font-bold tracking-widest text-orange-300 group-hover:text-orange-500 transition-colors duration-200">
                    {cap.number}
                  </span>

                  {/* Icon */}
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 group-hover:bg-orange-100 transition-colors duration-200">
                    <Icon className="h-5 w-5 text-slate-500 group-hover:text-orange-500 transition-colors duration-200" />
                  </div>

                  {/* Title */}
                  <h3 className="w-52 lg:w-64 flex-shrink-0 text-base lg:text-lg font-bold text-slate-900">
                    {cap.title}
                  </h3>

                  {/* Divider dot */}
                  <div className="hidden lg:block h-1 w-1 flex-shrink-0 rounded-full bg-orange-400" />

                  {/* Tags */}
                  <div className="grid flex-1 grid-cols-5 gap-2">
                    {cap.services.map((tag) => (
                      <span
                        key={tag}
                        className="justify-self-start whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-orange-700 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <motion.div
                    whileHover={{ x: 2, y: -2 }}
                    transition={{ duration: 0.18 }}
                    className="ml-2 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 group-hover:border-orange-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors duration-200"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>
                </div>

                {/* Mobile row */}
                <div className="flex sm:hidden flex-col gap-3 py-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-orange-400">
                        {cap.number}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 group-hover:bg-orange-100 transition-colors duration-200">
                        <Icon className="h-4 w-4 text-slate-500 group-hover:text-orange-500 transition-colors duration-200" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{cap.title}</h3>
                    </div>
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 group-hover:border-orange-400 group-hover:text-orange-500 transition-colors duration-200">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-12">
                    {cap.services.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-orange-700 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </RowWrapper>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
