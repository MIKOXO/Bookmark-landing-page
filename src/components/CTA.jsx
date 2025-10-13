import React, { useState } from "react";
import iconError from "../assets/icon-error.svg";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    } else {
      setError(false);
      setEmail("");
      alert("Thank you for contacting us!");
    }
  };

  return (
    <section className="bg-Blue600 p-8 lg:py-16 mt-24 lg:mt-10 flex flex-col items-center text-center">
      <div className="text-white">
        <h3 className="uppercase tracking-[5px] text-[15px]">
          35,000+ already joined
        </h3>
        <h1 className="mt-6 text-[24px] sm:text-[32px] max-w-[450px] mx-auto font-semibold">
          Stay up-to-date with what we’re doing
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-7 flex flex-col md:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
        >
          <div className="relative w-full">
            <div
              className={`rounded-lg overflow-hidden transition ${
                error ? "bg-Red400" : "bg-white"
              }`}
            >
              <div className="relative">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="example@email.com"
                  className={`sm:w-[400px] px-5 py-4 rounded-lg text-Blue950 outline-none ${
                    error ? "border-Red400" : "border-transparent"
                  } border-2`}
                />
                {/* Error State */}
                {error && (
                  <div className="absolute right-4 top-4 text-white ">
                    <img src={iconError} alt="Error Icon" className="inline" />
                  </div>
                )}
              </div>
              {error && (
                <p className="bg-Red400 text-white text-xs italic py-2 px-3 text-left">
                  Whoops, make sure it’s an email
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className=" bg-Red400 text-white sm:w-[200px] p-[15px] rounded-lg shadow-lg border-[3px] border-Red400 hover:bg-white hover:text-Red400 ease-in-out duration-300"
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
