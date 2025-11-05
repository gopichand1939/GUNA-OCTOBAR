import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-10 tracking-tight drop-shadow-sm"
        >
          Our Mission
        </motion.h2>

        <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-10 md:p-14 max-w-4xl mx-auto border border-blue-100">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-700 leading-relaxed text-lg md:text-xl"
          >
            At <span className="text-blue-800 font-semibold">Jaitra Enterprises</span>, we’re driven by a passion for
            redefining travel. Every journey we operate is built on the pillars of{" "}
            <span className="text-orange-600 font-medium">safety</span>,{" "}
            <span className="text-orange-600 font-medium">comfort</span>, and{" "}
            <span className="text-orange-600 font-medium">trust</span>. With our years of expertise, we’ve
            earned the confidence of schools, corporates, and families who rely on us for seamless, premium
            transportation solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-slate-700 leading-relaxed text-lg md:text-xl mt-6"
          >
            Our mission is simple — to make every ride memorable, stress-free, and perfectly reliable.
            From school excursions to grand celebrations, we ensure every mile reflects our commitment
            to excellence and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            {/* <Link
              to="/fleet"
              className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105"
            >
              Explore Our Fleet
            </Link> */}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute -top-20 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-300 to-orange-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute bottom-0 -left-40 w-[450px] h-[450px] bg-gradient-to-tr from-orange-200 to-blue-300 rounded-full blur-3xl"
        />
      </motion.div>
    </section>
  );
}
