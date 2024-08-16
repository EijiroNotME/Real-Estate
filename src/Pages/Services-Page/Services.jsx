import React from "react";
import Hero from "./Section/Hero/Hero.jsx";
import MarketingPlan from "./Section/MarketingPlan/MarketingPlan.jsx";
import Advertisement from "./Section/Advertisement/Advertisement.jsx";
import Process from "./Section/Process/Process.jsx";
import History from "./Section/History/History.jsx";
import MarketingStrategy from "./Section/MarketingStrategy/MarketingStrategy.jsx";
import Portfolio from "./Section/Portfolio/Portfolio.jsx";
import Contact from "./Section/ContactUs/Contact.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

const Services = () => {
  return (
    <>
      <section>
        <Hero />
        <MarketingPlan />
        <Advertisement />
        <Process />
        <History />
        <MarketingStrategy />
        <Portfolio />
        <Contact />
        <Footer />
      </section>
    </>
  );
};

export default Services;
