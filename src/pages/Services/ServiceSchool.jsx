import React from "react";
import { motion } from "framer-motion";
import schoolImg from "../../assets/School Bus.png";

const ServiceSchool = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            School Travel Solutions
          </h2>
          <p className="text-slate-600 mb-6">
            Safe and reliable transport for educational institutions. We
            understand the importance of student safety and provide monitored,
            secure transport for all school activities.
          </p>
          <h3 className="font-semibold text-lg text-blue-700 mb-2">
            What We Offer:
          </h3>
          <ul className="space-y-2 text-slate-600">
            <li>✔ Daily school commute services</li>
            <li>✔ Educational excursions and field trips</li>
            <li>✔ Sports event transportation</li>
            <li>✔ Inter-school competition travel</li>
            <li>✔ GPS-tracked vehicles</li>
            <li>✔ Background-verified drivers</li>
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={schoolImg}
            alt="School Bus"
            className="rounded-2xl shadow-lg bg-white p-8 w-80"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSchool;
