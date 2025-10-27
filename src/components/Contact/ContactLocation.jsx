import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ContactLocation() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-100 to-blue-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-extrabold text-blue-900 mb-8"
      >
        Our Location
      </motion.h2>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="max-w-5xl mx-auto bg-blue-100 rounded-2xl shadow-xl p-20 flex flex-col items-center justify-center text-slate-600"
      >
        <FaMapMarkerAlt className="text-pink-500 text-4xl mb-4" />
        <p className="text-lg font-medium">Map will be integrated here</p>
        <p className="text-sm text-slate-500 mt-2">Google Maps integration available</p>
      </motion.div>
    </section>
  );
}
