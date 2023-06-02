// "use client";
// import { Tilt } from "react-tilt";
// import React from "react";
// import { Col } from "react-bootstrap";
// // import { Tilt } from "react-tilt";
// import Image from "next/image";

// const handleClick = (url) => () => {
//   var a = document.createElement("a");
//   a.target = "_blank";
//   a.rel = "noopener noreferrer";
//   a.href = url;
//   a.click();
//   // onauxclick = (event) => { MouseEvent.buttons };
// };

// const defaultOptions = {
//   reverse: true, // reverse the tilt direction
//   max: 14, // max tilt rotation (degrees)
//   perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
//   scale: 1, // 2 = 200%, 1.5 = 150%, etc..
//   speed: 450, // Speed of the enter/exit transition
//   transition: true, // Set a transition on enter/exit.
//   axis: null, // What axis should be disabled. Can be X or Y.
//   reset: true, // If the tilt effect has to be reset on exit.
//   easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
// };

// export const ProjectCard = ({ title, description, img, url }) => {
//   return (
//     <Col onClick={handleClick(url)}>
//       {/* <Tilt options={defaultOptions} className="proj-imgbx"> */}
//       <Image alt="Projectimage">{img}</Image>
//       <div className="proj-txtx">
//         <h4>{title}</h4>
//         <span>{description}</span>
//       </div>
//       {/* </Tilt> */}
//     </Col>
//   );
// };

// const defaultOptions = {
//   reverse: true, // reverse the tilt direction
//   max: 14, // max tilt rotation (degrees)
//   perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
//   scale: 1, // 2 = 200%, 1.5 = 150%, etc..
//   speed: 450, // Speed of the enter/exit transition
//   transition: true, // Set a transition on enter/exit.
//   axis: null, // What axis should be disabled. Can be X or Y.
//   reset: true, // If the tilt effect has to be reset on exit.
//   easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
// };
