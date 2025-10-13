import React, { useState } from "react";

const faqs = [
  {
    question: "What is Bookmark?",
    answer:
      "Bookmark is a free online tool that allows you to create and manage your bookmarks easily. It helps you organize your favorite websites and access them quickly.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "To request a new browser, you can fill out the form on our website with your name and email address. We will notify you when the new browser is available.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes, we have a mobile app available for both iOS and Android devices. You can download it from the App Store or Google Play Store.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "Bookmark is a web-based application, so it works on any device with a modern web browser. We recommend using the latest version of Chrome, Firefox, Safari, or Edge for the best experience.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto container px-6 lg:py-16 mt-24 lg:mt-10 flex flex-col items-center">
      {/* Header Text */}
      <div className="flex flex-col items-center space-y-3 max-w-2xl text-center">
        <h1 className="text-[24px] lg:text-[38px] font-semibold text-Blue950">
          Frequently Asked Questions
        </h1>
        <p className="text-Blue950 opacity-45 text-[15px] lg:text-[18px] max-w-[550px] mx-auto">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="mt-10 mx-auto max-w-xl border-t border-Blue950 border-opacity-20 w-full">
        {faqs.map((faq, index) => (
          <div
            className="border-b border-Blue950 border-opacity-20 outline-none"
            key={index}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex flex-row items-center justify-between py-5 text-left hover:text-Red400 transition-colors duration-300"
            >
              <span className="pr-4">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transform transition-transform duration-300 ${
                  openIndex === index
                    ? "rotate-180 text-Red400"
                    : "text-Blue950"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-Blue950 opacity-70 max-sm:text-[15px] pb-4">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-16">
        <a
          href="#"
          className="bg-Blue600 px-2 py-3 sm:px-7 sm:py-4 text-white rounded-md shadow-lg border-[3px] border-Blue600 hover:bg-transparent hover:text-Blue600 transition-all duration-300"
        >
          More Info
        </a>
      </div>
    </section>
  );
};

export default FAQ;
