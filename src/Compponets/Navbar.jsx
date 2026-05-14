import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import logo from "/logo/logo-light.png";
import { AiOutlineFilePdf } from "react-icons/ai";
import { useLanguage } from "../Provider/LanguageContext";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const navbarBgColor = isHomePage ? "bg-[#262265]" : "bg-white";
  const textColor = isHomePage ? "text-white" : "text-black";

  return (
    <>
      {/* ================= DESKTOP HEADER ================= */}
      <div
        className={`hidden lg:flex w-full h-[90px] items-center px-6 justify-between ${navbarBgColor} ${textColor}`}
      >
        {/* Left Nav */}
        <div className="flex items-center gap-8">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[72px] h-[72px]" />
          </Link>
          <Link
            to="/"
            className={`uppercase hover:opacity-80 transition-opacity ${textColor}`}
          >
            {t.nav.home}
          </Link>
          <Link
            to="/service"
            className={`uppercase hover:opacity-80 transition-opacity ${textColor}`}
          >
            {t.nav.service}
          </Link>
          <Link
            to="/faq"
            className={`uppercase hover:opacity-80 transition-opacity ${textColor}`}
          >
            {t.nav.faq}
          </Link>
          <Link
            to="/contact"
            className={`uppercase hover:opacity-80 transition-opacity ${textColor}`}
          >
            {t.nav.contact}
          </Link>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <button className="bg-[#00acef] px-3 py-2 rounded-md flex items-center gap-2 text-white hover:bg-[#0099d6] transition-colors">
              <AiOutlineFilePdf />
              {t.nav.manuals}
            </button>
          </div>
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="bg-[#00acef] px-3 py-2 rounded-md flex items-center gap-2 text-white hover:bg-[#0099d6] transition-colors"
            >
              <TfiWorld />
              {lang}
              <IoIosArrowDown />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-1 bg-white text-black rounded shadow-md w-24 border border-gray-200 z-50">
                <button
                  onClick={() => {
                    setLang("EN");
                    setIsLangOpen(false);
                  }}
                  className="w-full px-3 py-2 flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <TfiWorld /> EN
                </button>
                <button
                  onClick={() => {
                    setLang("MN");
                    setIsLangOpen(false);
                  }}
                  className="w-full px-3 py-2 flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <TfiWorld /> MN
                </button>
              </div>
            )}
          </div>

          <Link
            to="/login"
            className="bg-[#034ca1] px-4 py-2 rounded-md font-medium text-white hover:bg-[#023b7d] transition-colors"
          >
            {t.nav.login}
          </Link>
        </div>
      </div>

      {/* ================= MOBILE HEADER ================= */}
      <div
        className={`lg:hidden w-full h-[90px] px-4 flex items-center justify-between relative ${navbarBgColor} ${textColor}`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="hover:opacity-80 transition-opacity"
        >
          <FaBars className="text-2xl" />
        </button>

        <Link to="/" className="absolute left-1/4 transform -translate-x-1/2">
          <img src={logo} alt="logo" className="w-[60px] h-[60px]" />
        </Link>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="bg-[#00acef] px-3 py-2 rounded-md flex items-center gap-1 text-white hover:bg-[#0099d6] transition-colors"
            >
              <TfiWorld />
              {lang}
              <IoIosArrowDown />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-1 bg-white text-black rounded shadow-md w-24 border border-gray-200 z-50">
                <button
                  onClick={() => {
                    setLang("EN");
                    setIsLangOpen(false);
                  }}
                  className="w-full px-3 py-2 flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <TfiWorld /> EN
                </button>
                <button
                  onClick={() => {
                    setLang("MN");
                    setIsLangOpen(false);
                  }}
                  className="w-full px-3 py-2 flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <TfiWorld /> MN
                </button>
              </div>
            )}
          </div>

          <Link
            to="/login"
            className="bg-[#034ca1] px-3 py-2 rounded-md text-white hover:bg-[#023b7d] transition-colors"
          >
            {t.nav.login}
          </Link>
        </div>
      </div>

      {/* ================= MOBILE DROPDOWN MENU ================= */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden px-4 py-6 space-y-4 ${navbarBgColor} border-t ${
            isHomePage ? "border-gray-600" : "border-gray-300"
          }`}
        >
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block hover:opacity-80 transition-opacity py-2 ${textColor}`}
          >
            {t.nav.home}
          </Link>
          <Link
            to="/service"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block hover:opacity-80 transition-opacity py-2 ${textColor}`}
          >
            {t.nav.service}
          </Link>
          <Link
            to="/faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block hover:opacity-80 transition-opacity py-2 ${textColor}`}
          >
            {t.nav.faq}
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block hover:opacity-80 transition-opacity py-2 ${textColor}`}
          >
            {t.nav.contact}
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
