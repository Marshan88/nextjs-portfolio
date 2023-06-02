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
    <section
      id="home"
      className="h-screen"
      // className="h-screen px-3.5 bg-[url('/BG.jpg')] bg-top-center bg-no-repeat bg-fixed bg-auto bg-black overflow-hidden"
    >
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
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
                <span className="text-yellow-500" ref={el} />
              </h2>
              <br></br>
              <p className="text-3xl">
                My name is Marius, an IT-Developer based in Norway. <br></br>
                Currently looking for work/internship.
              </p>
            </Col>
          </Row>
        </Container>
        <Col>
          <div className="float-right">
            <Image
              className="contrast-200 brightness-200"
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
          <HiArrowDown
            size={35}
            className="animate-bounce cursor-pointer text-green-300"
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
