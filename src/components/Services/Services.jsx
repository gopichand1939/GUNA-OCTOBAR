import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

import CorporateImg from "../../assets/assets/slider2.jpg";
import SchoolImg from "../../assets/assets/slider3.jpg";
import FamilyImg from "../../assets/assets/slide1.jpg";
import CabImg from "../../assets/assets/slide5.jpg";
import TourImg from "../../assets/CustomizablePackages.png";
import DevotionalImg from "../../assets/assets/slide6.jpg";

const services = [
  {
    id: 1,
    image: CorporateImg,
    title: "Corporate Travel",
    description:
      "Premium transport for business meetings, conferences, and executive events.",
  },
  {
    id: 2,
    image: SchoolImg,
    title: "School Travel",
    description:
      "Safe and punctual transport for school commutes, trips, and educational tours.",
  },
  {
    id: 3,
    image: FamilyImg,
    title: "Family Events",
    description:
      "Comfortable, reliable rides for weddings, family functions, and group outings.",
  },
  {
    id: 4,
    image: TourImg,
    title: "Tour Packages",
    description:
      "Curated travel packages for destinations, sightseeing, and memorable journeys.",
  },
  {
    id: 5,
    image: DevotionalImg,
    title: "Devotional Trips",
    description:
      "Spiritual journeys to temples, religious sites, and pilgrimage destinations.",
  },
  {
    id: 6,
    image: CabImg,
    title: "Cabs & Drivers",
    description:
      "Well-maintained cabs and professional drivers — ready for any travel need.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] bg-orange-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">
            Our Services
          </h2>
          <p className="text-slate-600 mt-2 sm:mt-3 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Tailored travel solutions — crafted for comfort, safety, and reliability.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((s) => (
            <motion.div
              key={s.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10 sm:mt-12 md:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/services")}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-semibold text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transition relative overflow-hidden touch-manipulation"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
