import React from "react";
import {
  FaNodeJs,
  FaReact,
  FaLaravel,
  FaAngular,
  FaVuejs,
} from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiGraphql } from "react-icons/si";
import { SiDjango } from "react-icons/si";

const Hero = () => {
  const programmingLanguages = [
    { name: "Node", icon: FaNodeJs, color: "text-green-500" },
    { name: "TS", icon: TbBrandTypescript, color: "text-blue-500" },
    { name: "React", icon: FaReact, color: "text-blue-600" },
    { name: "Angular", icon: FaAngular, color: "text-red-600" },
    { name: "Vue", icon: FaVuejs, color: "text-green-600" },
    { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
    { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
    { name: "DJango", icon: SiDjango, color: "text-blue-500" },
  ];

  return (
    <main
      className="w-full items-center justify-centers flex mx-auto px-4 md:px-0 py-8 md:py-16 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://cdn.wewantsaas.com/images/staffAugmentation/mainBG.webp')`,
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="max-w-xl flex items-center justify-center flex-col">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            SaaSy Software Development Team Acquisition Services, Now At Your
            Fingertips
          </h1>
          <p className="text-lg mb-4 text-gray-800">
            Grow your SaaS business exponentially with a talented software
            development team that consistently meets your target market&apos;s
            demands. Get in touch with We Want SaaS today.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
            {programmingLanguages.map((lang, index) => (
              <div
                key={index}
                className={`flex items-center justify-center bg-white bg-opacity-75 rounded-lg py-4 px-6 transform hover:translate-y-[-5px] transition duration-300 ease-in-out ${lang.color}`}
              >
                <lang.icon className="mr-1 text-3xl" />
                <span className="text-gray-800 font-semibold">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <form className="max-w-lg bg-white bg-opacity-75 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-center mb-4">
              Let&apos;s get started with your Query
            </h3>
            <input
              type="text"
              className="bg-gray-200 mb-2 py-2 px-4 rounded w-full"
              placeholder="Name"
            />
            <input
              type="email"
              className="bg-gray-200 mb-2 py-2 px-4 rounded w-full"
              placeholder="Email"
            />
            <input
              type="tel"
              className="bg-gray-200 mb-2 py-2 px-4 rounded w-full"
              placeholder="Phone"
            />
            <input
              type="text"
              className="bg-gray-200 mb-2 py-2 px-4 rounded w-full"
              placeholder="Title"
            />
            <input
              type="text"
              className="bg-gray-200 mb-2 py-2 px-4 rounded w-full"
              placeholder="Company Name"
            />
            <input
              type="text"
              className="bg-gray-200 mb-2 py-2 px-4 rounded w-full"
              placeholder="Type of Service You Want"
            />
            <textarea
              className="bg-gray-200 mb-2 py-2 px-4 rounded w-full h-24 resize-none"
              placeholder="Provider Details"
            ></textarea>
            <p className="text-gray-800 text-center mb-4">
              We will call you ASAP or you can schedule a{" "}
              <span className="text-blue-500 font-semibold cursor-pointer">
                call
              </span>
              .
            </p>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Post Query
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Hero;
