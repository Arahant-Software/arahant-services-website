"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const services = [
  {
    label: "Industrial Process Automation",
    href: "/services/industrial-process-automation",
  },
  {
    label: "Machine Safety",
    href: "/services/machine-safety",
  },
  {
    label: "Electrical Engineering, installation & maintenance",
    href: "/services/electrical-engineering",
  },
  {
    label: "Industrial Engineering services",
    href: "/services/industrial-engineering",
  },
  {
    label: "Project management",
    href: "/services/project-management",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-xl border-b border-white/40 shadow-[0_2px_20px_rgba(18,20,53,0.07)]">
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
            <NavLink href="/projects" label="Projects" pathname={pathname} />
            <NavLink href="/about" label="About" pathname={pathname} />
            <NavLink href="/contact" label="Contact" pathname={pathname} />
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://www.linkedin.com/company/arahant-services-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, borderColor: "#FF5722", color: "#FF5722" }}
              className="hidden sm:flex rounded-md border border-gray-300 p-2 text-gray-700 transition text-lg"
            >
              <FaLinkedinIn />
            </motion.a>

            {/* Mobile Toggle */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 text-xl text-gray-700 hover:text-orange-500 transition"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {menuOpen ? <FaTimes /> : <FaBars />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-white/30 bg-white/90 backdrop-blur-xl"
            >
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
                className="flex flex-col gap-1 pt-4 pb-5 text-gray-800 font-medium"
              >
                <MobileLink href="/" label="Home" setMenuOpen={setMenuOpen} />
                <MobileDropdown title="Services" items={services} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
                <MobileLink href="/projects" label="Projects" setMenuOpen={setMenuOpen} />
                <MobileLink href="/about" label="About Us" setMenuOpen={setMenuOpen} />
                <MobileLink href="/contact" label="Contact" setMenuOpen={setMenuOpen} />
              </motion.ul>

              <div className="pt-3 pb-5 border-t border-gray-100">
                <a
                  href="https://www.linkedin.com/company/arahant-services-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition px-3 py-2"
                >
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
      <motion.span
        className="absolute left-0 -bottom-1 h-[2px] bg-orange-500 rounded-full"
        initial={{ width: isActive ? "100%" : "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.25 }}
      />
    </li>
  );
}

function Dropdown({ title, items }) {
  return (
    <li className="relative group">
      <span className="cursor-pointer hover:text-orange-500 transition flex items-center gap-1">
        {title}
        <FaChevronDown className="text-[10px] mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
      </span>

      <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 pt-4">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="w-64 rounded-2xl bg-white/85 backdrop-blur-xl shadow-xl border border-white/50 overflow-hidden"
        >
          {items.map((item, i) => {
            const isObj = typeof item === "object";
            const label = isObj ? item.label : item;
            const href = isObj && item.href ? item.href : "#";
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  href={href}
                  className="block px-5 py-3 text-sm hover:bg-orange-50 text-gray-600 hover:text-orange-500 transition"
                >
                  {label}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </li>
  );
}

/* ---------- Mobile Components ---------- */

const mobileItemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

function MobileLink({ href, label, setMenuOpen }) {
  return (
    <motion.li variants={mobileItemVariant}>
      <Link
        href={href}
        onClick={() => setMenuOpen(false)}
        className="block px-3 py-2.5 rounded-xl text-sm hover:bg-orange-50 hover:text-orange-500 transition"
      >
        {label}
      </Link>
    </motion.li>
  );
}

function MobileDropdown({ title, items, openDropdown, setOpenDropdown }) {
  const isOpen = openDropdown === title;

  return (
    <motion.li variants={mobileItemVariant}>
      <button
        onClick={() => setOpenDropdown(isOpen ? null : title)}
        className="w-full text-left px-3 py-2.5 rounded-xl flex justify-between items-center text-sm hover:bg-orange-50 hover:text-orange-500 transition"
      >
        {title}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-lg leading-none"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="ml-4 mt-1 border-l-2 border-orange-200 pl-4 pb-1">
              {items.map((item) => {
                const isObj = typeof item === "object";
                const label = isObj ? item.label : item;
                const href = isObj && item.href ? item.href : "#";
                return (
                  <Link
                    key={label}
                    href={href}
                    className="block py-2 text-xs sm:text-sm text-gray-600 hover:text-orange-500 transition"
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
