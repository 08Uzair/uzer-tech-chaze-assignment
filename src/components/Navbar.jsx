import React, { useState } from "react";
import logo from "../images/logo.png";
import icon from "../images/icon.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center ml-16">
          <img src={logo} className="h-8 w-auto" />
        </div>

        {/* Centered Options */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-blue-500">
            About
          </a>
          <a href="#services" className="text-gray-600 hover:text-blue-500">
            Services
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500">
            Contact
          </a>
        </div>

        {/* Donate Button */}
        <div className="navDonate flex items-center mr-16">
          <button
            style={{
              borderTopWidth: "0px",
              borderRightWidth: "1.5px",
              borderBottomWidth: "1.5px",
              borderLeftWidth: "0px",
              borderStyle: "solid",
              borderColor: "#16442C",
            }}
            className="bg-[#399866] text-white px-4 py-2 rounded-full "
          >
            Donate
          </button> 
        </div>
        <div className="iconButton flex items-center mr-16">
          <button onClick={toggleMenu}>
            <img src={icon} />
          </button>
          {/* Slide-in Menu */}
          <div
            className={`fixed top-0 left-0 h-full w-full bg-[#399866] text-white transition-transform transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } z-50`}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Menu Content */}
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <a href="#" className="text-2xl hover:underline">
                Home
              </a>
              <a href="#" className="text-2xl hover:underline">
                About
              </a>
              <a href="#" className="text-2xl hover:underline">
                Services
              </a>
              <a href="#" className="text-2xl hover:underline">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
