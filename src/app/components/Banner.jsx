"use client";

import { ArrowRight, Settings, Wrench } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#333333] via-black to-[#333333]" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-24 left-0 w-72 h-72 bg-[#ec6220]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ec6220]/20 blur-[150px] rounded-full" />
      <div className="absolute top-16 right-24 w-36 h-36 bg-[#ec6220]/10 blur-[80px] rounded-full" />
      <div className="absolute right-10 top-1/3 w-60 h-60 bg-white/6 blur-[140px] rounded-full" />

      {/* Decorative large "A" — desktop only */}
      <div className="absolute top-8 right-12 hidden lg:block pointer-events-none">
        <span className="text-[260px] font-black text-[#ec6220]/8 leading-none select-none opacity-24">
          A
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full py-24 lg:py-0">

          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <span className="inline-block border border-[#ec6220]/50 rounded-full px-4 py-2 text-[11px] sm:text-xs tracking-widest text-white font-bold mb-6">
              AUTOMATION • ELECTRICAL • PROCESS INSTALLATION
            </span>

            <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl">
              Control system solutions for high-performing industrial sites.
            </h1>

            <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
              Arahant delivers practical automation, electrical engineering and
              process installation solutions for industries including
              manufacturing, FMCG and process plants across New Zealand and the
              Pacific.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/contact"
                className="inline-block bg-[#ec6220] hover:bg-[#ff7a35] transition px-7 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base"
              >
                Talk to Us
              </a>

              <a
                href="/about"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 transition px-7 py-3.5 rounded-full text-white text-sm sm:text-base"
              >
                Learn More
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 mt-8">
              {["PLC", "HMI", "SCADA", "Vision", "Panels", "3D Design"].map((item) => (
                <span
                  key={item}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Diagram — desktop only */}
          <div className="hidden lg:flex w-1/2 justify-center">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-10 w-[420px] h-[360px] relative overflow-hidden">
                <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-[#ec6220]/10 via-transparent to-[#ec6220]/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(236,98,32,0.14),_transparent_45%)] rounded-[30px]" />
                <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-black/10 via-transparent to-transparent rounded-[30px]" />
                <div className="absolute inset-0 w-full h-full bg-[linear-gradient(180deg,_rgba(255,255,255,0.04)_0%,_transparent_45%)] rounded-[30px] pointer-events-none" />

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                  <line x1="50%" y1="50%" x2="39%" y2="36%" stroke="#ec6220" strokeWidth="1" className="animate-fade-in-out" />
                  <line x1="50%" y1="50%" x2="61%" y2="36%" stroke="#ec6220" strokeWidth="1" className="animate-fade-in-out" style={{ animationDelay: "0.3s" }} />
                  <line x1="50%" y1="50%" x2="39%" y2="64%" stroke="#ec6220" strokeWidth="1" className="animate-fade-in-out" style={{ animationDelay: "0.6s" }} />
                  <line x1="50%" y1="50%" x2="61%" y2="64%" stroke="#ec6220" strokeWidth="1" className="animate-fade-in-out" style={{ animationDelay: "0.9s" }} />
                  <line x1="50%" y1="50%" x2="50%" y2="70%" stroke="#ec6220" strokeWidth="1" className="animate-fade-in-out" style={{ animationDelay: "1.2s" }} />
                </svg>

                <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-[#ec6220] rounded-3xl -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white font-bold text-xl animate-float">
                  PLC
                </div>
                <div className="absolute top-10 left-12 bg-white rounded-2xl px-5 py-4 animate-float">
                  <span className="font-bold">SCADA</span>
                </div>
                <div className="absolute top-10 right-12 bg-white rounded-2xl px-5 py-4 animate-float-delayed">
                  <span className="font-bold">HMI</span>
                </div>
                <div className="absolute bottom-12 left-12 bg-white rounded-2xl px-5 py-4 animate-float">
                  <span className="font-bold">VSD</span>
                </div>
                <div className="absolute bottom-11 right-12 bg-white rounded-2xl px-5 py-4 animate-float-delayed">
                  <span className="font-bold">I/O</span>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-5 py-4 animate-float">
                  <span className="font-bold">MES</span>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-8 right-0 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 opacity-80">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#ec6220]">
                  <Settings size={20} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">Engineer & Build</p>
                  <p className="text-xs text-gray-500">Design • Manufacture</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 opacity-80">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#ec6220]">
                  <Wrench size={20} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">Commission & Support</p>
                  <p className="text-xs text-gray-500">Upgrades & Maintenance</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
