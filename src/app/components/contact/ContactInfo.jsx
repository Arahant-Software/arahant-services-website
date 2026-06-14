"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const cards = [
  { icon: Phone, title: "Call Us", value: "+64 XX XXX XXXX" },
  { icon: Mail, title: "Email", value: "info@arahant.co.nz" },
  { icon: MapPin, title: "Location", value: "New Zealand" },
  { icon: Clock, title: "Working Hours", value: "Mon – Fri | 8:00 AM – 5:00 PM" },
];

export default function ContactInfo() {
  return (
    <section className="bg-gradient-to-br from-slate-50/80 via-white to-orange-50/30 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ y: -6, borderColor: "#fdba74", boxShadow: "0 16px 40px rgba(249,115,22,0.12)" }}
                className="rounded-2xl sm:rounded-3xl border border-white/60 bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-sm"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.25 }}
                >
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-orange-500" />
                </motion.div>
                <h3 className="mt-4 text-base sm:text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600">{card.value}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
