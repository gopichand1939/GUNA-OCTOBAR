import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import img1 from "../../assets/assets/slide1.jpg";
import img2 from "../../assets/assets/slider2.jpg";
import img3 from "../../assets/assets/slider3.jpg";
import img4 from "../../assets/assets/slider4.jpg";
import img5 from "../../assets/assets/slide5.jpg";
import img6 from "../../assets/assets/slide6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-blue-800">Gallery</h2>
          <p className="text-gray-600 mt-4">Some Highlights & Memories</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg bg-gray-100"
            >
              <img
                src={src}
                alt="Gallery"
                loading="lazy"
                decoding="async"
                className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
