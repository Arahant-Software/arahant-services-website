"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu,
  ShieldCheck,
  Zap,
  Wrench,
  ClipboardList,
  Package,
  ArrowUpRight,
} from "lucide-react";
import { FadeUp, StaggerContainer, StaggerChild } from "../ui/Motion";

const services = [
  {
    number: "01",
    icon: Cpu,
    title: "Siemens Automation",
    description: "Siemens S7 PLC programming, TIA Portal, WinCC SCADA, Sinamics drives, Sinumerik CNC and PCS7 DCS.",
    href: "/services/siemens-automation",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Industrial Process Automation",
    description: "PLC, HMI, SCADA, motion control, vision, robotics, DCS and batch control across every major platform.",
    href: "/services/industrial-process-automation",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Machine Safety",
    description: "CMSE® TÜV NORD certified risk assessments and safety system design to ISO 13849 and IEC 62061.",
    href: "/services/machine-safety",
  },
  {
    number: "04",
    icon: Zap,
    title: "Electrical Engineering",
    description: "Control panel design and build, site installation, fault diagnostics and maintenance to AS/NZS 3000.",
    href: "/services/electrical-engineering",
  },
  {
    number: "05",
    icon: Wrench,
    title: "Industrial Engineering",
    description: "Turnkey line installation, alignment, and certified stainless steel welding and fabrication.",
    href: "/services/industrial-engineering",
  },
  {
    number: "06",
    icon: ClipboardList,
    title: "Project Management",
    description: "3D modelling, FAT/SAT, commissioning and lifecycle support from concept through handover.",
    href: "/services/project-management",
  },
  {
    number: "07",
    icon: Package,
    title: "Industrial Parts Procurement",
    description: "Genuine OEM components and critical spares, sourced and dispatched fast across NZ, Fiji and Australia.",
    href: "/services/procurement",
  },
];

export default function ServicesOverview() {
  return (
    <>
      <section className="relative min-h-[55vh] overflow-hidden bg-[#121435] flex items-center">
        <div className="absolute inset-0 opacity-40">
          <Image src="/banner/carousel1.jpg" alt="" fill className="object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#121435] via-[#121435]/55 to-[#121435]/85" />
        <motion.div
          className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-orange-500/15 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-24 sm:py-28">
          <FadeUp>
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
              Our Services
            </span>
            <h1 className="mt-6 max-w-3xl text-3xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Industrial Engineering Services For New Zealand & The Pacific
            </h1>
            <div className="mt-5 h-1 w-20 rounded-full bg-orange-500" />
            <p className="mt-6 max-w-2xl text-base sm:text-xl text-slate-300 leading-8">
              From PLC programming to machine safety compliance, electrical
              engineering to OEM parts procurement — everything you need from a
              single accountable engineering partner.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <StaggerContainer stagger={0.07} delay={0.05} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerChild key={service.title}>
                  <Link href={service.href} className="block h-full">
                    <motion.div
                      whileHover={{ y: -8, borderColor: "#FF9A7A", boxShadow: "0 25px 80px rgba(255,87,34,0.15)" }}
                      transition={{ duration: 0.3 }}
                      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 h-full"
                    >
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-100 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100 pointer-events-none" />
                      <div className="relative z-10 flex items-start justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                          <Icon className="h-7 w-7 text-orange-600" />
                        </div>
                        <span className="text-xs font-bold tracking-widest text-orange-300 group-hover:text-orange-500 transition-colors">
                          {service.number}
                        </span>
                      </div>
                      <h3 className="relative z-10 mt-5 text-lg sm:text-xl font-bold text-slate-900">{service.title}</h3>
                      <p className="relative z-10 mt-3 text-sm sm:text-base leading-7 text-slate-600">{service.description}</p>
                      <div className="relative z-10 mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600">
                        Learn more
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </motion.div>
                  </Link>
                </StaggerChild>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
