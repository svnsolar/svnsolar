import React, { useState } from "react";
import logo from "../assets/components/navbar/SVN LOGO ( FOR PRINTING ).png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);
    // Tailwind CSS classes can be used in the JSX below.
    return (
        <nav className="relative w-full max-lg:bg-white">
            <div className="container flex items-center justify-between px-4 py-3 ">
                <img src={logo} alt="" className="w-[10rem]" />
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
                    onClick={handleToggle}
                    aria-label="Toggle Menu"
                >
                    <span className={`block h-[2px] w-6 bg-black mb-2 rounded-xl transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block h-[2px] w-6 bg-black mb-2 rounded-xl transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block h-[2px] w-6 bg-black rounded-xl transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
                <ul className="hidden md:flex space-x-8">
                    <li><a href="/" className="text-white hover:text-blue-700 font-medium">Home</a></li>
                    <li><a href="/about" className="text-white hover:text-blue-700 font-medium">About</a></li>
                    <li><a href="/projects" className="text-white hover:text-blue-700 font-medium">Projects</a></li>
                    <li><a href="/contact" className="text-white hover:text-blue-700 font-medium">Contact</a></li>
                </ul>
                <a href="/contact" className="text-gray-800 max-lg:hidden bg-yellow-400 font-medium p-2 px-8 rounded-lg">Talk To Us</a>
            </div>
            {/* Mobile Menu */}
            <ul
                className={`fixed top-0 left-0 w-2/3 max-w-xs h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <li className="border-b">
                    <a href="/" className="block px-6 py-4 text-black hover:text-blue-700 font-medium" onClick={handleToggle}>Home</a>
                </li>
                <li className="border-b">
                    <a href="/about" className="block px-6 py-4 text-black hover:text-blue-700 font-medium" onClick={handleToggle}>About</a>
                </li>
                <li className="border-b">
                    <a href="/projects" className="block px-6 py-4 text-black hover:text-blue-700 font-medium" onClick={handleToggle}>Projects</a>
                </li>
                <li>
                    <a href="/contact" className="block px-6 py-4 text-black hover:text-blue-700 font-medium" onClick={handleToggle}>Contact</a>
                </li>
            </ul>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
                    onClick={handleToggle}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;