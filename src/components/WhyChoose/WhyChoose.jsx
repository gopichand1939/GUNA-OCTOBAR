import React from "react";

const reasons = [
  {
    id: 1,
    title: "Reliability & Safety",
    description:
      "Punctual service with a strong focus on passenger safety and comfort.",
  },
  {
    id: 2,
    title: "Customizable Packages",
    description:
      "Tailored transport solutions for schools, corporates, and families.",
  },
  {
    id: 3,
    title: "Experienced Drivers",
    description:
      "Well-trained, professional drivers with years of experience.",
  },
  {
    id: 4,
    title: "Transparent Pricing",
    description:
      "Competitive rates with no hidden charges or surprise fees.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-12">
          Why Choose <span className="text-orange-500">Jaithra Enterprises?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="relative bg-slate-50 rounded-2xl shadow-sm hover:shadow-md transition duration-300 p-6"
            >
              {/* Orange border accent on left side */}
              <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-orange-500 to-orange-400 rounded-l-2xl" />
              
              <div className="pl-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
