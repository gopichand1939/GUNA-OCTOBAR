import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import AboutHero from "../../components/About/AboutHero.jsx";
import Mission from "../../components/About/Mission.jsx";
import CoreValues from "../../components/About/CoreValues.jsx";
import FounderSection from "../../components/About/Founder.jsx";
import FleetGrid from "../../components/Fleet/FleetGrid.jsx";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Mission />
      <CoreValues />
      <FounderSection />

      {/* === Our Fleet Section === */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Fleet</h2>
          <p className="text-slate-600 mb-10">
            Well-maintained vehicles to suit every need — modern, safe, and reliable.
          </p>
        </div>
        <FleetGrid />
      </section>

      <Footer />
    </>
  );
};

export default About;
