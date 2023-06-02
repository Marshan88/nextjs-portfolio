"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 14, // max tilt rotation (degrees)
  perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 450, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const projects = [
  {
    name: "Portfolio 1.0",
    description: "Made with HTML, CSS and JS.",
    image: "/javascript.png",
    github: "https://marshan88.github.io/MyPortfolio/",
    link: "https://marshan88.github.io/MyPortfolio/",
  },
  {
    name: "Portfolio 2.0",
    description: "Made with React.",
    image: "/reactjs.jpg",
    github: "https://github.com/Marshan88/personal-portfolio",
    link: "https://marshan.me/",
  },
  {
    name: "Current portfolio",
    description: "Made with Next.js, React, Typescript and Tailwind CSS.",
    image: "/nextjs.png",
    github: "https://github.com/Marshan88/personal-portfolio",
    link: "https://github.com/Marshan88/personal-portfolio",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="h-screen">
      <h1 className="my-10 text-center font-bold text-5xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-pink-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className=" md:w-1/2">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                  >
                    <Tilt options={defaultOptions}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Tilt>
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6 text-yellow-500">
                    {project.name}
                  </h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href={project.github}
                    >
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-green-300"
                      />
                    </Link>
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href={project.link}
                    >
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-green-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
