import React from "react";
import { _MarketingStrategy } from "../../../../_mock/_MarketingStrategy/_MarketingStrategy.jsx";
import MarketingCards from "../../../../Components/MarketingCards/MarketingCards.jsx";
import { partnersLogo } from "../../../../_mock/_MarketingStrategy/_MarketingStrategy.jsx";

const MarketingStrategy = () => {
  return (
    <div className="defaultContainer bg-primary-dark-10 justify-center flex">
      <div className="flex flex-col gap-6 items-center justify-center">
        <div className="">
          <h1 className="heroText">We Market Your Home to the World</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
          {_MarketingStrategy.map((item, index) => (
            <MarketingCards key={index} {...item} />
          ))}
        </div>
        <div className="py-5 md:mx-10 2xl:mx-52 text-center">
          <p>
            Our company is proud to collaborate with some of the industry's
            leading names, forging strong partnerships with esteemed
            organizations such as realtor.com, trulia, and Zillow. These
            alliances enable us to deliver unparalleled services and innovative
            solutions, ensuring that our clients benefit from the collective
            expertise and resources of our trusted partners.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-0 md:gap-6 ">
          {partnersLogo.map((item, index) => (
            <div
              key={index}
              className="h-16 flex items-center hover:scale-105 transition-all ease-in-out duration-300"
            >
              {" "}
              {/* Adjust height as needed */}
              <div className="w-40 flex items-center">
                {item.svg} {/* Ensure this renders your image */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingStrategy;
