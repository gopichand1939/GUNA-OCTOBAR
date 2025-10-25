import React, { useState, useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";

// replace these imports with assets you already have, or use public URLs
import FounderAvatar from "../../assets/Founder.png";
import CustomerAvatar from "../../assets/CustomerFocus.png";
import ExecAvatar from "../../assets/ExcutiveSadan.png";
import ReliabilityAvatar from "../../assets/Reliability.png";

const testimonials = [
  {
    id: 1,
    avatar: FounderAvatar,
    name: "Priya Sharma",
    role: "HR Manager",
    company: "Tech Solutions Inc.",
    quote:
      "We use their services for all our corporate events. Professional drivers, well-maintained vehicles, and excellent coordination. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    avatar: CustomerAvatar,
    name: "Rajesh Kumar",
    role: "Principal",
    company: "St. Mary's School",
    quote:
      "Dependable and safety-focused. Our students travel comfortably and parents are reassured.",
    rating: 5,
  },
  {
    id: 3,
    avatar: ExecAvatar,
    name: "Anil Reddy",
    role: "Event Organizer",
    company: "Wedding Planners Co.",
    quote:
      "Handled transportation for a large wedding with ease. Everything was smooth and on time.",
    rating: 5,
  },
  {
    id: 4,
    avatar: ReliabilityAvatar,
    name: "Sneha Iyer",
    role: "Operations Lead",
    company: "LogiCorp",
    quote:
      "Transparent pricing and very responsive support — they become our go-to vendor for group travel.",
    rating: 5,
  },
  // Duplicate or add more testimonials if you want a longer carousel
];

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

const Testimonials = ({ autoplay = true, interval = 6000 }) => {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const autoplayRef = useRef();

  useEffect(() => {
    // responsive per-view (1 on small, 2 on md, 3 on lg)
    const updatePerView = () => {
      const w = window.innerWidth;
      if (w >= 1200) setPerView(3);
      else if (w >= 768) setPerView(2);
      else setPerView(1);
    };
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  // autoplay
  useEffect(() => {
    autoplayRef.current = next;
  });

  useEffect(() => {
    if (!autoplay) return;
    const tick = () => autoplayRef.current();
    const id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval, autoplay]);

  function prev() {
    const totalSlides = testimonials.length;
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }
  function next() {
    const totalSlides = testimonials.length;
    setIndex((prev) => (prev + 1) % totalSlides);
  }

  // keyboard left / right
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // compute translateX so the active card(s) are centered-ish
  const total = testimonials.length;
  // Ensure index bounds
  const i = clamp(index, 0, Math.max(0, total - 1));

  // For smooth infinite-like effect, duplicate items in rendering can be used.
  // The simple approach below translates the track by (index * cardWidth).
  // We'll use percentage translations relative to perView.
  const cardWidthPercent = 100 / perView;
  const trackTranslate = -(i * cardWidthPercent);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 mt-3">
            Real feedback from satisfied customers
          </p>
        </div>

        <div className="relative">
          {/* TRACK */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 will-change-transform transition-transform duration-700"
              style={{
                width: `${(total * 100) / perView}%`,
                transform: `translateX(${trackTranslate}%)`,
              }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  style={{ width: `${cardWidthPercent}%` }}
                  className="px-1"
                >
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

          {/* PREV / NEXT (centered vertically) */}
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-slate-200 w-10 h-10 rounded-full shadow-sm flex items-center justify-center hover:scale-105 transition"
          >
            <svg className="w-4 h-4 text-slate-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12.707 15.293a1 1 0 01-1.414 0L6.586 10.586a2 2 0 010-2.828l4.707-4.707a1 1 0 011.414 1.414L8.414 9.172a.5.5 0 000 .707l4.293 4.293a1 1 0 010 1.414z" />
            </svg>
          </button>

          <button
            aria-label="Next testimonial"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-slate-200 w-10 h-10 rounded-full shadow-sm flex items-center justify-center hover:scale-105 transition"
          >
            <svg className="w-4 h-4 text-slate-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7.293 4.707a1 1 0 011.414 0L13.414 9.17a.5.5 0 010 .707L8.707 14.88a1 1 0 11-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>

        {/* DOTS */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`w-3 h-3 rounded-full transition ${
                idx === i ? "bg-slate-800" : "bg-slate-300"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
