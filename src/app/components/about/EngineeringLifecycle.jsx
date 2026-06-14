"use client";

const steps = [
  "Discovery",
  "Design",
  "Build",
  "FAT / SAT",
  "Commission",
  "Support",
];

export default function EngineeringLifecycle() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
            Engineering Lifecycle
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            From Concept To Ongoing Support
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 text-sm sm:text-base lg:text-lg font-semibold text-slate-900">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
