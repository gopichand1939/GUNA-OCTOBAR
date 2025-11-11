import React from "react";
import { motion } from "framer-motion";
import corporateImg from "../../assets/corporateTravelInTrnsSol.jpg";
import schoolImg from "../../assets/SchoolTravelInTrnsSol.jpg.jpg";
import familyImg from "../../assets/familyTravelInTrnsSol.jpg.jpeg";
import cabsImg from "../../assets/cabs&driversOnDemandRides.jpeg";
import tourImg from "../../assets/TourPackages.jpeg";
import devotionalImg from "../../assets/devotionaltripstransportsolu.jpeg";

const services = [
  { id: "corporate", label: "Corporate Travel", icon: "💼", desc: "Business Solutions", image: corporateImg },
  { id: "school", label: "School Travel", icon: "🚌", desc: "Student Transport", image: schoolImg },
  { id: "family", label: "Family Events", icon: "👨‍👩‍👧‍👦", desc: "Special Occasions", image: familyImg },
  { id: "tour", label: "Tour Packages", icon: "🗺️", desc: "Travel Tours", image: tourImg },
  { id: "transport", label: "Cabs & Drivers", icon: "🚗", desc: "On-Demand Rides", image: cabsImg },
  { id: "devotional", label: "Devotional Trips", icon: "🕉️", desc: "Spiritual Journeys", image: devotionalImg },
];

export default function ServiceHero() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get navbar height dynamically or use fixed value (h-20 = 80px)
      const navbar = document.querySelector('header');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const padding = 20; // Extra padding for better visibility
      const offset = navbarHeight + padding;
      
      // Calculate the position relative to the document
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - offset;
      
      // Use requestAnimationFrame to ensure smooth scroll
      requestAnimationFrame(() => {
        window.scrollTo({
          top: Math.max(0, offsetPosition), // Ensure we don't scroll to negative position
          behavior: "smooth",
        });
      });
    }
  };

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 md:py-32 text-center text-white bg-cover bg-center w-full"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/40 to-blue-700/40" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-blue-400/25 via-orange-400/25 to-blue-500/25 blur-3xl rounded-full animate-blob"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] bg-gradient-to-tl from-orange-500/25 via-blue-500/25 to-orange-300/25 blur-3xl rounded-full animate-blob delay-3000"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 2 }}
          className="absolute top-[40%] left-[50%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-bl from-blue-300/20 via-orange-200/20 to-blue-400/20 blur-3xl rounded-full animate-blob delay-1500"
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-12 sm:mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-blue-100 drop-shadow-[0_4px_20px_rgba(255,255,255,0.3)]"
          >
            Our Transport Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-50/95 leading-relaxed max-w-3xl mx-auto px-2"
          >
            Reliable, professional, and comfortable transport services designed to
            meet every need — from school commutes to corporate travel and family
            events.
          </motion.p>
        </motion.div>

        {/* Services Grid - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => scrollToSection(service.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group relative"
              >
                {service.image ? (
                  <div className="relative h-32 sm:h-40 mb-3 overflow-hidden rounded-xl">
                    <img
                      src={service.image}
                      alt={service.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Icon - Commented out for future use if needed */}
                    {/* <div className="absolute top-2 right-2 text-2xl sm:text-3xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </div> */}
                  </div>
                ) : (
                  // Fallback icon display - Commented out for future use if needed
                  // <div className="text-4xl sm:text-5xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 p-4">
                  //   {service.icon}
                  // </div>
                  <div className="h-32 sm:h-40 mb-3 bg-white/10 rounded-xl flex items-center justify-center">
                    <span className="text-4xl sm:text-5xl">{service.icon}</span>
                  </div>
                )}
                <div className="p-4 pt-0">
                  <h3 className="text-white font-bold text-xs sm:text-sm md:text-base mb-1">
                    {service.label}
                  </h3>
                  <p className="text-blue-100/80 text-xs sm:text-sm">
                    {service.desc}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none" />
    </section>
  );
}
