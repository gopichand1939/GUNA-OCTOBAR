import React from "react";
import { motion } from "framer-motion";

const FleetCard = ({ image, title, subtitle, capacity, features = [] }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="relative group overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500"
    >
      {/* === VEHICLE IMAGE === */}
      <motion.img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* === GRADIENT OVERLAY === */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* === CONTENT OVERLAY === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-full px-6 pb-6 text-white z-10"
      >
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-blue-200 mb-3">{subtitle}</p>

        {/* === FEATURE LIST === */}
        <ul className="text-sm space-y-1 text-gray-200/90">
          {features.slice(0, 4).map((f, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="text-blue-400">✓</span>
              {f}
            </motion.li>
          ))}
        </ul>

        {/* === CAPACITY === */}
        <div className="flex items-center gap-2 text-sm text-gray-300 mt-4">
          <svg
            className="w-4 h-4 text-blue-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
          </svg>
          <span>{capacity}</span>
        </div>
      </motion.div>

      {/* === STATIC INFO AT BOTTOM === */}
      <div className="p-6 bg-white text-center group-hover:opacity-0 transition-opacity duration-500">
        <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default FleetCard;
