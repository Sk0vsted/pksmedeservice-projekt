import React, { useEffect, useRef } from "react";
import SmartSlider from "react-smart-slider";
import "./css/gallery.css";
import gallery1 from "../img/gallery1.png";
import gallery2 from "../img/gallery2.png";
import gallery3 from "../img/gallery3.png";
import gallery4 from "../img/gallery4.png";
import gallery5 from "../img/gallery5.png";
import gallery6 from "../img/gallery6.png";
import gallery7 from "../img/gallery7.png";
import gallery8 from "../img/gallery8.png";
import Button from "./button.js";
import { NavLink } from "react-router-dom";

function SlideShow() {
  const slidesArray = [
    {
      url: gallery1,
    },
    {
      url: gallery2,
    },
    {
      url: gallery3,
    },
    {
      url: gallery4,
    },
    {
      url: gallery5,
    },
    {
      url: gallery6,
    },
    {
      url: gallery7,
    },
    {
      url: gallery8,
    },
  ];

  const slideShowRef = useRef();

  const checkScroll = () => {
    const rect = slideShowRef.current.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
      slideShowRef.current.classList.add("show");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  useEffect(() => {
    const slideContents = document.querySelectorAll(".slideContent");

    slideContents.forEach((slide) => {
      slide.style.backgroundSize = "contain";
    });
  }, []);

  return (
    <div className="flex w-full justify-between flex-col xl:px-32 lg:px-24 lg:flex-col xl:flex-row">
      <div className="text w-full xl:w-2/4 px-5 pt-8 xl:pt-0 lg:pt-8 lg:px-0 h-500px flex flex-col items-start lg:items-center xl:items-start justify-center text-start">
        <h1 className="text-4xl text-light font-roboto pb-3 xl:text-start text-center">
          Hos PK Smedeservice lytter vi altid til kunden
        </h1>
        <p className="text-gray-100 text-lg font-ubuntu pb-0 lg:pb-8">
          Vi sætter altid en dyd i at være tilfredsstillende overfor kunden,
          ligemeget hvilken type arbejdsopgave vi har at gøre med.
        </p>
        <NavLink to="/galleri">
          <div className="hideSmall showBig">
            <Button label={"Se flere billeder"} to="/galleri" />
          </div>
        </NavLink>
      </div>
      <div
        ref={slideShowRef}
        className="slideShow flex-col lg:flex-row w-full justify-end flex mt-5 lg:mt-10 py-0 lg:py-5 border-primary rounded-lg bg-darker fade-in"
      >
        <div className="sliders w-full h-500px object-contain">
          <SmartSlider
            slides={slidesArray}
            buttonShape="square"
            showIndicators={false}
          />
        </div>
        <div className="showSmall hideBig mt-5 lg:mt-0">
          <Button label={"Se flere billeder"} to="/galleri" />
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
