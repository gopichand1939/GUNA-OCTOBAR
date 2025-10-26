import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { SiReact } from "react-icons/si";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white text-2xl font-bold shadow-md"
            >
              <SiReact className="text-cyan-300 animate-spin-slow" />
            </motion.div>
            <div className="leading-tight">
              <h1 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
                Jaithra Enterprises
              </h1>
              <p className="text-xs text-gray-500 -mt-0.5">
                Reliable Transport Solutions
              </p>
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {links.map((l) => (
                <motion.li key={l.to} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
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
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 bg-gradient-to-r from-blue-700 to-blue-600 hover:to-blue-800 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md transition"
            >
              Book Now
            </motion.a>
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
                <motion.li key={l.to} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <NavLink
                    to={l.to}
                    end={l.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md ${
                        isActive ? "text-blue-700 font-semibold" : "hover:text-blue-700"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li whileHover={{ scale: 1.05 }}>
                <a
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-block bg-gradient-to-r from-blue-700 to-blue-600 hover:to-blue-800 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md transition"
                >
                  Book Now
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
