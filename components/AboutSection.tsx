import React from "react";
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
          className="text-center font-bold text-4xl"
          style={{ userSelect: "none" }}
        >
          About Me
        </h1>
        <hr className="w-6 h-1 mx-auto my-4 bg-yellow-300 border-0 rounded"></hr>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <p className="text-xl">
              IT-Developer based in Vestfold, Norway. <br></br>I have always had
              a passion for technology and I like to create and design things.
              <br></br>
              <br></br>I learned the basics at{" "}
              <a
                className="text-green-300"
                href="https://www.getacademy.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET-Academy
              </a>
              .
            </p>
            <p className="text-xl"></p>
            <p className="text-xl">
              {" "}
              {/* Am now knees deep in the newest front-end frameworks and use
              stack-overflow as my bible. (Forget the basics!) I have, of
              course, caught the infamous imposter syndrom, and still struggle
              on centering that div, but lucky for me; Github copilot is here!{" "}
              <br></br>
              -oh, whats that? Three.js..? Cloud-based backend?<br></br> */}
              I enjoyed creating a portfolio and decided to try Next.js and
              React,<br></br> and i&#39;m currently working on some full-stack
              projects.
            </p>
          </div>
        </div>
        <div className="text-center md:text-center">
          <h1 className="text-3xl font-bold mb-4 text-pink-500">My Skills</h1>
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {skills.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="bg-gray-800 px-4 py-2 mr-2 mt-2 text-pink-500 rounded font-bold"
                >
                  {item.skill}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div> */}
    </section>
  );
};

export default AboutSection;
