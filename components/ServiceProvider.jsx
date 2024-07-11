import React from "react";

const ServiceProvider = () => {
  return (
    <section className="container mx-auto px-4  py-8 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center">
        The services <span className="text-blue-500">We Provide</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="group flex flex-col lg:flex-row items-center bg-white bg-opacity-75 rounded-lg p-6 shadow-md transition-transform transform hover:translate-y-[-5px] hover:bg-blue-500 border-l-4 border-blue-500">
          <img
            src="https://cdn.wewantsaas.com/images/staffAugmentation/services/our-services/short-term.svg"
            alt="Short-Term Software Development Team"
            className="mb-4 lg:mb-0 lg:mr-4 h-72 w-72 rounded-lg"
          />
          <div className="text-left group-hover:text-white">
            <h4 className="text-xl font-bold mb-2">
              Short-Term Software Development Team
            </h4>
            <p>
              This service offered by We Want SaaS is perfect for you if you
              have small to medium-sized software development projects that need
              to be completed within 1-6 months.
            </p>
          </div>
        </div>
        <div className="group flex flex-col lg:flex-row items-center bg-white bg-opacity-75 rounded-lg p-6 shadow-md transition-transform transform hover:translate-y-[-5px] hover:bg-blue-500 border-l-4 border-blue-500">
          <img
            src="https://cdn.wewantsaas.com/images/staffAugmentation/services/our-services/long-term.svg"
            alt="Long-Term Software Development Team"
            className="mb-4 lg:mb-0 lg:mr-4 h-72 w-72 rounded-lg"
          />
          <div className="text-left group-hover:text-white">
            <h4 className="text-xl font-bold mb-2">
              Long-Term Software Development Team
            </h4>
            <p>
              This service offered by We Want SaaS is perfect for you if you
              have large and ongoing software development projects that require
              continuous development efforts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProvider;
