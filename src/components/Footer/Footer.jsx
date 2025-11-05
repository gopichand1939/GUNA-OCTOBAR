import React from "react";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0a0f1a] via-[#101828] to-[#1e293b] text-gray-300 py-12 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
          Jaitra Enterprises
        </h2>

        <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed">
          Reliable travel solutions for schools, corporates, and events — bringing comfort, safety, and professionalism to every ride.
        </p>

        <motion.div
          className="flex justify-center items-center gap-3 text-orange-400 mt-4"
          whileHover={{ scale: 1.05 }}
        >
          <FaPhoneAlt className="text-lg" />
          <span className="text-base md:text-lg font-medium">+91 98765 43210</span>
        </motion.div>

        <div className="flex justify-center gap-5 mt-6">
          {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2, y: -3 }}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-orange-400 hover:bg-orange-500 hover:text-white shadow-lg shadow-orange-500/20 transition-all duration-300"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-xs text-gray-500 mt-8"
        >
          © {new Date().getFullYear()} Jaitra Enterprises. All Rights Reserved.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.08),transparent_70%)] pointer-events-none"
      />

      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"
      />
    </footer>
  );
};

export default Footer;
