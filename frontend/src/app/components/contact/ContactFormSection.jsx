"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { FadeLeft, FadeRight } from "../ui/Motion";
import CountryCodeSelect from "../ui/CountryCodeSelect";

const inputClass =
  "h-12 sm:h-14 rounded-xl border border-slate-300 px-4 sm:px-5 text-sm sm:text-base outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition w-full";

const SERVICE_OPTIONS = [
  "Siemens Automation",
  "Industrial Process Automation",
  "Machine Safety",
  "Electrical Engineering",
  "Industrial Engineering",
  "Project Management",
  "Procurement & Logistics",
  "Other",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  countryCode: "+64",
  company: "",
  service: "",
  message: "",
};

export default function ContactFormSection() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone ? `${form.countryCode} ${form.phone}`.trim() : "",
          company: form.company,
          service: form.service,
          message: form.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-gradient-to-br from-slate-100/60 via-slate-50 to-orange-50/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <FadeLeft className="h-full">
            <div className="h-full rounded-3xl bg-white/70 backdrop-blur-md border border-white/60 p-6 sm:p-10 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Send Us An Enquiry
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Tell us about your project and our engineers will get back to you.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="grid gap-4 sm:grid-cols-2"
                  >
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={inputClass}
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.18, duration: 0.4 }}
                    className="grid gap-4 sm:grid-cols-2"
                  >
                    <div className="flex gap-2">
                      <CountryCodeSelect
                        value={form.countryCode}
                        onChange={(code) => update("countryCode", code)}
                        className="w-24 flex-shrink-0"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={`${inputClass} min-w-0`}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Company"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      className={inputClass}
                    />
                  </motion.div>

                  <motion.select
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.26, duration: 0.4 }}
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className="h-12 sm:h-14 w-full rounded-xl border border-slate-300 px-4 sm:px-5 text-sm sm:text-base text-slate-600 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                  >
                    <option value="">Select Service</option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </motion.select>

                  <motion.textarea
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.34, duration: 0.4 }}
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-4 sm:p-5 text-sm sm:text-base outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition resize-none"
                  />

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.42, duration: 0.4 }}
                    whileHover={{ scale: submitting ? 1 : 1.04 }}
                    whileTap={{ scale: submitting ? 1 : 0.97 }}
                    type="submit"
                    disabled={submitting}
                    className="rounded-full bg-orange-500 px-8 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-orange-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Submit Enquiry"}
                  </motion.button>
                </form>
              ) : (
                <div className="mt-8 flex flex-col items-center py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-orange-500" />
                  <h3 className="mt-4 text-xl font-bold text-slate-900">Thank You!</h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600">
                    We&apos;ve received your enquiry — our team will be in touch shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-orange-600 hover:underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              )}
            </div>
          </FadeLeft>

          {/* Map */}
          <FadeRight delay={0.1} className="h-full">
            <div className="h-full min-h-[400px] overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md border border-white/60 shadow-sm">
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=515+Ararimu+Road,+Ramarama,+Auckland+2579&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
