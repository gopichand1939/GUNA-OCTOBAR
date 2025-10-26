import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-8 tracking-tight"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-600 leading-relaxed text-lg md:text-xl"
        >
          At <strong className="text-blue-800">Jaithra Enterprises</strong>, we
          are committed to providing exceptional transport services that
          prioritize safety, reliability, and customer satisfaction. With years
          of experience in the industry, we have built a reputation for
          delivering professional travel solutions for schools, corporate
          clients, and families across the region.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-slate-600 leading-relaxed text-lg md:text-xl mt-6"
        >
          Our mission is to make every journey comfortable, safe, and stress-free.
          Whether it’s a school excursion, corporate event, or family celebration,
          we ensure that your transportation needs are handled with professionalism
          and care.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            to="/fleet"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            See Our Full Fleet
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
