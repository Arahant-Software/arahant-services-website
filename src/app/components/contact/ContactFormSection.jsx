"use client";

import { motion } from "framer-motion";
import { FadeLeft, FadeRight } from "../ui/Motion";

const inputClass =
  "h-12 sm:h-14 rounded-xl border border-slate-300 px-4 sm:px-5 text-sm sm:text-base outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition w-full";

export default function ContactFormSection() {
  return (
    <section className="bg-gradient-to-br from-slate-100/60 via-slate-50 to-orange-50/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <FadeLeft>
            <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/60 p-6 sm:p-10 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Send Us An Enquiry
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Tell us about your project and our engineers will get back to you.
              </p>

              <form className="mt-8 space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <input type="text" placeholder="Full Name" className={inputClass} />
                  <input type="email" placeholder="Email Address" className={inputClass} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.18, duration: 0.4 }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <input type="text" placeholder="Phone Number" className={inputClass} />
                  <input type="text" placeholder="Company" className={inputClass} />
                </motion.div>

                <motion.select
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.26, duration: 0.4 }}
                  className="h-12 sm:h-14 w-full rounded-xl border border-slate-300 px-4 sm:px-5 text-sm sm:text-base text-slate-600 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                >
                  <option>Select Service</option>
                  <option>Industrial Automation</option>
                  <option>Machine Safety</option>
                  <option>Electrical Engineering</option>
                  <option>Mechanical Installation</option>
                  <option>Procurement</option>
                </motion.select>

                <motion.textarea
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.34, duration: 0.4 }}
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-slate-300 p-4 sm:p-5 text-sm sm:text-base outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition resize-none"
                />

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.42, duration: 0.4 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="rounded-full bg-orange-500 px-8 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-orange-600 transition"
                >
                  Submit Enquiry
                </motion.button>
              </form>
            </div>
          </FadeLeft>

          {/* Map */}
          <FadeRight delay={0.1}>
            <div className="overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md border border-white/60 shadow-sm min-h-[400px] lg:min-h-0">
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=515+Ararimu+Road,+Ramarama,+Auckland+2579&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full min-h-[400px]"
                loading="lazy"
              />
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
