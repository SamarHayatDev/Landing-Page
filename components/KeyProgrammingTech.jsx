import React from "react";
import { IoServerOutline, IoLaptopOutline } from "react-icons/io5";
import { AiTwotoneApi } from "react-icons/ai";
import { SiAmazonapigateway } from "react-icons/si";

const servicesData = [
  {
    icon: IoLaptopOutline,
    title: "MVP Developers",
    description:
      "Gather user feedback and test concept validity with MVP (Minimum Viable Product) developers.",
  },
  {
    icon: IoServerOutline,
    title: "Back-end Developers",
    description:
      "Maintain good health and functionality of your software with the help of back-end developers.",
  },
  {
    icon: IoServerOutline,
    title: "Database Developers",
    description:
      "Construct, design, and implement new databases or modify your existing ones on demand.",
  },
  {
    icon: AiTwotoneApi,
    title: "Integration Experts",
    description:
      "Incorporate third-party solutions into your main software product with integration specialists.",
  },
  {
    icon: SiAmazonapigateway,
    title: "API Professionals",
    description:
      "Encourage teamwork, and communication, and maximize productivity with the help of API developers.",
  },
];

const KeyProgrammingTech = () => {
  return (
    <section className="container mx-auto px-4  py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/experts/main-image.svg"
            alt="Experts in Key Programming Tech"
            className="w-[70%]"
          />
        </div>
        <div className="div-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
            The Experts We Offer In{" "}
            <span className="text-blue-500">Key Programming Tech</span>
          </h2>
          <div>
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white bg-opacity-75 rounded-lg p-6 shadow-md mb-6 border-l-4 border-blue-500 transition-transform transform hover:translate-y-[-5px]"
              >
                <div className="p-5 text-2xl text-white bg-blue-500 rounded-full">
                  <service.icon />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-gray-800">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyProgrammingTech;
