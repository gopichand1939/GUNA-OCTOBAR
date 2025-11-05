import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white py-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Contact Us
        </h1>
        <p className="text-blue-100 text-lg md:text-xl">
          Get in touch for a personalized quote — we’re happy to help you plan your next journey.
        </p>
      </motion.div>
    </section>
  );
}
