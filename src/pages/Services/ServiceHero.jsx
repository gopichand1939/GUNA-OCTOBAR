import React from "react";
import { motion } from "framer-motion";

export default function ServiceHero() {
  return (
    <section className="relative overflow-hidden py-32 text-center text-white bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-blue-400/40 via-orange-400/40 to-blue-500/40 blur-3xl rounded-full animate-blob"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-tl from-orange-500/40 via-blue-500/40 to-orange-300/40 blur-3xl rounded-full animate-blob delay-3000"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, delay: 2 }}
          className="absolute top-[40%] left-[50%] w-[500px] h-[500px] bg-gradient-to-bl from-blue-300/30 via-orange-200/40 to-blue-400/30 blur-3xl rounded-full animate-blob delay-1500"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-blue-100 drop-shadow-[0_4px_20px_rgba(255,255,255,0.3)]"
        >
          Our Transport Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto"
        >
          Reliable, professional, and comfortable transport services designed to
          meet every need — from school commutes to corporate travel and family
          events.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <button className="px-10 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500">
            Discover More
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
    </section>
  );
}
