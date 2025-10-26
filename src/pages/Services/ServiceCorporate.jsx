import React from "react";
import { motion } from "framer-motion";
import corporateImg from "../../assets/ExcutiveSadan.png";

const ServiceCorporate = () => {
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
            Corporate Travel Solutions
          </h2>
          <p className="text-slate-600 mb-6">
            Professional transport services designed for business needs. Whether
            it's a conference, meeting, or corporate retreat, we ensure your
            team travels in comfort and arrives on time.
          </p>
          <h3 className="font-semibold text-lg text-blue-700 mb-2">
            What We Offer:
          </h3>
          <ul className="space-y-2 text-slate-600">
            <li>✔ Airport transfers for business travelers</li>
            <li>✔ Conference and seminar transport</li>
            <li>✔ Corporate retreat packages</li>
            <li>✔ Executive travel services</li>
            <li>✔ Multi-day event coordination</li>
            <li>✔ Professional chauffeurs</li>
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
            src={corporateImg}
            alt="Corporate Travel"
            className="rounded-2xl shadow-lg bg-blue-50 p-8 w-80"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCorporate;
