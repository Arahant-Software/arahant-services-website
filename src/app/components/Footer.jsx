import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Industrial Automation", href: "/services/automation" },
  { label: "Electrical Engineering", href: "/services/electrical" },
  { label: "Process Installation", href: "/services/process-installation" },
  { label: "Mechanical & Welding", href: "/services/mechanical" },
  { label: "Procurement & Logistics", href: "/services/procurement" },
];

const technologyPartners = [
  "Siemens", "Rockwell", "Schneider", "ABB",
  "Omron", "Mitsubishi", "Festo", "Phoenix",
  "Wago", "Balluff",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-0 h-[300px] w-[300px] rounded-full bg-orange-600/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-orange-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Arahant"
              width={200}
              height={64}
              className="h-auto w-auto max-w-[180px]"
            />
            <p className="mt-6 text-sm sm:text-base leading-7 text-slate-400">
              Control system solutions that enhance productivity,
              reliability and operational performance across New Zealand
              and the Pacific region.
            </p>
            <div className="mt-6 flex gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-orange-500" />
              <div className="h-2.5 w-2.5 rounded-full bg-orange-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-orange-500/30" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg sm:text-xl font-bold text-white">Services</h3>
            <ul className="space-y-3 text-slate-400">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm sm:text-base transition hover:text-orange-500">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Partners */}
          <div>
            <h3 className="mb-5 text-lg sm:text-xl font-bold text-white">Technology Partners</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-400">
              {technologyPartners.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg sm:text-xl font-bold text-white">Contact</h3>
            <div className="space-y-4 text-slate-400">
              <p className="text-sm sm:text-base font-medium text-white">New Zealand & Pacific Region</p>
              <a
                href="mailto:support@arahant.co.nz"
                className="block text-sm sm:text-base transition hover:text-orange-500"
              >
                support@arahant.co.nz
              </a>
              <a
                href="https://www.arahant.co.nz"
                className="block text-sm sm:text-base transition hover:text-orange-500"
              >
                www.arahant.co.nz
              </a>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-slate-500">Engineering Excellence</div>
                <div className="mt-1 text-sm sm:text-base text-white">Automation • Electrical • Process</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 sm:flex-row">
            <p>© 2026 Arahant Services Ltd. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/privacy" className="hover:text-orange-500 transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-orange-500 transition">Terms & Conditions</Link>
              <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
