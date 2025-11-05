import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import ServiceHero from "./ServiceHero";
import ServiceCorporate from "./ServiceCorporate";
import ServiceSchool from "./ServiceSchool";
import ServiceFamily from "./ServiceFamily";
import ServiceTransport from "./ServiceTransport";

const Services = () => {
  return (
    <>
      {/* 🔹 Navbar on top */}
      <Navbar />

      {/* 🔹 All service sections */}
      <ServiceHero />
      <ServiceCorporate />
      <ServiceSchool />
      <ServiceFamily />
      <ServiceTransport />

      {/* 🔹 Footer at bottom */}
      <Footer />
    </>
  );
};

export default Services;
