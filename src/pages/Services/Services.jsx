import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import ServiceHero from "./ServiceHero";
import ServiceCorporate from "./ServiceCorporate";
import ServiceSchool from "./ServiceSchool";
import ServiceFamily from "./ServiceFamily";
import ServiceTour from "./ServiceTour";
import ServiceDevotional from "./ServiceDevotional";
import ServiceTransport from "./ServiceTransport";

const Services = () => {
  return (
    <>
      <Navbar />
      <ServiceHero />
      <ServiceCorporate />
      <ServiceSchool />
      <ServiceFamily />
      <ServiceTour />
      <ServiceTransport />
      <ServiceDevotional />
      <Footer />
    </>
  );
};

export default Services;
