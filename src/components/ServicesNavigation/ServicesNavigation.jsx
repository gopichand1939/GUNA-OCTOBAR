import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  { id: "corporate", label: "Corporate Travel", icon: "💼", galleryFilter: "corporate" },
  { id: "school", label: "School Travel", icon: "🚌", galleryFilter: "school" },
  { id: "family", label: "Family Events", icon: "👨‍👩‍👧‍👦", galleryFilter: "family" },
  { id: "tour", label: "Tour Packages", icon: "🗺️", galleryFilter: "custom" },
  { id: "transport", label: "Cabs & Drivers", icon: "🚗", galleryFilter: null },
  { id: "devotional", label: "Devotional Trips", icon: "🕉️", galleryFilter: "devotional" },
];

const ServicesNavigation = ({ activeSection, setActiveSection }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  const handleGalleryClick = (galleryFilter) => {
    if (galleryFilter) {
      navigate(`/gallery?filter=${galleryFilter}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = services.map((s) => s.id);
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <>
      {/* Top Sticky Navigation Bar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="sticky top-20 z-30 bg-white/95 backdrop-blur-xl border-b border-blue-100/50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto py-4 scrollbar-hide">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => scrollToSection(service.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeSection === service.id
                    ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-lg"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-700 bg-slate-50"
                }`}
              >
                <span className="text-lg sm:text-xl">{service.icon}</span>
                <span className="hidden sm:inline">{service.label}</span>
                <span className="sm:hidden">{service.label.split(" ")[0]}</span>
                {service.galleryFilter && (
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGalleryClick(service.galleryFilter);
                    }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="ml-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs"
                    title="View Gallery"
                  >
                    📷
                  </motion.button>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 lg:hidden w-14 h-14 bg-gradient-to-r from-blue-700 to-orange-600 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? "✕" : "☰"}
      </motion.button>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-800">Services</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-2">
                  {services.map((service) => (
                    <motion.button
                      key={service.id}
                      onClick={() => {
                        scrollToSection(service.id);
                        setIsOpen(false);
                      }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-300 ${
                        activeSection === service.id
                          ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-lg"
                          : "bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{service.icon}</span>
                          <span className="font-semibold">{service.label}</span>
                        </div>
                        {service.galleryFilter && (
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleGalleryClick(service.galleryFilter);
                              setIsOpen(false);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm shadow-lg"
                            title="View Gallery"
                          >
                            📷
                          </motion.button>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesNavigation;

