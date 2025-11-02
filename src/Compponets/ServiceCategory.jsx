import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const services = [
  { id: 1, icon: "/icons/approval.png", title: "Visa approval" },
  { id: 2, icon: "/icons/visa.png", title: "Visa" },
  {
    id: 3,
    icon: "/icons/registration.png",
    title: "Registration of a foreign national",
  },
  {
    id: 4,
    icon: "/icons/residence.png",
    title: "Reside for an official and private purpose",
  },
  { id: 5, icon: "/icons/citizenship.png", title: "Citizenship" },
  {
    id: 6,
    icon: "/icons/branches.png",
    title: "Branches and representative offices",
  },
  { id: 7, icon: "/icons/adoption.png", title: "Adoption" },
];

function ServiceCategory() {
  const navigate = useNavigate();

  const handleRedirect = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div className="container relative bg-white mx-auto border-2 shadow-xl rounded-2xl -mt-5 z-40">
      <div className="px-7 py-10">
        <h3 className="text-2xl font-semibold md:px-5 px-0">
          Service Category
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleRedirect(service.id)}
              className="group flex justify-between items-center bg-white rounded-2xl shadow-md p-5 hover:shadow-lg cursor-pointer transition-all duration-200"
            >
              {/* Left side: icon + title */}
              <div className="items-center space-x-3">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-sm font-semibold text-gray-900">
                  {service.title}
                </h3>
                <div className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 bg-gray-100 group-hover:bg-blue-600">
                  <HiArrowRight className="text-gray-700 group-hover:text-white text-lg" />
                </div>
              </div>

              {/* Right arrow — only this changes color on hover */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceCategory;
