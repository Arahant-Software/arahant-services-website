"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, StaggerContainer, StaggerChild } from "../ui/Motion";

const capabilities = [
  "Industrial Automation",
  "Electrical Engineering",
  "Machine Safety",
  "Industry 4.0",
  "Process Systems",
  "OEM Procurement",
];

export default function CompanyOverview() {
  return (
    <section className="bg-gradient-to-br from-slate-50/80 via-white to-orange-50/30 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
          {/* Left — placeholder */}
          <FadeLeft>
            <div className="relative hidden lg:block">
              <div className="overflow-hidden rounded-3xl min-h-[420px] relative">
                <Image
                  src="/banner/carousel5.jpg"
                  alt="Arahant Engineering Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-8 -right-8 rounded-3xl bg-orange-500 p-8 text-white shadow-xl"
              >
                <div className="text-4xl font-bold">15+</div>
                <div className="mt-2 text-sm">Years Engineering Experience</div>
              </motion.div>
            </div>
          </FadeLeft>

          {/* Content */}
          <FadeRight delay={0.1}>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
              Who We Are
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
              Built For Performance.
              <span className="block text-orange-600">Engineered For Reliability.</span>
            </h2>

            <div className="mt-6 h-1 w-20 rounded-full bg-orange-500" />

            <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600">
              Arahant Services delivers practical engineering solutions that
              bridge automation, electrical engineering, process systems,
              machine safety and industrial digitalisation.
            </p>

            <p className="mt-4 text-base sm:text-lg leading-8 text-slate-600">
              Our mission is to transform industrial operations through
              innovative, reliable and future-ready automation, ensuring system
              resilience, peak productivity and long-term maintainability.
            </p>

            <StaggerContainer stagger={0.07} delay={0.15} className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {capabilities.map((item) => (
                <StaggerChild key={item} className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                    className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-orange-500"
                  />
                  <span className="text-sm sm:text-base font-medium text-slate-700">{item}</span>
                </StaggerChild>
              ))}
            </StaggerContainer>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 border-l-4 border-orange-500 pl-5 sm:pl-6"
            >
              <p className="text-sm sm:text-lg italic text-slate-700">
                Empowering industries to achieve operational excellence
                through engineering innovation and trusted partnerships.
              </p>
            </motion.div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
