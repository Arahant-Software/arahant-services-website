"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, StaggerContainer, StaggerChild } from "../ui/Motion";

const points = [
  "TÜV NORD CMSE® Certified Safety Experts",
  "Industry 4.0 & IIoT Specialists",
  "Multi-Vendor Automation Expertise",
  "End-to-End Project Delivery",
  "Pacific Region Coverage",
  "24/7 Technical Support",
];

export default function WhyChooseArahant() {
  return (
    <section className="bg-[#1e2428] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
          {/* Image */}
          <FadeLeft>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="relative h-[280px] sm:h-[400px] lg:h-[560px] overflow-hidden rounded-3xl"
            >
              <Image
                src="/services/Safety.jpg"
                alt="Why Choose Arahant"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </FadeLeft>

          {/* Content */}
          <FadeRight delay={0.1}>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              Why Arahant
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Trusted By Industry Leaders
            </h2>

            <StaggerContainer stagger={0.08} delay={0.2} className="mt-8 space-y-4">
              {points.map((item) => (
                <StaggerChild key={item} className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.8 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-orange-500"
                  />
                  <motion.span
                    whileHover={{ x: 4, color: "#fb923c" }}
                    transition={{ duration: 0.2 }}
                    className="text-base sm:text-lg text-slate-300 cursor-default"
                  >
                    {item}
                  </motion.span>
                </StaggerChild>
              ))}
            </StaggerContainer>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
