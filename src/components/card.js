import React, { useEffect, useRef } from "react";
import "./css/card.css";
import { placeholder } from "@cloudinary/react";
import { NavLink } from "react-router-dom";

const Card = ({
  title,
  description,
  buttonLabel,
  headSpecific,
  headTitle,
  src,
  alt,
  to,
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
          <img
            src={src}
            alt={{ alt }}
            style={{
              width: 350,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              height: 300,
              objectFit: "cover",
            }}
          />
        </div>
        <div className="bg-dark rounded-lg text-light drop-shadow-xl shadow-inner p-8 w-96 h-72 hover:drop-shadow-2xl flex flex-col z-10">
          <div className="top"></div>
          <div className="bottom"></div>
          <h1 className="text-2xl mb-4 font-ubuntu">{title}</h1>
          <p className="flex-grow">{description}</p>
          <NavLink
            to={to}
            className="border-2 border-light text-light text-lg py-2 px-6 rounded-full relative hover:drop-shadow-xl hover:bg-light hover:cursor-pointer hover:text-dark 
      hover:text-transform transition duration-300 font-ubuntu ease-in-out before:"
          >
            <p>{buttonLabel}</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
