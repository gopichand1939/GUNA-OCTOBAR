import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { FaPhoneAlt, FaClock } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email address.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Details received! We’ll get back to you soon.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#16a34a",
          color: "#fff",
          fontWeight: "600",
          borderRadius: "10px",
          padding: "12px 20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        },
        iconTheme: {
          primary: "white",
          secondary: "#16a34a",
        },
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }
  };

  const handleFeedbackSubmit = () => {
    if (feedback.trim().length < 3) return;
    toast.success("Thank you for your feedback!");
    setFeedback("");
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden text-black">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Send Us a Message</h2>
          <p className="text-slate-600 mb-8">Fill out the form below and we’ll get back to you as soon as possible.</p>

          <form onSubmit={handleSubmit} noValidate className="space-y-5 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-blue-100">
            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-1">Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="w-full border border-blue-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
              {errors.name && <p className="text-black text-sm font-semibold mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-1">Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full border border-blue-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
              {errors.email && <p className="text-black text-sm font-semibold mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-1">Phone Number *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className="w-full border border-blue-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
              {errors.phone && <p className="text-black text-sm font-semibold mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-1">Service Required</label>
              <select name="service" value={formData.service} onChange={handleChange} className="w-full border border-blue-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
                <option value="">Select a service</option>
                <option>Corporate Travel</option>
                <option>School Transport</option>
                <option>Family Function</option>
                <option>Cab & Bus Service</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-1">Message *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" rows="4" className="w-full border border-blue-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
              {errors.message && <p className="text-black text-sm font-semibold mt-1">{errors.message}</p>}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-700 to-blue-600 hover:to-blue-800 text-white py-3 rounded-lg font-semibold shadow-md transition">
                Send Message
              </button>
            </motion.div>
          </form>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="flex flex-col space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-4">
              <FaPhoneAlt className="text-blue-700 text-2xl" />
              <h3 className="text-xl font-bold text-blue-800">Get In Touch</h3>
            </div>
            <p className="text-slate-600 mb-2">Phone: +91 9876543211</p>
            <p className="text-slate-600 mb-2">Email: info@Jaitra.com</p>
            <p className="text-slate-600">Address: Visakhapatnam, Andhra Pradesh</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-4">
              <FaClock className="text-blue-700 text-2xl" />
              <h3 className="text-xl font-bold text-blue-800">Business Hours</h3>
            </div>
            <div className="text-slate-600 space-y-2">
              <div className="flex justify-between"><span>Monday - Friday:</span><span>9:00 AM - 6:00 PM</span></div>
              <div className="flex justify-between"><span>Saturday:</span><span>9:00 AM - 2:00 PM</span></div>
              <div className="flex justify-between"><span>Sunday:</span><span>Closed</span></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Customer Feedback</h3>
            <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Share your experience" rows="3" className="w-full border border-blue-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none mb-4" />
            <button onClick={handleFeedbackSubmit} className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold shadow-md transition">
              Submit Feedback
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
