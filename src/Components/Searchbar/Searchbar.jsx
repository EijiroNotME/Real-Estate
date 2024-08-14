import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Button } from "../Button/Button.jsx";

const Searchbar = () => {
  return (
    <>
      <div className="sm:flex items-center justify-center p-4 hidden">
        <div className="flex items-center w-full max-w-3xl rounded-md bg-white shadow-md p-1">
          {/* Dropdown - For Sale */}
          <div className="flex items-center px-4 border-r border-gray-300">
            <span className="text-sm font-medium text-secondary-text">
              Address
            </span>
            <IoIosArrowDown className="ml-2 text-gray-500 cursor-pointer" />
          </div>

          {/* Dropdown - Property */}
          <div className="flex items-center px-4 border-r border-gray-300">
            <span className="text-sm font-medium text-secondary-text">
              Area
            </span>
            <IoIosArrowDown className="ml-2 text-gray-500 cursor-pointer" />
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by Area or Address"
            className="flex-grow px-4 py-2 text-sm text-gray-700 bg-transparent outline-none border-none placeholder:text-gray-400 focus:ring-0"
          />

          {/* Search Button */}
          <Button
            variant="secondary"
            className="flex items-center px-6 py-2  text-white transition-colors ease-in-out duration-300 rounded-md"
          >
            <FaSearch className="mr-2" />
            Search
          </Button>
        </div>
      </div>

      <div className=" bottom-0 right-5 fixed">
        <Button size="icon" variant="secondary" className={"flex sm:hidden"}>
          <FaSearch />
        </Button>
      </div>
    </>
  );
};

export default Searchbar;
