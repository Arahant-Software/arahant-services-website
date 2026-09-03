"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "apl", logo: "/partners/apl_logo.png" },
  { name: "asalio", logo: "/partners/asaleo_logo.png" },
  { name: "coca_cola", logo: "/partners/coca_cola_logo.png" },
  { name: "db", logo: "/partners/db_logo.png" },
  { name: "fijiwater", logo: "/partners/fijiwater_logo.png" },
  { name: "fmi", logo: "/partners/fmi_logo.png" },
  { name: "kingspan", logo: "/partners/kingspan_logo.png" },
  { name: "paradise", logo: "/partners/paradise_logo.png" },
  { name: "suntory", logo: "/partners/suntory_logo.png" },
  { name: "waikato", logo: "/partners/waikato_logo.jpeg" },
];

export default function TrustedPartners() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">
          Our Most Trusted Partners
        </h2>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[180px]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="object-contain transition duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
