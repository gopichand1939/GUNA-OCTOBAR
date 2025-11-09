import React from "react";
import { motion } from "framer-motion";
import cabImg from "../../assets/SUVLargeVehicle.png";

export default function ServiceTransport() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-300/30 to-blue-300/30 blur-3xl rounded-full animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/30 to-orange-200/30 blur-3xl rounded-full animate-pulse-slow delay-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-12 md:gap-16 relative z-10">
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-orange-600 to-blue-900 mb-4 sm:mb-6 tracking-tight">
            Buses, Cabs, and Drivers
          </h2>
          <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
            Flexible and professional transport solutions to fit every occasion.
            From spacious buses to luxurious cabs, our fleet and drivers ensure
            comfort, safety, and reliability wherever your destination takes you.
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4">
            What We Offer
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-slate-600 text-sm sm:text-base md:text-lg">
            <li className="flex items-center gap-2">
              <span className="text-orange-600 text-lg sm:text-xl">✔</span> Mini Buses for Small Groups
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-600 text-lg sm:text-xl">✔</span> Full-Size Coaches for Large Parties
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-600 text-lg sm:text-xl">✔</span> Luxury Cabs for Comfortable Travel
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-600 text-lg sm:text-xl">✔</span> Budget-Friendly Economy Options
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-600 text-lg sm:text-xl">✔</span> Experienced & Courteous Drivers
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-600 text-lg sm:text-xl">✔</span> Clean, Well-Maintained Vehicles
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center relative w-full"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400 via-orange-400 to-transparent rounded-[2rem] opacity-60 blur-2xl animate-gradient-x"></div>
          <motion.img
            src={cabImg}
            alt="Transport Vehicles"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full max-w-sm sm:max-w-md md:w-96 h-auto rounded-xl sm:rounded-2xl shadow-2xl bg-white/70 backdrop-blur-md p-4 sm:p-6 border border-blue-100"
          />
        </motion.div>
      </div>
    </section>
  );
}
