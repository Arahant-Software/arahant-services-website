"use client";

const partners = [
  "SIEMENS",
  "ROCKWELL",
  "SCHNEIDER",
  "ABB",
  "OMRON",
  "MITSUBISHI",
  "SICK",
  "FESTO",
  "PHOENIX CONTACT",
  "WAGO",
  "SMC",
  "BALLUFF",
  "BURKERT",
  "KROHNE",
];

export default function TechnologyPartners() {
  return (
    <section className="relative overflow-hidden bg-white py-28 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-orange-100/50 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-50 blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
            Technology Partners
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Trusted Industrial
            <span className="block text-orange-600">
              Technology Partners
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-500" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            We deliver automation, electrical and process solutions using
            world-leading technologies trusted by manufacturers across
            New Zealand and Australia.
          </p>
        </div>

        {/* Featured Banner */}
        <div className="mt-20 overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-r from-orange-50 via-white to-orange-50 p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <div className="text-6xl font-bold text-orange-600">14+</div>
              <div className="mt-2 text-slate-600">
                Global Technology Partners
              </div>
            </div>

            <div className="max-w-3xl text-center text-lg leading-8 text-slate-600 lg:text-left">
              Partnering with globally recognised automation,
              instrumentation, motion control and process technology
              manufacturers to deliver reliable, scalable and future-ready
              industrial solutions.
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-orange-300
                hover:shadow-[0_20px_60px_rgba(249,115,22,0.15)]
              "
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-transparent to-orange-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Decorative Circle */}
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-orange-100 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />

              <div className="relative flex h-24 items-center justify-center">
                <span className="text-center text-lg font-bold tracking-wide text-slate-700 transition-all duration-500 group-hover:text-orange-600">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Information Section */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <div className="text-4xl font-bold text-orange-600">PLC</div>
            <p className="mt-3 text-slate-600">
              Siemens, Rockwell, Omron and Mitsubishi automation platforms.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <div className="text-4xl font-bold text-orange-600">IIoT</div>
            <p className="mt-3 text-slate-600">
              Data acquisition, connectivity and industrial digitalisation.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <div className="text-4xl font-bold text-orange-600">OEM</div>
            <p className="mt-3 text-slate-600">
              Genuine manufacturer-supported hardware and software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}