import React from "react";

const workingProcessData = [
  {
    title: "Submit a 5-Minute Job Form",
    description:
      "Fill out and submit a quick job requirement form and get instantly connected to one of our HR experts.",
  },
  {
    title: "Select Your Preferred Profiles",
    description:
      "Choose the profiles you want from the ones sent to you by our HR expert from our authentic database.",
  },
  {
    title: "Assigning You a Task Manager",
    description:
      "Once you have a team in place, a task manager will be assigned to manage and streamline everything.",
  },
  {
    title: "Post-Deployment Services",
    description:
      "We will conduct various tests of the finished product post-deployment to ensure its smooth market launch.",
  },
];

const WorkingProcess = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">
          The Working Process We Follow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workingProcessData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg transition-all duration-300 shadow-md flex-1 hover:border-blue-500 border-2 border-transparent "
            >
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
