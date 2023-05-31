"use client";
import React from "react";
import Link from "next/link";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import Image from "next/image";

// import TrackVisibility from "react-on-screen";
// import "animate.css";

/*     title: "Starling",
      description: "Measure teams w/ Tuckmans theory surveys",
      imgUrl: "/starling.jpg",
      url: "https://marshan88.github.io/Starling"   */

const project = {
  firstTabProjects: [
    {
      title: "Old portfolio",
      description: "Made with HTML, CSS and JS",
      Image: "/FrontEnd.jpg",
      url: "https://marshan88.github.io/MyPortfolio/",
    },
    {
      title: "Portfolio 2.0",
      description: "Made with React",
      Image: "/reactportfolio.png",
      url: "https://github.com/Marshan88/personal-portfolio",
    },
    {
      title: "Portfolio 3.0",
      description: "Made with Next, React, Typescript and TailwindCSS",
      Image: "/reactportfolio.png",
      url: "https://marshan88.github.io/Starling",
    },
  ],
  secondTabProjects: [
    {
      title: "C# lessons",
      description: "instead of having multiple repos, I put them all in one",
      imgUrl: "/csharp.PNG",
      url: "https://github.com/Marshan88/CSharpProjects",
    },
    {
      title: "Reaching the summit",
      description: "Text-based adventure game, League of legends themed",
      Image: "/reachingTheSummit.png",
      url: "https://github.com/Marshan88/AdventureGame",
    },
    {
      title: "Tetris",
      description: "A classic game, made with C# and Windows Forms",
      Image: "/tetris.png",
      url: "https://github.com/Marshan88/TetrisGame",
    },
  ],
  thirdTabProjects: [
    {
      title: "Coming soon!",
      description: "Nextjs, Tailwindcss, and more!",
      Image: "/FrontEnd.jpg",
      link: "https://marshan.me/#projects",
    },
    {
      title: "...",
      description: "Nothing here yet",
      Image: "/FrontEnd.jpg",
      link: "https://marshan.me/#projects",
    },
    {
      title: "...",
      description: "Nothing here yet",
      Image: "/FrontEnd.jpg",
      link: "https://marshan.me/#projects",
    },
  ],
};

const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col style={{ userSelect: "none" }} className="project-col" size={12}>
            <h2>Projects</h2>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item className="hoverEffect">
                  <Nav.Link eventKey="first">Front-end</Nav.Link>
                </Nav.Item>
                <Nav.Item className="hoverEffect">
                  <Nav.Link eventKey="second">Back-end</Nav.Link>
                </Nav.Item>
                <Nav.Item className="hoverEffect">
                  <Nav.Link eventKey="third">Full-stack</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {project.firstTabProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {secondTabProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {thirdTabProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                  <br></br>
                  <br></br>
                  <p>Work in progress..</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
