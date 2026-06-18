"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Wrench, Network, Users, Building2 } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerChild } from "../ui/Motion";

const items = [
  { icon: Building2, title: "Independent Engineering Expertise", desc: "Vendor-agnostic advice and execution across all major automation platforms." },
  { icon: Cpu, title: "Multi-Platform Automation Specialists", desc: "Deep expertise across Siemens, Rockwell, Omron, Mitsubishi and more." },
  { icon: ShieldCheck, title: "CMSE® Certified Safety Engineers", desc: "TÜV NORD certified machinery safety experts ensuring full compliance." },
  { icon: Network, title: "Industry 4.0 & IIoT Experts", desc: "Connecting machines to data platforms for real-time insight and control." },
  { icon: Wrench, title: "End-To-End Delivery", desc: "From concept and design through to commissioning and handover." },
  { icon: Users, title: "Long-Term Support", desc: "Ongoing technical support, maintenance and system upgrades post-commissioning." },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="bg-[#121435] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <FadeUp>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              What Makes Us Different
            </h2>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
          </div>
        </FadeUp>

        <StaggerContainer stagger={0.08} delay={0.05} className="mt-12 lg:mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerChild key={item.title}>
                <motion.div
                  whileHover={{ scale: 1.03, borderColor: "rgba(255,87,34,0.4)", backgroundColor: "rgba(250,249,240,0.07)" }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl border border-white/12 bg-white/8 backdrop-blur-md p-6 sm:p-8 h-full"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="h-9 w-9 text-orange-500" />
                  </motion.div>
                  <h3 className="mt-5 text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-400 leading-7">{item.desc}</p>
                </motion.div>
              </StaggerChild>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
