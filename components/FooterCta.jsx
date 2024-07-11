import React from "react";
import { FaPhone } from "react-icons/fa6";

const FooterCta = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          {/* First Div */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold">Book A Call</h4>
                <FaPhone className="text-blue-500" />
              </div>
              <p>
                Take the very first step towards SaaS excellence by connecting
                with one of our representatives over a brief virtual meeting –
                for absolutely free!
              </p>
            </div>
            <div className="bg-blue-500 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between text-white mb-4">
                <h4 className="text-xl font-bold">Book A Call</h4>
                <FaPhone className="text-white" />
              </div>
              <p className="text-white">
                Take the very first step towards SaaS excellence by connecting
                with one of our representatives over a brief virtual meeting –
                for absolutely free!
              </p>
            </div>
          </div>

          {/* Second Div */}
          <div className="bg-blue-500  text-white overflow-hidden p-6 py-12 rounded-lg relative shadow-md flex items-center justify-center flex-col">
            <h5 className="text-xl font-bold mb-4">Subscribe To WeWantSaaS</h5>
            <div className="flex items-center gap-2 max-w-[600px] w-full ">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-200 py-2 px-4 rounded w-full"
              />
              <button className="bg-white hover:bg-gray-200 text-blue-500 font-bold py-2 px-4 rounded">
                Submit
              </button>
              {/* Ball with animated border */}
              <div className="absolute ball w-10 h-10 bg-white rounded-full top-[-10px] left-[-10px] animate-pulse"></div>
              <div className="absolute ball w-32 h-32 opacity-40 bg-white rounded-full bottom-[-32px] right-[-42px] animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCta;
