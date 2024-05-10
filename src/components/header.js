import React, { useState, useEffect } from 'react';
import logo from '../img/logo_aflang.png';
import { forwardRef } from 'react';
import logo150x150 from '../img/logo150x150.png';
import './css/header.css';
import logo900x150 from '../img/logo900x150.png';
import { Squash as Hamburger } from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  NavLink,
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

const Header = forwardRef((props, ref) => {
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [picturesDropdownOpen, setPicturesDropdownOpen] = useState(false);
  const [showCross, setShowCross] = useState(false);
  const [wrapperOpen, setWrapperOpen] = useState(window.innerWidth <= 768);

  const ulVariants = {
    open: { opacity: 1, x: 0, transition: { staggerChildren: 0.1 } },
    closed: { opacity: 0, x: 0 },
  };

  const liVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -10 },
  };

  const dropdownVariants = {
    open: { height: 'auto', opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

  useEffect(() => {
    if (servicesDropdownOpen) {
      setWrapperOpen(true);
    } else {
      setTimeout(() => setWrapperOpen(false), 300);
    }
  }, [servicesDropdownOpen]);

  useEffect(() => {
    if (picturesDropdownOpen) {
      setWrapperOpen(true);
    } else {
      setTimeout(() => setWrapperOpen(false), 300);
    }
  }, [picturesDropdownOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (navOpen) {
      setTimeout(() => {
        setShowCross(true);
      }, 300);
    } else {
      setShowCross(false);
    }
  }, [navOpen]);

  return (
    <div className="bg-darker" ref={ref}>
      <style>
        {`
          @media only screen and (min-width: 768px){
            .parent:hover .child {
              opacity:1;
              height:auto;
              overflow:none;
              transform: translateY(0);
            }
            .child {
              opacity:0;
              height:0;
              overflow:hidden;
              transform: translateY(-10%);
            }
          }
        `}
      </style>

      <nav className="relative md:shadow-lg items-center flex py-3 xl:px-24 lg:px-16 px-4 text-lg w-full justify-center">
        <div className="flex items-center sm:items-start md:items-start mr-auto xl:w-1/4">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="sm:h-auto md:h-auto hide-on-small show-on-large"
            />
          </a>
          <a href="/">
            <img
              src={logo900x150}
              alt="logo"
              className="h-10 sm:h-auto md:h-auto show-on-small hide-on-large mr-auto"
            />
          </a>
        </div>
        <AnimatePresence>
          {(navOpen || !isMobile) && (
            <motion.ul
              className={`md:px-2 z-10 md:flex md:space-x-2 absolute md:relative top-full navShowing justify-center md:justify-end xl:justify-center grow xl:w-2/4 w-full`}
              initial="closed"
              animate="open"
              exit="closed"
              variants={ulVariants}
            >
              <NavLink
                to="/"
                activeClassName="is-active"
                className="flex text-lg justify-between md:inline-flex p-4 xl:mx-2 items-center hover:text-primary space-x-2 text-light hover:cursor-pointer bg-darker"
              >
                Hjem
              </NavLink>

              <li className="relative parent">
                <NavLink
                  className="text-lg justify-between md:inline-flex p-4 xl:mx-2 items-center hover:text-primary space-x-2 text-light hover:cursor-pointer bg-darker hidden"
                  to="/services"
                  activeClassName="is-active"
                >
                  Services
                </NavLink>
              </li>

              <li className="relative parent">
                <NavLink
                  className="flex text-lg justify-between p-4 xl:mx-2 items-center hover:text-primary space-x-2 text-light hover:cursor-pointer bg-darker md:hidden"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  activeClassName="is-active"
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 fill-current pt-1 ml-1 transition duration-200 ease-in-out ${
                      servicesDropdownOpen ? 'rotate change-color' : ''
                    } md:hidden xl:hidden`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                  </svg>
                </NavLink>
                <AnimatePresence mode="wait">
                  {wrapperOpen && (
                    <div className="md:absolute top-full right-0 md:w-48 bg-darker md:shadow-lg md:rounded-b xl:hidden md:hidden">
                      <motion.ul
                        className={`child font-ubuntu flex flex-col ${
                          servicesDropdownOpen ? '' : 'hidden md:block'
                        }`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        key="someUniqueKey"
                      >
                        <li className="w-full border-b border-gray-400 text-end">
                          <div className="flex justify-end px-4 py-3 hover:text-primary hover:bg-dark text-light transform transition duration-200 ease-in-out cursor-pointer">
                            <NavLink
                              to="/interiorarbejde"
                              activeClassName="is-active"
                            >
                              Interiørarbejde
                            </NavLink>
                          </div>
                        </li>
                        <li className="w-full border-b border-gray-400 text-end">
                          <div className="flex justify-end px-4 py-3 hover:text-primary hover:bg-dark text-light transform transition duration-200 ease-in-out cursor-pointer">
                            <NavLink
                              to="/metal-og-rustfrit"
                              activeClassName="is-active"
                            >
                              Metal og rustfrit
                            </NavLink>
                          </div>
                        </li>
                        <li className="w-full border-b border-gray-400 text-end">
                          <div className="flex justify-end px-4 py-3 hover:text-primary hover:bg-dark text-light transform transition duration-200 ease-in-out cursor-pointer">
                            <NavLink
                              to="/gelaendere-og-altaner"
                              activeClassName="is-active"
                            >
                              Gelændere og altaner
                            </NavLink>
                          </div>
                        </li>
                        <li className="w-full border-b border-gray-400 text-end">
                          <div className="flex justify-end px-4 py-3 hover:text-primary hover:bg-dark text-light transform transition duration-200 ease-in-out cursor-pointer">
                            <NavLink
                              to="/montering-af-staalkonstruktioner"
                              activeClassName="is-active"
                            >
                              Montering af stålkonstruktioner
                            </NavLink>
                          </div>
                        </li>
                      </motion.ul>
                    </div>
                  )}
                </AnimatePresence>
              </li>

              <li className="relative parent">
                <a
                  className="flex text-lg  justify-between md:inline-flex p-4 xl:mx-2 items-center hover:text-primary space-x-2 text-light hover:cursor-pointer bg-darker"
                  onClick={() => setPicturesDropdownOpen(!picturesDropdownOpen)}
                >
                  <NavLink to="/om-os" activeClassName="is-active">
                    Om os
                  </NavLink>
                </a>
              </li>

              <li>
                <a className="flex text-lg  justify-between md:inline-flex p-4 xl:mx-2 items-center hover:text-primary space-x-2 text-light hover:cursor-pointer bg-darker">
                  <NavLink to="/galleri" activeClassName="is-active">
                    Billeder
                  </NavLink>
                </a>
              </li>

              <NavLink
                to="/kontakt"
                activeClassName="is-active"
                className="flex text-lg justify-between md:inline-flex p-4 xl:mx-2 items-center hover:text-primary space-x-2 text-light hover:cursor-pointer bg-darker xl:hidden"
              >
                Kontakt
              </NavLink>
            </motion.ul>
          )}
        </AnimatePresence>
        <div className="hidden xl:flex w-1/4 justify-end items-center">
          <NavLink
            to="/kontakt"
            activeClassName="is-active"
            className="border-2 border-primary text-light text-lg px-12 rounded-full xl:flex hidden hover:drop-shadow-xl hover:bg-primary hover:cursor-pointer hover:text-light 
              hover:text-transform transition duration-300 font-ubuntu ease-in-out items-center justify-center py-2 basis-36 grow-0 shrink-0 ml-auto"
          >
            Kontakt
          </NavLink>
        </div>
        <div
          className={`ml-auto md:hidden text-gray-500 cursor-pointer ${
            isMobile ? '' : 'hidden'
          }`}
          onClick={() => setNavOpen(!navOpen)}
        >
          <Hamburger
            toggled={navOpen}
            toggle={setNavOpen}
            color="#ffffff"
            easing="ease-in-out"
            rounded
          />
        </div>
      </nav>
    </div>
  );
});

export default Header;
