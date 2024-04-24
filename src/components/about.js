import React, { useEffect, useRef } from "react";
import background from "../img/about.jpg";
import Button from "./button";
import { NavLink } from "react-router-dom";
import "./css/about.css";

const About = () => {
  const aboutRef = useRef();

  const checkScroll = () => {
    const rect = aboutRef.current.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
      aboutRef.current.classList.add("show");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div
      className="about flex flex-col justify-center items-end px-0 lg:px-16 overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        height: "500px",
      }}
    >
      <div
        ref={aboutRef}
        className="text w-full lg:w-2/4 flex flex-col items-center lg:items-end justify-center px-12 lg:p-8 fade-in-right overflow-hidden"
      >
        <h1 className="text-5xl font-thin font-roboto text-light pb-2 overflow-hidden">
          Om os
        </h1>
        <p className="text-xl font-thin font-ubuntu text-light text-center lg:text-justify overflow-hidden">
          PK Smedeservice er en smedevirksomhed lokaliseret udenfor Kolding, som
          blev etableret i 2005. Vi har siden etableringen altid sat en dyd i at
          opfylde kundens behov. Vi er dedikerede og passionerede i vores
          arbejde, og med mere end 18 års arbejde er vi sikre på at vi kan løse
          en bred vifte af opgaver, og tilfredstille kunden.
        </p>
      </div>
      <div className="w-full pt-5 lg:pt-0 lg:w-auto lg:px-8 overflow-hidden">
        <NavLink to="/om-os">
          <Button label={"Om PK Smedeservice"} />
        </NavLink>
      </div>
    </div>
  );
};

export default About;
