import React from 'react';
import Footer from "./Footer";

import googleMapImage from "../assets/google-map-image.png";

const ContactUs = () => {
  return (
    <>
      <div className=" bg-background-image bg-cover bg-repeat-y md:bg-cover p-6 md:px-10 md:py-16">
        <div className="bg-amber-50 max-w-xs m-auto md:max-w-5xl md:m-auto  md:flex md:flex-row-reverse md:justify-between p-5 rounded-md shadow-2xl">
          <a href="https://maps.app.goo.gl/z7XFxNYaWA3pubu46" rel="noreferrer" target="_blank"><img className="w-80" src={googleMapImage} alt="googleMapIcon" /></a>
          <div>
          <h2 className="mt-3 font-bold">Get in Touch</h2>
          <form className="mt-3 md:w-96 flex flex-col">
            <input className="border-b-2 bg-amber-50 border-gray-400 mt-4" type="text" placeholder="Name:" />
            <input className="border-b-2 bg-amber-50 border-gray-400 mt-4" type="number" placeholder="Phone:" />
            <input className="border-b-2 bg-amber-50 border-gray-400 mt-4" type="email" placeholder="Email:" />
            <textarea className="mt-4 border-b-2 bg-amber-50 border-gray-400" cols="30" rows="3" placeholder="Message:"></textarea>
            <input className="transition ease-in-out delay-150 bg-white text-black font-bold shadow-lg border-4 border-purple-900 w-24 m-auto mt-4 px-3 py-2 rounded-sm hover:cursor-pointer hover:scale-110 duration-500" type="submit" value="Send" />
          </form>
          </div>
        </div>
        <div className="hidden md:block md:mt-10">
          <Footer />
        </div>
      </div>
      <div className="md:hidden">
      <Footer />
      </div>
    </>
  )
}

export default ContactUs
