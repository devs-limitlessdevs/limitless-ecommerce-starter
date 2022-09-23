import * as React from "react";
import { Link } from "gatsby";

const Banner = () => {
  return (
    <>
      <div className="banner h-96 flex items-center justify-center lg:justify-start bg-purple-400">
        <div className="grid grid-cols-1 flex flex-row lg:items-end w-full lg:mx-40">
          <div className="col-span-1 flex flex-col lg:pl-32 xl:pl-32 lg:items-end items-center justify-center mt-4 lg:mt-0">
            <h2 className="text-center text-white lg:text-right text-2xl font-bold">
              We should try spicy ipsum
            </h2>
            <p className="text-center text-white lg:text-right text-md font-light mt-2">
              The only problem is not everyone likes spicy food, so they <br />{" "}
              may not be able to enjoy as much lorem as ipsum.
            </p>
            <div className="btn-holder flex justify-start text-left mt-5">
              <Link to="/">
                <button className="bg-black px-8 py-2 text-white rounded-lg text-center transition-all duration-300 hover:bg-primary-gray">
                  View This
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
