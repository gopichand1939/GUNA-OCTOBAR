import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaStar, FaUser, FaComments } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    rating: "",
    feedback: "",
  });

  const [feedbackErrors, setFeedbackErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted!");
  if (validateForm()) {
    toast.success("Details received! We'll get back to you soon.", {
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

  const handleFeedbackChange = (e) => {
    setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value });
    setFeedbackErrors({ ...feedbackErrors, [e.target.name]: "" });
  };

  const validateFeedback = () => {
    const newErrors = {};
    if (!feedbackData.name.trim()) newErrors.name = "Name is required.";
    if (!feedbackData.rating) newErrors.rating = "Please select a rating.";
    if (!feedbackData.feedback.trim()) newErrors.feedback = "Feedback cannot be empty.";
    setFeedbackErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (validateFeedback()) {
      toast.success("Thank you for your feedback! We appreciate it.", {
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
      setFeedbackData({ name: "", rating: "", feedback: "" });
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden text-black">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-3 sm:mb-4">Send Us a Message</h2>
          <p className="text-slate-600 text-sm sm:text-base mb-6 sm:mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5 bg-white/80 sm:backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 border border-blue-100">
            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-1">Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="w-full border border-blue-100 rounded-lg px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none touch-manipulation" />
              {errors.name && <p className="text-black text-sm font-semibold mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-1">Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full border border-blue-100 rounded-lg px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none touch-manipulation" />
              {errors.email && <p className="text-black text-sm font-semibold mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-1">Phone Number *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className="w-full border border-blue-100 rounded-lg px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none touch-manipulation" />
              {errors.phone && <p className="text-black text-sm font-semibold mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-1">Service Required</label>
              <select name="service" value={formData.service} onChange={handleChange} className="w-full border border-blue-100 rounded-lg px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none touch-manipulation">
                <option value="">Select a service</option>
                <option>Corporate Travel</option>
                <option>School Transport</option>
                <option>Family Events</option>
                <option>Tour Packages</option>
                <option>Devotional Trips</option>
                <option>Cab & Bus Service</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-800 mb-1">Message *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" rows="4" className="w-full border border-blue-100 rounded-lg px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none touch-manipulation resize-none" />
              {errors.message && <p className="text-black text-sm font-semibold mt-1">{errors.message}</p>}
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-700 to-blue-600 hover:to-blue-800 active:to-blue-900 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base shadow-md transition touch-manipulation">Send Message</button>
            </motion.div>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6 sm:space-y-8"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-blue-100">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <FaPhoneAlt className="text-blue-700 text-xl sm:text-2xl" />
              <h3 className="text-lg sm:text-xl font-bold text-blue-800">Get In Touch</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base mb-2">Phone: +91 9876543211</p>
            <p className="text-slate-600 text-sm sm:text-base mb-2">Email: info@Jaitra.com</p>
            <p className="text-slate-600 text-sm sm:text-base">Address: Visakhapatnam, Andhra Pradesh</p>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-blue-100">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <FaClock className="text-blue-700 text-xl sm:text-2xl" />
              <h3 className="text-lg sm:text-xl font-bold text-blue-800">Business Hours</h3>
            </div>
            <div className="text-slate-600 text-sm sm:text-base space-y-2">
              <div className="flex justify-between"><span>Monday - Friday:</span><span>9:00 AM - 6:00 PM</span></div>
              <div className="flex justify-between"><span>Saturday:</span><span>9:00 AM - 2:00 PM</span></div>
              <div className="flex justify-between"><span>Sunday:</span><span>Closed</span></div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Customer Feedback Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            rotateY: 2,
            transition: { duration: 0.3 }
          }}
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          className="bg-gradient-to-br from-white via-yellow-50/30 to-blue-50/30 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-6 sm:p-8 md:p-10 border-2 border-yellow-200/50 relative overflow-hidden"
        >
          {/* Animated Background Elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl -z-10"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 rounded-full blur-3xl -z-10"
          />

          {/* Animated Person Character */}
          <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg relative z-10"
                style={{ transformStyle: "preserve-3d" }}
              >
                <FaUser className="text-white text-2xl sm:text-3xl" />
                {/* Animated Speech Bubble */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
                >
                  <FaComments className="text-white text-xs" />
                </motion.div>
              </motion.div>
              {/* Floating Stars */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.sin(i) * 10, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                  className="absolute"
                  style={{
                    top: `${10 + i * 15}px`,
                    right: `${-20 + i * 10}px`,
                  }}
                >
                  <FaStar className="text-yellow-400 text-sm" />
                </motion.div>
              ))}
            </motion.div>
            
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 sm:gap-4 mb-2"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <FaStar className="text-yellow-500 text-2xl sm:text-3xl" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-900 via-yellow-600 to-blue-900 bg-clip-text text-transparent">
                  Customer Feedback
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-slate-600 text-sm sm:text-base"
              >
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👋 Hi there! We'd love to hear from you!
                </motion.span>
                <br />
                Please share your experience with us. Your feedback helps us improve!
              </motion.p>
            </div>
          </div>
          
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            onSubmit={handleFeedbackSubmit}
            noValidate
            className="space-y-4 sm:space-y-5 relative z-10"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, rotateX: -10 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                  transition: { type: "spring", stiffness: 100 }
                }
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <label className="block text-sm font-semibold text-blue-800 mb-1 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaUser className="text-blue-600" />
                </motion.div>
                Your Name *
              </label>
              <motion.input
                whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                type="text"
                name="name"
                value={feedbackData.name}
                onChange={handleFeedbackChange}
                placeholder="Enter your name"
                className="w-full border-2 border-blue-100 rounded-lg px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none touch-manipulation transition-all"
              />
              {feedbackErrors.name && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-600 text-sm font-semibold mt-1"
                >
                  {feedbackErrors.name}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, rotateX: -10 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                  transition: { type: "spring", stiffness: 100 }
                }
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <label className="block text-sm font-semibold text-blue-800 mb-1 flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaStar className="text-yellow-500" />
                </motion.div>
                Rating *
              </label>
              <motion.select
                whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                name="rating"
                value={feedbackData.rating}
                onChange={handleFeedbackChange}
                className="w-full border-2 border-blue-100 rounded-lg px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none touch-manipulation transition-all"
              >
                <option value="">Select your rating</option>
                <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                <option value="4">⭐⭐⭐⭐ Very Good</option>
                <option value="3">⭐⭐⭐ Good</option>
                <option value="2">⭐⭐ Fair</option>
                <option value="1">⭐ Poor</option>
              </motion.select>
              {feedbackErrors.rating && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-600 text-sm font-semibold mt-1"
                >
                  {feedbackErrors.rating}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, rotateX: -10 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                  transition: { type: "spring", stiffness: 100 }
                }
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <label className="block text-sm font-semibold text-blue-800 mb-1 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaComments className="text-blue-600" />
                </motion.div>
                Your Feedback *
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                name="feedback"
                value={feedbackData.feedback}
                onChange={handleFeedbackChange}
                placeholder="Share your thoughts and experience with us..."
                rows="5"
                className="w-full border-2 border-blue-100 rounded-lg px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none touch-manipulation resize-none transition-all"
              />
              {feedbackErrors.feedback && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-600 text-sm font-semibold mt-1"
                >
                  {feedbackErrors.feedback}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { type: "spring", stiffness: 100 }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 10px 30px rgba(234, 179, 8, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.button
                type="submit"
                animate={{
                  boxShadow: [
                    "0 4px 15px rgba(234, 179, 8, 0.3)",
                    "0 8px 25px rgba(234, 179, 8, 0.5)",
                    "0 4px 15px rgba(234, 179, 8, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 hover:from-yellow-600 hover:to-yellow-700 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base shadow-lg transition-all relative overflow-hidden"
              >
                <motion.span
                  className="relative z-10 flex items-center justify-center gap-2"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Submit Feedback
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    ✨
                  </motion.span>
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
