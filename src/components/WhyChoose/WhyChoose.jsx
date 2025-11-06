import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import ReliabilityImg from "../../assets/ReliabilitySafety.png";
import CustomizableImg from "../../assets/CustomizablePackages.png";
import ExperiencedImg from "../../assets/ExperiencedDrivers.png";
import TransparentImg from "../../assets/TransparentPricing.png";

const reasons = [
  {
    id: 1,
    title: "Reliability & Safety",
    subtitle: "Trusted Transport",
    features: ["Always on time", "Safety-first vehicles", "Reliable professional drivers"],
    img: ReliabilityImg,
  },
  {
    id: 2,
    title: "Customizable Packages",
    subtitle: "Flexible Solutions",
    features: ["Tailored plans", "Corporate & school options", "Budget-friendly choices"],
    img: CustomizableImg,
  },
  {
    id: 3,
    title: "Experienced Drivers",
    subtitle: "Trained & Verified",
    features: ["Customer-friendly approach", "Route expertise", "Long-distance specialists"],
    img: ExperiencedImg,
  },
  {
    id: 4,
    title: "Transparent Pricing",
    subtitle: "No Hidden Charges",
    features: ["Clear rates", "No surprise fees", "Full bill transparency"],
    img: TransparentImg,
  },
];

const WhyChoose = () => {
  const [cursor, setCursor] = useState({ x: -9999, y: -9999 });
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    const x = rect ? e.clientX - rect.left : e.clientX;
    const y = rect ? e.clientY - rect.top : e.clientY;
    setCursor({ x, y });
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setCursor({ x: -9999, y: -9999 })}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50"
    >
      <motion.div
        animate={{ left: cursor.x - 120, top: cursor.y - 120, opacity: cursor.x === -9999 ? 0 : 0.55 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="pointer-events-none absolute w-64 h-64 rounded-full bg-gradient-to-br from-orange-300 to-amber-200 blur-3xl mix-blend-screen"
        style={{ left: -9999, top: -9999 }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Why Choose{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600">
            Jaitra Enterprises?
          </span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          The perfect balance of safety, comfort, professionalism, and trust.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 w-full px-6 pb-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-amber-200 mb-3">{item.subtitle}</p>
                <ul className="text-sm space-y-1 text-gray-200/90">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-amber-400">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-white text-center group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="text-lg font-semibold text-slate-800">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
