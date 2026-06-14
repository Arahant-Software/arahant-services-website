"use client";

const capabilities = [
  {
    title: "Industrial Automation",
    services: "PLC • HMI • SCADA • Robotics • Motion Control",
  },
  {
    title: "Process Automation",
    services: "DCS • Batch Control • Data Acquisition • Industry 4.0",
  },
  {
    title: "Electrical Engineering",
    services: "Panels • Switchboards • Drawings • Diagnostics",
  },
  {
    title: "Mechanical Installation",
    services: "Conveyors • Hydraulics • Pneumatics • Process Equipment",
  },
  {
    title: "Machine Safety",
    services: "ISO 13849 • IEC 62061 • Risk Assessment",
  },
  {
    title: "OEM Procurement",
    services: "Critical Spares • Logistics • Genuine Components",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
          Core Capabilities
        </span>

        <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
          Comprehensive Engineering Services
        </h2>

        <div className="mt-10 lg:mt-14 divide-y divide-slate-200">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 flex-shrink-0">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 sm:text-right">{item.services}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
