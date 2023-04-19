import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../App.css";
import closeIcon from "../assets/icons8-close-24.png";
import menuIcon from "../assets/icons8-menu-24.png";
import aarohanLogo from "../assets/logo_aarohan.png";


const Navbar = () => {
  const [navDisplay, setNavDisplay] = useState(false);

  const DisplayNavigation = () => {
    if (navDisplay === true) {
      setNavDisplay(false);
    } else if (navDisplay === false) {
      setNavDisplay(true);
    }
  };

  return (
    <>
      {navDisplay ? (
        <>
          <nav className="md:hidden z-10 sticky top-0 bg-purple-800 text-white h-screen p-3 center-nav">
            <div className="flex justify-between center-nav ">
              <img
                className="h-5 mt-4 ml-2 bg-white hover:cursor-pointer rounded-sm"
                src={closeIcon}
                alt="closeIcon"
                onClick={DisplayNavigation}
              />
              <img
                className="w-6 mr-2"
                src={aarohanLogo}
                alt="aarohanLogo"
              />
            </div>
            <ul className="flex flex-col font-sans font-medium px-2">
              <li className="p-2 mt-9" onClick={DisplayNavigation}>
                <Link
                  className="py-4 pl-2 pr-52"
                  to="/Competitions"
                >
                  Competitions
                </Link>
              </li>
              <li className="p-2 mt-9" onClick={DisplayNavigation}>
                <Link
                  className="py-4 pl-2 pr-60"
                  to="/Sponsors"
                >
                  Sponsors
                </Link>
              </li>
              <li className="p-2 mt-9" onClick={DisplayNavigation}>
                <Link
                  className="py-4 pl-2 pr-64"
                  to="/Events"
                >
                  Events
                </Link>
              </li>
              <li className="p-2 mt-9" onClick={DisplayNavigation}>
                <Link
                  className="py-4 pl-2 pr-64"
                  to="/Photos"
                >
                  Photos
                </Link>
              </li>
              <li className="p-2 mt-9" onClick={DisplayNavigation}>
                <Link
                  className="py-4 pl-2 pr-56"
                  to="/ContactUs"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <div className="md:hidden sticky top-0 z-10 bg-purple-800 md:bg-cover flex justify-between center-nav">
          <img
            className="h-7 mt-2 ml-2 bg-white rounded-sm hover:cursor-pointer"
            src={menuIcon}
            alt="menuIcon"
            onClick={DisplayNavigation}
          />
          <h2 className="text-white font-bold mt-2 text-2xl">AAROHAN</h2>
          <a href="/">
          <img
          className="w-6 mr-2 mt-1 mb-1"
          src={aarohanLogo}
          alt="aarohanLogo"
        />
          </a>
          
        </div>
      )}

      <nav className="sticky top-0 z-10 hidden md:flex justify-center items-center text-white font-semibold p-4 backdrop-blur-lg bg-opacity-0">
        <div>
        <a href="/">
          <img className="w-6 mr-10" src={aarohanLogo} alt="aarohanLogo" />
        </a>
        </div>
        <ul className="flex justify-center items-center space-x-24">
          <li style={{marginLeft:"3rem"}} >
            <Link className="font-nav nav-hover transition bg-amber-50 py-1 px-10 text-black border-4 border-orange-custom hover: hover:border-amber-50 hover:cursor-pointer duration-700" to="/Competitions" style={{border:"none", background:"transparent"}}>Competitions</Link>
          </li>
          <li style={{marginLeft:"3rem"}} >
            <Link className="font-nav nav-hover transition bg-amber-50 py-1 px-10 text-black border-4 border-orange-custom hover: hover:border-amber-50 hover:cursor-pointer duration-700" to="/Sponsors" style={{border:"none", background:"transparent"}}>Sponsors</Link>
          </li>
          <li style={{marginLeft:"3rem"}} >
            <Link className="font-nav nav-hover transition bg-amber-50 py-1 px-10 text-black border-4 border-orange-custom hover: hover:border-amber-50 hover:cursor-pointer duration-700" to="/Events" style={{border:"none", background:"transparent"}}>Events</Link>
          </li>
          <li style={{marginLeft:"3rem"}} >
            <Link className="font-nav nav-hover transition bg-amber-50 py-1 px-10 text-black border-4 border-orange-custom hover: hover:border-amber-50 hover:cursor-pointer duration-700" to="/Photos" style={{border:"none", background:"transparent"}}>Photos</Link>
          </li>
          <li style={{marginLeft:"3rem"}} >
            <Link className="font-nav nav-hover transition bg-amber-50 py-1 px-10 text-black border-4 border-orange-custom hover: hover:border-amber-50 hover:cursor-pointer duration-700" to="/ContactUs" style={{border:"none", background:"transparent"}}>Contact Us</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
