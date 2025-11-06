import React from "react";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-orange-200"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute w-[120%] h-[120%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-300 via-purple-200 to-orange-300 blur-[120px] animate-[flow_14s_ease-in-out_infinite]"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto px-6 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 mb-12"
        >
          Our Mission
        </motion.h2>

        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 sm:p-12 md:p-16 max-w-4xl mx-auto border border-white/40">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-700 text-lg sm:text-xl leading-relaxed"
          >
            At <span className="text-blue-800 font-semibold">Jaitra Enterprises</span>, we focus on elevating travel through
            <span className="text-orange-600 font-semibold"> safety</span>,
            <span className="text-orange-600 font-semibold"> comfort</span>,
            and <span className="text-orange-600 font-semibold"> trust</span>.
            We serve schools, corporate teams, and families with dependable transport tailored to their needs.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            viewport={{ once: true }}
            className="text-slate-700 text-lg sm:text-xl leading-relaxed mt-6"
          >
            Our mission is to ensure every journey feels smooth, reliable, and meaningful. Whether it’s daily travel or
            special occasions, we deliver excellence with care in every mile.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
