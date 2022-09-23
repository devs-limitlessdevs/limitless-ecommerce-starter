import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  Bars4Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

// import { useStateContext } from "../../context/StateContext";

const Navbar = () => {
  // const { totalQty } = useStateContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="navbar-holder flex justify-between items-center px-12 lg:px-24 my-4 h-28 flex-row">
        <Link className="" to="/">
          <StaticImage
            className="hover:cursor-pointer"
            alt="Example Logo"
            src="../../images/example-logo.svg"
            width={80}
          />
        </Link>
        <nav className="navbar desktop hidden lg:block">
          <ul className="flex flex-row">
            <li className="text-lg font-semibold text-center mx-5 tracking-wide transition-all duration-2000 hover:text-purple-400 hover:-mt-1 hover:cursor-pointer">
              <Link className="font-secondary-font" to="/">
                Home
              </Link>
            </li>
            <li className="text-lg font-semibold text-center mx-5 tracking-wide transition-all duration-2000 hover:text-purple-400 hover:-mt-1 hover:cursor-pointer">
              <Link className="font-secondary-font" to="/shop">
                Shop
              </Link>
            </li>
            <li className="text-lg font-semibold text-center mx-5 tracking-wide transition-all duration-2000 hover:text-purple-400 hover:-mt-1 hover:cursor-pointer">
              <Link className="font-secondary-font" to="/gift-cards">
                Gift Cards
              </Link>
            </li>
            <li className="text-lg font-semibold text-center mx-5 tracking-wide transition-all duration-2000 hover:text-purple-400 hover:-mt-1 hover:cursor-pointer">
              <Link className="font-secondary-font" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {mobileMenuOpen === true ? (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: 245 }}
            className="navbar mobile absolute top-36 left-0 z-10 bg-purple-400 right-0 shadow-lg lg:hidden"
          >
            <ul className="flex flex-col">
              <li className="text-lg text-white font-bold text-center mx-5 tracking-wide transition-all duration-2000 hover:text-primary-blue hover:cursor-pointer my-4 lg:my-0">
                <Link className="font-secondary-font" to="/">
                  Home
                </Link>
              </li>
              <li className="text-lg text-white font-bold text-center mx-5 tracking-wide transition-all duration-2000 hover:text-primary-blue hover:cursor-pointer my-4 lg:my-0">
                <Link className="font-secondary-font" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="text-lg text-white font-bold text-center mx-5 tracking-wide transition-all duration-2000 hover:text-primary-blue hover:cursor-pointer my-4 lg:my-0">
                <Link className="font-secondary-font" to="/gift-cards">
                  Gift Cards
                </Link>
              </li>
              <li className="text-lg text-white font-bold text-center mx-5 tracking-wide transition-all duration-2000 hover:text-primary-blue hover:cursor-pointer my-4 lg:my-0">
                <Link className="font-secondary-font" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.nav>
        ) : (
          ""
        )}

        <div className="action-btn-holder flex items-center">
          <button>
            <MagnifyingGlassIcon className="h-8 w-8 mr-6 transition-all duration-400 hover:scale-110 hover:text-purple-400" />
          </button>
          <button className="relative">
            <ShoppingBagIcon className="h-8 w-8 -mt-1 transition-all duration-400 hover:scale-110 hover:text-purple-400" />
            {/* {totalQty ? (
              <>
                <div className="cart-count bg-primary-blue text-xs font-bold left-4 top-4 h-5 w-5 text-white absolute rounded-full flex justify-center items-center">
                  {totalQty}
                </div>
              </>
            ) : (
              ""
            )} */}
          </button>
          {mobileMenuOpen === false ? (
            <button
              onClick={handleMenuToggle}
              className="mobile-nav-toggle block lg:hidden"
            >
              <Bars4Icon className="h-8 w-8 ml-6 transition-all duration-400 hover:scale-110 hover:text-primary-blue" />
            </button>
          ) : (
            <button
              onClick={handleMenuToggle}
              className="mobile-nav-toggle block lg:hidden"
            >
              <XMarkIcon className="h-8 w-8 ml-6 transition-all duration-400 hover:scale-110 hover:text-primary-blue" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
