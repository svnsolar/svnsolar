import React from "react";

const Footer = () => (
    <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                <span className="font-bold text-lg">SVN Solar</span>
            </div>
            <div className="flex space-x-6">
                <a href="#" className="hover:text-yellow-400 transition">Home</a>
                <a href="#" className="hover:text-yellow-400 transition">About</a>
                <a href="#" className="hover:text-yellow-400 transition">Services</a>
                <a href="#" className="hover:text-yellow-400 transition">Contact</a>
            </div>
            <div className="mt-4 md:mt-0 text-sm">
                &copy; {new Date().getFullYear()} SVN Solar. All rights reserved.
            </div>
        </div>
    </footer>
);

export default Footer;