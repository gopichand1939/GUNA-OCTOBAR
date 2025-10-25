import React from "react";

/**
 * Small presentational card for a single testimonial.
 * Accepts: avatar (string url/import), name, role, company, quote, rating (1-5)
 */
const TestimonialCard = ({ avatar, name, role, company, quote, rating }) => {
  return (
    <article className="bg-white rounded-2xl shadow-lg p-8 min-h-[320px] flex flex-col items-center text-center">
      <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center -mt-12 mb-4 shadow-sm">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>

      <div className="mb-4">
        <div className="flex justify-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "text-yellow-400" : "text-yellow-200"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.95c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.487 2.707c-.784.57-1.84-.197-1.54-1.118l1.287-3.95a1 1 0 00-.364-1.118L2.526 9.377c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.95z" />
            </svg>
          ))}
        </div>

        <blockquote className="text-slate-600 italic leading-relaxed">
          “{quote}”
        </blockquote>
      </div>

      <div className="mt-auto text-center">
        <h4 className="text-lg font-semibold text-slate-900">{name}</h4>
        <p className="text-sm text-orange-500 font-medium">{role}</p>
        <p className="text-xs text-slate-400 mt-1">{company}</p>
      </div>
    </article>
  );
};

export default TestimonialCard;
