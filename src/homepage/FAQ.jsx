import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import faq from '../assets/faq/faq.jpg'

const faqs = [
  {
    question: "What services does Revolux offer?",
    answer:
      "Revolux provides solar panel installation, maintenance, energy audits, and custom green energy solutions for homes, businesses, and industries.",
  },
  {
    question: "How do I know if my location is suitable for solar?",
    answer:
      "Our experts analyze your location using satellite data, sunlight exposure, and roof orientation to determine solar viability before installation.",
  },
  {
    question: "Will solar panels reduce my electricity bill?",
    answer:
      "Yes, solar panels significantly reduce your electricity bills by allowing you to generate your own power and reduce dependency on the grid.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most installations are completed within 1–3 days depending on the size and complexity of the system.",
  },
  {
    question: "What kind of maintenance do solar panels need?",
    answer:
      "Solar panels require minimal maintenance. Occasional cleaning and a yearly inspection are usually enough to keep them running efficiently.",
  },
  {
    question: "What happens during cloudy or rainy days?",
    answer:
      "Solar panels still generate power during cloudy days, though at reduced efficiency. A battery backup or grid connection ensures uninterrupted power.",
  },
  {
    question: "How long do solar panels last?",
    answer:
      "Solar panels typically last 25–30 years with proper care and may still produce electricity beyond that at slightly reduced efficiency.",
  },
  {
    question: "How can I get a quote from Revolux?",
    answer:
      "You can contact us through our website, email, or call. We'll schedule a free consultation and provide a personalized quote based on your needs.",
  },
];

const FaqItem = ({ faq, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div
      className="bg-gray-100 px-6 py-4 rounded-md shadow-sm cursor-pointer transition-colors duration-300"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <p className="text-gray-800 font-medium">{faq.question}</p>
        {isOpen ? (
          <FaMinus className="text-green-700" />
        ) : (
          <FaPlus className="text-green-700" />
        )}
      </div>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 mt-2" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-600">{faq.answer}</p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <p className="uppercase text-green-700 font-semibold mb-2">Get Informed</p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Everything you need to <br className="block max-lg:hidden"/> know about green power
          </h2>
          <p className="text-gray-600 mb-6">
            Learn about our energy solutions and how to start. We’ve gathered the top
            questions and answered them for your peace of mind.
          </p>

          <div className="h-80 w-full mb-4">
            <img
              src={faq}
              alt="FAQ visual"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="bg-gray-100 p-4 rounded-xl flex items-center justify-between">
            <p className="font-medium text-gray-800">Need More Questions?</p>
            <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Section - Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
