import React from "react";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1
          className="text-center font-bold text-5xl"
          style={{ userSelect: "none" }}
        >
          About Me{" "}
          <hr className="w-6 h-1 mx-auto my-4 bg-pink-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row">
          <div className="text-left">
            <p className="text-3xl">
              <br></br>I have a passion for programming, competative online
              games,
              <br></br>and constantly seeking opportunities to expand my
              knowledge.<br></br>
              <br></br>
            </p>
            <p className="text-3xl">
              I gained valuable experience working on projects with diverse
              teams, <br></br>
              where I had the opportunity to learn the essentials of being a
              full-stack developer at{" "}
              <a
                className=" underline"
                href="https://www.getacademy.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET-Academy
              </a>
              .<br></br>
              <br></br> We embraced the agile methodology and scrum practices,
              <br></br>
              equipping me with a solid foundation for my professional growth.{" "}
              <br></br>
              <br></br>I am currently engaged in full-stack projects while
              exploring the realm of cloud computing and devops tools, such as
              Docker, AWS, and Azure.
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
