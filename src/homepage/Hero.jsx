import React from "react";
import hero from "../assets/hero/hero1.jpg";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <section className="flex  justify-center items-center w-full">
      <div className=" w-full m-4 max-lg:m-0 max-xl:h-screen relative max-w-[1500px]">
        <img
          src={hero}
          alt="Solar panels on roof"
          className="w-full rounded-xl max-lg:rounded-none max-lg:object-cover max-lg:h-full"
        />
        <div className="bg-black/50 max-lg:bg-black/40 absolute w-full h-full rounded-xl max-lg:rounded-none top-0"></div>
        <div className="absolute top-0 w-full">
          <Navbar />
          <div className="text-white px-6 py-16 sm:px-12 md:px-20 lg:px-32 text-center space-y-6">
            <p className="text-sm text-yellow-400 font-medium tracking-wider uppercase">
              Welcome to Svnsolar
            </p>

            <h1 className="text-7xl max-lg:text-5xl font-thin  leading-tight">
              Clean energy solutions for a <br />
              better planet
            </h1>

            <p className="text-white max-w-2xl mx-auto text-base sm:text-lg">
              SVN Solar began its journey with a simple vision: to harness the
              power of the sun to create a sustainable and greener future.
              Founded in 2015 by a team of passionate environmental enthusiasts
              and renewable energy experts, our mission is to make solar energy
              accessible and affordable for everyone.
            </p>

            <div className="flex max-lg:pb-5 flex-col sm:flex-row justify-center gap-4 pt-4 ">
              <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition-all duration-300 shadow-md">
                Request Quote
              </button>
              <button className="px-6 py-3 border-2 border-yellow-300 text-white hover:bg-white hover:text-black font-semibold rounded-full transition-all duration-300 shadow-sm">
                Explore More
              </button>
            </div>

            {/* <video
                  className="w-full max-md:block hidden h-auto rounded-xl object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="https://res.cloudinary.com/dbntgufdq/video/upload/v1752064417/svnsolar-video_uwdg9k.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
          </div>
        </div>
        <div className="absolute bottom-0 w-full flex max-lg:hidden  justify-center items-center">
          <div
            className="w-[50rem] h-[17rem]  rounded-tr-3xl rounded-tl-3xl border-t-8
           border-white border-x-8 bg-white"
          >
            <div
              className="flex h-full flex-col md:flex-row items-center justify-between 
            bg-gray-300 rounded-tr-3xl rounded-tl-3xl 
            p-6 md:p-10 gap-6 shadow-md max-w-5xl mx-auto"
            >
              {/* Left Section */}
              <div className="flex-1 space-y-4 ">
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
                  More than 900,000 households rely on Svnsolar systems. They’re
                  switching to renewable energy and loving the results.
                </p>
              </div>

              {/* Right Section (Image) */}
              <div className="flex-1 relative ">
                <video
                  className="w-full h-auto rounded-xl object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source
                    src="https://res.cloudinary.com/dbntgufdq/video/upload/v1752064417/svnsolar-video_uwdg9k.mp4"
                    type="video/mp4"
                  />
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
