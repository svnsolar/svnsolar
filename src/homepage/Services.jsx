import React from "react";
import {
  FaCity,
  FaHome,
  FaSeedling,
  FaUniversity,
  FaSun,
  FaLightbulb,
} from "react-icons/fa";
import pro1 from '../assets/products/pro1.jpg'
import pro2 from '../assets/products/pro2.jpg'
import pro3 from '../assets/products/pro3.jpg'
import pro4 from '../assets/products/pro4.jpg'
import pro5 from '../assets/products/pro5.jpg'
import pro6 from '../assets/products/pro6.jpg'
import pro7 from '../assets/products/pro7.jpg'

const projects = [
  {
    title: "Office Park Panels",
    location: "Toronto, Canada",
    description:
      "Deployed large panel installations across commercial rooftops, lowering energy bills significantly.",
    icon: <FaCity />,
    image: pro1,
  },
  {
    title: "Apartment Solar Rollout",
    location: "Seoul, South Korea",
    description:
      "Brought affordable solar solutions to high-rise apartments, benefiting thousands of families.",
    icon: <FaHome />,
    image: pro2,
  },
  {
    title: "Solar For Farmers",
    location: "Hanoi, Vietnam",
    description:
      "Enabled farmers to power irrigation systems using off-grid solar tools that enhance daily productivity.",
    icon: <FaSeedling />,
    image: pro3,
  },
  {
    title: "Green Museum Power",
    location: "New York, USA",
    description:
      "Installed high-efficiency solar panels to power modern museum architecture with clean energy.",
    icon: <FaUniversity />,
    image: pro4,
  },
  {
    title: "Desert Solar Field",
    location: "Dubai, UAE",
    description:
      "Set up a large-scale solar farm in the desert, generating electricity for remote communities.",
    icon: <FaSun />,
    image: pro5,
  },
  {
    title: "Public Solar Lighting",
    location: "Casablanca, Morocco",
    description:
      "Installed public solar street lighting systems in urban and rural areas to improve safety at night.",
    icon: <FaLightbulb />,
    image: pro6,
  },
];

const Services = () => {
  return (
    <section className="bg-[#081930] text-white py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <p className="uppercase text-green-500 font-semibold mb-2">Project Showcase</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
          Leading with innovation in solar <br /> project worldwide
        </h2>
        <button className="mt-4 px-6 py-2 rounded-md bg-green-600 hover:bg-green-700 transition">
          View All Projects
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group shadow-lg "
          >
            <div className="bg-black opacity-50 absolute w-full h-full duration-300"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-0 right-0 m-4 bg-green-700 text-white p-2 rounded-md shadow-md">
              {project.icon}
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-sm text-gray-300">{project.location}</p>
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-sm text-gray-200 mt-1">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
