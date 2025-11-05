import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactFollow() {
  return (
    <section className="py-20 bg-blue-50 text-center">
      <h2 className="text-3xl font-extrabold text-blue-900 mb-6">Follow Us</h2>
      <div className="flex justify-center gap-6">
        {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
          <motion.a key={i} href="#" whileHover={{ scale: 1.2 }} className="p-4 bg-white rounded-full shadow-md text-blue-700 hover:text-orange-600 transition">
            <Icon size={24} />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
