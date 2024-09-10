import React, { useState } from "react";
import "./css/footer.css";
import {
  NavLink,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

const MyFooter = () => {
  const [isKontaktOpen, setIsKontaktOpen] = useState(false);
  const [isOverblikOpen, setIsOverblikOpen] = useState(false);
  const [isBetingelserOpen, setIsBetingelserOpen] = useState(false);
  const [isFolgOsOpen, setIsFolgOsOpen] = useState(false);

  return (
    <footer className="bg-darker text-light px-4 lg:px-64 py-16 flex flex-col lg:flex-row w-full bottom-0 left-0 z-50 animate-fadeIn">
      <div className="container mx-auto flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="flex justify-between items-start lg:w-full flex-col lg:flex-row">
          <div
            className={`flex flex-col space-y-1 mt-4 lg:space-y-0 text-start mb-4 lg:mb-0 lg:w-auto w-full px-5 lg:px-0 border-b border-gray-400 lg:border-0 ${
              isKontaktOpen ? "border-primary" : ""
            }`}
            onClick={() => setIsKontaktOpen(!isKontaktOpen)}
          >
            <h3
              className={`text-xl font-regular mb-5 expandable transition-all duration-300 ease-in-out ${
                isKontaktOpen ? "change-color md:text-light" : ""
              }`}
            >
              Kontakt{" "}
              <span
                className={`arrow ${
                  isKontaktOpen ? "rotate change-color" : ""
                }`}
              >
                ▼
              </span>
            </h3>
            <div
              className={`content ${
                isKontaktOpen ? "show" : "hide"
              } lg:show flex lg:flex flex-col`}
            >
              <p className="text-lg lg:text-sm font-ubuntu mb-3 font-thin py-1 lg:py-0">
                PK Smedeservice ApS
              </p>
              <p className="text-lg lg:text-sm font-ubuntu mb-3 font-thin py-1 lg:py-0">
                CVR: 34617287
              </p>
              <a
                href="tel:+4520125223 "
                className="text-lg lg:text-sm font-ubuntu font-thin hover:text-primary pt-1 pb-3 lg:pt-0 lg:pb-0"
              >
                +45 20 12 52 23
              </a>
            </div>
          </div>

          <div
            className={`flex flex-col space-y-1 mt-4 lg:space-y-0 text-start mb-4 lg:mb-0 lg:w-auto w-full px-5 lg:px-0 border-b border-gray-400 lg:border-0 ${
              isOverblikOpen ? "border-primary" : ""
            }`}
            onClick={() => setIsOverblikOpen(!isOverblikOpen)}
          >
            <h3
              className={`text-xl font-regular mb-5 expandable transition-all duration-300 ease-in-out ${
                isOverblikOpen ? "change-color md:text-light" : ""
              }`}
            >
              Overblik{" "}
              <span className={`arrow ${isOverblikOpen ? "rotate" : ""}`}>
                ▼
              </span>
            </h3>
            <div
              className={`content ${
                isOverblikOpen ? "show" : "hide"
              } lg:show flex lg:flex flex-col`}
            >
              <NavLink
                to="/"
                className="text-lg lg:text-sm hover:cursor-pointer font-ubuntu mb-3 font-thin py-1 lg:py-0 hover:text-primary"
              >
                Forside
              </NavLink>
              <NavLink
                to="/services"
                className="text-lg lg:text-sm hover:cursor-pointer font-ubuntu mb-3 font-thin py-1 lg:py-0 hover:text-primary"
              >
                Services
              </NavLink>
              <NavLink
                to="/om-os"
                className="text-lg lg:text-sm hover:cursor-pointer font-ubuntu mb-3 font-thin py-1 lg:py-0 hover:text-primary"
              >
                Om os
              </NavLink>
              <NavLink
                to="/kontakt"
                className="text-lg lg:text-sm hover:cursor-pointer font-ubuntu mb-3 font-thin py-1 lg:py-0 hover:text-primary"
              >
                Kontakt
              </NavLink>
            </div>
          </div>

          <div
            className={`flex flex-col space-y-1 mt-4 lg:space-y-0 text-start mb-4 lg:mb-0 lg:w-auto w-full px-5 lg:px-0 border-b border-gray-400 lg:border-0 ${
              isBetingelserOpen ? "border-primary" : ""
            }`}
            onClick={() => setIsBetingelserOpen(!isBetingelserOpen)}
          >
            <h3
              className={`text-xl font-regular mb-5 expandable transition-all duration-300 ease-in-out ${
                isBetingelserOpen ? "change-color md:text-light" : ""
              }`}
            >
              Betingelser{" "}
              <span className={`arrow ${isBetingelserOpen ? "rotate" : ""}`}>
                ▼
              </span>
            </h3>
            <div
              className={`content ${
                isBetingelserOpen ? "show" : "hide"
              } lg:show flex lg:flex flex-col`}
            >
              <NavLink
                to="/privatlivspolitik"
                className="text-lg lg:text-sm hover:cursor-pointer font-ubuntu mb-3 font-thin py-1 lg:py-0 hover:text-primary"
              >
                Privatlivspolitk
              </NavLink>
            </div>
          </div>

          <div
            className={`flex flex-col space-y-1 mt-4 lg:space-y-0 text-start mb-4 lg:mb-0 lg:w-auto w-full px-5 lg:px-0 border-b border-gray-400 lg:border-0 ${
              isFolgOsOpen ? "border-primary" : ""
            }`}
            onClick={() => setIsFolgOsOpen(!isFolgOsOpen)}
          >
            <h3
              className={`text-xl font-regular mb-5 expandable transition-all duration-300 ease-in-out ${
                isFolgOsOpen ? "change-color md:text-light" : ""
              }`}
            >
              Følg Os{" "}
              <span className={`arrow ${isFolgOsOpen ? "rotate" : ""}`}>▼</span>
            </h3>
            <div
              className={`content ${
                isFolgOsOpen ? "show" : "hide"
              } lg:show flex lg:flex flex-col`}
            >
              <a
                href="https://www.facebook.com/pksmedeservice/"
                target="_blank"
                className="text-lg lg:text-sm hover:cursor-pointer font-ubuntu mb-3 font-thin py-1 lg:py-0 hover:text-primary"
              >
                <i className="fab fa-facebook fa-lg mr-2"></i>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/paukristiansen/"
                target="_blank"
                className="text-lg lg:text-sm hover:cursor-pointer font-ubuntu mb-3 font-thin py-1 lg:py-0 hover:text-primary"
              >
                <i className="fab fa-instagram fa-lg mr-2"></i>
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/pk-smedeservice-aps-94a599b0"
                target="_blank"
                className="text-lg lg:text-sm hover:cursor-pointer font-ubuntu mb-3 font-thin py-1 lg:py-0 hover:text-primary"
              >
                <i className="fab fa-linkedin fa-lg mr-2"></i>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
