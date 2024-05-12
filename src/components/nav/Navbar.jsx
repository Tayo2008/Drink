import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { CgClose } from "react-icons/cg";
import { CgMenu } from "react-icons/cg";
import  logo from "../../components/assets/logoDrive__1_-removebg-preview.png"

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handle = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <nav className=" bg-white border-b-2 border-blue-200 w-full py-4 flex justify-between items-center left-0  z-10">
        <div className="container pl-4 pr-4  mx-auto md:flex z-10 md:justify-between md:items-center w-full ">
          <div className="flex items-center md:flex md:px-14 h-12 py-2  ">
            
            <Link to="/">
              <img
                className="w-auto h-16 sm:h-24 px-2"
                src={logo}
                alt=""
              />
            </Link> HealthDrive Management System
          </div>

          <div
            className={
              menu
                ? "flex flex-col w-full transition-all duration-500 ease-in  gap-4 md:inline"
                : "hidden md:inline"
            }
          >
            {/* <Mobile Menu open: "block", Menu closed: "hidden" */}
            <div className="absolute inset-x-0 z-20 w-full pl-12 py-6 transition-all duration-300 ease-in-out bg-white dark:bg--800   md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
              <div className="flex flex-col md:flex-row md:mx-6">
                <NavLink
                  to="/"
                  className="my-2 text-blue-400 transition-colors duration-300 transform  hover:text-red-400 md:mx-4 md:my-0"
                >
                  Home
                </NavLink>

                <NavLink
                  className="my-2 text-blue-400 transition-colors duration-300 transform  hover:text-red-400 md:mx-4 md:my-0"
                  to="/contact"
                >
                  Contact
                </NavLink>
                <NavLink
                  className="my-2 text-blue-400 transition-colors duration-300 transform  hover:text-red-400 md:mx-4 md:my-0"
                  to="/about"
                >
                  About
                </NavLink>

               
              </div>

              <a
                href="/login"
                className="inline-flex items-center justify-center w-full bg-blue-500 h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-green-accent-400 hover:bg-deep-green-accent-700 focus:shadow-outline focus:outline-none"
              >
                Sign In
              </a>
            </div>
          </div>
          <div
            className="inline  slef-start text-3xl top-6 absolute right-6  cursor-pointer md:hidden "
            onClick={handle}
          >
            {!menu ? <CgMenu /> : <CgClose />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
