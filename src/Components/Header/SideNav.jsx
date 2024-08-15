// Sidebar.jsx
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "../Button/Button.jsx";
import { motion, AnimatePresence } from "framer-motion";

const SideNav = ({ onClose, menuItems, Logo, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed top-0 right-0 h-full bg-secondary-default z-50 shadow-2xl shadow-secondary-default/50 flex items-center justify-center w-[100%] sm:w-[90%] md:w-[40%] lg:w-[20%] `}
          initial={{ x: "100%", opacity: 0 }} // Initial state when entering
          animate={{ x: "0%", opacity: 1 }} // State when visible
          exit={{ x: "100%", opacity: 0 }} // State when exiting
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Button
            variant="default"
            size="icon"
            onClick={onClose}
            className="absolute top-5 left-6 text-primary-default"
          >
            <IoCloseOutline className="w-7 h-7" />
          </Button>

          <div className="flex flex-col items-center gap-8 p-6">
            <img src={Logo} alt="Logo" className="w-36 h-auto" />
            <ul className="flex flex-col items-center gap-5 text-primary-default text-2xl">
              {menuItems?.map((menu, index) => (
                <Button key={index} className="w-full menuItems" variant="menu">
                  {menu}
                </Button>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideNav;
