import React, { useState } from "react";
import illustrationTab1 from "../assets/illustration-features-tab-1.svg";
import illustrationTab2 from "../assets/illustration-features-tab-2.svg";
import illustrationTab3 from "../assets/illustration-features-tab-3.svg";

const tabs = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

const features = [
  {
    id: 0,
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: illustrationTab1,
  },
  {
    id: 1,
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: illustrationTab2,
  },
  {
    id: 2,
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: illustrationTab3,
  },
];

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="mx-auto container px-6 lg:py-16 mt-24 lg:mt-10 flex flex-col items-center">
      {/* Header Text */}
      <div className="flex flex-col items-center space-y-3 max-w-2xl text-center">
        <h1 className="text-[24px] lg:text-[38px] font-semibold text-Blue950">
          Features
        </h1>
        <p className="text-Blue950 opacity-45 text-[15px] lg:text-[18px] max-w-[550px] mx-auto">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-16 border-b flex justify-center flex-wrap gap-4 sm:gap-20 relative">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative pb-4 transition-colors duration-300 lg:w-[250px] text-Blue950 text-[18px] ${
              activeTab === index
                ? "opacity-100 border-b-4 border-Red400 font-semibold"
                : "opacity-65 hover:text-softRed border-b-4 border-transparent hover:text-Red400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Features Content */}
      <div className="mt-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Left Content/ Image */}
        <div className="relative lg:right-28 flex justify-center">
          <div className="absolute -left-20 -bottom-10 w-[120%] h-[80%] bg-Blue600 rounded-r-full -z-10"></div>
          <img
            src={features[activeTab].image}
            alt={features[activeTab].title}
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Right Content/ Text */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h3 className="text-[24px] lg:text-[38px] font-semibold text-Blue950">
            {features[activeTab].title}
          </h3>
          <p className="text-Blue950 opacity-45 text-[15px] lg:text-[18px] max-w-md mx-auto lg:mx-0 pb-10">
            {features[activeTab].description}
          </p>
          <a
            href="#"
            className="max-sm:hidden bg-Blue600 px-2 py-3 sm:px-7 sm:py-4 text-white rounded-md shadow-lg border-[3px] border-Blue600 hover:bg-transparent hover:text-Blue600 transition-all duration-300"
          >
            More Info
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
