// src/pages/Services/Services.jsx
import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 text-center p-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h1>
        <p className="max-w-2xl text-gray-600 leading-relaxed">
          We offer a wide range of premium transport services — from school buses and corporate travel
          to luxury coaches and customized fleet management. Wherever you go, Jaithra gets you there in comfort.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default Services;
