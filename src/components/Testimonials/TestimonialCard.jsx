import React from "react"
import { motion } from "framer-motion"

const TestimonialCard = ({ avatar, name, role, company, quote, rating, state }) => {
  return (
    <motion.article
      className={`absolute top-0 left-1/2 w-full max-w-2xl -translate-x-1/2 rounded-2xl p-6 sm:p-8 text-center 
      backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_0_30px_rgba(0,255,255,0.15)]
      transition-all duration-[900ms] pointer-events-none ${
        state === "active"
          ? "opacity-100 scale-100 z-30 pointer-events-auto"
          : state === "prev"
          ? "opacity-30 -translate-x-[130%] scale-[0.85] z-10"
          : state === "next"
          ? "opacity-30 translate-x-[130%] scale-[0.85] z-10"
          : "opacity-0 scale-[0.7]"
      }`}
    >
      <div className="text-5xl text-cyan-400/40 mb-3 leading-none">"</div>

      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,255,255,0.45)]">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex justify-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-lg sm:text-xl ${i < rating ? "text-yellow-400" : "text-gray-500/30"}`}
          >
            ★
          </span>
        ))}
      </div>

      <blockquote className="text-cyan-100/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 italic">
        {quote}
      </blockquote>

      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-cyan-300">
        {name}
      </h3>
      <p className="text-cyan-400/80 text-xs sm:text-sm">{role}</p>
      <p className="text-cyan-500/60 text-[10px] sm:text-xs">{company}</p>
    </motion.article>
  )
}

export default TestimonialCard
