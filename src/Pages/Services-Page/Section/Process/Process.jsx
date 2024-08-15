import React from "react";
import Contract from "../../../../assets/img/Contract1.jpg";
import Contract2 from "../../../../assets/img/Contract2.jpg";
import {
  _SellingItems,
  _BuyingItems,
} from "../../../../_mock/_Process/_Process.jsx";
import Glass from "../../../../Components/Glass/Glass.jsx";

const Process = () => {
  return (
    <div className="defaultContainer mx-0 px-0">
      {/* Selling Items Section */}
      <div className="relative h-[100vh]  2xl:h-[70vh]">
        {/* Heading on top of the Glass divs */}
        <h1 className="absolute hidden sm:flex top-5 md:top-10 lg:top-20 left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl lg:text-4xl font-bold text-white z-10">
          The Selling Process
        </h1>
        <div className="absolute inset-0 flex flex-wrap gap-4 items-center justify-center p-4 md:pt-24 lg:pt-32">
          {_SellingItems.map((item, index) => (
            <Glass key={index} step={item.step} title={item.title} />
          ))}
        </div>
        <img
          src={Contract}
          alt="Contract Image 1"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Buying Items Section */}
      <div className="relative h-[100vh]  2xl:h-[70vh]">
        {/* Heading on top of the Glass divs */}
        <h1 className="absolute hidden sm:flex top-5 md:top-10 lg:top-20 left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl lg:text-4xl font-bold text-white z-10">
          The Buying Process
        </h1>
        <div className="absolute inset-0 flex flex-wrap gap-4 items-center justify-center p-4 md:pt-24 lg:pt-32">
          {_BuyingItems.map((item, index) => (
            <Glass key={index} step={item.step} title={item.title} />
          ))}
        </div>
        <img
          src={Contract2}
          alt="Contract Image 2"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
    </div>
  );
};

export default Process;
