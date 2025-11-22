
import React, { useState } from 'react';
import tabData from '../Data/tabData';

const VisaInfoTabs = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id); 

  const currentContent = tabData.find(tab => tab.id === activeTab);

  return (
    <div className="lg:p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row container w-full overflow-hidden">
        {/* Left Section: Image */}
        <div className="md:w-1/2 w-full p-3 flex items-center justify-center ">
          {currentContent && (
            <img
              src={currentContent.imageUrl}
              alt={currentContent.imageAlt}
              className="max-w-full h-auto object-contain"
            />
          )}
        </div>

        {/* Right Section: Content */}
        <div className="md:w-1/2 w-full md:p-5 p-3">
          {/* Tab Buttons */}
          <div className="flex flex-wrap lg:grid-cols-3 space-x-3 mb-6 gap-2">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  p-3 rounded-xl font-medium transition duration-300 ease-in-out text-[17px]
                  ${activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {tab.tabName}
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          {currentContent && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {currentContent.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {currentContent.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisaInfoTabs;