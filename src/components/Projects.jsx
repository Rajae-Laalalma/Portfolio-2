import React from "react";
import page1 from "../assets/page1.PNG";
import page2 from "../assets/page2.PNG";
import page3 from "../assets/page3.PNG";
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
    title: "landing page ark-x",
    description: "Tech stack : HTML , JavaScript, React,Mongo DB",
    image:page3,
    livePreview: "https://example.com/live3",
    viewCode: "https://github.com/example/repo3",
  },
];

const Projects = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div>
        <h1 className="pt-20 text-4xl text-blue-900 font-title font-bold flex justify-center">
          Projects
        </h1>
        <p className="flex justify-center text-3xl text-gray-500 py-6">
          Things I’ve built so far
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 px-4 hover:">
        {projects.map(({ id, title, description, image, livePreview, viewCode }) => (
          <div
            key={id}
            className="h-80 w-72 rounded-2xl shadow-2xl flex flex-col items-center p-4 transform transition-transform duration-300 hover:scale-125"
          >
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
            <h1 className="text-blue-900 font-title font-bold mt-4">{title}</h1>
            <p className="text-gray-500 text-center mt-2">{description}</p>
            <div className="flex justify-between gap-4 mt-4">
              <div className="flex justify-center gap-1">
                 <IoIosLink size={25} className="text-black" />
              </div>
              <a
                href={livePreview}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline font-medium"
              >
                Live Preview
              </a>
              <div className="flex justify-center gap-1 ">
                <GrGithub size={25} className="text-black"/>
              <a
                href={viewCode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline font-medium "
              >
                View Code
              </a>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

