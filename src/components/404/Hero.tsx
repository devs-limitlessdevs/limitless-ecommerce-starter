import * as React from "react";
import { Link } from "gatsby";

const Hero = () => {
  return (
    <>
      <div className="hero h-96 flex items-center justify-center bg-purple-400">
        <div className="grid grid-cols-1">
          <div className="col-span-1 flex flex-col items-center justify-center mt-4 lg:mt-0">
            <h1 className="text-center text-white text-2xl lg:text-3xl font-bold">
              Oh no! Are you lost?
              <br />
              <span className="text-3xl text-white lg:text-5xl text-secondary-blue">
                This page doesn't exist yet!
              </span>
            </h1>
            <div className="btn-holder flex justify-start text-left mt-5">
              <Link to="/">
                <button className="bg-black px-8 py-2 text-white rounded-lg text-center transition-all duration-300 hover:bg-primary-gray">
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
