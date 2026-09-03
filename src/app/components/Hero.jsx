export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center">
      <div className="container mx-auto px-6 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Industrial Automation Solutions
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Cutting-edge PLC, IIoT, Robotics, and Smart Factory Expertise — NZ & Pacific.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-bold rounded-lg shadow hover:bg-gray-100">
          Learn More
        </button>
      </div>
    </section>
  );
}
