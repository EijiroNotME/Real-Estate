import React from "react";
import { motion } from "framer-motion";
import CarouselThree from "../../../assets/img/CarouselThree.jpg";
import { Button } from "../../Button/Button.jsx";

// Animation variants for the heading
const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Animation variants for the button
const buttonVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const ItemThree = () => {
  return (
    <div className="relative h-full w-full">
      <img
        src={CarouselThree}
        alt="Carousel Three"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 px-6 py-8">
        {/* Heading with Framer Motion */}
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
          className="heroText text-white text-2xl md:text-4xl font-extrabold mb-6 leading-tight text-center"
        >
          We Want To Create An Unforgettable Experience For You...
        </motion.h1>

        {/* Static Button with Framer Motion */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="mt-4"
        >
          <Button
            variant="highlight"
            className="px-4 py-2 font-semibold rounded text-primary-text"
          >
            Read More
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ItemThree;
