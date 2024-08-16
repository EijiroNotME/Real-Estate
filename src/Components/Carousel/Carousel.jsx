import React, { useState } from "react";
import { motion } from "framer-motion";
import contract from "../../assets/img/Contract1.jpg";
import contract2 from "../../assets/img/Contract2.jpg";
import ItemOne from "./componentList/ItemOne.jsx";
import ItemTwo from "./componentList/ItemTwo.jsx";
import ItemThree from "./componentList/ItemThree.jsx";

const carouselItems = [
  <ItemOne key="item-one" />,
  <ItemTwo key="item-two" />,
  <ItemThree key="item-three" />,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next slide
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % carouselItems.length;
    setCurrentIndex(newIndex);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    const newIndex =
      (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-none h-[70vh]">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {typeof carouselItems[currentIndex] === "string" ? (
            <img
              src={carouselItems[currentIndex]}
              className="object-cover w-full h-full"
              alt={`Slide ${currentIndex}`}
            />
          ) : (
            carouselItems[currentIndex]
          )}
        </motion.div>
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary-default/50 ">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary-default/50 ">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
