import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            href="mailto:mariush@getacademy.no"
            rel="noreferrer"
            title="Send me an email"
            target="_blank"
          >
            <AiOutlineMail
              className="hover:-translate-y-1 transition-transform cursor-pointer  text-customcyan"
              size={30}
            />
          </a>
          <a
            href="https://github.com/Marshan88"
            rel="noreferrer noopener"
            title="Link to my GitHub"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-customcyan"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/marius-valkeinen/"
            rel="noreferrer noopener"
            title="Link to my LinkedIn"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-customcyan"
              size={30}
            />
          </a>
        </div>
        <h1
          className="text-center font-bold text-5xl"
          style={{ userSelect: 'none' }}
        >
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-customcyan border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row">
          <div className="text-left">
            <p className="text-4xl">
              A dedicated technology enthusiast with strong interests in drones,
              programming, automation, and AI. <br></br>
              With a strong focus on learning and adaptability, I explore how
              emerging technologies can add value across professional
              environments and shape the future of work.
              <br></br>
              <br></br>Currently pursuing a pioneering degree in Drone
              Operations with a specialization in Specific Operations Risk
              Assessment (SORA).<br></br>
              <br></br> In addition, I have experience as a full‑stack developer
              and am seeking opportunities to further develop my skills and
              contribute to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
