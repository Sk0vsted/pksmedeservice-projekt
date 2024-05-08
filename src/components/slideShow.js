import React, { useEffect, useRef } from "react";
import SmartSlider from "react-smart-slider";
import "./css/gallery.css";
import { NavLink } from "react-router-dom";

function SlideShow({ images }) {
  const slidesArray = images;

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
    <div className="flex justify-between flex-col lg:px-32 lg:flex-row w-full lg:w-4/5">
      <div
        ref={slideShowRef}
        className="slideShow show flex-col lg:flex-row w-full justify-end flex lg:mt-10 py-0 lg:py-5 border-primary rounded-lg bg-darker fade-in"
      >
        <div className="sliders w-full h-500px object-contain">
          <SmartSlider
            slides={slidesArray}
            buttonShape="square"
            autoSlide={false}
            showIndicators={false}
          />
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
