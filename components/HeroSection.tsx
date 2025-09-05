'use client';
import React from 'react';
import Typed from 'typed.js';
import { skills } from '../data';
// import Image from 'next/image';

export default function HeroSection() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<i>Drone Operator.</i>',
        '<i>STS Certified.</i>',
        '<i>Fullstack Developer.</i>',
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-30 md:flex-row md:space-x-4 md:text-left ">
        <div className="align-items-center">
          <span
            className="font-bold tracking-wide text-5xl inline-block from-black to-gray-700 border-2 rounded px-4 py-2 pt-4 border-customcyan"
            style={{ userSelect: 'none' }}
          >
            Welcome to my Portfolio
          </span>
          {/* <h2 className="text-4xl">Drones & Development</h2> */}
          <h2 className="py-4 text-4xl ">
            <span
              className="bg-gradient-to-r from-customcyan via-cyan-500 to-cyan-200 bg-clip-text text-transparent inline-block"
              ref={el}
            />
          </h2>
          <br></br>
          <p className="text-3xl">
            My name is Marius,<br></br>IT-Developer, Drone Pilot & Operator
            based in Norway. <br></br>
            Currently looking for work.
          </p>
          <div className="py-6 text-center md:text-center px-12"></div>
          <div className="flex flex-wrap justify-right z-10 md:justify-start py-2 md:w-1/2">
            {skills.map((item, index) => {
              return (
                <p
                  key={index}
                  className="bg-gray-900 px-4 py-2 mr-2 mt-2 text-customcyan rounded font-bold"
                  style={{ userSelect: 'none' }}
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
