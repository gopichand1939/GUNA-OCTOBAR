import React from "react"
import { motion } from "framer-motion"

const TestimonialCard = ({ avatar, name, role, company, quote, rating, state }) => {
  return (
    <motion.article
      className={`absolute top-0 left-1/2 w-full max-w-2xl -translate-x-1/2 rounded-2xl bg-white p-8 shadow-lg text-center transition-all duration-700 ${
        state === "active"
          ? "opacity-100 scale-100 z-20"
          : state === "prev"
          ? "opacity-30 -translate-x-[120%] scale-90 z-10"
          : state === "next"
          ? "opacity-30 translate-x-[120%] scale-90 z-10"
          : "opacity-0 scale-75"
      }`}
    >
      <div className="text-5xl text-orange-500 opacity-40 mb-4 leading-none">“</div>
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 rounded-full bg-blue-50 shadow-md flex items-center justify-center overflow-hidden">
          <img src={avatar} alt={name} className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
      <div className="flex justify-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-200"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.95c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.487 2.707c-.784.57-1.84-.197-1.54-1.118l1.287-3.95a1 1 0 00-.364-1.118L2.526 9.377c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.95z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-gray-600 text-lg leading-relaxed italic mb-6">
        {quote}
      </blockquote>
      <div>
        <h3 className="text-xl font-semibold text-blue-900">{name}</h3>
        <p className="text-orange-500 font-medium">{role}</p>
        <p className="text-gray-500 text-sm">{company}</p>
      </div>
    </motion.article>
  )
}

export default TestimonialCard
