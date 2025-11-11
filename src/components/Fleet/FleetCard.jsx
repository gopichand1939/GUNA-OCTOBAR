import React from "react";
import { motion } from "framer-motion";

const FleetCard = ({ image, title, subtitle, capacity, features = [], count }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="relative group overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500"
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 w-full px-6 pb-6 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-blue-200 mb-3">{subtitle}</p>
        <ul className="text-sm space-y-1 text-gray-200/90">
          {features.slice(0, 4).map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-blue-400">✓</span>
              {f}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 text-sm text-gray-300 mt-4">
          <svg className="w-4 h-4 text-blue-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
          </svg>
          <span>{capacity}</span>
        </div>
        {count && (
          <div className="flex items-center gap-2 text-sm text-blue-300 mt-2 font-semibold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
            <span>{count}</span>
          </div>
        )}
      </div>
      <div className="p-6 bg-white text-center group-hover:opacity-0 transition-opacity duration-300">
        <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
        <p className="text-sm text-slate-500">{subtitle}</p>
        {count && (
          <p className="text-xs text-blue-600 font-semibold mt-2">{count}</p>
        )}
      </div>
    </motion.div>
  );
};

export default FleetCard;
