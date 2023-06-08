"use client";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { skills } from "../data";

const AboutSection = () => {
  return (
    <section id="about" className="h-screen">
      <div className="pb-12 md:pt-16 md:pb-48 my-auto">
        <div className="">
          <h1
            className="text-center font-bold text-5xl"
            style={{ userSelect: "none" }}
          >
            About Me
          </h1>
        </div>
        <hr className="w-6 h-1 mx-auto my-4 bg-pink-500 border-0 rounded"></hr>
        <div className="space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-10 md:p-4 md:flex-row">
          <div>
            <p className="text-3xl">
              <br></br>I like programming, and to learn new things.
              <br></br> I also play competative online games.<br></br>
              <br></br>
            </p>
            <p className="text-3xl">
              I experienced working on projects with different teams, <br></br>
              and learned the basics of a full-stack developer at{" "}
              <a
                className=" underline"
                href="https://www.getacademy.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET-Academy.
              </a>{" "}
              where we used agile methodology and scrum. <br></br>
              <br></br> I&#39;m currently working on full-stack projects,
              <br></br> and want to get more experience from working in a
              company.
            </p>
          </div>
        </div>
        <div className="text-center md:text-center px-12">
          <div className="flex flex-wrap justify-center z-10 md:justify-start py-20 ">
            {skills.map((item, index) => {
              return (
                <p
                  key={index}
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
