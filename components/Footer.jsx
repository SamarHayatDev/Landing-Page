import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* First Column - Twice Width */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold mb-4">About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus libero eget est pretium, eu fringilla purus tristique.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>

          {/* Second Column */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold mb-4">Site Info</h4>
            <ul className="text-gray-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 1
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 2
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 3
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 4
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 5
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold mb-4">Site Info</h4>
            <ul className="text-gray-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 1
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 2
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 3
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 4
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 5
                </Link>
              </li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold mb-4">Site Info</h4>
            <ul className="text-gray-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 1
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 2
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 3
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 4
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 5
                </Link>
              </li>
            </ul>
          </div>

          {/* Fifth Column */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold mb-4">Site Info</h4>
            <ul className="text-gray-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 1
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 2
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 3
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 4
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Random Link 5
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-4" />
        <p className="text-center font-semibold mt-4 ">
          © 2024 We Want SaaS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
