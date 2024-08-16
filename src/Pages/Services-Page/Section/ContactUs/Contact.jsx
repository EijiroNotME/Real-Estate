import React from "react";
import { Button } from "../../../../Components/Button/Button.jsx";
import Interior from "../../../../assets/img/Interior.jpg";

const Contact = () => {
  return (
    <div className="relative w-full h-[50vh]">
      {/* Image Section with Overlay */}
      <img
        src={Interior}
        alt="Interior"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl font-bold mb-4">Work With Us</h1>
        <p className="text-lg mb-6">
          With decades of experience in luxurious Tri Valley real estate, our
          team is here to ensure that your dreams are a reality. <br />
          Let us guide you through your home buying journey, contact us today!
        </p>
        <Button variant="highlight">Contact Us</Button>
      </div>
    </div>
  );
};

export default Contact;
