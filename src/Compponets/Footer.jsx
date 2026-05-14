import React from "react";
import { useLanguage } from "../Provider/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#034CA1] text-white">
      <div className="flex justify-between items-center md:p-4 p-1">
        <h3 className="text-sm md:text-lg">{t.footer.copyright}</h3>
        <img src="/logo/astvision.svg" alt="" className="h-5" />
      </div>
    </footer>
  );
};

export default Footer;
