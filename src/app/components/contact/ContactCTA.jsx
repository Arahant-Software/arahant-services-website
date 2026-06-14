export default function ContactCTA() {
  return (
    <section className="bg-[#111111] py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Engineering Solutions That Deliver Results
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-8">
          From automation and machine safety to electrical engineering
          and industrial procurement, Arahant Services is your trusted
          engineering partner.
        </p>

        <a
          href="/contact"
          className="mt-8 sm:mt-10 inline-block rounded-full bg-orange-500 px-8 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-orange-600 transition"
        >
          Speak With Our Team
        </a>
      </div>
    </section>
  );
}
