import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";

const PopularProducts = () => {
  const techStacks = [
    {
      title: "NodeJs",
      url: "https://wewantsaas.com/storage/181/Ip1oiB0RaMd6sNlI6ws3CaHANwz9ad-metacHJvdG9ubWFpbF8xMDY4Nl9sb2dvXzE2NDkxNjAyNTRfc2JtbnEud2VicA==-.webp",
      description:
        "An open-source JavaScript runtime environment that enables front-end as well as back-end development.",
      tabs: ["FEATURED", "Email"],
    },
    {
      title: "NodeJs",
      url: "https://wewantsaas.com/storage/181/Ip1oiB0RaMd6sNlI6ws3CaHANwz9ad-metacHJvdG9ubWFpbF8xMDY4Nl9sb2dvXzE2NDkxNjAyNTRfc2JtbnEud2VicA==-.webp",
      description:
        "An open-source JavaScript runtime environment that enables front-end as well as back-end development.",
      tabs: ["FEATURED", "Email"],
    },
  ];

  return (
    <section className="bg-white text-gray-900 px-4 py-8 md:py-16">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular <span className="text-blue-500">Products</span>
        </h2>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          {techStacks.map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden gap-4 bg-white bg-opacity-75 rounded-lg  shadow-md hover:translate-y-[-5px] transition-transform duration-300 max-w-[300px]"
            >
              <div className="w-full overflow-hidden h-40 flex items-center justify-center">
                <Image
                  src={tech.url}
                  alt="NodeJs logo"
                  className="w-full h-full object-cover"
                  height={100}
                  width={300}
                />
              </div>
              <div className="p-6">
                <div>
                  <div className="flex gap-2 mb-2">
                    {tech.tabs.map((tab, index) => (
                      <button
                        className="text-blue-500 font-semibold px-4 py-[2px] text-sm bg-blue-200 rounded-full"
                        key={index}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-bold">{tech.title}</h4>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-blue-500" />5
                    </div>
                  </div>
                </div>
                <p>{tech.description}</p>
                <hr className="w-full mt-5 bg-blue-500 h-1 mb-2" />
                <Link
                  href="#"
                  className="underline text-blue-500  font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
