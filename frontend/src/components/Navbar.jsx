import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handlers for navigation
  const handlePointClick = () => {
    navigate('/points'); 
    setIsMenuOpen(false); 
  };

  const handleCampaignClick = () => {
    navigate('/campaign'); 
    setIsMenuOpen(false); 
  };

  const handleCreateClick = () => {
    navigate('/create'); 
    setIsMenuOpen(false); 
  };

  const handleHomeClick = () => {
    navigate('/'); 
    setIsMenuOpen(false); 
  };

  return (
    <nav className="relative flex items-center justify-between px-10 py-4 bg-gray-900 text-white shadow-lg">
      
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="h-14 w-auto cursor-pointer"
          title="Go to homepage"
        />
      </Link>
      <div className="flex items-center justify-center space-x-4">
        <ul className="hidden md:flex space-x-8">
          <li
            className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
            onClick={handlePointClick}
          >
            Point
          </li>
          <li
            className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
            onClick={handleCampaignClick}
          >
            Campaign
          </li>
        </ul>
      </div>

      {/* Menu Button for Mobile */}
      <div className="flex items-center space-x-4">
        <button
          className="hidden md:block px-4 py-2 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 focus:outline-none transition duration-200"
          onClick={handleCreateClick}
        >
          Create
        </button>
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`absolute top-16 left-0 w-full bg-gray-800 text-center text-gray-300 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
        style={{ zIndex: 50, position: "absolute" }}
      >
        <ul className="space-y-2 py-4">
          <li
            className="py-2 border-b border-gray-700 hover:bg-gray-700"
            onClick={handleHomeClick}
          >
            Home
          </li>
          <li
            className="py-2 border-b border-gray-700 hover:bg-gray-700"
            onClick={handlePointClick}
          >
            Point
          </li>
          <li
            className="py-2 border-b border-gray-700 hover:bg-gray-700"
            onClick={handleCampaignClick}
          >
            Campaign
          </li>
          <li className="py-2 hover:bg-gray-700">
            <button
              className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition-colors duration-200"
              onClick={handleCreateClick}
            >
              Create
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;