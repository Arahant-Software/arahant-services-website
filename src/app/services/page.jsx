const serviceList = [
  { title: "PLC Programming", desc: "Advanced PLC solutions for control systems." },
  { title: "Motion Control", desc: "Precision motion systems for manufacturing." },
  { title: "Robotics Integration", desc: "Industrial robots & vision systems." },
  { title: "Industry 4.0 Solutions", desc: "Smart factory & data analytics." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-slate-900">Our Services</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceList.map((s, i) => (
            <div key={i} className="p-6 bg-white shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h4 className="font-semibold text-lg sm:text-xl mb-2 text-slate-900">{s.title}</h4>
              <p className="text-sm sm:text-base text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
