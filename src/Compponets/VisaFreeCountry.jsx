import React, { useState } from "react";
import countryData from "../Data/countryData";

const continents = ["Asia", "Africa", "Oceania", "Americas", "Europe"];

function VisaFreeCountry() {
  const [activeTab, setActiveTab] = useState("Asia");

  // Filter countries by continent
  const filteredCountries = countryData.filter(
    (country) => country.continent === activeTab
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Visa free countries
      </h2>

      {/* Tabs */}
      <div className="flex space-x-2 mb-8 bg-white p-1 rounded-lg shadow-sm w-fit">
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
            {continent}
          </button>
        ))}
      </div>

      {/* Country Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredCountries.map((country) => (
          <div
            key={country.name}
            className="bg-white p-4 rounded-xl shadow-md flex items-center cursor-pointer gap-4 transition duration-300 hover:shadow-lg hover:ring-2 hover:ring-blue-500 hover:scale-[1.02]"
          >
            <img
              src={country.img}
              alt={country.name}
              className="h-10 w-12 rounded-lg object-cover"
            />
            <p className="font-semibold text-gray-800">{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VisaFreeCountry;
