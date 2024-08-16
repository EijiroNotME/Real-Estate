import React from "react";
import { _PortfolioLogo } from "../../../../_mock/_Portfolio/_Portfolio.jsx";
import House from "../../../../assets/img/House.jpg";
import Landmark from "../../../../assets/img/landmark.jpg";
import { motion } from "framer-motion";
import { _PortfolioItems } from "../../../../_mock/_Portfolio/_Portfolio.jsx";
import Tablet from "../../../../assets/img/Tablet1.jpg";

const Portfolio = () => {
  return (
    <div className="defaultContainer">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* GRID 1 */}
        <div className="p-5 xl:col-span-2 flex flex-col justify-center">
          <div className="text-center">
            <h1 className="tracking-tight text-xl md:text-2xl lg:text-3xl font-bold uppercase text-secondary-default mb-4">
              Leading Real Estate Companies of The World®
              <br />
              <span className="text-accent-default font-semibold">
                & Luxury Portfolio International
              </span>
            </h1>
          </div>
          <div className="p-5 text-center">
            <p>
              JRockcliff is a founding member of Luxury Portfolio
              International®, the luxury division of Leading Real Estate
              Companies of the World®. With more than 500 member firms around
              the world, Our luxury listings are exposed to a vast global
              audience and reach potential buyers and investors in over 50
              countries.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {_PortfolioLogo.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-24 md:w-32 lg:w-40"
              >
                <img
                  src={item.logo}
                  alt={`Portfolio Logo ${index + 1}`}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        {/* GRID 2 */}
        <div className="flex items-center justify-center lg:col-span-1">
          <img
            src={House}
            alt=""
            className="object-cover w-full rounded-md h-auto max-h-[70vh] lg:max-h-[80vh] xl:max-h-[90vh]"
          />
        </div>

        {/* GRID 1 */}

        <div className="flex items-center justify-center lg:col-span-1">
          <img
            src={Landmark}
            alt=""
            className="object-cover w-full rounded-md h-auto max-h-[70vh] lg:max-h-[80vh] xl:max-h-[90vh]"
          />
        </div>

        <div className="p-5 xl:col-span-2 flex flex-col justify-center">
          <div className="text-center">
            <h1 className="tracking-tight text-xl md:text-2xl lg:text-3xl font-bold uppercase text-secondary-default mb-4">
              We are now
              <br />
              <span className="text-accent-default text-6xl font-semibold">
                Global
              </span>
            </h1>
          </div>
          <div className="p-5 text-center">
            <p>
              Through our international affiliations, we have a strong presence
              in over 50 countries. Our luxury listings are sent to prominent
              international real estate sites, reaching over 70 million
              potential buyers and investors worldwide through our relationships
              with:
            </p>
          </div>
          {/* GRID 2 */}
          <div className="flex flex-wrap gap-4 justify-center">
            {_PortfolioLogo.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-24 md:w-32 lg:w-40"
              >
                <img
                  src={item.logo}
                  alt={`Portfolio Logo ${index + 1}`}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="p-5 text-center">
            <p>
              We also have several well-positioned affiliate offices in China,
              providing our clients with access to buyers in Hong Kong,
              Shanghai, and Beijing.
            </p>
          </div>
        </div>
      </div>

      {/* Layer 3 */}

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10">
        <div className="md:grid flex flex-col grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-center">
          {_PortfolioItems.map((item, index) => (
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
            src={Tablet}
            alt="Meeting"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
