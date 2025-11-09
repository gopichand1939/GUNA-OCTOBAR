import React from "react";
import { motion } from "framer-motion";
import Safety from "../../assets/Safety.png";
import Reliability from "../../assets/Reliability.png";
import CustomerFocus from "../../assets/CustomerFocus.png";
import ProfessionalExcl from "../../assets/ProfessionalExcl.png";

const values = [
  {
    id: 1,
    icon: Safety,
    title: "Safety First",
    desc: "Passenger safety is at the heart of everything we do — from vehicle maintenance to driver training.",
  },
  {
    id: 2,
    icon: Reliability,
    title: "Reliability",
    desc: "We ensure punctual service and dependable vehicles for a worry-free experience every time.",
  },
  {
    id: 3,
    icon: CustomerFocus,
    title: "Customer Focus",
    desc: "Our services are built around your needs — ensuring satisfaction through flexibility and responsiveness.",
  },
  {
    id: 4,
    icon: ProfessionalExcl,
    title: "Professional Excellence",
    desc: "Experienced drivers and a professional management team ensure smooth, quality service delivery.",
  },
];

export default function CoreValues() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-gradient-to-br from-blue-300/30 to-orange-200/30 blur-3xl rounded-full animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-200/30 to-blue-300/30 blur-3xl rounded-full animate-pulse-slow delay-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-orange-600 to-blue-900 drop-shadow-sm">
            Our Core Values
          </h2>
          <p className="text-slate-600 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-2">
            The principles that drive our promise of safety, reliability, and excellence.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10"
        >
          {values.map((v) => (
            <motion.div
              key={v.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.08, rotate: 1 }}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100 hover:border-orange-300 transition-all hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <motion.img
                  src={v.icon}
                  alt={v.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"
                />
              </div>

              <div className="p-8 text-center relative z-10">
                <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-orange-600 transition-all duration-300">
                  {v.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {v.desc}
                </p>
              </div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
