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
      "Transparent pricing, friendly team, and consistently smooth operations. They’ve earned our trust.",
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
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-2">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 text-lg mb-12">
          Real feedback from satisfied customers
        </p>

        <div className="relative flex justify-center items-center min-h-[400px]">
          <button
            onClick={prev}
            className="absolute left-0 md:left-10 top-1/2 -translate-y-1/2 bg-white border border-gray-200 w-12 h-12 rounded-full text-2xl text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white shadow-md transition"
          >
            ‹
          </button>

          <div className="relative w-full max-w-2xl h-[360px]">
            {testimonials.map((t, i) => {
              let state = "hidden"
              if (i === active) state = "active"
              else if (i === (active - 1 + testimonials.length) % testimonials.length)
                state = "prev"
              else if (i === (active + 1) % testimonials.length) state = "next"
              return <TestimonialCard key={t.id} {...t} state={state} />
            })}
          </div>

          <button
            onClick={next}
            className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 bg-white border border-gray-200 w-12 h-12 rounded-full text-2xl text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white shadow-md transition"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all ${
                i === active
                  ? "bg-orange-500 w-8 h-3 rounded-lg"
                  : "bg-gray-300 w-3 h-3 rounded-full"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
