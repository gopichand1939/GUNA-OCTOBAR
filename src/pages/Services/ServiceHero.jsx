import React from "react";
import { motion } from "framer-motion";

const ServiceHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our Transport Solutions
        </h1>
        <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
          Reliable, professional, and comfortable transport services designed
          to meet every need — from school commutes to corporate travel and
          family events.
        </p>
      </motion.div>
    </section>
  );
};

export default ServiceHero;
