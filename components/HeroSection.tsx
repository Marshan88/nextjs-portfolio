"use client";
import React from "react";
import Image from "next/image";
import Typed from "typed.js";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { Container, Row, Col } from "react-bootstrap";

/*
.banner .tagline {
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 8px 10px;
  background: linear-gradient(90.21deg, black -5.91%, #2d2d2d 111.58%);
  border: 1px solid #ffdd19;
  font-size: 20px;
  margin-bottom: 16px;
  display: inline-block;
*/
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

const HeroSection = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Front-end.</i>", "<i>Back-end.</i>", "<i>Full-stack.</i>"],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      // className="h-screen px-3.5 bg-[url('/BG.jpg')] bg-top-center bg-no-repeat bg-fixed bg-auto bg-black overflow-hidden"
    >
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span
                className="mb-4 font-bold tracking-wider text-xl inline-block from-black to-gray-700 border px-2 py-2 border-yellow-300"
                style={{ userSelect: "none" }}
              >
                Welcome to my Portfolio
              </span>
              <h2 className="text-3xl">
                Designing websites / apps for companies
              </h2>
              <h2 className="text-3xl">
                <span ref={el} />
              </h2>
              <br></br>
              <p className="text-xl">
                I&#39;m Marius, I like programming, tech and competative online
                games.
                <br></br>
                Did a course in front-end and back-end at{" "}
                <a
                  className="text-green-300"
                  href="https://www.getacademy.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GET-Academy
                </a>
                ,<br></br>
                currently looking for work/internship.<br></br>
                <br></br>
              </p>
              <div className="text-center md:w-1/2 md:text-left">
                <h1 className="text-3xl font-bold mb-4 text-pink-500">
                  My Skills
                </h1>
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
            </Col>
          </Row>
        </Container>
        <Col>
          <div className="float-right">
            <Image
              className="float-right contrast-200 brightness-200"
              src="/logo.png"
              alt=""
              width={600}
              height={600}
              style={{ userSelect: "none" }}
            />
          </div>
        </Col>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
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
      </div>
    </section>
  );
};

export default HeroSection;
