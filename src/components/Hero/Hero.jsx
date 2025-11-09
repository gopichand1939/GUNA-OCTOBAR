import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import busImage from "/src/assets/assets/employee.jpg";
import TeamImage from "/src/assets/assets/Jaitra5.jpg";
import JaitraImage from "/src/assets/assets/slider4.jpg";
import roundImage from "/src/assets/assets/slide1.jpg";
import slider2Image from "/src/assets/assets/slider2.jpg";
import slider3Image from "/src/assets/assets/slider3.jpg";

const slides = [
  {
    id: 1,
    title: "Reliable Travel Solutions for Schools, Corporates, & Family Events",
    subtitle: "Buses, Cabs, Drivers, and Custom Travel Plans",
    button: "Request a Service",
    link: "/services",
    type: "navigate",
    image: busImage,
  },
  {
    id: 2,
    title: "Luxury Fleet for Comfort and Style",
    subtitle: "Experience premium rides with our top-notch vehicles.",
    button: "Explore Fleet",
    link: "/about",
    type: "navigate",
    image: TeamImage,
  },
  {
    id: 3,
    title: "Professional Drivers, Reliable Service",
    subtitle: "Your safety and punctuality are always our priorities.",
    button: "Book Now",
    link: "/contact",
    type: "navigate",
    image: JaitraImage,
  },
  {
    id: 4,
    title: "Corporate Travel Simplified",
    subtitle: "Tailored business transport solutions for teams, clients, and events.",
    button: "Get Started",
    link: "/services",
    type: "navigate",
    image: roundImage,
  },
  {
    id: 5,
    title: "Tour Packages & Devotional Trips",
    subtitle: "Explore destinations with our curated tour packages and spiritual journey services.",
    button: "Explore Tours",
    link: "/services",
    type: "navigate",
    image: slider2Image,
  },
  {
    id: 6,
    title: "Family Events & Celebrations",
    subtitle: "Make your special occasions memorable with our premium family event transportation.",
    button: "Book Event",
    link: "/services",
    type: "navigate",
    image: slider3Image,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleButtonClick = (slide) => {
    if (slide.type === "navigate" && slide.link) navigate(slide.link);
  };

  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden text-white">
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

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>

      {/* SMOOTHER, CLEANER CONTENT LAYOUT */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-6 sm:px-10 pb-10">

        <motion.h1
          key={slides[index].title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug mb-3 
            bg-gradient-to-r from-orange-400 via-yellow-300 to-amber-400 
            bg-clip-text text-transparent drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)] max-w-3xl"
        >
          {slides[index].title}
        </motion.h1>

        <motion.p
          key={slides[index].subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg font-medium text-gray-100 mb-5 max-w-xl drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]"
        >
          {slides[index].subtitle}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleButtonClick(slides[index])}
          className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-lg w-fit touch-manipulation"
        >
          {slides[index].button}
        </motion.button>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          prevSlide();
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          e.stopPropagation();
          prevSlide();
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onMouseDown={(e) => e.preventDefault()}
        className="absolute inset-y-0 left-0 flex items-center px-2 sm:px-4 z-30 touch-manipulation cursor-pointer"
        aria-label="Previous slide"
        type="button"
      >
        <div className="bg-black/50 hover:bg-black/70 active:bg-black/80 backdrop-blur-sm p-3 sm:p-4 rounded-full transition-all shadow-lg touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center pointer-events-auto">
          <FaChevronLeft size={18} className="sm:w-5 sm:h-5 text-white" />
        </div>
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          nextSlide();
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          e.stopPropagation();
          nextSlide();
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onMouseDown={(e) => e.preventDefault()}
        className="absolute inset-y-0 right-0 flex items-center px-2 sm:px-4 z-30 touch-manipulation cursor-pointer"
        aria-label="Next slide"
        type="button"
      >
        <div className="bg-black/50 hover:bg-black/70 active:bg-black/80 backdrop-blur-sm p-3 sm:p-4 rounded-full transition-all shadow-lg touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center pointer-events-auto">
          <FaChevronRight size={18} className="sm:w-5 sm:h-5 text-white" />
        </div>
      </button>

      <div className="absolute bottom-4 sm:bottom-8 w-full flex justify-center space-x-2 sm:space-x-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIndex(i);
            }}
            onTouchStart={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIndex(i);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all touch-manipulation min-w-[20px] min-h-[20px] cursor-pointer ${
              i === index ? "bg-orange-400 scale-125" : "bg-gray-400/60 hover:bg-gray-400/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
            type="button"
          ></button>
        ))}
      </div>
    </section>
  );
}
