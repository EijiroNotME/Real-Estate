import React from "react";
import { motion } from "framer-motion";
import { IoMdImages } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import { MdEmojiFlags, MdOutlineMailOutline } from "react-icons/md";

import Meeting from "../../../../assets/img/Meeting.jpg";

const MarketingPlan = () => {
  const MarketingItems = [
    {
      icon: <MdOutlineMailOutline />,
      title: "Responsive",
      text: "I am always available via phone, text, or email.",
      style: "bg-primary-default text-secondary-text",
    },
    {
      icon: <MdEmojiFlags />,
      title: "Syndication",
      text: "I market your property locally, nationally, and internationally.",
      style: "bg-secondary-default text-primary-text",
    },
    {
      icon: <GrMapLocation />,
      title: "Virtual Tour",
      text: "Let's make your home stand out with a high quality virtual tour.",
      style: "bg-primary-dark text-secondary-text",
    },
    {
      icon: <IoMdImages />,
      title: "Photography",
      text: "Beautiful, high-end photography is a central part of our marketing plan for your property.",
      style: "bg-primary-dark-10 text-secondary-text",
    },
  ];

  return (
    <div className="min-h-screen w-full px-4 md:px-20">
      <div className="py-10 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold heroText">
            Comprehensive Marketing Plan
          </h1>
          <p className="text-secondary-text my-auto md:text-lg leading-relaxed text-base">
            A comprehensive cutting-edge solution harnesses the latest
            technologies and methodologies to address complex challenges,
            integrating advanced tools and frameworks to deliver optimal
            performance, efficiency, and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10">
          <div className="md:grid flex flex-col grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-center">
            {MarketingItems.map((item, index) => (
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                }}
                className={`miniCards p-6 flex flex-col items-center justify-center rounded-lg shadow-md ${item.style}`}
                key={index}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <p className="mt-2 text-center">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="h-full rounded-lg shadow-md overflow-hidden">
            <img
              src={Meeting}
              alt="Meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingPlan;
