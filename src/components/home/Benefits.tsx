import * as React from "react";
import {
  CurrencyDollarIcon,
  HandThumbUpIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

const Benefits = () => {
  return (
    <>
      <div className="benefits flex flex-col items-center py-16 px-24 bg-black">
        <h1 className="text-3xl font-bold text-white">Benefits</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 flex flex-row w-full mt-8">
          <div className="col-span-1 w-full py-4 flex flex-col items-center">
            <div className="single-product flex flex-col items-center">
              <CurrencyDollarIcon className="h-20 w-20 text-white" />
              <h3 className="text-lg text-white font-semibold mt-4">
                Free Shipping
              </h3>
            </div>
          </div>
          <div className="col-span-1 w-full py-4 flex flex-col items-center">
            <div className="single-product flex flex-col items-center">
              <HandThumbUpIcon className="h-20 w-20 text-white" />
              <h3 className="text-lg text-white font-semibold mt-4">
                Easy Returns
              </h3>
            </div>
          </div>
          <div className="col-span-1 w-full py-4 flex flex-col items-center">
            <div className="single-product flex flex-col items-center">
              <WrenchScrewdriverIcon className="h-20 w-20 text-white" />
              <h3 className="text-lg text-white font-semibold mt-4">
                30 Day Warranty
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
