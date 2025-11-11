import React from "react";
import { motion } from "framer-motion";

// ✅ Updated imports (no spaces)
import SchoolBus from "../../assets/assets/st.anns.jpg";
import ProfessionalExcl from "../../assets/assets/Infinite.jpg";
import Founder from "../../assets/assets/infosys.jpg";
import Mahathi from "../../assets/assets/mahathi.jpg";
import FedServ from "../../assets/assets/fedserv.png";
import Comtron from "../../assets/assets/comtron.jpg";
import Clove from "../../assets/assets/clove.jpg";
import SriViswa from "../../assets/assets/sri-viswa-logo.webp";

const partners = [
  { id: 1, name: "St. Mary's School", icon: SchoolBus },
  { id: 2, name: "Infinte Computer Solutions", icon: ProfessionalExcl },
  { id: 3, name: "Infosys", icon: Founder },
  { id: 4, name: "Comtron", icon: Comtron },
  { id: 5, name: "Clove", icon: Clove },
  { id: 6, name: "SRI VISWA INSTITUTIONS", icon: SriViswa },
  { id: 7, name: "Mahathi Solutions", icon: Mahathi },
  { id: 8, name: "FedServ", icon: FedServ },
];

const TrustedBy = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10 md:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent px-2">
          Trusted By Leading Organizations
        </h2>
        <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg px-2">
          We proudly serve schools, corporations, and families across the region
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
        {partners.map((partner, i) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, rotate: 1, y: -6 }}
            className="group relative bg-gradient-to-br from-white/80 to-slate-50/70 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col items-center justify-center p-10 border border-white/40"
          >
            <motion.div
              initial={{ opacity: 0.5, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-transparent group-hover:from-blue-400/20 group-hover:to-cyan-200/30 blur-2xl"
            />

            <motion.div
              className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-tr from-sky-100 via-white to-sky-50 shadow-inner"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <img
                src={partner.icon}
                alt={partner.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-slate-800 group-hover:text-blue-700 transition-colors duration-300 text-center px-1"
            >
              {partner.name}
            </motion.h3>

            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-cyan-400/10 via-transparent to-transparent transition-all duration-500"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.08),transparent_70%)] pointer-events-none"
      />
    </section>
  );
};

export default TrustedBy;
