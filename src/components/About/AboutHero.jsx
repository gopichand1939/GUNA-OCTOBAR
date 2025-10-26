import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  const bgUrl = "https://i.postimg.cc/4yqc4025/unnamed.jpg";

  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative overflow-hidden min-h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
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
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300 drop-shadow-lg"
        >
          About Jaithra Enterprises
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-gray-100 font-light tracking-wide"
        >
          Your trusted partner for reliable travel solutions
        </motion.p>
      </motion.div>
    </section>
  );
}
