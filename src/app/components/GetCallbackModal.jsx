"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PhoneCall, CheckCircle2, ChevronDown } from "lucide-react";

const SESSION_KEY = "callbackPopupShown";

const TIME_OPTIONS = [
  { value: "", label: "Preferred Call Time (optional)" },
  { value: "morning", label: "Morning" },
  { value: "afternoon", label: "Afternoon" },
  { value: "evening", label: "Evening" },
];

function TimeDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const selected = TIME_OPTIONS.find((o) => o.value === value) || TIME_OPTIONS[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
      >
        <span className={value ? "text-slate-900" : "text-slate-400"}>{selected.label}</span>
        <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 top-full z-20 mt-2 max-h-48 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-lg"
            >
              {TIME_OPTIONS.map((opt) => (
                <button
                  type="button"
                  key={opt.value || "default"}
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={`block w-full px-4 py-2.5 text-left text-sm transition hover:bg-orange-50 hover:text-orange-600 ${
                    value === opt.value ? "font-semibold text-orange-600" : "text-slate-600"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GetCallbackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", time: "" });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setIsOpen(false);
    sessionStorage.setItem(SESSION_KEY, "true");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    sessionStorage.setItem(SESSION_KEY, "true");
    setTimeout(() => setIsOpen(false), 1800);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#121435]/70 backdrop-blur-sm"
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl border border-white/60 bg-white/95 backdrop-blur-xl p-6 sm:p-8 shadow-[0_30px_80px_rgba(18,20,53,0.35)]"
          >
            <button
              onClick={dismiss}
              aria-label="Close"
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-orange-400 hover:text-orange-500 transition"
            >
              <X className="h-4 w-4" />
            </button>

            {!submitted ? (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50">
                  <PhoneCall className="h-6 w-6 text-orange-500" />
                </div>

                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-slate-900">
                  Request a Call Back
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-7">
                  Leave your details and one of our engineers will call you
                  back to discuss your project.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                  />
                  <TimeDropdown
                    value={form.time}
                    onChange={(time) => setForm({ ...form, time })}
                  />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full rounded-full bg-orange-500 py-3.5 text-sm sm:text-base font-semibold text-white transition hover:bg-orange-600"
                  >
                    Request Call Back
                  </motion.button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center py-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-orange-500" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">Thank You!</h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600">
                  We&apos;ve received your request — our team will call you back shortly.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
