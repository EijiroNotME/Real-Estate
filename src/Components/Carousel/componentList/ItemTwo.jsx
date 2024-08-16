import React from "react";
import { motion } from "framer-motion";
import CarouselTwo from "../../../assets/img/CarouselTwo.jpg";

const textVariants = {
  hidden: { opacity: 0, x: 50 }, // Changed to x for horizontal entrance
  visible: { opacity: 1, x: 0 },
};

const ItemTwo = () => {
  return (
    <div className="relative h-full w-full">
      <img
        src={CarouselTwo}
        alt="Carousel Two"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 flex flex-row items-center justify-end text-right bg-black bg-opacity-50 p-6">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl md:m-12" // Adjusted for better spacing
        >
          <h1 className="text-white text-2xl md:text-5xl font-extrabold mb-6 leading-tight heroText">
            We Want To Create An Unforgettable Experience For You...
          </h1>
          <p className="text-white text-base md:text-xl leading-relaxed">
            We combine data gained from your home’s Comparative Market Analysis
            with local market research to create a marketing plan designed to
            help you meet your selling goals. Your home’s carefully designed
            plan will include a range of online, print, and other marketing
            tools targeted to the best-qualified pool of buyers. ​​​​​​​
            Successfully marketing a home in today’s real estate environment
            requires a firm with experience and flexibility. Hansen Partners
            provides both.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ItemTwo;
