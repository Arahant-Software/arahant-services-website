"use client";

import {
  Cpu,
  Cable,
  Factory,
  ShieldCheck,
  Wrench,
  Boxes,
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Industrial Automation",
    description:
      "PLC, HMI, SCADA, Robotics, Motion Control, Vision Systems and Industry 4.0 integration.",
  },
  {
    icon: Cable,
    title: "Electrical Engineering",
    description:
      "Control panels, switchboards, power distribution, diagnostics and commissioning.",
  },
  {
    icon: Factory,
    title: "Process Automation",
    description:
      "DCS systems, batch control, production optimisation and industrial data acquisition.",
  },
  {
    icon: ShieldCheck,
    title: "Machine Safety",
    description:
      "Risk assessments, safety design and TÜV NORD CMSE® certified safety solutions.",
  },
  {
    icon: Wrench,
    title: "Mechanical Installation",
    description:
      "Conveyors, valve banks, hydraulics, pneumatics and turnkey plant installations.",
  },
  {
    icon: Boxes,
    title: "OEM Procurement",
    description:
      "Strategic sourcing and logistics support for critical automation spare parts.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-[#121435] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,87,34,0.15),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10 lg:px-20">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
            WHAT WE DO
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Complete Industrial
            <span className="block text-orange-500">
              Engineering Solutions
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            We deliver integrated engineering services across automation,
            electrical, process and mechanical disciplines.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/30"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10">
                  <Icon className="h-8 w-8 text-orange-500" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}