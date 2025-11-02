import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import logo from "../../public/logo/logo-light.png";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";

function Navbar({ cartItemsCount }) {
  // Receive cartItemsCount as a prop
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [lang, setLang] = useState("EN");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "EN" ? "MN" : "EN"));
  };

  return (
    <>
      <div className="z-50 w-full bg-[#262265]">
        <div className="w-full flex items-center justify-between top-0 left-0 px-4 h-[90px]">
          {/* left side */}
          <div className="flex justify-center items-center gap-8 font-medium text-white">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="logo" className="w-[72px] h-[72px]" />
            </Link>
            <Link to="/" className="flex items-center uppercase">
              <h3>Home</h3>
            </Link>
            <Link to="/service" className="flex items-center uppercase">
              <h3>Service</h3>
            </Link>
            <Link to="/faq" className="flex items-center uppercase">
              <h3>Faq</h3>
            </Link>
            <Link to="/contact" className="flex items-center uppercase">
              <h3>contact</h3>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-5 flex-grow justify-end text-white">
            {/* right side */}
            <Link
              to="/login"
              className="bg-[#00acef] px-3 py-2 rounded-md flex justify-center items-center gap-2"
            >
              <span className="ant-btn-icon">
                <span
                  role="img"
                  aria-label="file-pdf"
                  className="anticon anticon-file-pdf"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="file-pdf"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M531.3 574.4l.3-1.4c5.8-23.9 13.1-53.7 7.4-80.7-3.8-21.3-19.5-29.6-32.9-30.2-15.8-.7-29.9 8.3-33.4 21.4-6.6 24-.7 56.8 10.1 98.6-13.6 32.4-35.3 79.5-51.2 107.5-29.6 15.3-69.3 38.9-75.2 68.7-1.2 5.5.2 12.5 3.5 18.8 3.7 7 9.6 12.4 16.5 15 3 1.1 6.6 2 10.8 2 17.6 0 46.1-14.2 84.1-79.4 5.8-1.9 11.8-3.9 17.6-5.9 27.2-9.2 55.4-18.8 80.9-23.1 28.2 15.1 60.3 24.8 82.1 24.8 21.6 0 30.1-12.8 33.3-20.5 5.6-13.5 2.9-30.5-6.2-39.6-13.2-13-45.3-16.4-95.3-10.2-24.6-15-40.7-35.4-52.4-65.8zM421.6 726.3c-13.9 20.2-24.4 30.3-30.1 34.7 6.7-12.3 19.8-25.3 30.1-34.7zm87.6-235.5c5.2 8.9 4.5 35.8.5 49.4-4.9-19.9-5.6-48.1-2.7-51.4.8.1 1.5.7 2.2 2zm-1.6 120.5c10.7 18.5 24.2 34.4 39.1 46.2-21.6 4.9-41.3 13-58.9 20.2-4.2 1.7-8.3 3.4-12.3 5 13.3-24.1 24.4-51.4 32.1-71.4zm155.6 65.5c.1.2.2.5-.4.9h-.2l-.2.3c-.8.5-9 5.3-44.3-8.6 40.6-1.9 45 7.3 45.1 7.4zm191.4-388.2L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"></path>
                  </svg>
                </span>
              </span>
              Manuals and instructions
            </Link>
            <Link to="" className="bg-[#00acef] rounded-md font-medium">
              <div className="relative inline-block text-right">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="bg-[#00acef] px-3 py-2 rounded-md flex items-center gap-2 text-white"
                >
                  <TfiWorld className="text-lg" />
                  {lang} <IoIosArrowDown />
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-1 w-28 bg-white rounded-md shadow-lg">
                    <button
                      onClick={() => {
                        setLang("EN");
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center gap-1 px-3 py-2  w-full text-black"
                    >
                      <TfiWorld /> EN
                    </button>
                    <button
                      onClick={() => {
                        setLang("MN");
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center gap-1 px-3 py-2  w-full text-black"
                    >
                      <TfiWorld /> MN
                    </button>
                  </div>
                )}
              </div>
            </Link>
            <Link to="/login" className="bg-[#034ca1] hover:bg-[#3468a3] rounded-md px-3 py-2 font-medium">
              <h3>Login In</h3>
            </Link>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FaBars className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Hamburger Mobile view */}
      {isMenuOpen && (
        <div className="absolute top-20 right-4 bg-gray-800 shadow-lg rounded-md z-50 w-11/12 max-w-xs md:hidden">
          <ul className="flex flex-col items-start p-4 space-y-3">
            <li>
              <Link
                to="/login"
                className="block text-white hover:text-[#dc590d] transition-colors duration-300 w-full py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
