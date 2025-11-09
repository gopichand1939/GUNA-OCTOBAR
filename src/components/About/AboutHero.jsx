import React from "react";
import { motion } from "framer-motion";
import bgimage from "/src/assets/assets/Jaitra3.jpg";

export default function AboutHero() {
  const bgUrl = bgimage;

  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-start justify-center text-center pt-20 sm:pt-24 md:pt-32"
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6"
      >
        <motion.h1
          id="about-hero-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold mb-3 sm:mb-4 
            bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 
            bg-clip-text text-transparent drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
        >
          About Jaitra Enterprises
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wide text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]"
        >
          Your trusted partner for reliable travel solutions
        </motion.p>
      </motion.div>
    </section>
  );
}
