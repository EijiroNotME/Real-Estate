import React from "react";
import CEO from "../../../../assets/img/CEO.jpg";
import Cabinets from "../../../../assets/img/Cabinets.jpg";
import Intentional from "../../../../assets/img/Intentional.jpg";
import Organize from "../../../../assets/img/Organize.jpg";

const Advertisement = () => {
  return (
    <div className="defaultContainer">
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="bg-secondary-default md:col-span-2 text-primary-text flex items-center justify-center textContainer">
          <h1 className="heroText border-b  ">Decor Guidance</h1>
        </div>
        <div className="">
          <img src={CEO} alt="" className="" />
        </div>
        {/*  */}
        <div className="">
          <img src={Cabinets} alt="" className="" />
        </div>
        <div className="bg-primary-dark-10 md:col-span-2 text-secondary-text flex items-center justify-center w-full h-full">
          <span className="listAds">
            <h1 className="heroText text-3xl">My Staging Expertise</h1>
            <li>Unclutter and organize your home</li>
            <li>Neatly arrange drawers and cabinets</li>
            <li>Keep pets outdoors or off the premises</li>
            <li>Play soft music</li>
          </span>
        </div>

        {/*  */}
        <div className=" md:col-span-2  flex items-center justify-center  textContainer w-full text-secondary-text ">
          <h1 className="heroText text-4xl ">Intentional ​​​​​​​Layout</h1>
        </div>
        <div className="">
          <img src={Intentional} alt="" className="" />
        </div>
        {/*  */}
        <div className="">
          <img src={Organize} alt="" className="" />
        </div>
        <div className="bg-accent-default md:col-span-2 text-primary-text flex items-center justify-center w-full h-full">
          <span className="listAds font-semibold">
            <li>Unclutter and organize your home</li>
            <li>Neatly arrange drawers and cabinets</li>
            <li>Keep pets outdoors or off the premises</li>
            <li>Play soft music</li>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
