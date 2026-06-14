"use client";

import { motion } from "framer-motion";
import { FadeUp } from "../ui/Motion";

const steps = ["Discovery", "Design", "Build", "FAT / SAT", "Commission", "Support"];

export default function EngineeringLifecycle() {
  return (
    <section className="bg-gradient-to-br from-slate-50/80 via-white to-orange-50/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <FadeUp>
          <div className="text-center">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
              Engineering Lifecycle
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              From Concept To Ongoing Support
            </h2>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
          </div>
        </FadeUp>

        <div className="mt-12 lg:mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              whileHover={{ y: -8, borderColor: "#fdba74", boxShadow: "0 16px 40px rgba(249,115,22,0.15)" }}
              className="rounded-2xl sm:rounded-3xl border border-white/60 bg-white/70 backdrop-blur-md p-5 sm:p-8 text-center shadow-sm cursor-default"
            >
              <motion.div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.div>
              <h3 className="mt-3 text-sm sm:text-base lg:text-lg font-semibold text-slate-900">
                {step}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Connecting line */}
        <motion.div
          className="mt-6 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        />
      </div>
    </section>
  );
}
