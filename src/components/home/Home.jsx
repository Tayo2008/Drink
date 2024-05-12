import React from "react";
import Hero from "../hero/Hero";
import afr from "../assets/pharmecist.png";
import nsr from "../assets/nurse.png";
import pha from "../assets/pharmacist.png";
import lfc from "../assets/lookingforcare.jpg";

const Home = () => {

  return (
    <div>
      <Hero />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Medical Healthcare Stakeholders</span>
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          Join MDrive Doctors Worldwide to render necessary Healthcare around you.

          </p>
        </div>
        <div className="grid gap-4 mb-8 lg:grid-cols-4 md:grid-cols-2 sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src={afr}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              </p>
            <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  Sign Up Doctor
                </p>
              </a>
           
              <p className="mb-4 text-gray-700">
                MDrive, making care system available everywhere and everytime. You can offer to be our healthcare giver consultants.
              </p>
            
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src={nsr}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  Sign Up as Nurse
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                Are you a Nurse, Register on MDrive to render Healthcare support giver.
              </p>
              
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src={pha}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  Are you a Pharmacist ?
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                Rendering help does not stop at consultation, a need to give drugs to consolidate on the consultation is also important.
              </p>
            
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src={lfc}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  Tracking Health Giver
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                You can start tracking healthcare giver around you. Kindly, Sign Up.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
