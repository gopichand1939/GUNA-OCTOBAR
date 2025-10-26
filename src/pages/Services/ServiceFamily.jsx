import React from "react";
import { motion } from "framer-motion";
import familyImg from "../../assets/Customizable Packages.png";

const ServiceFamily = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Family Functions
          </h2>
          <p className="text-slate-600 mb-6">
            Make your special occasions even more memorable with our comfortable
            and reliable transport services for family events of all sizes.
          </p>
          <h3 className="font-semibold text-lg text-blue-700 mb-2">
            What We Offer:
          </h3>
          <ul className="space-y-2 text-slate-600">
            <li>✔ Wedding guest transportation</li>
            <li>✔ Reception and ceremony shuttles</li>
            <li>✔ Family reunion travel</li>
            <li>✔ Birthday party transport</li>
            <li>✔ Religious ceremony services</li>
            <li>✔ Customizable routes and schedules</li>
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={familyImg}
            alt="Family Functions"
            className="rounded-2xl shadow-lg bg-blue-50 p-8 w-80"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFamily;
