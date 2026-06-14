"use client";

export default function AboutHero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2000&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Orange Glow */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 sm:px-8 lg:px-12 py-24 lg:py-0">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
            About Arahant Services
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl xl:text-8xl">
            Engineering Intelligence
            <span className="block text-orange-500">For Modern Industry</span>
          </h1>

          <p className="mt-6 sm:mt-8 max-w-3xl text-base sm:text-xl leading-8 text-slate-300">
            Arahant Services Ltd is a premier New Zealand-based engineering and
            industrial automation firm delivering end-to-end control system
            solutions across the Pacific region.
          </p>

          <p className="mt-4 max-w-3xl text-sm sm:text-lg leading-8 text-slate-400">
            We architect, automate and optimise industrial operations — from
            discrete machine control to full-scale production facilities.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-block rounded-full bg-orange-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition hover:bg-orange-600"
            >
              Discuss Your Project
            </a>
            <a
              href="/services"
              className="inline-block rounded-full border border-white/20 px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition hover:border-orange-500"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-6">
            {[
              { value: "360°", label: "Automation Lifecycle" },
              { value: "CMSE®", label: "TÜV NORD Certified" },
              { value: "IIoT", label: "Industry 4.0 Specialists" },
            ].map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-8 backdrop-blur"
              >
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-orange-500">{stat.value}</div>
                <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
