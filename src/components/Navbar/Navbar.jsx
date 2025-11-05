import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/Logo.png";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
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
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center overflow-hidden">
              <img
                src={Logo}
                alt="Jaitra Enterprises Logo"
                className="w-60 h-52 object-contain"
              />
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.end}
                    className={({ isActive }) =>
                      `relative text-gray-700 hover:text-blue-700 transition font-medium ${
                        isActive
                          ? "text-blue-700 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-blue-700 after:rounded-full"
                          : ""
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="ml-4 bg-gradient-to-r from-blue-700 to-blue-600 hover:to-blue-800 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md transition"
            >
              Book Now
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <ul className="flex flex-col items-center py-5 space-y-4 text-gray-800 font-medium">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.end}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md ${
                        isActive ? "text-blue-700 font-semibold" : "hover:text-blue-700"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-blue-700 to-blue-600 hover:to-blue-800 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md transition"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
