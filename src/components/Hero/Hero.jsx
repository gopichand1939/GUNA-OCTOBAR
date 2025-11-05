import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import busImage from '/src/assets/assets/employee.jpg'
import TeamImage from '/src/assets/assets/Jaitra5.jpg'
import JaitraImage from '/src/assets/assets/slider4.jpg'
import roundImage from '/src/assets/assets/slide1.jpg'

const slides = [
  {
    id: 1,
    title: "Reliable Travel Solutions for Schools, Corporates, & Family Events",
    subtitle: "Buses, Cabs, Drivers, and Custom Travel Plans",
    button: "Request a Service",
    image: busImage
      ,
  },
  {
    id: 2,
    title: "Luxury Fleet for Comfort and Style",
    subtitle: "Experience premium rides with our top-notch vehicles.",
    button: "Explore Fleet",
    image: TeamImage
  },
  {
    id: 3,
    title: "Professional Drivers, Reliable Service",
    subtitle: "Your safety and punctuality are always our priorities.",
    button: "Book Now",
    image: JaitraImage,
  },
  {
    id: 4,
    title: "Corporate Travel Simplified",
    subtitle:
      "Tailored business transport solutions for teams, clients, and events.",
    button: "Get Started",
    image: roundImage,
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
    if (slide.type === "navigate") navigate(slide.link);
  };

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

        <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-start px-6 pt-32 text-black">
        <motion.h1
        key={slides[index].title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-black"
        >
        {slides[index].title}
        </motion.h1>

        <motion.p
        key={slides[index].subtitle}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl font-bold text-black mb-8 max-w-2xl"
        >
        {slides[index].subtitle}
        </motion.p>


        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleButtonClick(slides[index])}
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
