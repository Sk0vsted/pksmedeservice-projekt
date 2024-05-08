import React, { useEffect, useRef } from "react";
import Button from "./button.js";
import "./css/card.css";
import { placeholder } from "@cloudinary/react";

const Card = ({
  title,
  description,
  buttonLabel,
  headSpecific,
  headTitle,
  src,
  alt,
}) => {
  const cardRef = useRef();

  const checkScroll = () => {
    const rect = cardRef.current.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
      cardRef.current.classList.add("show");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div ref={cardRef} className="fade-in-up">
      <div className="flex justify-center items-center py-8 flex-col transform transition duration-300 ease-in-out shadowHover scaleCards">
        <div className="image-container">
          <img src={src} alt={{ placeholder }} style={{ width: 350 }} />
        </div>
        <div className="bg-dark rounded-lg text-light drop-shadow-xl shadow-inner p-8 w-96 h-72 hover:drop-shadow-2xl flex flex-col z-10">
          <div className="top"></div>
          <div className="bottom"></div>
          <h1 className="text-2xl mb-4 font-ubuntu">{title}</h1>
          <p className="flex-grow">{description}</p>
          <Button label={buttonLabel} />
        </div>
      </div>
    </div>
  );
};

export default Card;
