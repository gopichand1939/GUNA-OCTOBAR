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
    <section className="py-12 sm:py-16 md:py-20 bg-blue-50 text-center relative">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-4 sm:mb-6">Follow Us</h2>
      <div className="flex justify-center gap-4 sm:gap-6">
        {socials.map(({ icon: Icon, link, name }, i) => (
          <motion.a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 sm:p-4 bg-white rounded-full shadow-md text-blue-700 hover:text-orange-600 active:text-orange-700 transition touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            title={name}
          >
            <Icon size={20} className="sm:w-6 sm:h-6" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
