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
            target="_blank"
          >
            <AiOutlineMail
              className="hover:-translate-y-1 transition-transform cursor-pointer  text-customcyan"
              size={30}
            />
          </a>
          <a
            href="https://github.com/Marshan88"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-customcyan"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/marius-henriksen/"
            rel="noreferrer"
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
          About Me{' '}
          <hr className="w-6 h-1 mx-auto my-4 bg-customcyan border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row">
          <div className="text-left">
            <p className="text-3xl">
              <br></br>I have a passion for programming and problem-solving,{' '}
              <br></br>constantly seeking opportunities to expand my knowledge.
              <br></br>
              <br></br>
            </p>
            <p className="text-3xl">
              Gained valuable experience working on projects with diverse teams,{' '}
              <br></br>
              and had the opportunity to learn the essentials of being a
              fullstack developer at{' '}
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
              equipping me with a solid foundation for my professional growth.{' '}
              <br></br>
              <br></br>Currently engaged in fullstack projects while exploring
              the realm of cloud computing and devops tools.
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
