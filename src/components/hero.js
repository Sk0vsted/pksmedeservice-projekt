import React from "react";
import hero from "../img/hero1.jpg";
import "./css/hero.css";
import Button from "./button.js";
import hero2 from "../img/hero2.jpg";
import heroPhone from "../img/heroPhone.jpg";
import { Link } from "react-router-dom";

export default function Hero({ title, description }) {
  const [startAnimation, setStartAnimation] = React.useState(false);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero w-full h-auto flex">
      <div
        className={`hero-slide w-full h-auto flex shadow-inner items-center justify-end sm:justify-end overflow-hidden md:justify-end ${
          startAnimation ? "slideRight" : ""
        }`}
        style={
          !startAnimation ? { opacity: 0, transform: "translateX(400px)" } : {}
        }
      >
        <div
          className="hero-text heightCorrect stropCorrect flex flex-col justify-center overflow-hidden items-center bg-primary lg:items-end text-center lg:w-3/5 h-64 lg:h-48 lg:px-12 sm:w-4/5 md:w-4/5 sm:px-0 md:px-0"
          style={{
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        >
          <h1 className="lg:text-4xl text-3xl text-light font-medium font-roboto pt-0 lg:px-12 lg:pt-0">
            {title}
          </h1>
          <p className="text-gray-100 text-lg font-ubuntu lg:px-12">
            {description}
          </p>
          <div className="button buttonCorrect lg:mt-5 md:mt-0 lg:mr-12 mt-5 relative z-1">
            <Link to="/services">
              <Button label={"Vores services"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
