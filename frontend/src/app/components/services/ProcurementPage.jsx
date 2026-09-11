"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeUp, ScaleUp } from "../ui/Motion";
import ProcurementSection from "../ProcurementSection";
import FaqSection from "../ui/FaqSection";

const faqs = [
  {
    question: "Can you source parts we can't find elsewhere?",
    answer:
      "Sourcing hard-to-find or obsoleted automation and electrical components is one of our specialities. Through our strategic partnerships with Siemens, Rockwell, Schneider, Festo, SMC, Phoenix Contact and Wago, we can often locate genuine components even for older or discontinued equipment.",
  },
  {
    question: "How fast can you dispatch critical spares?",
    answer:
      "For breakdown and maintenance-shutdown situations, we prioritise rapid sourcing and dispatch across New Zealand and the Pacific region. Actual delivery time depends on the specific part and your location, but critical spares support is a core part of what we offer — get in touch and we'll give you a realistic timeframe immediately.",
  },
  {
    question: "Do you only sell parts, or also help with selection?",
    answer:
      "We help with both. If you're not sure exactly which drive, sensor or PLC module you need, our engineers can specify the correct component for your application — not just fulfil an order — since we design and commission the same equipment we procure.",
  },
  {
    question: "Are the components you supply genuine OEM parts?",
    answer:
      "Yes. We guarantee authentic, fully traceable components sourced directly through our manufacturer partnerships, not grey-market or unverified sources — important for warranty validity and safety-critical applications.",
  },
];

export default function ProcurementPage() {
  return (
    <>
      <section className="relative min-h-[55vh] overflow-hidden bg-[#121435] flex items-center">
        <div className="absolute inset-0 opacity-40">
          <Image src="/services/IIOT.jpg" alt="" fill className="object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#121435] via-[#121435]/55 to-[#121435]/85" />
        <motion.div
          className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-orange-500/15 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-24 sm:py-28">
          <FadeUp>
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
              OEM Procurement Specialists
            </span>
            <h1 className="mt-6 max-w-3xl text-3xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Industrial Parts Procurement & Logistics
            </h1>
            <div className="mt-5 h-1 w-20 rounded-full bg-orange-500" />
            <p className="mt-6 max-w-2xl text-base sm:text-xl text-slate-300 leading-8">
              Genuine, traceable OEM components and critical spares — sourced and
              dispatched fast across New Zealand and the Pacific region.
            </p>
          </FadeUp>
        </div>
      </section>

      <ProcurementSection />

      <FaqSection items={faqs} eyebrow="Procurement FAQs" title="Common Questions" />

      <section className="relative overflow-hidden bg-[#121435] py-20 lg:py-28">
        <div className="absolute inset-0 opacity-40">
          <Image src="/banner/carousel2.jpg" alt="" fill className="object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#121435] via-[#121435]/55 to-[#121435]/85" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.2),transparent_50%)] pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <ScaleUp>
            <div className="rounded-3xl border border-white/10 bg-white/6 backdrop-blur-md p-8 sm:p-12">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                Need A Part Fast?
              </span>
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Talk To Our Procurement Team
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-300">
                From a single sensor to a full drive retrofit, we'll help you
                source it fast and get it right the first time.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition hover:bg-orange-600"
                >
                  Request A Quote
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </div>
          </ScaleUp>
        </div>
      </section>
    </>
  );
}
