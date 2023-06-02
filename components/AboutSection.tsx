"use client";
import React from "react";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Tailwind CSS" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "GitHub" },
  { skill: ".NET framework" },
  { skill: "SQL" },
];

const AboutSection = () => {
  return (
    <section id="about" className="h-screen">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1
          className="text-center font-bold text-5xl"
          style={{ userSelect: "none" }}
        >
          About Me
        </h1>
        <hr className="w-6 h-1 mx-auto my-4 bg-pink-500 border-0 rounded"></hr>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row">
          <div>
            <p className="text-3xl">
              IT-Developer based in Vestfold, Norway. <br></br>I like
              programming, tech and online competative games.
              <br></br>
              <br></br>I learned the basics at{" "}
              <a
                className=" underline"
                href="https://www.getacademy.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET-Academy
              </a>
              .
            </p>
            <p className="text-3xl">
              {" "}
              I enjoyed creating a portfolio and decided to try Next.js and
              React.<br></br> I&#39;m currently also working on full-stack
              projects.
            </p>
          </div>
        </div>
        <div className="text-center md:text-center px-12">
          <div className="flex flex-wrap justify-center z-10 md:justify-start py-20 ">
            {skills.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="bg-gray-800 px-4 py-2 mr-2 mt-2 text-yellow-500 rounded font-bold"
                >
                  {item.skill}
                </p>
              );
            })}
          </div>
        </div>
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex flex-row text-center justify-center"
        >
          <HiArrowDown
            size={35}
            className="animate-bounce text-green-300 cursor-pointer "
          />
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
