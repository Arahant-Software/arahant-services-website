"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

const cards = [
  { icon: Phone, title: "Call Us", value: "+64 XX XXX XXXX" },
  { icon: Mail, title: "Email", value: "info@arahant.co.nz" },
  { icon: MapPin, title: "Location", value: "New Zealand" },
  { icon: Clock, title: "Working Hours", value: "Mon – Fri | 8:00 AM – 5:00 PM" },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md"
              >
                <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-orange-500" />
                <h3 className="mt-4 text-base sm:text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600">{card.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
