import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Services from "../../components/Services/Services.jsx";
import WhyChoose from "../../components/WhyChoose/WhyChoose.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import TrustedBy from "../../components/TrustedBy/TrustedBy.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Testimonials />
      <TrustedBy />
      <Footer />
    </>
  );
};

export default Home;
