import React from "react";
import logo from "../../public/logo/logo-light.png";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#034CA1] text-white">
        <div className="flex justify-between items-center p-4">
          <h3>© 2025 - DEPARTMENT OF FOREIGN CITIZENS AND CITIZENS</h3>
          <img src="../../public/logo/astvision.svg" alt="" className="h-5" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
