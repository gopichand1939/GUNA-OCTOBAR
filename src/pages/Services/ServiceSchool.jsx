import React from "react";
import { motion } from "framer-motion";
import schoolImg from "../../assets/School Bus.png";

export default function ServiceSchool() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-300/30 to-blue-300/30 blur-3xl rounded-full animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/30 to-orange-200/30 blur-3xl rounded-full animate-pulse-slow delay-700" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16 relative z-10">
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-orange-600 to-blue-900 mb-6 tracking-tight">
            School Travel Solutions
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            Safe, reliable, and comfort-focused transportation services tailored for educational institutions. We make every student journey secure through advanced monitoring and trained, verified drivers.
          </p>
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            What We Offer
          </h3>
          <ul className="space-y-3 text-slate-600 text-lg">
            <li className="flex items-center gap-2">
              <span className="text-orange-600 text-xl">✔</span> Daily School Commute Services
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-600 text-xl">✔</span> Educational Excursions & Field Trips
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-600 text-xl">✔</span> Sports & Cultural Event Transport
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-600 text-xl">✔</span> Inter-School Competition Travel
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-600 text-xl">✔</span> GPS-Tracked Vehicles
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-600 text-xl">✔</span> Background-Verified Drivers
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400 via-orange-400 to-transparent rounded-[2rem] opacity-60 blur-2xl animate-gradient-x"></div>
          <motion.img
            src={schoolImg}
            alt="School Bus"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-96 h-auto rounded-[2rem] shadow-2xl bg-white/70 backdrop-blur-md p-6 border border-blue-100"
          />
        </motion.div>
      </div>
    </section>
  );
}
