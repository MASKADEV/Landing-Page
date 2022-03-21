import React from "react"
import ShowCaseThumb from '../assets/thumb.svg'

export default function ShowCase() {
  return (
       <div className="flex md:flex-row flex-col items-center justify-items-center w-full">
          <div className="md:w-[50%] ">
            <h1 className=" md:text-[5rem] sm:text-left text-[3rem] font-bold text-center">
              Let's start something <br></br> Big With us.
            </h1>
            <div className="mt-7">
              <button className="px-4 py-2  bg-black sm:ml-4">Get Started</button>
              <button className="ml-[40px] px-4 py-2 bg-transparent text-black">Watch Video</button>
            </div>
          </div>
          <div className="md:w-[50%]">
            <img src={ShowCaseThumb} className="sm:w-[500px]" alt=""/>
          </div>
       </div>
  )
}


