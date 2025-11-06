import React from "react";
import { motion } from "framer-motion";

// ✅ Updated imports (no spaces)
import SchoolBus from "../../assets/assets/st.anns.jpg";
import ProfessionalExcl from "../../assets/assets/Infinite.jpg";
import Founder from "../../assets/assets/infosys.jpg";
import CustomPackages from "../../assets/CustomizablePackages.png";
import MiniBus from "../../assets/MiniBus.png";
import LuxuryCoach from "../../assets/LuxuryCoach.png";
import TempoTraveller from "../../assets/TempoTraveller.png";
import Mahathi from "../../assets/assets/mahathi.jpg"

const partners = [
  { id: 1, name: "St. Mary's School", icon: SchoolBus },
  { id: 2, name: "Infinte Computer Solutions", icon: ProfessionalExcl },
  { id: 3, name: "Infosys", icon: Founder },
  { id: 4, name: "Family Events", icon: CustomPackages },
  { id: 5, name: "City Transport", icon: MiniBus },
  { id: 6, name: "Premium Services", icon: LuxuryCoach },
  { id: 7, name: "Elite Travels", icon: TempoTraveller },
  { id: 8, name: "Mahathi Solutions", icon: Mahathi },
];

const TrustedBy = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe] overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
          Trusted By Leading Organizations
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          We proudly serve schools, corporations, and families across the region
        </p>
      </motion.div>

      {/* Partner Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6">
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
            {/* Glow hover effect */}
            <motion.div
              initial={{ opacity: 0.5, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-transparent group-hover:from-blue-400/20 group-hover:to-cyan-200/30 blur-2xl"
            />

            {/* Partner image */}
            <motion.div
              className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-tr from-sky-100 via-white to-sky-50 shadow-inner"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <img
                src={partner.icon}
                alt={partner.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            {/* Partner name */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative mt-6 text-lg md:text-xl font-semibold text-slate-800 group-hover:text-blue-700 transition-colors duration-300 text-center"
            >
              {partner.name}
            </motion.h3>

            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-cyan-400/10 via-transparent to-transparent transition-all duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* Background shimmer */}
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
