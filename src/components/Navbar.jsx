import React, { useState } from "react";
import logoBookmark from "../assets/logo-bookmark.svg";
import clsx from "clsx";
import LogoFacebook from "../assets/icon-facebook.svg";
import LogoTwitter from "../assets/icon-twitter.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="mx-auto container px-6 py-4 mt-8">
      <nav className="flex flex-row items-center justify-between">
        {/* Logo */}
        <div
          className={`${
            isOpen ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300 ease-in-out`}
        >
          <img src={logoBookmark} alt="Bookmark Logo" className="lg:h-8" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-12 uppercase text-Blue950 tracking-widest">
          <li>
            <a href="#" className="hover:text-Red400 ease-in-out duration-300">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-Red400 ease-in-out duration-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-Red400 ease-in-out duration-300">
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-Red400 text-white py-3 px-10 rounded-lg shadow-lg border-[3px] border-Red400 hover:bg-white hover:text-Red400 ease-in-out duration-300"
            >
              Login
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex">
          <button
            onClick={toggleMenu}
            className={`relative w-8 h-[21px] flex flex-col justify-between items-center group ${
              isOpen ? "hidden" : "block"
            }`}
          >
            <div
              className={clsx(
                "w-8 h-[2px] bg-Blue950 transform transition duration-300 ease-in-out overflow-y-auto",
                isOpen ? "rotate-45 translate-y-[10px]" : ""
              )}
            />
            <div
              className={clsx(
                "w-8 h-[2px] bg-Blue950 transition duration-300 ease-in-out",
                isOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <div
              className={clsx(
                "w-8 h-[2px] bg-Blue950 transform transition duration-300 ease-in-out",
                isOpen ? "-rotate-45 -translate-y-[10px]" : ""
              )}
            />
          </button>

          {/* Mobile menu overlay */}
          <div
            className={clsx(
              "z-50 fixed top-0 left-0 w-full h-full pt-10 opacity-95 bg-Blue950 text-white flex flex-col items-center space-y-8 uppercase tracking-widest transition-transform duration-300 ease-in-out",
              isOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="flex flex-row items-center gap-10 justify-between">
              <img src={logoBookmark} alt="Bookmark Logo" className="h-7" />
              <button
                onClick={toggleMenu}
                className="relative -right-3 w-8 h-[21px] flex flex-col justify-between items-center group"
              >
                <div
                  className={clsx(
                    "w-8 h-[2px] bg-white transform transition duration-300 ease-in-out overflow-y-auto",
                    isOpen ? "rotate-45 translate-y-[10px]" : ""
                  )}
                />
                <div
                  className={clsx(
                    "w-8 h-[2px] bg-white transition duration-300 ease-in-out",
                    isOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <div
                  className={clsx(
                    "w-8 h-[2px] bg-white transform transition duration-300 ease-in-out",
                    isOpen ? "-rotate-45 -translate-y-[10px]" : ""
                  )}
                />
              </button>
            </div>

            <ul className="flex flex-col items-center gap-3 uppercase w-[240px] pt-4 tracking-widest">
              <li className="border-y-[0.2px] border-Grey50 w-full border-opacity-50 text-center p-4">
                <a href="#">Features</a>
              </li>
              <li className="border-b-[0.2px] border-Grey50 w-full border-opacity-50 text-center p-4">
                <a href="#">Pricing</a>
              </li>
              <li className="border-b-[0.2px] border-Grey50 w-full border-opacity-50 text-center p-4">
                <a href="#">Contact</a>
              </li>
              <li className="pt-6">
                <a
                  href="#"
                  className="text-white py-3 px-[92px] rounded-lg shadow-lg border-[2px] border-white"
                >
                  Login
                </a>
              </li>
            </ul>

            <div className="flex flex-row items-center gap-6 pt-14">
              <a href="#">
                <img src={LogoFacebook} alt="Facebook Logo" className="h-6" />
              </a>
              <a href="#">
                <img src={LogoTwitter} alt="Twitter Logo" className="h-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
