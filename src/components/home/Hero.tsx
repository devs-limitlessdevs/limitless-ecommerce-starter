import * as React from "react";
import { Link } from "gatsby";

const Hero = () => {
  return (
    <>
      <div className="hero h-96 flex items-center justify-center lg:justify-start bg-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 flex flex-col lg:pl-32 xl:pl-32 items-center lg:items-baseline justify-center mt-4 lg:mt-0">
            <h1 className="text-center lg:text-left text-2xl lg:text-3xl font-bold">
              Bacon ipsum? Or jalapeno ipsum?
              <br />
              <span className="text-3xl lg:text-5xl text-secondary-blue">
                You decide!
              </span>
            </h1>
            <div className="btn-holder flex justify-start text-left mt-5">
              <Link to="/">
                <button className="bg-black px-8 py-2 text-white rounded-lg text-center transition-all duration-300 hover:bg-primary-gray">
                  View This
                </button>
              </Link>
              <Link to="/">
                <button className="ml-3 bg-purple-400 px-8 py-2 text-white rounded-lg text-center transition-all duration-300 hover:bg-primary-gray">
                  Why This?
                </button>
              </Link>
            </div>
          </div>
          <div className="col-span-1 mx-24 my-12 hidden lg:block lg:m-24 relative"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
