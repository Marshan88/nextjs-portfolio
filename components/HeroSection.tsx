"use client";
import React from "react";
import Typed from "typed.js";
import { skills } from "../data";

export default function HeroSection() {
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
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="align-items-center">
          <span
            className="mb-4 font-bold tracking-wider text-4xl inline-block from-black to-gray-700 border px-4 py-2 border-pink-500"
            style={{ userSelect: "none" }}
          >
            Welcome to my Portfolio
          </span>
          <h2 className="text-5xl">Designing websites / apps for companies</h2>
          <h2 className="py-4 text-4xl">
            <span className="text-yellow-500 inline-block" ref={el} />
          </h2>
          <br></br>
          <p className="text-3xl">
            My name is Marius,<br></br>IT-Developer based in Norway. <br></br>
            Looking for work/internship.
          </p>
          <div className="py-6 text-center md:text-center px-12"></div>
          <div className="flex flex-wrap justify-right z-10 md:justify-start py-2 md:w-1/2">
            {skills.map((item, index) => {
              return (
                <p
                  key={index}
                  className="bg-gray-800 px-4 py-2 mr-2 mt-2 text-green-300 rounded font-bold"
                  style={{ userSelect: "none" }}
                >
                  {item.skill}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
