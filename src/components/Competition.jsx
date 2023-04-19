import React from 'react'

const Competition = ({ title, text }) => {
  return (
    <>
      <div className="transition ease-in-out delay-150 max-w-sm m-auto md:max-w-4xl md:m-auto bg-amber-50 bg-opacity-60 flex flex-col h-100 md:h-96 justify-center items-center rounded-md hover:scale-110 duration-500">
        <h2 className="font-bold text-xl text-purple-900">{title}</h2>
        <p className="text-center text-sm text-purple-900 font-semibold m-6">{text}</p>
        <a href="https://forms.gle/gUcXUrfusLo4WLVy6" className="transition ease-in-out delay-150 px-7 py-1.5 bg-white text-black font-bold text-xl border-4 border-purple-800 hover:bg-gray hover:scale-110 duration-500">Register Now!</a>
      </div>
    </>
  )
}

export default Competition
