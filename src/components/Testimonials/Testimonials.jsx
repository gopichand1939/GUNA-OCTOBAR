import React, { useState, useEffect, useRef } from "react"
import TestimonialCard from "./TestimonialCard"
import FounderAvatar from "../../assets/Founder.png"
import CustomerAvatar from "../../assets/CustomerFocus.png"
import ExecAvatar from "../../assets/ExcutiveSadan.png"
import ReliabilityAvatar from "../../assets/Reliability.png"

const testimonials = [
  {
    id: 1,
    avatar: FounderAvatar,
    name: "Rinijessie Vedala",
    role: "HR Manager",
    company: "Infinite Computer Solutions",
    quote:
      "Professional service with attention to detail. Drivers were punctual and courteous. A fantastic experience overall!",
    rating: 5,
  },
  {
    id: 2,
    avatar: CustomerAvatar,
    name: "Rajesh Kumar",
    role: "Principal",
    company: "St. Mary's School",
    quote:
      "Reliable and comfortable transportation for our students. They make safety their top priority.",
    rating: 5,
  },
  {
    id: 3,
    avatar: ExecAvatar,
    name: "Anil Reddy",
    role: "Event Organizer",
    company: "Wedding Planners Co.",
    quote:
      "Flawless logistics for our events. Always on schedule and incredibly easy to coordinate with.",
    rating: 5,
  },
  {
    id: 4,
    avatar: ReliabilityAvatar,
    name: "Sneha Iyer",
    role: "Operations Lead",
    company: "LogiCorp",
    quote:
      "Transparent pricing, friendly team, and consistently smooth operations. They've earned our trust.",
    rating: 5,
  },
]

const Testimonials = () => {
  const [active, setActive] = useState(0)
  const timeoutRef = useRef(null)

  const next = () => setActive((prev) => (prev + 1) % testimonials.length)
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    timeoutRef.current = setInterval(next, 5000)
    return () => clearInterval(timeoutRef.current)
  }, [])

  return (
    <section className="relative py-10 sm:py-14 md:py-16 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.25),transparent_60%),radial-gradient(circle_at_75%_80%,rgba(0,128,255,0.25),transparent_60%)] animate-pulse-slow pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,0.5)] mb-2">
          What Our Clients Say
        </h2>
        <p className="text-cyan-200/70 text-sm sm:text-base mb-8">
          Real feedback from satisfied customers.
        </p>

        <div className="relative flex justify-center items-center min-h-[240px] sm:min-h-[280px] md:min-h-[320px] px-8 sm:px-12 md:px-16">

          {/* PREV BUTTON */}
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }}
            className="absolute left-0 md:left-10 top-1/2 -translate-y-1/2
            text-cyan-300 hover:text-white bg-white/5 border border-white/20
            w-10 h-10 sm:w-12 sm:h-12 rounded-full text-2xl sm:text-3xl
            flex items-center justify-center shadow-[0_0_18px_rgba(0,255,255,0.45)]
            cursor-pointer z-50 pointer-events-auto select-none"
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          {/* SLIDER */}
          <div className="relative w-full max-w-2xl h-[240px] sm:h-[270px] md:h-[300px] pointer-events-none">
            {testimonials.map((t, i) => {
              let state = "hidden"
              if (i === active) state = "active"
              else if (i === (active - 1 + testimonials.length) % testimonials.length) state = "prev"
              else if (i === (active + 1) % testimonials.length) state = "next"
              return <TestimonialCard key={t.id} {...t} state={state} />
            })}
          </div>

          {/* NEXT BUTTON */}
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); next(); }}
            className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2
            text-cyan-300 hover:text-white bg-white/5 border border-white/20
            w-10 h-10 sm:w-12 sm:h-12 rounded-full text-2xl sm:text-3xl
            flex items-center justify-center shadow-[0_0_18px_rgba(0,255,255,0.45)]
            cursor-pointer z-50 pointer-events-auto select-none"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        {/* DOTS BELOW */}
        <div className="flex justify-center gap-3 mt-7">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all ${
                i === active
                  ? "bg-cyan-400 w-6 sm:w-8 h-2 sm:h-3 rounded-lg shadow-[0_0_12px_rgba(0,255,255,0.6)]"
                  : "bg-cyan-200/30 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full hover:bg-cyan-200/60"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
