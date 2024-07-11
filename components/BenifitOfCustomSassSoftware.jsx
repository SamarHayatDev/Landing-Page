import React from "react";
import { FaPeopleLine } from "react-icons/fa6";

const BenifitOfCustomSassSoftware = () => {
  // Define an array of objects containing the benefits data
  const benefits = [
    {
      title: "Inviting Online Presence",
      icon: <FaPeopleLine />,
      description:
        "Build an internet presence that attracts your targeted audience towards your SaaS brand.",
    },
    {
      title: "Great Customer Service",
      icon: <FaPeopleLine />,
      description:
        "Respond to queries and meet the needs of your customers on time with quality software.",
    },
    {
      title: "Carefully Personalized",
      icon: <FaPeopleLine />,
      description:
        "Get software that’s been carefully customized to your SaaS brand and its target audience.",
    },
    {
      title: "Easy to Scale & Integrate",
      icon: <FaPeopleLine />,
      description:
        "Get software that’s incredibly easy to scale with time and integrate with other solutions.",
    },
    {
      title: "Automate Mundane Tasks",
      icon: <FaPeopleLine />,
      description:
        "Well-developed software will allow your SaaS company to automate its monotonous tasks.",
    },
    {
      title: "Save Time, Labor, & Money",
      icon: <FaPeopleLine />,
      description:
        "A well-developed piece of software will save you time, labor, and money in the long run.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">
          What Are The Benefits Of{" "}
          <span className="text-blue-500">
            Custom SaaS Software Development?
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 group hover:text-white overflow-hidden relative"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full text-white text-2xl mb-4 relative z-20 group-hover:bg-white group-hover:text-blue-500">
                {benefit.icon}
              </div>
              <div className="absolute inset-0 bg-blue-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform z-10 rounded-lg"></div>
              <h4 className="text-xl font-semibold mb-2 relative z-20">
                {benefit.title}
              </h4>
              <p className="relative z-20">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenifitOfCustomSassSoftware;
