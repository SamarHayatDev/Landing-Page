"use client";
import React, { useState } from "react";
import { FaPeopleLine, FaLocationDot } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "Long-Term Software Development Team",
    description:
      "This service offered by We Want SaaS is perfect for you if you have large and ongoing software development projects that require continuous development efforts.",
    icon: <FaPeopleLine />,
    image:
      "https://cdn.wewantsaas.com/images/staffAugmentation/services/why-work-with-wws/Get-Connected-To-A-Pre-Vetted-Sales-Team.svg",
  },
  {
    id: 2,
    title: "Accurate Task Management Service",
    description:
      "The best part about working with us? You get your own project manager, who will be responsible for managing your assigned team and keeping track of the worked hours while keeping you in the loop.",
    icon: <FaRegCheckCircle />,
    image:
      "https://cdn.wewantsaas.com/images/staffAugmentation/services/why-work-with-wws/Stay-Updated-With-The-Status-Of-Your-Projects.svg",
  },
  {
    id: 3,
    title: "Excellent Post-Deployment Solutions",
    description:
      "Our dedication to your SaaS business stays consistent even after deployment. We will perform continuous, in-depth audits to prep your SaaS product for a successful and competitive market launch.",
    icon: <FaLocationDot />,
    image:
      "https://cdn.wewantsaas.com/images/staffAugmentation/services/why-work-with-wws/Get-the-Attention-You-Need-Beyond-Deployment.svg",
  },
  {
    id: 4,
    title: "Get An Assembled Team Within 72-92 hrs",
    description:
      "Our HR staff will make sure that your SaaS software team gets deployed within a time period of only 72 to 92 hours so that your project can be initiated and completed before the given task deadline.",
    icon: <FaLocationDot />,
    image:
      "https://cdn.wewantsaas.com/images/staffAugmentation/services/why-work-with-wws/Complete-Team-Deployment-Within-72-92-Hours.svg",
  },
  // Add more objects as needed with different icons
];

const OurServices = () => {
  //   hooks
  const [selectedImage, setSelectedImage] = useState(servicesData[0].image);

  const handleImageChange = (image) => {
    setSelectedImage(image);
  };
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
        Why Select <span className="text-blue-500">Our Services</span>?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <div className="flex items-center justify-center">
          <img src={selectedImage} alt="Selected Service" className="w-[60%]" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => handleImageChange(service.image)}
              className="group flex items-start gap-4 bg-white bg-opacity-75 rounded-lg p-6 shadow-md transition-transform transform hover:translate-y-[-5px] hover:bg-blue-500"
            >
              <div className="p-5 text-2xl text-white group-hover:text-blue-500 group-hover:bg-white bg-blue-500 rounded-full">
                {service.icon}
              </div>
              <div className="text-left group-hover:text-white">
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
