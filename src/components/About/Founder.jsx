import React from "react";
import { motion } from "framer-motion";
import Founder from "../../assets/assets/srinivas.jpg";

export default function FounderSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-300/30 to-blue-400/30 blur-3xl rounded-full animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-300/30 to-orange-200/30 blur-3xl rounded-full animate-pulse-slow delay-500" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="relative md:w-1/3 flex justify-center"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-blue-500 to-orange-400 rounded-full opacity-70 blur-2xl animate-gradient-x"></div>
          <motion.img
            src={Founder}
            alt="Founder"
            className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl sm:rounded-2xl object-cover border-4 border-white shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:w-2/3 bg-white/70 backdrop-blur-2xl rounded-xl sm:rounded-2xl shadow-2xl border border-blue-100 p-6 sm:p-8 md:p-10 lg:p-14 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-700"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-orange-600 to-blue-900 mb-4 sm:mb-6 tracking-tight"
          >
            Message from Our Founder
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-slate-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl italic"
          >
            “At{" "}
            <span className="font-semibold text-blue-800">
              Jaitra Enterprises
            </span>
            , we don’t just transport people — we deliver{" "}
            <span className="text-orange-600 font-medium">peace of mind</span>.
            Each journey embodies our promise of{" "}
            <span className="text-orange-600 font-medium">
              safety, comfort
            </span>
            , and{" "}
            <span className="text-orange-600 font-medium">
              excellence
            </span>
            .”
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-blue-700 font-semibold mt-6 sm:mt-8 text-sm sm:text-base md:text-lg tracking-wide"
          >
            — Srinivas,  
              Jaitra Enterprises
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
