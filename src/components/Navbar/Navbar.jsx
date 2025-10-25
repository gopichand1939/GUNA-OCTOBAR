import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* === LOGO === */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-700 text-white text-xl font-bold">
              J
            </div>
            <div className="leading-tight">
              <h1 className="text-xl md:text-2xl font-extrabold text-gray-900">
                Jaithra Enterprises
              </h1>
              <p className="text-xs text-gray-500 -mt-0.5">
                Reliable Transport Solutions
              </p>
            </div>
          </NavLink>

          {/* === DESKTOP MENU === */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.end}
                    className={({ isActive }) =>
                      `text-gray-700 hover:text-blue-700 transition font-medium ${
                        isActive ? "text-blue-700 border-b-2 border-blue-700 pb-1" : ""
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
              className="ml-4 inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-sm"
            >
              Book Now
            </a>
          </nav>

          {/* === MOBILE MENU BUTTON === */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* === MOBILE MENU === */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-800 font-medium">
            {links.map((l) => (
              <li key={l.to}>
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
              </li>
            ))}

            <li className="pt-3">
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full text-sm font-semibold transition"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
