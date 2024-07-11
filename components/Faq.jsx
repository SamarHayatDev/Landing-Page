"use client";
import React, { useState } from "react";

const Faq = () => {
  // Define an array of FAQ objects containing the question and answer
  const faqs = [
    {
      question:
        "How will We Want SaaS select the right developers for my project?",
      answer:
        "The We Want SaaS HR team will handpick experienced software developers from our global talent pool that match closely with the nature of your task. We will thoroughly study the job requirement form you submit to us for this.",
    },
    {
      question: "What type of development professionals can you connect me to?",
      answer:
        "We Want SaaS can connect you to diverse software development professionals, from web and app development experts to integration experts.",
    },
    {
      question:
        "Do you offer ongoing client support for software development tasks?",
      answer:
        "Yes, the We Want SaaS project managers will provide you with exceptional ongoing support to make sure everything goes smoothly.",
    },
    {
      question:
        "How can I monitor the progress of my software development project?",
      answer:
        "Your assigned project manager will keep you updated regarding your task at every stage via regular transparent progress reports.",
    },
  ];

  // State to track the currently active FAQ index
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the active FAQ index
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-4 py-8 md:py-16">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked <span className="text-blue-500">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <button
                className="w-full text-left p-4 bg-white text-black rounded-lg focus:outline-none mb-2 transition-all duration-300"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
              </button>
              {activeIndex === index && (
                <div className="bg-white text-black p-4 rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
