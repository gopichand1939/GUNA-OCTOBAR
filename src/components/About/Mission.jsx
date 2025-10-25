import React from "react";
import { Link } from "react-router-dom";

const Mission = () => (
  <section className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-8">Our Mission</h2>
      <p className="text-slate-600 leading-relaxed text-lg">
        At <strong>Jaithra Enterprises</strong>, we are committed to providing
        exceptional transport services that prioritize safety, reliability, and
        customer satisfaction. With years of experience in the industry, we have
        built a reputation for delivering professional travel solutions for
        schools, corporate clients, and families across the region.
      </p>
      <p className="text-slate-600 leading-relaxed text-lg mt-6">
        Our mission is to make every journey comfortable, safe, and stress-free.
        Whether it’s a school excursion, corporate event, or family celebration,
        we ensure that your transportation needs are handled with professionalism
        and care.
      </p>
      <div className="mt-8">
        <Link
          to="/fleet"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          See Our Full Fleet
        </Link>
      </div>
    </div>
  </section>
);

export default Mission;
