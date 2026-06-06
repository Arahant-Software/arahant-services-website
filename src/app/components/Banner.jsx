"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Redefining Industrial Automation",
    subtitle:
      "Delivering advanced solutions across automation, safety, robotics, and intelligent control systems.",
    image: "/banner/carousel1.jpg",
  },
  {
    title: "PLC Based Automation Solutions",
    subtitle:
      "Reliable and scalable PLC solutions designed for efficient industrial process control.",
    image: "/banner/carousel2.jpg",
  },
  {
    title: "SCADA Monitoring & Control Systems",
    subtitle:
      "Centralized SCADA systems enabling real-time monitoring, control, and data-driven decisions.",
    image: "/banner/carousel3.jpg",
  },
  {
    title: "Industrial IoT (IIoT) Solutions",
    subtitle:
      "Smart connectivity and real-time analytics powering digital transformation in industries.",
    image: "/banner/carousel4.jpg",
  },
  {
    title: "Robotics & Intelligent Automation",
    subtitle:
      "Precision robotic systems enhancing productivity, flexibility, and operational safety.",
    image: "/banner/carousel5.jpg",
  },
  {
    title: "Workplace Safety Systems",
    subtitle:
      "Automation-driven safety solutions ensuring compliance and protecting the workforce.",
    image: "/banner/carousel6.jpg",
  },
  {
    title: "Automated Motion Control Systems",
    subtitle:
      "High-precision motion control solutions for advanced manufacturing environments.",
    image: "/banner/carousel7.jpeg",
  },
];

export default function Banner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <div className="text-center max-w-5xl text-white">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {slide.title}
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-xl text-gray-200">
                {slide.subtitle}
              </p>

              {/* Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-[#ec6220] px-6 py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-slate-900 transition"
                >
                  Contact Us
                </a>
                <a
                  href="/services"
                  className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 sm:bottom-8 w-full flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all ${
              index === active
                ? "bg-[#ec6220] scale-125"
                : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
