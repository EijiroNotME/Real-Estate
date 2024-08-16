import React from "react";
import {
  _SellingItems,
  _BuyingItems,
} from "../../../../_mock/_Process/_Process.jsx";
import Steps from "../../../../Components/Steps/Steps.jsx";
import Contract from "../../../../assets/img/Contract1.jpg";
import Contract2 from "../../../../assets/img/Contract2.jpg";

const Process = () => {
  return (
    <div className="defaultContainer flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className=" h-full lg:col-span-1 xl:col-span-2">
          <img
            src={Contract}
            alt="Contract"
            className="object-bottom object-cover w-full h-[80vh] md:h-[60vh] rounded-md"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 h-full mx-0 lg:mx-10 md:col-span-2 xl:col-span-1">
          <div className="text-left">
            <h1 className="heroText text-3xl ">The Selling Process</h1>
          </div>
          {_SellingItems.map((items, index) => (
            <div key={index}>
              <Steps step={items.step} title={items.title} isReverse={false} />
            </div>
          ))}
        </div>
        {/* Steps Section */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="flex flex-col justify-center gap-4 h-full mx-0 lg:mx-10 md:col-span-2 xl:col-span-1">
          <div className="text-right">
            <h1 className="heroText text-3xl ">The Buying Process</h1>
          </div>
          {_BuyingItems.map((items, index) => (
            <div key={index}>
              <Steps step={items.step} title={items.title} isReverse={true} />
            </div>
          ))}
        </div>
        <div className=" h-full lg:col-span-1 xl:col-span-2">
          <img
            src={Contract2}
            alt="Contract"
            className="object-bottom object-cover w-full h-[80vh] md:h-[60vh] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
