export default function ContactHero() {
  return (
    <section className="relative min-h-[55vh] bg-[#111111] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-orange-500/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-24 sm:py-32">
        <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
          Contact Us
        </span>

        <h1 className="mt-6 text-3xl font-bold text-white sm:text-5xl lg:text-7xl">
          Let&apos;s Discuss
          <span className="block text-orange-500">Your Next Project</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-xl text-slate-300 leading-8">
          Whether you require industrial automation, machine safety,
          electrical engineering, process optimisation or OEM components,
          our team is ready to help.
        </p>
      </div>
    </section>
  );
}
