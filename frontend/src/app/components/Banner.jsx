"use client";

import { motion } from "framer-motion";
import { ArrowRight, Settings, Wrench } from "lucide-react";
import { MagneticButton } from "./ui/Motion";

const contentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const tagItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Banner() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#121435]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1C3A] via-[#121435] to-[#1A1C3A]" />

      {/* Food processing background video — subtle, blended into navy */}
      <div className="absolute inset-0 opacity-60">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/industries/Food%20Industry%20banner.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#121435] via-[#121435]/55 to-[#121435]/85" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(250,249,240,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(250,249,240,.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow Effects */}
      <motion.div
        className="absolute top-24 left-0 w-72 h-72 bg-[#FF5722]/20 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-0 w-96 h-96 bg-[#FF5722]/20 blur-[150px] rounded-full"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <div className="absolute top-16 right-24 w-36 h-36 bg-[#FF5722]/10 blur-[80px] rounded-full" />
      <div className="absolute right-10 top-1/3 w-60 h-60 bg-white/6 blur-[140px] rounded-full" />

      {/* Decorative large "A" — desktop only */}
      <motion.div
        className="absolute top-8 right-12 hidden lg:block pointer-events-none"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      >
        <span className="text-[260px] font-black text-[#FF5722]/8 leading-none select-none">
          A
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full py-24 lg:py-0">
          {/* Left Content — staggered */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={item}
              className="inline-block border border-[#FF5722]/50 rounded-full px-4 py-2 text-[11px] sm:text-xs tracking-widest text-white font-bold mb-6"
            >
              AUTOMATION • ELECTRICAL • PROCESS INSTALLATION
            </motion.span>

            <motion.h1
              variants={item}
              className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl"
            >
              Driving performance through intelligent control systems.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              Arahant provides end-to-end automation, electrical engineering,
              and process installation solutions for high-performing industrial
              sites, helping manufacturing and FMCG operations across New
              Zealand and the Pacific improve efficiency, reliability, and
              output.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 mt-8">
              <MagneticButton strength={12}>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block bg-[#FF5722] hover:bg-[#FF794E] transition px-7 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base"
                >
                  Talk to Us
                </motion.a>
              </MagneticButton>

              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 transition px-7 py-3.5 rounded-full text-white text-sm sm:text-base"
              >
                Learn More
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>

            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.8 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-2 sm:gap-3 mt-8"
            >
              {["PLC", "HMI", "SCADA", "Vision", "Panels", "3D Design"].map(
                (tag) => (
                  <motion.span
                    key={tag}
                    variants={tagItem}
                    whileHover={{
                      scale: 1.1,
                      borderColor: "rgba(255,87,34,0.6)",
                    }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs sm:text-sm cursor-default"
                  >
                    {tag}
                  </motion.span>
                ),
              )}
            </motion.div>
          </motion.div>

          {/* Right Diagram — desktop only, slides in from right */}
          <motion.div
            className="hidden lg:flex w-1/2 justify-center"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          >
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-10 w-[420px] h-[360px] relative overflow-hidden">
                <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-[#FF5722]/10 via-transparent to-[#FF5722]/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,87,34,0.14),_transparent_45%)] rounded-[30px]" />

                {/* Connection Lines */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  style={{ pointerEvents: "none" }}
                >
                  <line
                    x1="50%"
                    y1="50%"
                    x2="39%"
                    y2="36%"
                    stroke="#FF5722"
                    strokeWidth="1"
                    className="animate-fade-in-out"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="61%"
                    y2="36%"
                    stroke="#FF5722"
                    strokeWidth="1"
                    className="animate-fade-in-out"
                    style={{ animationDelay: "0.3s" }}
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="39%"
                    y2="64%"
                    stroke="#FF5722"
                    strokeWidth="1"
                    className="animate-fade-in-out"
                    style={{ animationDelay: "0.6s" }}
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="61%"
                    y2="64%"
                    stroke="#FF5722"
                    strokeWidth="1"
                    className="animate-fade-in-out"
                    style={{ animationDelay: "0.9s" }}
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="50%"
                    y2="70%"
                    stroke="#FF5722"
                    strokeWidth="1"
                    className="animate-fade-in-out"
                    style={{ animationDelay: "1.2s" }}
                  />
                </svg>

                <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-[#FF5722] rounded-3xl -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white font-bold text-xl animate-float">
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
              <motion.div
                className="absolute -top-8 right-0 bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-xl flex items-center gap-3 border border-white/60"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#FF5722]">
                  <Settings size={20} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">
                    Engineer & Build
                  </p>
                  <p className="text-xs text-gray-500">Design • Manufacture</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-8 bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-xl flex items-center gap-3 border border-white/60"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#FF5722]">
                  <Wrench size={20} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">
                    Commission & Support
                  </p>
                  <p className="text-xs text-gray-500">
                    Upgrades & Maintenance
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
