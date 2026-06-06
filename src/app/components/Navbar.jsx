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
  "PLC Programming",
  "Industrial Automation",
  "Robotics Integration",
  "IIoT Solutions",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between pt-2 pb-2">
          {/* Logo */}
          <Link href="/" className="flex items-center relative w-35 h-12">
            <Image
              fill
              src="/logo.png"
              alt="Company Logo"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-sm font-bold text-black">
            <NavLink href="/" label="Home" pathname={pathname} />
            <Dropdown title="Spare Parts" items={spareParts} />
            <Dropdown title="Services" items={services} />
            <NavLink href="/about" label="About Us" pathname={pathname} />
            <NavLink href="/contact" label="Contact" pathname={pathname} />
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/company/your-company"
              target="_blank"
              className="hidden sm:flex rounded-md border border-gray-300 p-2 text-gray-700 hover:text-brand-orange hover:border-brand-orange transition text-xl"
            >
              <FaLinkedinIn />
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-2xl text-gray-700"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 pb-6">
            <ul className="flex flex-col gap-4 mt-6 text-gray-800 font-medium">
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
      <Link href={href} className={`hover:text-gray-500 transition ${isActive ? 'text-brand-orange' : ''}`}>
        {label}
      </Link>
      <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-brand-orange group-hover:w-full transition-all" />
    </li>
  );
}

function Dropdown({ title, items }) {
  return (
    <li className="relative group">
      <span className="cursor-pointer hover:text-gray-500 transition flex items-center gap-1">
        {title}
        <FaChevronDown className="text-xs" />
      </span>

      <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
        <div className="mt-6 w-64 rounded-xl bg-white shadow-xl border">
          {items.map((item) => (
            <Link
              key={item}
              href="#"
              className="block px-5 py-3 text-sm hover:bg-brand-light text-gray-600 hover:text-brand-orange transition"
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
        className="block px-2 py-2 hover:text-brand-orange transition"
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
        className="w-full text-left px-2 py-2 flex justify-between items-center hover:text-brand-orange"
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="ml-4 mt-2 border-l pl-4">
          {items.map((item) => (
            <Link
              key={item}
              href="#"
              className="block py-2 text-sm hover:text-brand-orange transition"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
