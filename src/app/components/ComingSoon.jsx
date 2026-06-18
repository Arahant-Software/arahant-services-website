"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Construction, ArrowLeft } from "lucide-react";

export default function ComingSoon({ title = "This Page" }) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-[#121435] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1C3A] via-[#121435] to-[#121435]" />
      <motion.div
        className="absolute -left-20 top-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/15 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-2xl px-5 sm:px-8 text-center py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10"
        >
          <Construction className="h-8 w-8 text-orange-500" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-6 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300"
        >
          Coming Soon
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          {title} Is On Its Way
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-5 text-base sm:text-lg leading-8 text-slate-300"
        >
          We&apos;re putting the finishing touches on this page. In the
          meantime, get in touch with our team and we&apos;ll help with your
          enquiry directly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-block rounded-full bg-orange-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition hover:bg-orange-600"
          >
            Contact Us
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition hover:border-orange-500"
          >
            <ArrowLeft size={16} />
            Back To Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
