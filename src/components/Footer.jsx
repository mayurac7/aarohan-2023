import React from "react";

import facebookIcon from "../assets/icons8-facebook-30.png";
import instagramIcon from "../assets/icons8-instagram-30.png";
import twitterIcon from "../assets/icons8-twitter-30.png";
import linkedinIcon from "../assets/icons8-linkedin-30.png";

import aarohan_banner from "../assets/aarohan_banner.png";

const Footer = () => {
  return (
    <>
      <div className="md:-space-y-24">
          <img
            className="hidden md:block md:w-custom m-auto"
            src={aarohan_banner}
            alt="aarohan_banner"
          />
        <div className="bg-yellow-400 h-48 md:max-w-5xl md:m-auto md:border-4 md:border-purple-900 md:rounded-md md:shadow-2xl md:sticky">
          <div className="flex justify-center items-center md:justify-evenly">
            <div className="flex flex-col mt-6 mr-5">
              <h2 className="font-bold">PHONE NUMBER</h2>
              <p className="mt-1">+91 9763701097</p>
              <p>+91 7620901484</p>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">EMAIL ID</h2>
              <p className="mt-1">aarohan.mitwpu@gmail.com</p>
            </div>
          </div>
          <div className="flex mt-10 justify-center items-center">
            <a href="https://twitter.com/mitaarohanfest"><img className="mr-3" src={twitterIcon} alt="twitterIcon"/></a>
            <a href="https://www.facebook.com/aarohanfest/"><img className="mr-3" src={facebookIcon} alt="facebookIcon" /></a>
            <a href="https://www.linkedin.com/company/mit-wpu-aarohan-the-cultural-fest/mycompany/"><img className="mr-3" src={linkedinIcon} alt="linkedinIcon" /></a>
            <a href="https://www.instagram.com/mitaarohanfest/"><img src={instagramIcon} alt="instagramIcon" /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
