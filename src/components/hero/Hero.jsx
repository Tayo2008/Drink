import React from "react";
import banner from "../assets/africadoc.png";
import { Link } from "react-router-dom";

const Hero = () => {

  
  return (
    <div>
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl pt-44 px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-32 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3  mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  New to Mdrive System
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Consultation at your doorstep
                <br className="hidden md:block" />
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Currently, hospitals are largely staffed by professional physicians, surgeons, nurses, and allied health practitioners, whereas in the past, this work was usually performed by the members of founding religious orders or by volunteers.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <Link
                to="/login"
                className="inline-flex items-center justify-center w-full bg-emerald-500 h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full  max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
