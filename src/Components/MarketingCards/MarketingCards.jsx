import React from "react";

const MarketingCards = ({ title, text, icon }) => {
  return (
    <div className="relative bg-white rounded-xl border border-secondary-default/20 p-6 shadow-lg flex flex-col items-start space-y-4 text-primary-text overflow-hidden justify-between hover:shadow-xl transition-shadow duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 opacity-20 pointer-events-none"></div>

      {/* Decorative Element */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary-default/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <h2 className="text-xl font-bold text-accent-default mb-2">{title}</h2>
        <p className="text-base leading-relaxed text-gray-700">{text}</p>
      </div>

      {/* Icon */}
      <div className="relative z-10 mt-auto flex justify-end w-full">
        <div className="text-6xl text-secondary-default/30">{icon}</div>
      </div>
    </div>
  );
};

export default MarketingCards;
