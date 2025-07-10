import React from "react";
import about1 from '../assets/about/about1.jpg'
import about2 from '../assets/about/about2.jpg'

export default function About() {
  return (
    <section className="py-16 px-4 md:px-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="flex flex-col w-full max-w-[1200px] md:flex-row gap-6 items-start justify-center mx-auto">
        <div className="relative h-[34rem] max-lg:hidden w-full md:w-[25rem] transition-transform duration-300 hover:scale-105">
          <img
            src={about2}
            alt="Solar workers installing panels"
            className="rounded-xl object-cover  w-full h-full bg-red-500"
          />
        </div>

        <div className="flex flex-col items-center relative w-full md:w-[50rem]">
          <div className="text-center">
            <p className="text-green-600 uppercase tracking-wider font-semibold mb-2 text-sm">
              About Revolux
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 tracking-tight">
              Shaping the future with <br /> sustainable solar power
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Revolux is more than a green energy brand—we are a movement toward
              cleaner living. Our solar expertise powers progress, one rooftop
              and region at a time.
            </p>
            <button
              className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Learn more about Revolux"
            >
              Learn More
            </button>
          </div>
          <div className="flex flex-col bg-white z-50 rounded-t-2xl h-[12rem] max-lg:h-full
           md:flex-row gap-6 mt-8 md:mt-0 max-lg:relative absolute 
          md:-bottom-[15.2rem] w-full md:w-[50rem] ">
            <div className="p-6 rounded-xl flex-1 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-orange-500">23+</h3>
              <p className="font-semibold mt-2 text-gray-800">Years of Experience</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Over 23 years of industry leadership in solar innovation.
              </p>
            </div>
            <div className="p-6 rounded-xl flex-1 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-orange-500">6,900+</h3>
              <p className="font-semibold mt-2 text-gray-800">Panels Installed</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                6.9K+ solar panels installed across rooftops and fields.
              </p>
            </div>
            <div className="p-6 rounded-xl flex-1 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-orange-500">98%</h3>
              <p className="font-semibold mt-2 text-gray-800">Efficiency Rate</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                98% average system efficiency across installed solar units.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[34rem] max-lg:hidden w-full md:w-[25rem] transition-transform duration-300 hover:scale-105">
          <img
            src={about1}
            alt="Wind turbines and solar panels"
            className="rounded-xl object-cover w-full h-full bg-red-500"
          />
        </div>
      </div>
    </section>
  );
}