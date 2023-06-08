"use client";
import React from "react";
import Image from "next/image";
import Typed from "typed.js";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { Container, Row, Col } from "react-bootstrap";

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
    <section id="home" className="h-screen">
      <div className="flex flex-col text-center items-center justify-center py-16 sm:py-32 sm:my-10 md:py-40 md:flex-row md:space-x-4 md:text-left">
        <Container>
          <Row className="align-items-center">
            <Col>
              <span
                className="mb-4 font-bold tracking-wider text-2xl inline-block from-black to-gray-700 border px-4 py-2 border-pink-500"
                style={{ userSelect: "none" }}
              >
                Welcome to my Portfolio
              </span>
              <h2 className="text-5xl">
                Designing websites / apps for companies
              </h2>
              <h2 className="py-4 text-4xl">
                <span className="text-yellow-500 inline-block" ref={el} />
              </h2>
              <br></br>
              <p className="text-3xl">
                My name is Marius,<br></br>IT-Developer based in Norway.{" "}
                <br></br>
                Currently looking for work/internship.
              </p>
            </Col>
          </Row>
        </Container>
        <Col>
          <Image
            className="object-contain hidden md:block"
            src="/logo.png"
            alt=""
            width={600}
            height={600}
            style={{ userSelect: "none" }}
          />
        </Col>
      </div>
      <div className="justify-center flex object-contain ">
        <a href="mailto:mariush@getacademy.no">
          <Image
            src={"email2.svg"}
            width={100}
            height={100}
            className=""
            alt="email"
            style={{ userSelect: "none" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/marius-henriksen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"linkedin.svg"}
            width={100}
            height={100}
            className=""
            alt="linkedin"
            style={{ userSelect: "none" }}
          />
        </a>
        <a
          href="https://github.com/Marshan88"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"githubIcon.svg"}
            width={100}
            height={100}
            className=""
            alt="github"
            style={{ userSelect: "none" }}
          />
        </a>
        <a
          href="https://www.buymeacoffee.com/mariushenrix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"coffee.svg"}
            width={100}
            height={100}
            className="revert-img-color"
            alt="buymeacoffe"
            style={{ userSelect: "none" }}
          />
        </a>
      </div>
      <Link
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="flex flex-row items-center text-center justify-center"
      >
        <HiArrowDown
          size={35}
          className="animate-bounce cursor-pointer text-green-300"
        />
      </Link>
    </section>
  );
};

export default HeroSection;
