import React from 'react';

import goBackIcon from "../assets/icons8-go-back-30.png"

const SocialCause = ({ setSocialCauseDisplay, image, title, text }) => {
  const collapseDisplay = () => {
    setSocialCauseDisplay(false);
  }

  return (
    <>
      <div className = " bg-background-image bg-contain bg-repeat-y md:bg-cover p-10 md:p-16 rounded-sm shadow-lg">
      <div>
        <img className="transition ease-in-out delay-150 rounded-2xl hover:bg-white hover:cursor-pointer hover:scale-110 duration-500" src={goBackIcon} alt="goBackIcon" onClick={collapseDisplay} />
      </div>
      <div id="socialCause" className="bg-amber-50 p-7 max-w-xs m-auto md:max-w-2xl rounded-md shadow-2xl">
        <h2 className="text-center font-bold mb-5">{title}</h2>
        <img src={image} alt="socialCauseImage" />
        <p className="text-center text-xs mt-5">{text}</p>
      </div>
      </div>
    </>
  )
}

export default SocialCause
