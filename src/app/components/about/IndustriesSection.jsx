"use client";

import Image from "next/image";

const industries = [
  { title: "Food & Beverage", image: "/industries/food.jpg" },
  { title: "Dairy", image: "/industries/dairy.jpg" },
  { title: "Manufacturing", image: "/industries/manufacturing.jpg" },
  { title: "Chemical Processing", image: "/industries/chemical.jpg" },
  { title: "Water & Wastewater", image: "/industries/water.jpg" },
  { title: "Infrastructure", image: "/industries/infrastructure.jpg" },
];

export default function IndustriesSection() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
            Industries
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Industries We Support
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
        </div>

        <div className="mt-12 lg:mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="relative h-[240px] sm:h-[280px] lg:h-[300px]">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{industry.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
