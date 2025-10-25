import React from "react";
import Founder from "../../assets/Founder.png";

const FounderSection = () => (
  <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/3 flex justify-center">
        <img
          src={Founder}
          alt="Founder"
          className="rounded-2xl shadow-lg w-56 h-56 object-cover border-4 border-white"
        />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Message from Our Founder
        </h2>
        <p className="text-slate-600 leading-relaxed text-lg">
          “At Jaithra Enterprises, our goal is not just to transport people — but
          to deliver peace of mind. Every trip we make reflects our commitment to
          excellence, safety, and customer satisfaction.”
        </p>
        <p className="text-blue-700 font-semibold mt-6">
          — Founder, Jaithra Enterprises
        </p>
      </div>
    </div>
  </section>
);

export default FounderSection;
