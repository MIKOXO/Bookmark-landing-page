import React from "react";
import HeroIllustration from "../assets/illustration-hero.svg";

const Hero = () => {
  return (
    <section className="mx-auto container px-6 lg:py-16 lg:mt-10">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="max-sm:mt-16 flex flex-col lg:items-start justify-between space-y-3 max-lg:text-center">
          <h1 className="text-[24px] lg:text-[44px] font-semibold text-Blue950 lg:w-[70%]">
            A Simple Bookmark Manager
          </h1>
          <p className="text-Blue950 opacity-45 text-[15px] lg:text-[18px] lg:w-[55%]">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-5 font-medium text-sm lg:text-[16px]">
            <a
              href="#"
              className="bg-Blue600 px-2 py-3 sm:px-7 sm:py-4 text-white rounded-md shadow-lg border-[3px] border-Blue600 hover:bg-transparent hover:text-Blue600 transition-all duration-300"
            >
              Get it on Chrome
            </a>
            <a
              href="#"
              className="bg-Grey50 px-1 py-3 sm:px-7 sm:py-4 text-Blue950 rounded-md shadow-lg border-[3px] hover:border-Blue950 hover:bg-transparent transition-all duration-300"
            >
              Get it on Firefox
            </a>
          </div>
        </div>

        {/* Illustration with curved background color*/}
        <div className="relative mx-0 mt-10 lg:mt-0">
          <div className="absolute top-6 lg:top-24 lg:right-0 max-sm:-right-6 w-[250px] h-[200px] lg:w-[500px] lg:h-[300px] bg-Blue600 rounded-l-full z-0"></div>
          <img
            src={HeroIllustration}
            alt="Hero Illustration"
            className="relative z-10 lg:w-[900px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
