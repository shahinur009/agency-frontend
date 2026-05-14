import React, { useState } from 'react';
import tabData from '../Data/tabData';
import { useLanguage } from '../Provider/LanguageContext';

const VisaInfoTabs = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(t.tabs[0].id);

  const meta = tabData.find((tab) => tab.id === activeTab) || tabData[0];
  const currentContent = t.tabs.find((tab) => tab.id === activeTab) || t.tabs[0];

  return (
    <div className="lg:p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row container w-full overflow-hidden">
        <div className="md:w-1/2 w-full p-3 flex items-center justify-center ">
          {meta && (
            <img
              src={meta.imageUrl}
              alt={meta.imageAlt}
              className="max-w-full h-auto object-contain"
            />
          )}
        </div>

        <div className="md:w-1/2 w-full md:p-5 p-3">
          <div className="flex flex-wrap lg:grid-cols-3 space-x-3 mb-6 gap-2">
            {t.tabs.map((tab) => (
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
