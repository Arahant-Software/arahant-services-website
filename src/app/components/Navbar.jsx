"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaLinkedinIn, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const spareParts = [
  "PLC Spare Parts",
  "Drives & Motors",
  "Sensors",
  "HMI Panels",
];

const services = [
  "Industrial Automation",
  "Process Automation",
  "Machine Safety",
  "Electrical Engineering, installation & maintenance",
  "Mechanical installation & maintenance",
  "Welding Services",
  "Project management",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center relative w-32 sm:w-36 h-10 sm:h-12 flex-shrink-0">
            <Image fill src="/logo.png" alt="Arahant Services Logo" className="object-contain object-left" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm font-bold text-black">
            <NavLink href="/" label="Home" pathname={pathname} />
            <Dropdown title="Services" items={services} />
            <Dropdown title="Projects" items={spareParts} />
            <NavLink href="/about" label="About" pathname={pathname} />
            <NavLink href="/contact" label="Contact" pathname={pathname} />
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Link
              href="https://www.linkedin.com/company/your-company"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex rounded-md border border-gray-300 p-2 text-gray-700 hover:text-brand-orange hover:border-brand-orange transition text-lg"
            >
              <FaLinkedinIn />
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-xl text-gray-700 hover:text-orange-500 transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 pb-6">
            <ul className="flex flex-col gap-1 mt-4 text-gray-800 font-medium">
              <MobileLink href="/" label="Home" setMenuOpen={setMenuOpen} />

              <MobileDropdown
                title="Spare Parts"
                items={spareParts}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />

              <MobileDropdown
                title="Services"
                items={services}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />

              <MobileLink href="/about" label="About Us" setMenuOpen={setMenuOpen} />
              <MobileLink href="/contact" label="Contact" setMenuOpen={setMenuOpen} />
            </ul>

            {/* LinkedIn in mobile */}
            <div className="mt-5 pt-4 border-t border-gray-100">
              <Link
                href="https://www.linkedin.com/company/your-company"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition px-3 py-2"
              >
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

/* ---------- Desktop Components ---------- */

function NavLink({ href, label, pathname }) {
  const isActive = pathname === href;
  return (
    <li className="relative group">
      <Link
        href={href}
        className={`hover:text-orange-500 transition ${isActive ? "text-orange-500" : ""}`}
      >
        {label}
      </Link>
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-300" />
    </li>
  );
}

function Dropdown({ title, items }) {
  return (
    <li className="relative group">
      <span className="cursor-pointer hover:text-orange-500 transition flex items-center gap-1">
        {title}
        <FaChevronDown className="text-[10px] mt-0.5" />
      </span>

      <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 pt-4">
        <div className="w-64 rounded-2xl bg-white shadow-xl border border-slate-100 overflow-hidden">
          {items.map((item) => (
            <Link
              key={item}
              href="#"
              className="block px-5 py-3 text-sm hover:bg-orange-50 text-gray-600 hover:text-orange-500 transition"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}

/* ---------- Mobile Components ---------- */

function MobileLink({ href, label, setMenuOpen }) {
  return (
    <li>
      <Link
        href={href}
        onClick={() => setMenuOpen(false)}
        className="block px-3 py-2.5 rounded-xl text-sm hover:bg-orange-50 hover:text-orange-500 transition"
      >
        {label}
      </Link>
    </li>
  );
}

function MobileDropdown({ title, items, openDropdown, setOpenDropdown }) {
  const isOpen = openDropdown === title;

  return (
    <li>
      <button
        onClick={() => setOpenDropdown(isOpen ? null : title)}
        className="w-full text-left px-3 py-2.5 rounded-xl flex justify-between items-center text-sm hover:bg-orange-50 hover:text-orange-500 transition"
      >
        {title}
        <span className="text-lg leading-none">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="ml-4 mt-1 border-l-2 border-orange-200 pl-4 pb-1">
          {items.map((item) => (
            <Link
              key={item}
              href="#"
              className="block py-2 text-xs sm:text-sm text-gray-600 hover:text-orange-500 transition"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
