import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactTouch() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-50 rounded-xl sm:rounded-2xl shadow-md p-6 sm:p-8">
          <FaPhoneAlt className="text-blue-700 text-2xl sm:text-3xl mb-3 mx-auto" />
          <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">Phone</h3>
          <p className="text-slate-600 text-sm sm:text-base">+91 9876543211</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-50 rounded-xl sm:rounded-2xl shadow-md p-6 sm:p-8">
          <FaEnvelope className="text-blue-700 text-2xl sm:text-3xl mb-3 mx-auto" />
          <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">Email</h3>
          <p className="text-slate-600 text-sm sm:text-base">info@Jaitra.com</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-50 rounded-xl sm:rounded-2xl shadow-md p-6 sm:p-8">
          <FaMapMarkerAlt className="text-blue-700 text-2xl sm:text-3xl mb-3 mx-auto" />
          <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">Address</h3>
          <p className="text-slate-600 text-sm sm:text-base">Visakhapatnam, Andhra Pradesh</p>
        </motion.div>
      </div>
    </section>
  );
}
