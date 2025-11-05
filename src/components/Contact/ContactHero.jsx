import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden text-white py-28 text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/02/55/17/43/360_F_255174366_ojDuATz84e5h7lIlxh2moUJa9Kpd5wKk.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/30 to-blue-700/20" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          Contact Us
        </h1>
        <p className="text-blue-50 text-lg md:text-xl leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          Get in touch for a personalized quote — we’re happy to help you plan your next journey.
        </p>
      </motion.div>
    </section>
  );
}
