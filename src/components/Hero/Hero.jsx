import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "Reliable Travel Solutions for Schools, Corporates, & Family Events",
    subtitle: "Buses, Cabs, Drivers, and Custom Travel Plans",
    button: "Request a Service",
    image:
      "https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    id: 2,
    title: "Luxury Fleet for Comfort and Style",
    subtitle: "Experience premium rides with our top-notch vehicles.",
    button: "Explore Fleet",
    image:
      "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    id: 3,
    title: "Professional Drivers, Reliable Service",
    subtitle: "Your safety and punctuality are always our priorities.",
    button: "Book Now",
    image:
      "https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    id: 4,
    title: "Corporate Travel Simplified",
    subtitle:
      "Tailored business transport solutions for teams, clients, and events.",
    button: "Get Started",
    image:
      "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
          className="absolute left-[-25%] top-[10%] w-[90%] h-[120%] bg-gradient-to-tr from-[#00112B]/90 via-[#002A5A]/85 to-transparent blur-[100px]"
          style={{
            clipPath: "ellipse(75% 60% at 25% 50%)",
            zIndex: 1,
          }}
        />
        <motion.div
          animate={{ x: [0, 15, -15, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute left-[-10%] top-[5%] w-[85%] h-[110%] bg-gradient-to-tr from-[#0045A1]/70 via-[#007BFF]/60 to-transparent blur-[90px]"
          style={{
            clipPath: "ellipse(80% 65% at 28% 50%)",
            mixBlendMode: "lighten",
            zIndex: 2,
          }}
        />
        <motion.div
          animate={{ opacity: [0.5, 0.8, 0.5], x: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute left-[-5%] top-[15%] w-[80%] h-[100%] bg-gradient-to-tr from-[#00CFFF]/25 via-[#00AEEF]/15 to-transparent blur-[120px]"
          style={{
            clipPath: "ellipse(85% 70% at 30% 50%)",
            mixBlendMode: "screen",
            zIndex: 3,
          }}
        />
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[60px] opacity-60"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-center px-6">
        <motion.h1
          key={slides[index].title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]"
        >
          {slides[index].title}
        </motion.h1>

        <motion.p
          key={slides[index].subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
        >
          {slides[index].subtitle}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg w-fit"
        >
          {slides[index].button}
        </motion.button>
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center px-4">
        <button
          onClick={prevSlide}
          className="bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
        >
          <FaChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center px-4">
        <button
          onClick={nextSlide}
          className="bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-8 w-full flex justify-center space-x-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-white" : "bg-gray-400/60"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
