// Header.jsx
import React, { useState } from "react";
import Logo from "./../../assets/Logo/Logo-png.png";
import { Button } from "../Button/Button.jsx";
import { HiMenuAlt3 } from "react-icons/hi";
import SideNav from "./SideNav.jsx";

const Header = () => {
  const headerItems = [
    "Meet the team",
    "Search for homes",
    "Our Communities",
    "Home valuation",
    "Services",
    "Home Across America",
    "Testimonials",
    "Contact us",
  ];
  const menuItems = ["Home", "Contact us"];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onOpen = () => {
    setIsSidebarOpen(true);
  };

  const onClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="flex justify-between lg:justify-center xl:justify-evenly gap-1 px-5 py-8 bg-transparent z-10 absolute w-full">
        <div className="h-auto lg:w-32 w-64 items-center flex lg:hidden xl:flex">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="lg:flex items-center justify-evenly gap-3 hidden flex-wrap">
          {headerItems.map((headerItem, index) => (
            <ul key={index}>
              <li className="headerItems">{headerItem}</li>
            </ul>
          ))}
        </div>

        <div className="block lg:hidden xl:block">
          <Button
            variant="default"
            size="icon"
            className="text-2xl"
            onClick={onOpen}
          >
            <HiMenuAlt3 />
          </Button>
        </div>
      </div>

      <SideNav
        onClose={onClose}
        Logo={Logo}
        menuItems={menuItems}
        isOpen={isSidebarOpen}
      />
    </>
  );
};

export default Header;
