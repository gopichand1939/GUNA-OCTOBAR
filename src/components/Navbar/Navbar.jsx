import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/jaitrUpdatedLogo3.jpeg";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-24 sm:h-28 flex items-center justify-between">
          <NavLink to="/" className="flex items-center h-full">
            <img
              src={Logo}
              alt="Jaitra Enterprises Logo"
              className="h-24 sm:h-28 w-48 sm:w-64 object-contain rounded-lg"
            />
          </NavLink>

          <nav className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8 text-base font-medium">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.end}
                    className={({ isActive }) =>
                      `relative py-2 transition ${
                        isActive
                          ? "text-blue-700 font-semibold"
                          : "text-gray-700 hover:text-blue-600"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md transition"
            >
              Book Now
            </motion.a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t shadow-lg"
          >
            <ul className="flex flex-col items-center py-6 space-y-5 text-lg font-medium">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.end}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md ${
                        isActive ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-600"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full shadow-md"
              >
                Book Now
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
