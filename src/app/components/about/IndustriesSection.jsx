"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerChild } from "../ui/Motion";

const industries = [
  { title: "Food & Beverage", image: "/banner/carousel1.jpg" },
  { title: "Dairy", image: "/banner/carousel2.jpg" },
  { title: "Manufacturing", image: "/banner/carousel4.jpg" },
  { title: "Chemical Processing", image: "/services/SCADA.jpg" },
  { title: "Water & Wastewater", image: "/banner/carousel6.jpg" },
  { title: "Infrastructure", image: "/banner/carousel7.jpeg" },
];

export default function IndustriesSection() {
  return (
    <section className="bg-gradient-to-br from-slate-100/60 via-slate-50 to-orange-50/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <FadeUp>
          <div className="text-center">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
              Industries
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Industries We Support
            </h2>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
          </div>
        </FadeUp>

        <StaggerContainer stagger={0.09} delay={0.05} className="mt-12 lg:mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <StaggerChild key={industry.title}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
              >
                <div className="relative h-[240px] sm:h-[280px] lg:h-[300px]">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-orange-500/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="absolute bottom-6 left-6">
                    <motion.h3
                      className="text-xl sm:text-2xl font-bold text-white"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {industry.title}
                    </motion.h3>
                  </div>
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
