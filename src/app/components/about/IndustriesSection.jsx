"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerChild } from "../ui/Motion";

const industries = [
  {
    title: "FMCG",
    subtitle: "Food & Beverage, Dairy and other sectors",
    images: ["/banner/carousel1.jpg", "/banner/carousel2.jpg", "/banner/carousel4.jpg"],
  },
  {
    title: "Manufacturing",
    subtitle: "Sugar, Paper, Wood Chips and other",
    images: ["/banner/carousel3.jpg", "/banner/carousel5.jpg", "/services/Drives&Motion.jpg"],
  },
  {
    title: "Chemical Processing",
    subtitle: "Pharmaceutical, Biotech Plants",
    images: ["/services/SCADA.jpg", "/services/Safety.jpg", "/banner/carousel6.jpg"],
  },
  {
    title: "Infrastructure",
    subtitle: "Water & Wastewater, Energy, Mining",
    images: ["/banner/carousel7.jpeg", "/services/Robotics.jpg", "/images/welding-industrial.png"],
  },
];

function IndustryCard({ industry, index }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % industry.images.length);
    }, 3200 + index * 350);
    return () => clearInterval(id);
  }, [industry.images.length, index]);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl cursor-pointer"
    >
      <div className="relative h-[260px] sm:h-[300px] lg:h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={industry.images[active]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={industry.images[active]}
              alt={industry.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-orange-500/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Slide indicators */}
        <div className="absolute top-4 right-4 z-10 flex gap-1.5">
          {industry.images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                i === active ? "bg-orange-400" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <motion.h3
            className="text-xl sm:text-2xl font-bold text-white"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {industry.title}
          </motion.h3>
          <p className="mt-1.5 text-sm leading-snug text-slate-300">{industry.subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}

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

        <StaggerContainer stagger={0.09} delay={0.05} className="mt-12 lg:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <StaggerChild key={industry.title}>
              <IndustryCard industry={industry} index={index} />
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
