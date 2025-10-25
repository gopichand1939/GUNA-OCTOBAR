import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
      <p>© {new Date().getFullYear()} Jaithra Enterprises. All Rights Reserved.</p>
      <div className="mt-2 flex justify-center items-center gap-2 text-orange-400">
        <FaPhoneAlt /> <span>+91 98765 43210</span>
      </div>
    </footer>
  );
};

export default Footer;
