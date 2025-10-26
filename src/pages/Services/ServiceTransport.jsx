import React from "react";
import { motion } from "framer-motion";
import cabImg from "../../assets/SUV LargeVehicle.png";

const ServiceTransport = () => {
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
            Buses, Cabs, and Drivers
          </h2>
          <p className="text-slate-600 mb-6">
            Flexible transport solutions with a wide range of vehicles and
            experienced drivers for any occasion or requirement.
          </p>
          <h3 className="font-semibold text-lg text-blue-700 mb-2">
            What We Offer:
          </h3>
          <ul className="space-y-2 text-slate-600">
            <li>✔ Mini buses for small groups</li>
            <li>✔ Full-size coaches for large parties</li>
            <li>✔ Luxury cabs for comfort</li>
            <li>✔ Economy options for budget-conscious clients</li>
            <li>✔ Experienced, courteous drivers</li>
            <li>✔ Well-maintained, clean vehicles</li>
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
            src={cabImg}
            alt="Transport Vehicles"
            className="rounded-2xl shadow-lg bg-white p-8 w-80"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTransport;
