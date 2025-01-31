import React from "react";
import page1 from "../assets/page1.PNG";
import page2 from "../assets/page2.PNG";
import page3 from "../assets/page3.PNG";
import page4 from "../assets/guide-Tour.PNG";
import page5 from "../assets/sit-covide-19.PNG";
import { GrGithub } from "react-icons/gr";
import { IoIosLink } from "react-icons/io";

const projects = [
  {
    id: 1,
    title: "Restaurant Aliens",
    description: "Tech stack : HTML, CSS, JavaScript, Express.js",
    image: page1,
    livePreview: "https://example.com/live1",
    viewCode: "https://github.com/Rajae-Laalalma/Portfolio-2",
  },
  {
    id: 2,
    title: "Aliens Bucks",
    description: "Tech stack : HTML,CSS , JavaScript",
    image: page2,
    livePreview: "https://example.com/live2",
    viewCode: "https://github.com/example/repo2",
  },
  {
    id: 3,
    title: "Landing Page Ark-X",
    description: "Tech stack : HTML, JavaScript, React, MongoDB",
    image: page3,
    livePreview: "https://arkx-2.netlify.app/",
    viewCode: "https://github.com/Rajae-Laalalma/arkx-2",
  },
  {
    id: 4,
    title: "Guide-Tour",
    description: "Tech stack : HTML, Tailwind CSS, JavaScript, React, MongoDB",
    image: page4,
    livePreview: "https://example.com/live3",
    viewCode: "https://github.com/ZakariaAkrabou/GuideTour-final/tree/feature/rajae",
  },

  {
    id: 5,
    title: "Covide-19",
    description: "Tech stack : HTML, CSS",
    image: page5,
    livePreview: "https://site-web-covid-19.web.app/",
    viewCode: "https://github.com/ZakariaAkrabou/GuideTour-final/tree/feature/rajae",
  },
];

const Projects = () => {
  return (
    <div id="Projects" className="w-full  py-16 flex flex-col items-center ">
      <div className="text-center mb-12">
        <h1 className="text-4xl text-blue-900 font-title font-bold">Projects</h1>
        <p className="text-xl text-gray-500 mt-4">Things I’ve built so far</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {projects.map(({ id, title, description, image, livePreview, viewCode }) => (
          <div
            key={id}
            className="h-96 rounded-xl shadow-lg bg-white flex flex-col items-center p-4 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl text-blue-900 font-semibold">{title}</h2>
            <p className="text-gray-600 text-center text-sm mt-2">{description}</p>
            <div className="flex items-center justify-around mt-4 w-full">
              <a
                href={livePreview}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <IoIosLink size={20} />
                Live Preview
              </a>
              <a
                href={viewCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:underline"
              >
                <GrGithub size={20} />
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
