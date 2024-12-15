import React from 'react';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white shadow-lg px-8 py-6 space-y-4 md:space-y-0">
      <p className="text-center md:text-left">&copy; shill.fun 2024</p>
      <Socials />
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
        <p className="hover:text-gray-300 transition-colors duration-200 cursor-pointer">Privacy Policy</p>
        <p className="hover:text-gray-300 transition-colors duration-200 cursor-pointer">Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
