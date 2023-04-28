import React from 'react'
import Navbar from './Navbar/Navbar'
import map from '../assets/map.png'
import { BsFillSendFill} from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className=" bg-blue-600 ">
      <Navbar />

      <h1 className="text-4xl font-bold text-white text-center">Fintract Global</h1>
      <h1 className="text-4xl text-white text-center">Contact Us</h1>
      <br></br>
      <p className='text-center text-white justify-around text-1xl'>Have an inquiry or some feedback for us? <br></br>We are here for you. Send us a message.</p>
      <br></br>
      <div className='place-items-center flex flex-2 bg-white items-center justify-center'>
        <div className="border-4 border-black place-items-center flex justify-center rounded-3xl">
        <div>
          <p className="text-black text-center font-semibold text-2xl">Send us Message</p>
          <img src={map} alt="Map" />
        </div>
        <div className=" grid grid-cols-1 gap-4 p-5 ">
          <input type="text" placeholder="Name" className="p-2 border-b-2 outline-none" />
          <input type="email" placeholder="Email" className="p-2 border-b-2 outline-none" />
          <input type="tel" placeholder="Phone" className="p-2 border-b-2 outline-none" />
          <input type="url" placeholder="LinkedIn Profile" className="p-2 border-b-2 outline-none" />
          <br></br>
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center">
              <input
                type="text"
                placeholder="Your Message to us"
                className="p-2 border-b-2 w-cover w-20rem outline-none"
              />
              
            </div>
            <br></br>
            <div className="flex flex-row items-center">
              <button type="submit" className="text-white bg-black rounded-sm h-10 w-full">Send Message</button>
              <BsFillSendFill className="cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="bg-orange-600 z-0">
        <div className="flex flex-2">
          <div className="p-4 m-4">
            <img src="src/assets/Logo.png" alt="Group-1" />
            <h1>Fintract Global</h1>
            <p className="text-white">
              At Fintract Global Ltd, we combine a cutting-edge tech stack with
              exceptional talent from Europe, Asia and America to lead change in
              how financial entities work. Headquartered in London, Fintract
              Global develops cutting edge fintech and regtech products.
            </p>
            <div className="flex felx-row">
              <FaTwitter className="h-8 w-8 pr-2 text-white" />
              <FaInstagram className="h-8 w-8 pr-2 text-white" />
              <FaFacebookF className="h-8 w-8 pr-2 text-white" />
              <FaLinkedinIn className="h-8 w-8 pr-2 text-white" />
            </div>
          </div>
          <div className="flex flex-col pt-2">
            <div className="p-2 flex flex-row items-center">
              <CiLocationOn className=" h-9 w-20 bg-black text-white rounded-full" />
              <p className="text-white pl-3">
                <span className="text-base font-semibold text-white">Address</span>
                <br></br>Registered Office: London Office Address 71-75, Sheldon
                Street, Covent Garden London, WC2h 9JQ
              </p>
            </div>
            <div className="p-2 flex flex-row items-center">
              <FiPhoneCall className="bg-black text-white h-10 w-10 px-2 bg-black rounded-full items-center" />
              <p className="text-white pl-3">
                <span className="font-semibold text-white">Phone</span>
                <br></br> +44-2037373227
              </p>
            </div>
            <div className="p-2 flex flex-row items-center">
              <AiOutlineMail className="bg-black text-white h-10 w-10 px-2 rounded-full" />
              <p className="text-white pl-3">
                <span className="font-semibold">Email</span>
                <br></br> contact@fintract.co.uk
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-white">
            Fintract Global takes your privacy very seriously. We may process
            your personal information for carefully considered and specific
            purposes which are in our interests and enable us to enhance the
            services we provide, but which we believe also benefit our
            customers. View our Privacy Policy to learn more about these
            interests and when we may process your information in this way.
          </p>
          <a href="src/components/contact.jsx">Click here</a>
          <p className="text-white">Copyright ©2021 All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
