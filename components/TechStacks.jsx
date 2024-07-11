import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { SiRubygems } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

import { SiExpress } from "react-icons/si";
import { DiCodeigniter } from "react-icons/di";

import { FaReact, FaAngular, FaLaravel, FaVuejs } from "react-icons/fa6";

const TechStacks = () => {
  // Array of tech stack objects with icons
  const techStacks = [
    {
      title: "NodeJs",
      icon: FaNodeJs,
      description:
        "An open-source JavaScript runtime environment that enables front-end as well as back-end development.",
    },
    {
      title: "ReactJS",
      icon: FaReact,
      description:
        "An open-source JavaScript library enabling developers to create interfaces for satisfying user experiences.",
    },
    {
      title: "VueJS",
      icon: FaVuejs,
      description:
        "An open-source JavaScript library allowing developers to create user interfaces as well as single-page apps.",
    },
    {
      title: "Laravel",
      icon: FaLaravel,
      description:
        " A completely free and open-source web application development framework possessing an elegant syntax.",
    },
    {
      title: "RoR",
      icon: SiRubygems,
      description:
        "RoR or Ruby on Rails – the very first open-source framework – is used for backend website development.",
    },
    {
      title: "AngularJS",
      icon: FaAngular,
      description:
        " A structural dynamic web app development framework that lets developers use HTML as the template language.",
    },
    {
      title: "ExpressJS",
      icon: SiExpress,
      description:
        " A highly flexible and minimal Node.js framework used for the front-end and back-end development of web apps.",
    },
    {
      title: "Codeigniter ",
      icon: DiCodeigniter,
      description:
        "A PHP web application framework that consists of various predefined libraries for ultra-fast code development.",
    },
    {
      title: ".NET",
      icon: SiDotnet,
      description:
        " Created by Microsoft, this developer platform contains resources for developing any sort of software application.",
    },
    {
      title: "Django",
      icon: SiDjango,
      description:
        " A Python framework that assists developers in the creation of high-quality, cyber-secure, and maintainable sites.",
    },
    {
      title: "Golang",
      icon: FaGolang,
      description:
        "An open-source programming language by Google for web app development, networking and cloud solutions, etc.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
        Tech Stacks
      </h2>
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {/* Map over techStacks array and render each tech stack card */}
        {techStacks.map((tech, index) => (
          <div
            key={index}
            className="group flex flex-col gap-4 bg-white bg-opacity-75 rounded-lg p-6 shadow-md transition-transform transform border-b-4 border-blue-500 hover:translate-y-[-5px] hover:bg-blue-500 max-w-[300px]"
          >
            <div className="flex items-center justify-between w-full">
              <div className="p-5 text-2xl text-white group-hover:bg-white group-hover:text-blue-500 bg-blue-500 rounded-full">
                <tech.icon />
              </div>
              <div className="opacity-0 transition-all duration-300 group-hover:opacity-100 text-white text-3xl text-opacity-35">
                {index + 1}
              </div>
            </div>
            <h4 className="text-xl font-bold group-hover:text-white">
              {tech.title}
            </h4>
            <hr className="w-[40%] bg-blue-500 h-1 mb-2  group-hover:bg-white" />
            <p className="group-hover:text-white">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStacks;
