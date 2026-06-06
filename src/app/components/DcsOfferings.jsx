import Image from "next/image";

const offerings = [
  {
    title: "PLCs",
    subtitle: "Programmable Logic Controller",
    description:
      "A ruggedized industrial computer designed to automate manufacturing processes with high reliability, ease of programming, and real-time fault diagnosis.",
    image: "/services/PLCs.jpg",
  },
  {
    title: "IIOT",
    subtitle: "Industrial Internet of Things",
    description:
    "Unlock seamless connectivity between OT, IoT, and IT with a scalable IIoT platform, enabling realtime monitoring, automation, and enhanced security.",
    image: "/services/IIOT.jpg",
  },
  {
    title: "HMI",
    subtitle: "Human Machine Interface",
    description:
    "An intuitive interface that bridges human operators and machines, providing real-time data visualization, control, and process optimization.",
    image: "/services/HMI.jpg",
  },
  {
    title: "Robotics",
    subtitle: "Smart Automation Solutions",
    description:
    "Advanced robotics solutions designed to enhance precision, efficiency, and automation across industries, revolutionizing modern manufacturing.",
    image: "/services/Robotics.jpg",
  },
  {
    title: "Drives & Motion",
    subtitle: "Precision Motion Control",
    description:
    "A high-performance system integrating motors, actuators, and feedback mechanisms to enable precise, dynamic motion control in automation.",
    image: "/services/Drives&Motion.jpg",
  },
  {
    title: "Vision",
    subtitle: "Smart inspection Systems",
    description:
    "Cutting-edge vision sensors and smart cameras for advanced inspection, ensuring accuracy, defect detection, and seamless automation integration.",
    image: "/services/Vision.jpg",
  },
  {
    title: "Safety",
    subtitle: "Industrial Safety Systems",
    description:
    "Proactive safety systems designed to prevent workplace hazards, ensuring compliance, efficiency, and a secure working environment.",
    image: "/services/Safety.jpg",
  },
  {
    title: "SCADA",
    subtitle: "Supervisory Control and Data Acquisition",
    description:
    "A powerful system integrating software and hardware to monitor, control, and analyze industrial processes, ensuring efficiency and reliability.",
    image: "/services/SCADA.jpg",
  },
];

export default function DcsOfferings() {
  return (
    <section className="bg-white py-10">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="w-12 h-1 bg-red-600 mb-4"></div>
          <h2 className="text-4xl font-bold text-gray-900">
            Range of Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {offerings.map((item, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="relative w-full h-[240px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="mt-6">
                <p className="text-sm text-orange-500 mb-2">
                  {item.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
