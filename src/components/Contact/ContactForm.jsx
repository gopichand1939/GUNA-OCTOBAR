import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Send Us a Message</h2>
          <p className="text-slate-600 mb-8">
            Fill out the form below and we’ll get back to you as soon as possible.
          </p>

          <form className="space-y-5 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-blue-100">
            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-1">Full Name *</label>
              <input type="text" placeholder="Enter your full name" className="w-full border border-blue-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-1">Email Address *</label>
              <input type="email" placeholder="Enter your email" className="w-full border border-blue-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-1">Phone Number *</label>
              <input type="tel" placeholder="Enter your phone number" className="w-full border border-blue-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-1">Service Required</label>
              <select className="w-full border border-blue-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Select a service</option>
                <option>Corporate Travel</option>
                <option>School Transport</option>
                <option>Family Function</option>
                <option>Cab & Bus Service</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-1">Message *</label>
              <textarea placeholder="Enter your message" rows="4" className="w-full border border-blue-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-gradient-to-r from-blue-700 to-blue-600 hover:to-blue-800 text-white py-3 rounded-lg font-semibold shadow-md transition">
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-8"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-4">
              <FaPhoneAlt className="text-blue-700 text-2xl" />
              <h3 className="text-xl font-bold text-blue-800">Get In Touch</h3>
            </div>
            <p className="text-slate-600 mb-2">Phone: +91 XXXXX XXXXX</p>
            <p className="text-slate-600 mb-2">Email: info@jaithra.com</p>
            <p className="text-slate-600">Address: Visakhapatnam, Andhra Pradesh</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-4">
              <FaClock className="text-blue-700 text-2xl" />
              <h3 className="text-xl font-bold text-blue-800">Business Hours</h3>
            </div>
            <div className="text-slate-600 space-y-2">
              <div className="flex justify-between"><span>Monday - Friday:</span><span>9:00 AM - 6:00 PM</span></div>
              <div className="flex justify-between"><span>Saturday:</span><span>9:00 AM - 2:00 PM</span></div>
              <div className="flex justify-between"><span>Sunday:</span><span>Closed</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
