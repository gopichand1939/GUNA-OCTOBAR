import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ContactHero from "../../components/Contact/ContactHero.jsx";
import ContactForm from "../../components/Contact/ContactForm.jsx";
import ContactTouch from "../../components/Contact/ContactTouch.jsx";
import ContactFollow from "../../components/Contact/ContactFollow.jsx";
import ContactLocation from "../../components/Contact/ContactLocation.jsx";

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactTouch />
      <ContactFollow />
      <ContactLocation />
      <Footer />
    </>
  );
}
