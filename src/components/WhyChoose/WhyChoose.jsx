import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

// update these paths if your assets live elsewhere
import ReliabilityImg from "../../assets/ReliabilitySafety.png";
import CustomizableImg from "../../assets/Customizable Packages.png";
import ExperiencedImg from "../../assets/Experienced Drivers.png";
import TransparentImg from "../../assets/Transparent Pricing.png";

const reasons = [
  {
    id: 1,
    title: "Reliability & Safety",
    features: [
      "Always on time — zero delays",
      "Top-rated drivers & vehicles",
      "Safety-first assurance",
    ],
    img: ReliabilityImg,
  },
  {
    id: 2,
    title: "Customizable Packages",
    features: [
      "Flexible transport options",
      "Tailored to your needs",
      "Perfect for schools & corporates",
    ],
    img: CustomizableImg,
  },
  {
    id: 3,
    title: "Experienced Drivers",
    features: [
      "Professionally trained",
      "Customer-friendly approach",
      "Trusted for long-distance rides",
    ],
    img: ExperiencedImg,
  },
  {
    id: 4,
    title: "Transparent Pricing",
    features: [
      "No hidden charges",
      "Clear & fair billing",
      "Full transparency always",
    ],
    img: TransparentImg,
  },
];

const WhyChoose = () => {
  const [cursor, setCursor] = useState({ x: -9999, y: -9999 });
  const sectionRef = useRef(null);

  function handleMove(e) {
    const rect = sectionRef.current?.getBoundingClientRect();
    const x = rect ? e.clientX - rect.left : e.clientX;
    const y = rect ? e.clientY - rect.top : e.clientY;
    setCursor({ x, y });
  }
  function handleLeave() {
    setCursor({ x: -9999, y: -9999 });
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative py-24 overflow-visible bg-gradient-to-b from-white to-slate-50"
    >
      {/* Background animated blob */}
      <motion.div
        aria-hidden
        initial={{ scale: 1 }}
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -20, 0],
          rotate: [0, 2, -3, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-28 -top-28 w-[620px] h-[620px] rounded-full bg-gradient-to-tr from-orange-100 to-amber-100 opacity-80 blur-3xl mix-blend-multiply"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-8"
        >
          Why Choose{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600">
            Jaithra Enterprises?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 max-w-2xl mx-auto mb-16"
        >
          Discover excellence, trust, and professional service that make every journey smooth, safe, and enjoyable.
        </motion.p>

        {/* Floating cursor blob */}
        <motion.div
          animate={{
            left: cursor.x - 120,
            top: cursor.y - 120,
            opacity: cursor.x === -9999 ? 0 : 0.6,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="pointer-events-none absolute w-64 h-64 rounded-full bg-gradient-to-br from-orange-300 to-amber-200 blur-3xl mix-blend-screen"
          style={{ left: -9999, top: -9999 }}
        />

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason) => (
            <div key={reason.id} className="relative group">
              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer border border-slate-100 bg-white"
                style={{ minHeight: 260 }}
              >
                {/* Background image */}
                <img
                  src={reason.img}
                  alt={reason.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient overlay (only bottom half on hover) */}
                <motion.div
                  initial={{ height: "0%" }}
                  whileHover={{ height: "55%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"
                />

                {/* Content inside gradient (appears on hover) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <ul className="space-y-2 text-sm">
                    {reason.features.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white text-sm font-medium"
                  >
                    View More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Top accent */}
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500" />
              </motion.div>

              {/* Title outside the card */}
              <div className="flex justify-center mt-5">
                <h3 className="text-center text-base md:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
                  {reason.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
