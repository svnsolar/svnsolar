import React from "react";
import hero from "../assets/homepage/hero/hero1.jpg";
import Navbar from "../components/navbar/Navbar";
import video from "../assets/homepage/hero/svnsolar-video.mp4";

const Hero = () => {
  return (
    <section className="flex  justify-center items-center w-full">
      <div className=" w-full m-4 relative max-w-[1600px]">
        <img
          src={hero}
          alt="Solar panels on roof"
          className="w-full rounded-xl"
        />
        <div className="bg-black/50 absolute w-full h-full rounded-xl top-0"></div>
        <div className="absolute top-0 w-full">
            
          <Navbar />
          <div className="text-white px-6 py-16 sm:px-12 md:px-20 lg:px-32 text-center space-y-6">
            <p className="text-sm text-yellow-400 font-medium tracking-wider uppercase">
              Welcome to Revolux
            </p>

            <h1 className="text-7xl font-semibold  leading-tight">
              Clean energy solutions for a better planet
            </h1>

            <p className="text-white max-w-2xl mx-auto text-base sm:text-lg">
              At Svnsolar, we deliver smart solar technology that supports both
              your lifestyle and the environment. Let’s create a more
              sustainable world together.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition-all duration-300 shadow-md">
                Request Quote
              </button>
              <button className="px-6 py-3 border-2 border-yellow-300 text-white hover:bg-white hover:text-black font-semibold rounded-full transition-all duration-300 shadow-sm">
                Explore More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full flex  justify-center items-center">
          <div className="w-[50rem] h-[19rem]  rounded-tr-3xl rounded-tl-3xl border-t-8 border-white border-x-8 bg-white">
            <div className="flex h-full flex-col md:flex-row items-center justify-between bg-gradient-to-r from-gray-200 to-gray-300 rounded-tr-3xl rounded-tl-3xl p-6 md:p-10 gap-6 shadow-md max-w-5xl mx-auto">
              {/* Left Section */}
              <div className="flex-1 space-y-4">
                {/* Avatars */}
                <div className="flex -space-x-3">
                  <img
                    src="/user1.jpg"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="/user2.jpg"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="/user3.jpg"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="/user4.jpg"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>

                {/* Stat */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">964K+</h3>
                  <p className="text-sm text-gray-600">Green Switchers</p>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  More than 900,000 households rely on Revolux solar systems.
                  They’re switching to renewable energy and loving the results.
                </p>
              </div>

              {/* Right Section (Image) */}
              <div className="flex-1 relative ">
                <video
                  className="w-full h-auto rounded-tl-xl rounded-tr-xl object-cover"
                autoPlay
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute bottom-4  right-0 flex justify-between items-center px-4">
                  
                  <span className="text-white font-semibold text-sm text-right">
                    SVN Solar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
