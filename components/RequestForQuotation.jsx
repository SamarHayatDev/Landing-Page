import React from "react";

const RequestForQuotation = () => {
  return (
    <section className="container mx-auto px-4  py-8 md:py-16">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Request For <span className="text-blue-500">Quotation</span>
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          <div className="flex items-center shadow justify-center">
            <form className="max-w-lg bg-white bg-opacity-75 p-6 rounded-lg w-full">
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900">
                Let's get started with your Query
              </h3>
              <input
                type="text"
                className="bg-gray-200 mb-2 py-2 px-4 rounded w-full"
                placeholder="Name"
              />
              <input
                type="email"
                className="bg-gray-200 mb-2 py-2 px-4 rounded w-full"
                placeholder="Email"
              />
              <input
                type="tel"
                className="bg-gray-200 mb-2 py-2 px-4 rounded w-full"
                placeholder="Phone"
              />
              <input
                type="text"
                className="bg-gray-200 mb-2 py-2 px-4 rounded w-full"
                placeholder="Title"
              />
              <input
                type="text"
                className="bg-gray-200 mb-2 py-2 px-4 rounded w-full"
                placeholder="Company Name"
              />
              <input
                type="text"
                className="bg-gray-200 mb-2 py-2 px-4 rounded w-full"
                placeholder="Type of Service You Want"
              />
              <textarea
                className="bg-gray-200 mb-2 py-2 px-4 rounded w-full h-24 resize-none"
                placeholder="Provider Details"
              ></textarea>
              <p className="text-gray-800 text-center mb-4">
                We will call you ASAP or you can schedule a{" "}
                <span className="text-blue-500 font-semibold cursor-pointer">
                  call
                </span>
                .
              </p>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
              >
                Post Query
              </button>
            </form>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-blue-500 text-white p-6 rounded-lg ">
              <h4 className="text-xl font-bold mb-4">Quotation Summary</h4>
              <p className="mb-4">
                Here is the short summary of your quotation.
              </p>
              <hr className="border-t border-white mb-4" />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h6 className="font-semibold">Service Name</h6>
                  <p>-</p>
                </div>
                <hr className="border-t border-white" />
                <div className="flex items-center justify-between">
                  <h6 className="font-semibold">Service Name</h6>
                  <p>-</p>
                </div>
                <hr className="border-t border-white" />
                <div className="flex items-center justify-between">
                  <h6 className="font-semibold">Service Name</h6>
                  <p>-</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestForQuotation;
