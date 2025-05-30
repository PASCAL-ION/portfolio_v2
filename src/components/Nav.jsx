import React, { useState, useEffect } from "react";
import { TextCaroussel } from "./TextCaroussel";

export function Nav() {
  const projectsWordArray = ["P", "R", "O", "J", "E", "T", "S", "."];
  const contactWordArray = ["C", "O", "N", "T", "A", "C", "T", "."];

  const [projectsDirection, setProjectsDirection] = useState("right");
  const [contactDirection, setContactDirection] = useState("left");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setProjectsDirection("up");
        setContactDirection("down");
      } else {
        setProjectsDirection("right");
        setContactDirection("left");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex flex-col md:flex-row h-30vh w-full md:w-[25%] md:h-screen md:sticky md:top-0">
        <TextCaroussel wordArray={projectsWordArray} direction={projectsDirection} linkTo="projects"/>
        <TextCaroussel wordArray={contactWordArray} direction={contactDirection} linkTo="contact"/>
    </nav>
  );
}