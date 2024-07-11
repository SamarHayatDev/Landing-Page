import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-center flex-col text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            SaaS Software Development Overview
          </h2>
          <p className="text-lg mb-4">
            For any SaaS business, having functional and visually pleasing
            software is key to winning and keeping customers. This is an area
            that requires special attention from a team of software development
            professionals. We Want SaaS is available to serve you with the best
            SaaSy software team acquisition solutions.
            <br />
            From simple website development to complex app creation tasks, your
            acquired SaaS software development team will work together with your
            in-house team to take your SaaS brand to the top of its market.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/SaaS-Software-Development-Overview.svg"
            alt="SaaS Software Development Overview"
            className="max-w-full"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
