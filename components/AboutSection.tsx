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
            rel="noreferrer noopener"
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
            I’m interested in practical technology, especially where software, automation, and AI can support better ways of working.<br></br>
            <br></br>I am studying Drone Operations, focusing on regulatory requirements, operational planning, risk assessment—including Specific Operations Risk Assessment (SORA)—and compliant UAS operations.<br></br>
<br></br>I also have a foundation in full-stack development and continue developing through hands-on projects. I am interested in opportunities that connect technology, operations, and responsible innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
