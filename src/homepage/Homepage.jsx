import React from "react";


const Homepage = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-yellow-100 to-blue-100 py-12 px-6 md:px-16">
            <div className="flex-1 mb-8 md:mb-0 md:mr-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Power Your Future with Solar Energy
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Clean, affordable, and sustainable solar panel solutions for your home and business.
                </p>
                <a
                    href="#contact"
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded shadow transition duration-200"
                >
                    Get a Free Quote
                </a>
            </div>
            <div className="flex-1 flex justify-center">
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                    alt="Solar panels on roof"
                    className="rounded-lg shadow-lg w-full max-w-md object-cover"
                />
            </div>
        </section>
    );
};

export default Homepage;