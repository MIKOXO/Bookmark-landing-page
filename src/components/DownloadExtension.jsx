import React from "react";
import logoChrome from "../assets/logo-chrome.svg";
import logoFirefox from "../assets/logo-firefox.svg";
import logoOpera from "../assets/logo-opera.svg";
import bgDots from "../assets/bg-dots.svg";

const browsers = [
  {
    id: 1,
    name: "Add to Chrome",
    version: "Minimum version 62",
    logo: logoChrome,
  },
  {
    id: 2,
    name: "Add to Firefox",
    version: "Minimum version 55",
    logo: logoFirefox,
  },
  {
    id: 3,
    name: "Add to Opera",
    version: "Minimum version 46",
    logo: logoOpera,
  },
];

const DownloadExtension = () => {
  return (
    <section className="mx-auto container px-6 lg:py-16 mt-24 lg:mt-10 flex flex-col items-center">
      {/* Header Text */}
      <div className="flex flex-col items-center space-y-3 max-w-2xl text-center">
        <h1 className="text-[24px] lg:text-[38px] font-semibold text-Blue950">
          Download the extension
        </h1>
        <p className="text-Blue950 opacity-45 text-[15px] lg:text-[18px] max-w-[550px] mx-auto">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      {/* Browser Logos */}
      <div className="flex flex-col md:flex-row gap-8 mt-10">
        {browsers.map((browser, index) => (
          <div
            key={browser.id}
            className={`bg-white mb-10 shadow-lg rounded-xl p-3 max-w-xs pt-10 flex flex-col items-center justify-center ${
              index == 1
                ? "md:translate-y-[40px]"
                : index == 2
                ? "md:translate-y-[80px]"
                : ""
            }`}
          >
            <img src={browser.logo} alt={browser.name} className="w-30 h-30" />
            <h2 className="mt-5 text-Blue950 text-[24px] font-bold">
              {browser.name}
            </h2>
            <span className="text-Blue950 opacity-45 mb-10">
              {browser.version}
            </span>
            <img src={bgDots} className="pb-5" />

            <a
              href="#"
              className="mb-3 bg-Blue600 px-2 py-3 sm:px-10 sm:py-3 text-white rounded-md shadow-lg border-[3px] border-Blue600 hover:bg-transparent hover:text-Blue600 transition-all duration-300"
            >
              Add & Install Extension
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DownloadExtension;
