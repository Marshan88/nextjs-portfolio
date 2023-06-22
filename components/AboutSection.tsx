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
              <br></br>I like programming, competative online games,
              <br></br>and to learn new things.<br></br>
              <br></br>
            </p>
            <p className="text-3xl">
              Got some experience working on projects with different teams,{" "}
              <br></br>
              and learned the basics of a full-stack developer at{" "}
              <a
                className=" underline"
                href="https://www.getacademy.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET-Academy,
              </a>{" "}
              where we used agile methodology and scrum. <br></br>
              <br></br>Currently working on full-stack projects and looking into
              cloud computing and devops tools like Docker, AWS, and Azure.
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
