import React, { useMemo, useState, useEffect, useRef } from "react";
import bannerVideo from "../../public/logo/cover1.mp4";
import countryList from "react-select-country-list";
import { IoIosArrowDown } from "react-icons/io";

function Banner() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryQuery, setCountryQuery] = useState("");
  const [showCountryList, setShowCountryList] = useState(false);

  const [selectedPurpose, setSelectedPurpose] = useState("");
  const [purposeQuery, setPurposeQuery] = useState("");
  const [showPurposeList, setShowPurposeList] = useState(false);

  const [isSearching, setIsSearching] = useState(false);

  const countryRef = useRef(null);
  const purposeRef = useRef(null);

  const countries = useMemo(() => countryList().getData(), []);
  const purposes = [
    { value: "student", label: "Student" },
    { value: "family", label: "Family" },
    { value: "immigrant", label: "Immigrant" },
    { value: "work", label: "Employment" },
    { value: "religious", label: "Religious" },
    { value: "tourism", label: "Tourism" },
    { value: "personal", label: "Personal" },
    { value: "short-term", label: "Short-term" },
    {
      value: "Визгүй зорчих улсын иргэн ",
      label: "Визгүй зорчих улсын иргэн ",
    },
  ];

  const handleSearch = () => {
    if (!selectedCountry || !selectedPurpose) {
      console.warn("Please select both country and purpose.");
      return;
    }
    setIsSearching(true);
    console.log(`Searching visa for ${selectedCountry} for ${selectedPurpose}`);
    setTimeout(() => {
      setIsSearching(false);
      console.log("Search complete.");
    }, 1500);
  };

  // Filtered data
  const filteredCountries = countries.filter((c) =>
    c.label.toLowerCase().includes(countryQuery.toLowerCase())
  );
  const filteredPurposes = purposes.filter((p) =>
    p.label.toLowerCase().includes(purposeQuery.toLowerCase())
  );

  // 🔒 Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (countryRef.current && !countryRef.current.contains(e.target)) {
        setShowCountryList(false);
      }
      if (purposeRef.current && !purposeRef.current.contains(e.target)) {
        setShowPurposeList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden py-4 md:py-10 container">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bannerVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full pt-20">
        <div className="text-center text-white px-4 mb-4 md:mb-12 space-y-4">
          <h1 className="text-2xl md:text-4xl font-semibold drop-shadow-lg leading-tight">
            Which visa category is right for you?
          </h1>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto drop-shadow">
            You can quickly and easily find the visa information that suits you
            below.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 bg-transparent">
            {/* Country Input */}
            <div ref={countryRef} className="relative flex-1">
              <input
                type="text"
                value={countryQuery || selectedCountry}
                onChange={(e) => {
                  setCountryQuery(e.target.value);
                  setShowCountryList(true);
                }}
                onFocus={() => setShowCountryList(true)}
                placeholder="Select country"
                className="block w-full text-lg py-2 pl-6 pr-12 border-none bg-white rounded-xl shadow-2xl appearance-none focus:outline-none focus:ring-4 focus:ring-cyan-500/50 cursor-text"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
                onClick={() => setShowCountryList((prev) => !prev)}
              >
                <IoIosArrowDown />
              </div>

              {showCountryList && (
                <ul className="absolute z-50 w-full max-h-56 overflow-y-auto bg-white shadow-xl rounded-xl mt-2 border border-gray-200">
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                      <li
                        key={country.value}
                        onClick={() => {
                          setSelectedCountry(country.label);
                          setCountryQuery(country.label);
                          setShowCountryList(false);
                        }}
                        className="px-4 py-2 hover:bg-cyan-100 cursor-pointer text-gray-700"
                      >
                        {country.label}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-400">
                      No country found
                    </li>
                  )}
                </ul>
              )}
            </div>

            {/* Purpose Input */}
            <div ref={purposeRef} className="relative flex-1">
              <input
                type="text"
                value={purposeQuery || selectedPurpose}
                onChange={(e) => {
                  setPurposeQuery(e.target.value);
                  setShowPurposeList(true);
                }}
                onFocus={() => setShowPurposeList(true)}
                placeholder="Purpose of trip"
                className="block w-full text-lg py-2 pl-6 pr-12 border-none bg-white rounded-xl shadow-2xl appearance-none focus:outline-none focus:ring-4 focus:ring-cyan-500/50 cursor-text"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
                onClick={() => setShowPurposeList((prev) => !prev)}
              >
                <IoIosArrowDown />
              </div>

              {showPurposeList && (
                <ul className="absolute z-50 w-full max-h-56 overflow-y-auto bg-white shadow-xl rounded-xl mt-2 border border-gray-200">
                  {filteredPurposes.length > 0 ? (
                    filteredPurposes.map((p) => (
                      <li
                        key={p.value}
                        onClick={() => {
                          setSelectedPurpose(p.label);
                          setPurposeQuery(p.label);
                          setShowPurposeList(false);
                        }}
                        className="px-4 py-2 hover:bg-cyan-100 cursor-pointer text-gray-700"
                      >
                        {p.label}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-400">
                      No purpose found
                    </li>
                  )}
                </ul>
              )}
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              disabled={isSearching}
              className={`w-full md:w-auto text-lg font-bold py-2 px-10 rounded-xl shadow-2xl transform transition-all duration-300 ${
                isSearching
                  ? "bg-cyan-600/70 text-white cursor-not-allowed"
                  : "bg-cyan-500 hover:bg-cyan-400 text-white hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              }`}
            >
              {isSearching ? "Searching..." : "Check"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
