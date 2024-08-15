import React from "react";
import { motion } from "framer-motion";

const Glass = ({ step, title }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-20 backdrop-blur-md p-4 md:p-6 rounded-lg shadow-md text-center flex flex-col items-center h-36 w-52 md:h-48 md:w-64 lg:h-60 lg:w-72 justify-center cursor-pointer group"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-accent-default">
        {step}
      </h1>
      <p className="text-sm md:text-base lg:text-lg text-white font-semibold uppercase group">
        {title}
      </p>
    </motion.div>
  );
};

export default Glass;
