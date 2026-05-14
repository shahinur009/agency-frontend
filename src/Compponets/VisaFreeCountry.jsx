import React, { useState } from "react";
import countryData from "../Data/countryData";
import { HiArrowRight } from "react-icons/hi";
import { useLanguage } from "../Provider/LanguageContext";

const continents = ["Asia", "Africa", "Oceania", "Americas", "Europe"];

function VisaFreeCountry() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("Asia");

  const filteredCountries = countryData.filter(
    (country) => country.continent === activeTab
  );

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12">
      <svg
        className="w-24 h-24 text-gray-300 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="text-gray-500 text-lg font-medium">{t.visaFree.noData}</p>
      <p className="text-gray-400 text-sm mt-2">
        {t.visaFree.noFound(t.visaFree.continents[activeTab])}
      </p>
    </div>
  );

  return (
    <div className="lg:p-6 p-2 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        {t.visaFree.heading}
      </h2>

      <div className="flex flex-wrap space-x-2 mb-8 bg-white p-1 rounded-lg shadow-sm w-fit">
        {continents.map((continent) => (
          <button
            key={continent}
            onClick={() => setActiveTab(continent)}
            className={`px-4 py-2 text-sm rounded-lg transition duration-150 ${
              activeTab === continent
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {t.visaFree.continents[continent]}
          </button>
        ))}
      </div>

      {filteredCountries.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCountries.map((country) => (
            <div
              key={country.name}
              className="group bg-white p-4 rounded-xl shadow-md flex items-center justify-between cursor-pointer transition duration-300 hover:shadow-lg hover:ring-2 hover:ring-blue-500 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 flex-1">
                <img
                  src={country.img}
                  alt={country.name}
                  className="h-10 w-12 rounded-lg object-cover"
                />
                <p className="font-semibold text-gray-800">
                  {lang === "MN" ? country.nameMN : country.name}
                </p>
              </div>

              <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg ml-2">
                <div className="absolute inset-0 bg-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                <HiArrowRight className="relative z-10 text-gray-700 group-hover:text-white text-xl transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

export default VisaFreeCountry;
