import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1 - Logo and About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">SVN Solar</h2>
          <p className="text-sm text-gray-300 mb-4">
            What began as a simple idea grew into a mission—to harness nature’s most
            abundant resources, wind and sunlight, to power a brighter tomorrow.
          </p>
          <p className="text-sm text-gray-300">
            123 Solar Drive, Suite 200 Los Angeles, CA, 90001
          </p>

          {/* Social Icons - Left */}
          <div className="flex gap-3 mt-4 text-xl text-white">
            <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Column 2 - Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
            <MdEmail className="text-lg" />
            <span>info@SVN Solar.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <MdPhone className="text-lg" />
            <span>+1 (123) 456-7890</span>
          </div>
        </div>

        {/* Column 4 - Follow Us (Right side) */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <p className="text-sm text-gray-300 mb-4">
            Connect with us on social media for updates, news, and more.
          </p>
          <div className="flex gap-3 text-xl text-white">
            <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-500 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
        <p>© 2025 SVN Solar Solar Energy – All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">Privacy Policy & Term of Use</p>
      </div>
    </footer>
  );
};

export default Footer;
