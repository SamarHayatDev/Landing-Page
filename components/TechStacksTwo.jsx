import React from "react";
import { FaNodeJs } from "react-icons/fa";

const TechStacksTwo = () => {
  const techStacksDatabases = [
    {
      title: "MySQL",
      icon: FaNodeJs,
      description:
        "An open-source RDBMS (Relational Database Management System) backed by Oracle.",
    },
    {
      title: "Firebase",
      icon: FaNodeJs,
      description:
        "A NoSQL database that’s cloud-hosted - it enables high-quality app development.",
    },
    {
      title: "MongoDB",
      icon: FaNodeJs,
      description:
        "An open-source non-relational (NoSQL) database program that is document-oriented.",
    },
    {
      title: "PostgreSQL",
      icon: FaNodeJs,
      description:
        "An object relational database management program that is highly flexible as well as stable.",
    },
  ];

  const techStacksCICD = [
    {
      title: "GitHub",
      icon: FaNodeJs,
      description:
        "A CI/CD platform that is automated and allows for code creation, management, & storage.",
    },
    {
      title: "CircleCI",
      icon: FaNodeJs,
      description:
        "A CI/CD tool known for its automation abilities for software building, testing, & deployment.",
    },
    {
      title: "Azure DevOps",
      icon: FaNodeJs,
      description:
        "An end-to-end development tool that allows for organizing & expediting software processes.",
    },
    {
      title: "Jenkins",
      icon: FaNodeJs,
      description:
        "A JavaScript automation server that helps with creating, building, & deploying software.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex md:flex-row flex-col items-center gap-8 justify-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 ">
            Databases
          </h2>
          <div className="left grid grid-cols-1 gap-8 lg:grid-cols-2">
            {techStacksDatabases.map((tech, index) => (
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
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 ">
            CI/CD tools
          </h2>
          <div className="right grid gap-8 grid-cols-1 lg:grid-cols-2">
            {techStacksDatabases.map((tech, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default TechStacksTwo;
