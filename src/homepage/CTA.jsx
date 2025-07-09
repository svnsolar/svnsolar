import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="bg-[#f7fce9] py-20 px-6 text-center">
      {/* Top Badge */}
      <div className="inline-block mb-4">
        <span className="bg-white text-green-800 font-medium px-4 py-1 rounded-full shadow-sm text-sm">
          New Energy For Our System
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">
        Get A Free Quote Today!
      </h2>

      {/* Subheading */}
      <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
        Interested in switching to solar? Let’s work together to find the perfect
        solution for your home or business.
      </p>

      {/* CTA Button */}
      <button className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white px-6 py-3 rounded-full text-sm font-medium transition">
        Request a Free Quote <FiArrowUpRight />
      </button>
    </section>
  );
};

export default CTA;
