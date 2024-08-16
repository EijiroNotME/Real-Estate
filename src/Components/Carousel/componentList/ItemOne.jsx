import React from "react";
import { motion } from "framer-motion";
import CarouselOne from "../../../assets/img/CarouselOne.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ItemOne = () => {
  return (
    <div className="relative h-full w-full">
      <img
        src={CarouselOne}
        alt="Carousel One"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-6">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl px-4"
        >
          <h1 className="text-white text-xl md:text-5xl font-extrabold mb-6 leading-tight heroText">
            Over 33 Years of Real Estate Success
          </h1>
          <p className="text-white text-sm md:text-xl leading-relaxed">
            We provide every one of our clients with a level of service they
            won’t find anywhere else. We give them what they need, often before
            they know they need it. In real estate, almost everything can be
            negotiated. When you choose Hansen Partners, its experience is 100%
            nonnegotiable. And it’s an experience like no other.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ItemOne;
