import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ image, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* === IMAGE COVER === */}
      <div className="h-48 w-full overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* === CONTENT === */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* === GRADIENT GLOW === */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
    </motion.div>
  );
};

export default ServiceCard;
