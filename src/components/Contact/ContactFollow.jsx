import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactFollow() {
  const socials = [
    { icon: FaFacebook, name: "Facebook", link: "https://facebook.com/yourpage" },
    { icon: FaTwitter, name: "Twitter", link: "https://twitter.com/yourprofile" },
    { icon: FaLinkedin, name: "LinkedIn", link: "https://linkedin.com/company/yourcompany" },
    { icon: FaInstagram, name: "Instagram", link: "https://www.instagram.com/jaitra141118?igsh=MTZhY2xwdG10eGJ3Ng==" },
  ];

  return (
    <section className="py-20 bg-blue-50 text-center">
      <h2 className="text-3xl font-extrabold text-blue-900 mb-6">Follow Us</h2>
      <div className="flex justify-center gap-6">
        {socials.map(({ icon: Icon, link, name }, i) => (
          <motion.a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="p-4 bg-white rounded-full shadow-md text-blue-700 hover:text-orange-600 transition"
            title={name}
          >
            <Icon size={24} />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
