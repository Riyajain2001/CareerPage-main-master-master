import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-transparent">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex bg-transparent hidden uppercase items-center gap-8 font-[Poppins]">
          
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
          md:hidden flex-col bg-blue-800 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
          duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="flex flex-col items-center">
            <input type="button" placeholder="Search Fg"  className="bg-white text-black px-6 py-2 rounded-full m-2" />
            <input type="button" value="Login"  className="bg-white text-black px-6 py-2 m-2" />
            <input type="button" value="Sign up"  className="bg-black text-white px-6 py-2 m-2" />
          </div>
        </ul>
      </div>
      <br></br>
    </nav>
  );
};

export default Navbar;
