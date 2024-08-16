import React from "react";
import { motion } from "framer-motion";
import _MarketingItems from "./../../../../_mock/_MarketingPlan/_Marketing.jsx";
import Meeting from "../../../../assets/img/Meeting.jpg";

const MarketingPlan = () => {
  return (
    <div className="defaultContainer">
      <div className="py-10 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold heroText">
            Comprehensive{" "}
            <span className="text-accent-default">Marketing Plan</span>
          </h1>
          <p className="text-secondary-text my-auto md:text-lg leading-relaxed text-base">
            A strategic real estate marketing approach utilizes the most
            advanced technologies and methodologies to navigate the complexities
            of the market. By integrating cutting-edge tools and innovative
            strategies, it ensures maximum visibility, optimal performance, and
            effective solutions that drive success and growth in the real estate
            sector.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10">
          <div className="md:grid flex flex-col grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-center">
            {_MarketingItems.map((item, index) => (
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
