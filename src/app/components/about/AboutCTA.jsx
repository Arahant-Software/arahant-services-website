"use client";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.2),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
          Start Your Project
        </span>

        <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready To Optimise
          <span className="block text-orange-500">Your Operations?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-300">
          Whether you&apos;re planning a new automation project, upgrading
          legacy equipment or implementing Industry 4.0 initiatives,
          our engineers are ready to help.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-block rounded-full bg-orange-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition hover:bg-orange-600"
          >
            Discuss Your Project
          </a>
          <a
            href="/contact"
            className="inline-block rounded-full border border-white/20 px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition hover:border-orange-500"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
