import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../Provider/LanguageContext";

function FAQPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("general");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const items = t.faqPage.data[activeTab] || [];

  return (
    <div className="min-h-screen bg-white ">
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">
              {t.faqPage.breadcrumbHome}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{t.faqPage.breadcrumb}</span>
          </nav>
        </div>
      </div>

      <div className="container px-4 py-8 max-w-4xl mx-auto">
        <div className="border-b border-gray-200 mb-8">
          <div className="flex space-x-8 overflow-x-auto">
            {t.faqPage.tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setOpenItems({});
                }}
                className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.key
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-6 text-left flex items-center justify-between hover:bg-gray-50 px-4 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`transform transition-transform ${
                      openItems[index] ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="right"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="text-gray-400"
                    >
                      <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900 text-left text-xs md:text-sm ">
                    {item.question}
                  </span>
                </div>
              </button>

              {openItems[index] && item.answer && (
                <div className="px-4 pb-6 ml-8">
                  <div
                    className="text-gray-700 leading-relaxed prose prose-sm max-w-none text-xs md:text-sm "
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
