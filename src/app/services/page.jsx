const serviceList = [
  { title: "PLC Programming", desc: "Advanced PLC solutions for control systems." },
  { title: "Motion Control", desc: "Precision motion systems for manufacturing." },
  { title: "Robotics Integration", desc: "Industrial robots & vision systems." },
  { title: "Industry 4.0 Solutions", desc: "Smart factory & data analytics." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>
      <div className="grid lg:grid-cols-4 gap-8 container mx-auto px-6">
        {serviceList.map((s, i) => (
          <div key={i} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
            <h4 className="font-semibold text-xl mb-2">{s.title}</h4>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
