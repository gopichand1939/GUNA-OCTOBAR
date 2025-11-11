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
      <div id="corporate" style={{ scrollMarginTop: '100px' }}>
        <ServiceCorporate />
      </div>
      <div id="school" style={{ scrollMarginTop: '100px' }}>
        <ServiceSchool />
      </div>
      <div id="family" style={{ scrollMarginTop: '100px' }}>
        <ServiceFamily />
      </div>
      <div id="tour" style={{ scrollMarginTop: '100px' }}>
        <ServiceTour />
      </div>
      <div id="transport" style={{ scrollMarginTop: '100px' }}>
        <ServiceTransport />
      </div>
      <div id="devotional" style={{ scrollMarginTop: '100px' }}>
        <ServiceDevotional />
      </div>
      <Footer />
    </>
  );
};

export default Services;
