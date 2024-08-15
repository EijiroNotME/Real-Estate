import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../../../../assets/img/HeroImg1.jpg";
import Searchbar from "../../../../Components/Searchbar/Searchbar.jsx";

const Hero = () => {
  return (
    <div
      id="hero-section"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <motion.img
        src={HeroImg}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold heroText">
          Our Services
        </h1>
      </div>
      {/* Adjusted Searchbar container */}
      <div className="absolute bottom-0 left-0 w-full p-4 flex justify-center">
        <Searchbar />
      </div>
    </div>
  );
};

export default Hero;
