"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "./ui/Motion";

const services = [
  { label: "Industrial Automation", href: "/services/automation" },
  { label: "Electrical Engineering", href: "/services/electrical" },
  { label: "Process Installation", href: "/services/process-installation" },
  { label: "Mechanical & Welding", href: "/services/mechanical" },
  { label: "Procurement & Logistics", href: "/services/procurement" },
];

const technologyPartners = [
  "Siemens", "Rockwell", "Schneider", "ABB",
  "Omron", "Mitsubishi", "Festo", "Phoenix",
  "Wago", "Balluff",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#121435] text-white">
      {/* Automation background image — subtle, blended into navy */}
      <div className="absolute inset-0 opacity-20">
        <Image src="/banner/carousel5.jpg" alt="" fill className="object-cover grayscale" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#121435] via-[#121435]/70 to-[#121435]/90" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-0 h-[300px] w-[300px] rounded-full bg-orange-600/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-orange-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <FadeUp delay={0}>
            <div className="sm:col-span-2 lg:col-span-1">
              <Image
                src="/logo.png"
                alt="Arahant"
                width={200}
                height={64}
                className="h-auto w-auto max-w-[180px]"
              />
              <p className="mt-6 text-sm sm:text-base leading-7 text-slate-400">
                Control system solutions that enhance productivity,
                reliability and operational performance across New Zealand
                and the Pacific region.
              </p>
              <div className="mt-6 flex gap-2">
                {[1, 0.6, 0.3].map((opacity, i) => (
                  <motion.div
                    key={i}
                    className="h-2.5 w-2.5 rounded-full bg-orange-500"
                    style={{ opacity }}
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                  />
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Services */}
          <FadeUp delay={0.08}>
            <div>
              <h3 className="mb-5 text-lg sm:text-xl font-bold text-white">Services</h3>
              <ul className="space-y-3 text-slate-400">
                {services.map((s) => (
                  <li key={s.label}>
                    <motion.div whileHover={{ x: 4, color: "#FF5722" }} transition={{ duration: 0.2 }}>
                      <Link href={s.href} className="text-sm sm:text-base transition hover:text-orange-500">
                        {s.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Technology Partners */}
          <FadeUp delay={0.16}>
            <div>
              <h3 className="mb-5 text-lg sm:text-xl font-bold text-white">Technology Partners</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-400">
                {technologyPartners.map((p) => (
                  <motion.span
                    key={p}
                    whileHover={{ color: "#FF5722", x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="cursor-default"
                  >
                    {p}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Contact */}
          <FadeUp delay={0.24}>
            <div>
              <h3 className="mb-5 text-lg sm:text-xl font-bold text-white">Contact</h3>
              <div className="space-y-4 text-slate-400">
                <p className="text-sm sm:text-base font-medium text-white">New Zealand & Pacific Region</p>
                <motion.a
                  href="mailto:support@arahant.co.nz"
                  whileHover={{ color: "#FF5722", x: 3 }}
                  transition={{ duration: 0.2 }}
                  className="block text-sm sm:text-base transition"
                >
                  support@arahant.co.nz
                </motion.a>
                <motion.a
                  href="https://www.arahant.co.nz"
                  whileHover={{ color: "#FF5722", x: 3 }}
                  transition={{ duration: 0.2 }}
                  className="block text-sm sm:text-base transition"
                >
                  www.arahant.co.nz
                </motion.a>
                <div className="rounded-2xl border border-white/12 bg-white/8 backdrop-blur-md p-4">
                  <div className="text-xs text-slate-500">Engineering Excellence</div>
                  <div className="mt-1 text-sm sm:text-base text-white">Automation • Electrical • Process</div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Divider */}
        <motion.div
          className="mt-14 border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 sm:flex-row">
            <p>© 2026 Arahant Services Ltd. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <motion.div key={link.label} whileHover={{ color: "#FF5722" }} transition={{ duration: 0.2 }}>
                  <Link href={link.href} className="hover:text-orange-500 transition">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
