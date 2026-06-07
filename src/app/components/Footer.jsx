import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-[300px] w-[300px] rounded-full bg-orange-600/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-orange-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-20 md:px-10 lg:px-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Image
              src="/logo.png"
              alt="Arahant"
              width={220}
              height={70}
              className="h-auto w-auto"
            />

            <p className="mt-8 text-lg leading-8 text-slate-400">
              Control system solutions that enhance productivity,
              reliability and operational performance across New Zealand
              and the Pacific region.
            </p>

            <div className="mt-8 flex gap-3">
              <div className="h-3 w-3 rounded-full bg-orange-500" />
              <div className="h-3 w-3 rounded-full bg-orange-500/60" />
              <div className="h-3 w-3 rounded-full bg-orange-500/30" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-white">
              Services
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <Link
                  href="/services/automation"
                  className="transition hover:text-orange-500"
                >
                  Industrial Automation
                </Link>
              </li>

              <li>
                <Link
                  href="/services/electrical"
                  className="transition hover:text-orange-500"
                >
                  Electrical Engineering
                </Link>
              </li>

              <li>
                <Link
                  href="/services/process-installation"
                  className="transition hover:text-orange-500"
                >
                  Process Installation
                </Link>
              </li>

              <li>
                <Link
                  href="/services/mechanical"
                  className="transition hover:text-orange-500"
                >
                  Mechanical & Welding
                </Link>
              </li>

              <li>
                <Link
                  href="/services/procurement"
                  className="transition hover:text-orange-500"
                >
                  Procurement & Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology Partners */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-white">
              Technology Partners
            </h3>

            <div className="grid grid-cols-2 gap-3 text-sm text-slate-400">
              <span>Siemens</span>
              <span>Rockwell</span>
              <span>Schneider</span>
              <span>ABB</span>
              <span>Omron</span>
              <span>Mitsubishi</span>
              <span>Festo</span>
              <span>Phoenix</span>
              <span>Wago</span>
              <span>Balluff</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-white">
              Contact
            </h3>

            <div className="space-y-5 text-slate-400">
              <div>
                <p className="font-medium text-white">
                  New Zealand & Pacific Region
                </p>
              </div>

              <div>
                <a
                  href="mailto:support@arahant.co.nz"
                  className="transition hover:text-orange-500"
                >
                  support@arahant.co.nz
                </a>
              </div>

              <div>
                <a
                  href="https://www.arahant.co.nz"
                  className="transition hover:text-orange-500"
                >
                  www.arahant.co.nz
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-slate-500">
                  Engineering Excellence
                </div>
                <div className="mt-1 text-white">
                  Automation • Electrical • Process
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <p>
              © 2026 Arahant Services Ltd. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-orange-500">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-orange-500">
                Terms & Conditions
              </Link>

              <Link href="/contact" className="hover:text-orange-500">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}