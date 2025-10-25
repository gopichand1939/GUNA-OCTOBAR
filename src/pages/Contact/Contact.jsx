// src/pages/Contact/Contact.jsx
import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 text-center p-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h1>
        <p className="max-w-2xl text-gray-600 leading-relaxed mb-8">
          Got questions, partnership ideas, or a fleet requirement?  
          We’d love to hear from you! Drop us a message and we’ll get back ASAP.
        </p>
        <div className="w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
            Send Message
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
