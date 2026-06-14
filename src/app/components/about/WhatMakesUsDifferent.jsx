"use client";

import {
  ShieldCheck,
  Cpu,
  Wrench,
  Network,
  Users,
  Building2,
} from "lucide-react";

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
    <section className="bg-[#050505] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            What Makes Us Different
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
        </div>

        <div className="mt-12 lg:mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 transition-all duration-300 hover:border-orange-500/30 hover:bg-white/8"
              >
                <Icon className="h-9 w-9 text-orange-500" />
                <h3 className="mt-5 text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm sm:text-base text-slate-400 leading-7">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
