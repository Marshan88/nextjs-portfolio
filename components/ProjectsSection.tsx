'use client';
import React from 'react';
import Image from 'next/image';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import { Tilt } from 'react-tilt';
import { projects, cardTiltValues } from '../data';

export default function ProjectsSection() {
  return (
    <section id="projects">
      <h1
        className="my-10 text-center font-bold text-5xl"
        style={{ userSelect: 'none' }}
      >
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-pink-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className=" md:w-1/2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                  >
                    <Tilt options={cardTiltValues}>
                      <Image
                        src={project.image}
                        alt="project image"
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-60"
                      />
                    </Tilt>
                  </a>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6 text-yellow-500">
                    {project.name}
                  </h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={project.github}
                    >
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-green-300"
                      />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={project.link}
                    >
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-green-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
