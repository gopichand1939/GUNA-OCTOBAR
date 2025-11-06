import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../components/ErrorPage";
import Gallery from "../pages/Gallery/Gallery";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* Global Toast Provider */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#0ea5e9",
            color: "#fff",
            fontWeight: "600",
            borderRadius: "10px",
            padding: "12px 20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          },
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
   <Route path="/gallery" element={<Gallery />} />

   
   
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
