"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const COUNTRY_CODES = [
  { code: "+64", country: "New Zealand" },
  { code: "+61", country: "Australia" },
  { code: "+679", country: "Fiji" },
  { code: "+675", country: "Papua New Guinea" },
  { code: "+685", country: "Samoa" },
  { code: "+676", country: "Tonga" },
  { code: "+678", country: "Vanuatu" },
  { code: "+677", country: "Solomon Islands" },
  { code: "+687", country: "New Caledonia" },
  { code: "+682", country: "Cook Islands" },
  { code: "+1", country: "United States / Canada" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
  { code: "+65", country: "Singapore" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+971", country: "UAE" },
  { code: "+27", country: "South Africa" },
];

export default function CountryCodeSelect({ value, onChange, className = "" }) {
  const [open, setOpen] = useState(false);
  const selected = COUNTRY_CODES.find((c) => c.code === value) || COUNTRY_CODES[0];

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Country code"
        className="flex h-12 sm:h-14 w-full items-center justify-between gap-1 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
      >
        <span>{selected.code}</span>
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
              className="absolute left-0 top-full z-20 mt-2 max-h-56 w-56 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-lg"
            >
              {COUNTRY_CODES.map((item) => (
                <button
                  type="button"
                  key={item.code + item.country}
                  onClick={() => {
                    onChange(item.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition hover:bg-orange-50 hover:text-orange-600 ${
                    value === item.code ? "font-semibold text-orange-600" : "text-slate-600"
                  }`}
                >
                  <span className="w-12 flex-shrink-0">{item.code}</span>
                  <span className="truncate">{item.country}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
