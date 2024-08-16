import React from "react";
import { Button } from "../Button/Button.jsx";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-white to-gray-100 text-gray-900 py-12 px-6 shadow-lg">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 heroText ">
              Julie Hansen Partnership
            </h2>
            <p className="mb-8 text-gray-700 leading-relaxed">
              An elite group of the East Bay’s most talented and visionary real
              estate professionals believed buyers and sellers deserved more
              from their real estate company. More service. More resources. More
              integrity. More global reach. In a word, more of everything people
              should expect when they buy or sell their homes.
            </p>
            <div>
              <h3 className="font-bold uppercase text-sm text-gray-800">
                Address
              </h3>
              <p className="text-gray-700">
                4733 Chabot Drive #100
                <br />
                Pleasanton, CA 94588
              </p>
              <p className="mt-2 text-gray-700">
                Julie Hansen-Orvis | CA DRE# 00934447
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:ml-16 lg:w-1/3">
            <h2 className="text-3xl font-bold mb-4 heroText text-accent-secondary bg-transparent">
              Newsletter
            </h2>
            <p className="mb-4 text-gray-700">
              Subscribe to our Newsletter for the latest news and updates. Stay
              tuned!
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-default shadow-sm"
              />
              <div className="flex items-start mb-4">
                <input type="checkbox" className="mr-2 mt-1" />
                <p className="text-xs text-gray-600 leading-relaxed">
                  By providing Julie Hansen Partnership your contact
                  information, you acknowledge and agree to our{" "}
                  <a href="#" className="underline hover:text-accent-default">
                    Privacy Policy
                  </a>{" "}
                  and consent to receiving marketing communications, including
                  through automated calls, texts, and emails, some of which may
                  use artificial or prerecorded voices...
                </p>
              </div>
              <Button
                variant="highlight"
                className="w-full text-white py-2 px-4 uppercase hover:bg-accent-light transition-colors duration-300"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto mt-10 flex flex-col lg:flex-row justify-between items-center border-t pt-6 border-gray-200">
          <div className="flex space-x-4 mb-6 lg:mb-0">
            <Button
              variant="icon"
              href="#"
              className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-transform duration-300 transform hover:scale-110"
            >
              f
            </Button>
            <Button
              variant="icon"
              href="#"
              className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-transform duration-300 transform hover:scale-110"
            >
              in
            </Button>
          </div>

          <div className="text-center lg:text-left">
            <p className="mb-4 lg:mb-0 text-gray-700">
              Website Designed & Developed by{" "}
              <a href="#" className="underline hover:text-gray-800">
                Luxury Presence
              </a>
            </p>
            <p className="mb-4 lg:mb-0 text-gray-700">
              &copy; 2024 |{" "}
              <a href="#" className="underline hover:text-gray-800">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
