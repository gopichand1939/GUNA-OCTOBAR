import React from "react";
import { motion } from "framer-motion";
import bgimage from "/src/assets/assets/Jaitra3.jpg";

export default function AboutHero() {
  const bgUrl = bgimage;

  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative overflow-hidden min-h-[80vh] flex items-start justify-center text-center text-black pt-32" // moved text up with pt-32
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
        className="relative z-10 max-w-4xl mx-auto px-6"
      >
        <motion.h1
          id="about-hero-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 text-black drop-shadow-md"
        >
          About Jaitra Enterprises
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl font-bold tracking-wide text-black"
        >
          Your trusted partner for reliable travel solutions
        </motion.p>
      </motion.div>
    </section>
  );
}
