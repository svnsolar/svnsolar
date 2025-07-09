import React from "react";
import { FaLeaf, FaShieldAlt } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdEnergySavingsLeaf, MdOutlineHomeWork } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import pro1 from '../assets/whychooseus/pro1.jpg'

const features = [
  {
    icon: <MdEnergySavingsLeaf className="text-green-700 text-2xl mt-1" />,
    title: "Significant Cost Savings",
    description: "Reduce your electricity bills by up to 70% with solar power.",
  },
  {
    icon: <GiElectric className="text-green-700 text-2xl mt-1" />,
    title: "Energy Independence",
    description: "Break free from unpredictable utility rates and power outages.",
  },
  {
    icon: <FaLeaf className="text-green-700 text-2xl mt-1" />,
    title: "Eco-Friendly Solution",
    description: "Lower carbon emissions and promote a cleaner planet.",
  },
  {
    icon: <MdOutlineHomeWork className="text-green-700 text-2xl mt-1" />,
    title: "Increased Property Value",
    description: "Homes with solar panels sell faster and at higher prices.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f7f8f0] py-20 px-6 md:px-20">
         <p className="text-green-700 font-semibold uppercase mb-2">About Echofy</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Environmental Sustainable <br /> Forever Green Future
          </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div className="relative">
          <img
            src={pro1}
            alt="Eco car and tree"
            className="w-full rounded-xl shadow-xl"
          />

          {/* Floating Badge */}
          {/* <div className="absolute bottom-6 left-6 bg-green-900 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow-lg">
            <BsPatchCheckFill className="text-green-300" />
            <span className="text-sm font-medium">AWARD WINNING</span>
          </div> */}
        </div>

        {/* Right Content Section */}
        <div>
       

          {/* Features with map */}
          <div className="space-y-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                {feature.icon}
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium text-sm">
            More About 
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
