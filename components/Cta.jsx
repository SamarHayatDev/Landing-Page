import React from "react";

const Cta = () => {
  return (
    <section className="w-full bg-black py-8 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Enhance the Creativity, Motivation, Talent, & Work Ethic of Your
          Software Team
        </h2>
        <p className="text-lg mb-6 text-white">
          The quality of your business software can make or break your SaaS
          company. Let us help you make it in the industry.
        </p>
        <button className="bg-white text-black py-2 px-6 rounded-lg hover:bg-blue-500  hover:text-white  transition-colors duration-300">
          Let's Get Started
        </button>
      </div>
    </section>
  );
};

export default Cta;
