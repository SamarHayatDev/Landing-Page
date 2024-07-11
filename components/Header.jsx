"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-gray-900 py-4 sticky top-0 z-10 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <img
            src="https://cdn.wewantsaas.com/landing-page/images/SVG/wws_logo.svg"
            alt="logo"
            className="h-[50px] w-[50px]"
          />
        </Link>

        {/* Hamburger Menu - Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-900 z-20 focus:outline-none"
          >
            <FaBars className=" z-50" size={24} />
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center space-x-4">
          <Link
            href="/"
            className="hover:text-gray-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/"
            className="hover:text-gray-600 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/"
            className="hover:text-gray-600 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="/"
            className="hover:text-gray-600 transition duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-20 flex justify-end ">
            <div className="bg-white w-[80%] left-0 p-4  shadow-md">
              <div className="flex items-center justify-between mb-10">
                Menu
                <button onClick={toggleMenu}>
                  <FaTimes />
                </button>
              </div>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-900 hover:text-gray-600 transition duration-300"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-900 hover:text-gray-600 transition duration-300"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-gray-900 hover:text-gray-600 transition duration-300"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-900 hover:text-gray-600 transition duration-300"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
