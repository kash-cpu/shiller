import React from "react";
import Socials from "./Socials";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white shadow-lg px-8 py-6 space-y-4 md:space-y-0">
      <p className="text-center md:text-left">&copy; shill.fun 2024</p>

      <Socials />
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
        <Link
          to="/about" 
          className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          About
        </Link>
        <Link
          to="/privacy-policy" 
          className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          Privacy Policy
        </Link>
        <Link
          to="/terms-of-service" 
          className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;