import * as React from "react";
import { Link } from "gatsby";
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  Bars4Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="footer flex justify-between items-center px-12 lg:px-24 my-12 flex-row">
        <div className="grid grid-cols-1 lg:grid-cols-4 flex flex-row w-full mt-8">
          <div className="col-span-1 lg:col-span-2 w-full py-4 flex flex-col items-center">
            <div className="single-product flex flex-col items-center">
              <h3 className="text-lg font-semibold mt-4">Socials</h3>
            </div>
          </div>
          <div className="col-span-1 w-full py-4 flex flex-col items-center">
            <div className="single-product flex flex-col items-center">
              <h3 className="text-lg font-semibold mt-4 font-secondary-font">
                Company
              </h3>
              <ul className="mt-8 ml-4 flex justify-center flex-col">
                <li className="text-md">About Us</li>
                <li className="text-md">FAQ</li>
                <li className="text-md">Why The Product</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 w-full py-4 flex flex-col items-center">
            <div className="single-product flex flex-col items-center">
              <h3 className="text-lg font-semibold mt-4 font-secondary-font">
                Contact
              </h3>
              <ul className="mt-8 ml-4 flex justify-center flex-col">
                <li className="text-md">Phone Number</li>
                <li className="text-md">Email Address</li>
                <li className="text-md">Send an Enquiry</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
