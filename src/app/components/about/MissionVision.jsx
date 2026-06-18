"use client";

export default function MissionVision() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[36px] border border-slate-200 p-12">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
              OUR MISSION
            </span>

            <h3 className="mt-6 text-4xl font-bold text-slate-900">
              Delivering Future-Ready Industrial Solutions
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              To transform industrial operations through innovative,
              reliable and scalable engineering solutions that maximise
              productivity, safety and operational performance.
            </p>
          </div>

          <div className="rounded-[36px] bg-[#121435] p-12 text-white">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              OUR VISION
            </span>

            <h3 className="mt-6 text-4xl font-bold">
              Engineering the Future of Industry
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              To become New Zealand&apos;s most trusted automation and
              industrial engineering partner, delivering world-class
              solutions that shape the future of manufacturing and
              infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}