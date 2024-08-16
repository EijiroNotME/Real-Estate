import React from "react";

const Steps = ({ step, title, isReverse }) => {
  return (
    <div
      className={`flex ${
        isReverse ? "flex-row-reverse" : "flex-row"
      } gap-2 p-2 rounded-md items-center  group cursor-pointer shadow-md shadow-secondary-default/10 border border-secondary-dark/5 hover:bg-primary-dark/40 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-300`}
    >
      <div className="p-3 rounded-md border border-secondary-default/15 ">
        <h1 className="font-bold text-2xl opacity-50 group-hover:opacity-100 group-hover:text-accent-default">
          {step}
        </h1>
      </div>
      <p className="stepText text-secondary-text group-hover:text-accent-default cursor-default">
        {title}
      </p>
    </div>
  );
};

export default Steps;
