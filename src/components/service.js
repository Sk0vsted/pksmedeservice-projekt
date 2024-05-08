import React from "react";
import { NavLink } from "react-router-dom";

export default function Service({
  title,
  description,
  backgroundStyle,
  buttonLabel,
  NavLinkLocation,
}) {
  return (
    <div className="flex flex-col items-center pb-10">
      <div
        className="w-full h-80 flex justify-center items-center"
        style={{ ...backgroundStyle }}
      >
        <div className="flex flex-col mx-8 md:mx-64 w-full items-center text-light">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            {title}
          </h1>
          <p className="text-base md:text-lg text-center pt-2 pb-4">
            {description}
          </p>
          <NavLink
            to={NavLinkLocation}
            className="border-2 border-primary text-light md:text-lg py-2 md:px-12 px-6 rounded-full hover:drop-shadow-xl hover:bg-primary hover:cursor-pointer transition duration-300 ease-in-out"
          >
            {buttonLabel}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
