import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

// IMPORT IMAGE ARRAYS
import allImages from "./GalleryAll.jsx";
import corporateImages from "./CorporateGallery.jsx";
import schoolImages from "./SchoolGallery.jsx";
import familyImages from "./FamilyEvents.jsx";
import customImages from "./CustomizedPackages.jsx";

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const getImages = () => {
    switch (filter) {
      case "corporate":
        return corporateImages;
      case "school":
        return schoolImages;
      case "family":
        return familyImages;
      case "custom":
        return customImages;
      default:
        return allImages;
    }
  };

  const imagesToShow = getImages();

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-800 tracking-tight">Gallery</h2>
          <p className="text-gray-600 mt-3 text-lg">Some Highlights & Memories</p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-2 rounded-full shadow-sm flex gap-2 flex-wrap">
            {[
              { key: "all", label: "All" },
              { key: "corporate", label: "Corporate School" },
              { key: "school", label: "School Gallery" },
              { key: "family", label: "Family Events" },
              { key: "custom", label: "Customized Packages" }
            ].map((btn) => (
              <button
                key={btn.key}
                onClick={() => setFilter(btn.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === btn.key
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-600 hover:bg-white hover:shadow"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* IMAGE GRID */}
        <motion.div
          layout
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {imagesToShow.map((src, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="relative group overflow-hidden rounded-xl shadow-md bg-gray-200 hover:shadow-xl transition-shadow"
            >
              <img
                src={src}
                alt="Gallery"
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              />

         
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
