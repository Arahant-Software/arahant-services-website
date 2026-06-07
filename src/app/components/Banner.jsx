// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// const slides = [
//   {
//     title: "Redefining Industrial Automation",
//     subtitle:
//       "Delivering advanced solutions across automation, safety, robotics, and intelligent control systems.",
//     image: "/banner/carousel1.jpg",
//   },
//   {
//     title: "PLC Based Automation Solutions",
//     subtitle:
//       "Reliable and scalable PLC solutions designed for efficient industrial process control.",
//     image: "/banner/carousel2.jpg",
//   },
//   {
//     title: "SCADA Monitoring & Control Systems",
//     subtitle:
//       "Centralized SCADA systems enabling real-time monitoring, control, and data-driven decisions.",
//     image: "/banner/carousel3.jpg",
//   },
//   {
//     title: "Industrial IoT (IIoT) Solutions",
//     subtitle:
//       "Smart connectivity and real-time analytics powering digital transformation in industries.",
//     image: "/banner/carousel4.jpg",
//   },
//   {
//     title: "Robotics & Intelligent Automation",
//     subtitle:
//       "Precision robotic systems enhancing productivity, flexibility, and operational safety.",
//     image: "/banner/carousel5.jpg",
//   },
//   {
//     title: "Workplace Safety Systems",
//     subtitle:
//       "Automation-driven safety solutions ensuring compliance and protecting the workforce.",
//     image: "/banner/carousel6.jpg",
//   },
//   {
//     title: "Automated Motion Control Systems",
//     subtitle:
//       "High-precision motion control solutions for advanced manufacturing environments.",
//     image: "/banner/carousel7.jpeg",
//   },
// ];

// export default function Banner() {
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//             index === active ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           {/* Background Image */}
//           <Image
//             src={slide.image}
//             alt={slide.title}
//             fill
//             priority={index === 0}
//             className="object-cover"
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/50" />

//           {/* Content */}
//           <div className="relative z-10 h-full flex items-center justify-center px-4">
//             <div className="text-center max-w-5xl text-white">
//               <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                 {slide.title}
//               </h1>

//               <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-xl text-gray-200">
//                 {slide.subtitle}
//               </p>

//               {/* Buttons */}
//               <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4">
//                 <a
//                   href="/contact"
//                   className="bg-[#ec6220] px-6 py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-slate-900 transition"
//                 >
//                   Contact Us
//                 </a>
//                 <a
//                   href="/services"
//                   className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition"
//                 >
//                   Our Services
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Dots */}
//       <div className="absolute bottom-6 sm:bottom-8 w-full flex justify-center gap-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActive(index)}
//             className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all ${
//               index === active
//                 ? "bg-[#ec6220] scale-125"
//                 : "bg-white/60"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { ArrowRight, Settings, Wrench } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2b0a00] via-black to-[#3a1200]" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-24 left-0 w-72 h-72 bg-[#ec6220]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ec6220]/20 blur-[150px] rounded-full" />
      <div className="absolute top-16 right-24 w-36 h-36 bg-[#ec6220]/10 blur-[80px] rounded-full" />
      <div className="absolute right-10 top-1/3 w-60 h-60 bg-white/6 blur-[140px] rounded-full" />
      <div className="absolute top-8 right-12 hidden lg:block pointer-events-none">
        <span className="text-[260px] font-black text-[#ec6220]/8 leading-none select-none opacity-24">
          A
        </span>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 min-h-screen flex items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <span className="mt-15 inline-block border border-[#ec6220]/50 rounded-full px-4 py-2 text-xs tracking-wider text-white font-bold mb-6">
            AUTOMATION • ELECTRICAL • PROCESS INSTALLATION
          </span>

          <h1 className="text-white font-bold leading-[0.95] text-3xl md:text-5xl lg:text-6xl max-w-4xl">
            Control system solutions for high-performing industrial sites.
          </h1>

          <p className="mt-8 text-gray-300 text-lg max-w-xl leading-relaxed">
            Arahant delivers practical automation, electrical engineering and
            process installation solutions for industries but not limited to
            manufacturing, FMCG and process plants across New Zealand and the
            Pacific.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <button className="bg-[#ec6220] hover:bg-[#ff7a35] transition px-8 py-4 rounded-full text-white font-semibold">
              Talk to Us
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-full text-white flex items-center gap-2">
              Learn More
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            {["PLC", "HMI", "SCADA", "Vision", "Panels", "3D Design"].map(
              (item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-sm"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Right Diagram */}
        <div className="hidden lg:flex w-1/2 justify-center">
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-10 w-[420px] h-[360px] relative overflow-hidden">
              <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-[#ec6220]/10 via-transparent to-[#ec6220]/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(236,98,32,0.14),_transparent_45%)] rounded-[30px]" />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-black/10 via-transparent to-transparent rounded-[30px]" />
              <div className="absolute inset-0 w-full h-full bg-[linear-gradient(180deg,_rgba(255,255,255,0.04)_0%,_transparent_45%)] rounded-[30px] pointer-events-none" />
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                {/* Line to SCADA */}
                <line x1="50%" y1="50%" x2="39%" y2="36%" stroke="#ec6220" strokeWidth="1" className="animate-fade-in-out" />
                {/* Line to HMI */}
                <line x1="50%" y1="50%" x2="61%" y2="36%" stroke="#ec6220" strokeWidth="1" className="animate-fade-in-out" style={{ animationDelay: '0.3s' }} />
                {/* Line to VSD */}
                <line x1="50%" y1="50%" x2="39%" y2="64%" stroke="#ec6220" strokeWidth="1" className="animate-fade-in-out" style={{ animationDelay: '0.6s' }} />
                {/* Line to I/O */}
                <line x1="50%" y1="50%" x2="61%" y2="64%" stroke="#ec6220" strokeWidth="1" className="animate-fade-in-out" style={{ animationDelay: '0.9s' }} />
                {/* Line to MES */}
                <line x1="50%" y1="50%" x2="50%" y2="70%" stroke="#ec6220" strokeWidth="1" className="animate-fade-in-out" style={{ animationDelay: '1.2s' }} />
              </svg>

              <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-[#ec6220] rounded-3xl -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white font-bold text-xl animate-float">
                PLC
              </div>

              <div className="absolute top-10 left-12 bg-white rounded-2xl px-5 py-4 animate-float">
                <span className="font-bold">SCADA</span>
              </div>

              <div className="absolute top-10 right-12 bg-white rounded-2xl px-5 py-4 animate-float-delayed">
                <span className="font-bold">HMI</span>
              </div>

              <div className="absolute bottom-12 left-12 bg-white rounded-2xl px-5 py-4 animate-float">
                <span className="font-bold">VSD</span>
              </div>

              <div className="absolute bottom-11 right-12 bg-white rounded-2xl px-5 py-4 animate-float-delayed">
                <span className="font-bold">I/O</span>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-5 py-4 animate-float">
                <span className="font-bold">MES</span>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-8 right-0 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#ec6220]">
                <Settings size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-900">Engineer & Build</p>
                <p className="text-xs text-gray-500">
                  Design • Manufacture
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#ec6220]">
                <Wrench size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-900">Commission & Support</p>
                <p className="text-xs text-gray-500">Upgrades & Maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
