import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../Button/Button.jsx";
import { motion } from "framer-motion";

const Searchbar = () => {
  const [isFocused, setIsFocused] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = document.getElementById("hero-section").offsetHeight;
      if (window.scrollY >= heroBottom) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div
      className={`w-full p-4 transition-transform duration-300 ease-in-out ${
        isSticky ? "fixed top-0 z-50 bg-white" : "absolute bottom-0 left-0"
      }`}
    >
      {/* Main Searchbar */}
      <div className="flex flex-row w-full p-4 bg-primary-default/5 bg-opacity-20 backdrop-blur-md rounded-md shadow-lg shadow-gray-400/20 justify-around gap-10 md:gap-20 lg:gap-96">
        <div className="flex-row flex items-center">
          <FaSearch className="w-6 h-6 text-gray-500" />
          <form className="flex-grow w-[300px] overflow-x-hidden px-4">
            <input
              type="text"
              placeholder="Search location or project name"
              className="w-full py-2 text-sm text-primary-default bg-transparent placeholder:text-gray-500 border-none focus:ring-0 focus:outline-none focus:border-b-2 focus:border-primary-default"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </form>
        </div>

        {/* Search Button */}
        <Button
          variant="default"
          size="default"
          className="flex items-center px-6 py-2 text-gray-500"
        >
          <span className="mr-2 uppercase hidden md:block flex-grow font-bold">
            Book an Appointment
          </span>
          <FaArrowRight />
        </Button>
      </div>

      {/* Drop-up/Drop-down Menu with Animation */}
      {isFocused && (
        <motion.div
          initial={{ opacity: 0, y: isSticky ? -20 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: isSticky ? -20 : 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`${
            isSticky
              ? "absolute top-full text-secondary-default border border-secondary-default/20 shadow-xl shadow-secondary-default/20"
              : "absolute bottom-full border-none shadow-none"
          } w-[300px] mx-auto bg-primary-default/5 bg-opacity-20 backdrop-blur-md shadow-gray-400/10 p-6 rounded-md left-20 md:left-24 lg:left-40 2xl:left-72`}
        >
          <div className="flex flex-col gap-4">
            <div className="text-sm text-gray-600">Search for</div>
            <div className="text-lg font-bold text-primary-default">
              <Button
                className={`${isSticky ? "text-secondary-default/60" : ""}`}
              >
                Home Search
              </Button>
            </div>
            {/* Add additional options or information here */}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Searchbar;
