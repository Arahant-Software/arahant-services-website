"use client";

import Image from "next/image";

const offerings = [
  {
    title: "PLCs",
    subtitle: "Programmable Logic Controller",
    description:
      "Siemens (S5, S7-200, S7-300, S7-400, S7-1200, S7-1500), Allen Bradley (Control/Compact/Micro Logix, PLC-5, SLC500, 5000 Series), Schneider (Quantum, M340), Omron (CX Series), Mitsubishi (FX, Q Series), Wago.",
    image: "/services/PLCs.jpg",
  },
  {
    title: "IIoT - Industry 4.0",
    subtitle: "Industrial Internet of Things",
    description:
      "Data collection, data gathering, OPCs, database integration for Industry 4.0 implementations.",
    image: "/services/IIOT.jpg",
  },
  {
    title: "HMI",
    subtitle: "Human Machine Interface",
    description:
      "Siemens (OP, TP, MP, Comfort, Unified Series), Allen Bradley, Omron.",
    image: "/services/HMI.jpg",
  },
  {
    title: "Robotics",
    subtitle: "Smart Automation Solutions",
    description: "ABB, Kuka, Hyundai, Fanuc.",
    image: "/services/Robotics.jpg",
  },
  {
    title: "Drives",
    subtitle: "Precision Motion Control",
    description:
      "Siemens (Simotion, Sinamics, Simodrive, Master Drives), Allen Bradley, Schneider, SEW, Danfoss.",
    image: "/services/Drives&Motion.jpg",
  },
  {
    title: "LabVIEW",
    subtitle: "Smart Inspection Systems",
    description:
      "Control systems, data acquisition, custom applications, TestStand, test jigs.",
    image: "/services/Vision.jpg",
  },
  {
    title: "Safety",
    subtitle: "Industrial Safety Systems",
    description:
      "CMSE® (Certified Machinery Safety Expert) – TÜV NORD certified. Risk assessment, safety evaluation, compliance with safety standards.",
    image: "/services/Safety.jpg",
  },
  {
    title: "SCADA",
    subtitle: "Supervisory Control & Data Acquisition",
    description:
      "Siemens WINCC, FactoryTalk View, Vijeo Citect, GE Ifix, Wonderware, Ignition.",
    image: "/services/SCADA.jpg",
  },
  {
    title: "CNC Controllers",
    subtitle: "Advanced Machine Control",
    description:
      "Siemens Sinumerik CNC controllers — programming, commissioning, troubleshooting and support.",
    image: "/services/CNC.jpg",
  },
  {
    title: "DCS",
    subtitle: "Distributed Control Systems",
    description:
      "Siemens PCS7, Yokogawa, ABB and Emerson DCS solutions for process industries.",
    image: "/services/DCS.jpg",
  },
];

export default function DcsOfferings() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-50 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
            Technical Expertise
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Technical Capabilities &
            <span className="block text-orange-600">
              Platform Expertise
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-500" />

          <p className="mx-auto mt-8 max-w-5xl text-lg leading-8 text-slate-600">
            Arahant provides comprehensive service and support for all types of
            industrial control systems. No matter what your automation platform
            or equipment manufacturer, our team has the expertise to support it.
            From legacy control systems to modern Industry 4.0 environments,
            we deliver reliable engineering solutions across New Zealand.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200
                bg-white
                shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-orange-300
                hover:shadow-[0_25px_80px_rgba(249,115,22,0.15)]
              "
            >
              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-100 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

              {/* Image */}
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    {item.subtitle}
                  </div>

                  <h3 className="mt-3 text-3xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                <p className="leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 h-[2px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-24 overflow-hidden rounded-[40px] border border-orange-100 bg-gradient-to-r from-orange-50 via-white to-orange-50 p-12 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600">10+</div>
              <div className="mt-3 text-slate-600">
                Technology Platforms
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600">24/7</div>
              <div className="mt-3 text-slate-600">
                Engineering Support
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600">100%</div>
              <div className="mt-3 text-slate-600">
                Platform Independent
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600">NZ</div>
              <div className="mt-3 text-slate-600">
                Nationwide Coverage
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <p className="mx-auto max-w-4xl text-lg leading-8 text-slate-600">
            Whether you require PLC programming, SCADA upgrades, robotics,
            machine safety, motion control, DCS integration or Industry 4.0
            solutions, Arahant delivers practical engineering expertise backed
            by decades of industrial automation experience.
          </p>
        </div>
      </div>
    </section>
  );
}