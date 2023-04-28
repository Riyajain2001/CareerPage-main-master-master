import React from "react";
import { BsFillSendFill} from "react-icons/bs";

function Forms() {
  return (
    <div className="border-4 border-gray-500 place-items-center flex justify-center ">
        <div className=" grid grid-cols-2 gap-4 p-5 ">
          <input type="text" placeholder="Name" className="p-2 border-b-4 outline-none" />
          <input type="email" placeholder="Email" className="p-2 border-b-4 outline-none" />
          <input type="tel" placeholder="Phone" className="p-2 border-b-4 outline-none" />
          <input type="url" placeholder="LinkedIn Profile" className="p-2 border-b-4 outline-none" />
          <input
            type="text"
            placeholder="Which role you are interested in?"
            className="p-2 col-span-2 border-b-4 outline-none"
          />
          <div className="flex flex-row items-center">
            <br></br>
            <p className="text-gray-500 font-thin p-2">Upload Resume</p>
            <button type="input" className="bg-blue-500 p-2 rounded-md">Browse Files</button>
          </div>
          <br></br>
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center">
              <input
                type="text"
                placeholder="Message"
                className="p-2 border-b-4 w-cover w-20rem outline-none"
              />
              <BsFillSendFill className="cursor-pointer"/>
            </div>
            <br></br>
            <button type="submit" placeholder="Sign Up" className="text-black bg-blue-700 rounded-md h-17 w-full">Sign Up</button>
          </div>
        </div>
        <section className="h-screen bg-Hero bg-no-repeat bg-cover w-1/2">
          <div className="flex flex-col justify-center text-center items-center h-3/4">
            <p className="md:text-3xl text-1xl text-white py-5">
              Interested <span className="text-green-300">in joining </span>the
              team but not{" "}
              <span className="text-green-300">ready to apply</span> or dont{" "}
              <span className="text-green-300">see the right oppurtunity?</span>
            </p>
            <p className="md:text-1xl text-1xl text-white py-5">
              Sign up - We’ll keep you up to date with the latest from the team
              at segment and let you know when we have a new role that may be a
              fit.
            </p>
          </div>
        </section>
      </div>
  )
}

export default Forms
