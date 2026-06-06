"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Banner from "./components/Banner";
import DcsOfferings from "./components/DcsOfferings";
import TrustedPartners from "./components/TrustedPartners";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:flex md:items-center md:gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-orange-600">
              Arahant Services - Automating the World
            </h2>
            <p className="text-gray-700 mb-4">
              We deliver cutting-edge automation solutions across New Zealand, specializing in controllers, PLCs, Motion Control, IIOT, and Industry 4.0.
            </p>
            <p className="text-gray-700">
              Whether enhancing small machines or large-scale production plants, we engineer smarter, safer, and more efficient automation systems.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <Image
              src="/banner/carousel3.jpg"
              alt="Industry Expertise"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <DcsOfferings />

      {/* Hero / Banner Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white py-24">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
            Transforming Railways, Transforming India
          </h1>
          <p className="text-lg mb-8">
            Delivering top-tier electrical and control system solutions with excellence and innovation.
          </p>
          <button className="bg-yellow-500 text-indigo-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
            Explore Our Solutions
          </button>
        </div>
      </section>

      {/* Capabilities / Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-orange-600">
            Our Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Research & Development",
              "Quality Control",
              "PCB & Tool Room",
              "Transformers",
              "In-House Testing",
              "NPD / Service",
            ].map((cap, idx) => (
              <motion.div
                key={idx}
                className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-gray-400 mb-2">{cap}</h3>
                <p className="text-gray-600">
                  High-quality {cap.toLowerCase()} expertise.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / About Section */}
      

      {/* Stats / Achievements Section */}
      <section className="bg-indigo-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-orange-600">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "10+", label: "Years of Experience" },
              { number: "100+", label: "Trusted Clients" },
              { number: "500+", label: "Products Delivered" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow">
                <h3 className="text-4xl font-bold text-indigo-700 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-orange-400">
            Ready to Partner With Us?
          </h2>
          <p className="mb-6 text-lg">
            Contact us today to discuss your requirements and get tailored solutions.
          </p>
          <button className="bg-yellow-500 text-indigo-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
            Get in Touch
          </button>
        </div>
      </section>
      <TrustedPartners/>
    </>
  );
}
