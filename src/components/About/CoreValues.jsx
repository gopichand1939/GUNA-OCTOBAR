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

const CoreValues = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-slate-100 overflow-hidden">
      {/* === Decorative Background Accents === */}
      <div className="absolute -top-10 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-orange-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* === Section Title === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">
            Our Core Values
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
            The principles that drive our commitment to safety, reliability, and excellence.
          </p>
        </motion.div>

        {/* === Values Grid === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((v) => (
            <motion.div
              key={v.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden relative border border-slate-100 hover:border-blue-200 transition-all"
            >
              {/* === Image Cover === */}
              <div className="h-44 w-full overflow-hidden relative">
                <img
                  src={v.icon}
                  alt={v.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* === Content === */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition">
                  {v.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>

              {/* === Glow Effect === */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
