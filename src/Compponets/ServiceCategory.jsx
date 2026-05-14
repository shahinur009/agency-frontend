import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../Provider/LanguageContext";

const icons = [
  "/logo/icon/1-2.png",
  "/logo/icon/1-2.png",
  "/logo/icon/3.png",
  "/logo/icon/4.png",
  "/logo/icon/5.png",
  "/logo/icon/6.png",
  "/logo/icon/7.png",
];

function ServiceCategory() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleRedirect = (id) => {
    navigate(`/service/${id}`);
  };

  const services = t.serviceCategory.items.map((title, i) => ({
    id: i + 1,
    icon: icons[i],
    title,
  }));

  return (
    <div className="container relative bg-white mx-auto border-2 shadow-xl rounded-2xl -mt-5 z-40">
      <div className="px-7 py-10">
        <h3 className="text-2xl font-semibold md:px-5 px-0">
          {t.serviceCategory.heading}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleRedirect(service.id)}
              className="group relative flex justify-between items-center bg-white rounded-2xl shadow-md py-3 pl-3 pr-2 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>

              <div className="relative w-14 h-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 translate-x-[120%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                <HiArrowRight className="relative z-10 text-gray-700 group-hover:text-white text-xl transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceCategory;
