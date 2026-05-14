import React, { useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useLanguage } from "../../Provider/LanguageContext";

const meta = [
  {
    icon: "/logo/icon/1-2.png",
    subIcons: [
      "/logo/category-icon/official.png",
      "/logo/category-icon/investor.png",
      "/logo/category-icon/employement.png",
      "/logo/category-icon/student.png",
      "/logo/category-icon/family.png",
      "/logo/category-icon/immigrant.png",
      "/logo/category-icon/religion.png",
      "/logo/category-icon/personal.png",
      "/logo/category-icon/short-tirm.png",
    ],
  },
  {
    icon: "/logo/icon/1-2.png",
    subIcons: [
      "/logo/category-icon/personal.png",
      "/logo/category-icon/official.png",
      "/logo/category-icon/short-tirm.png",
      "/logo/category-icon/investor.png",
    ],
  },
  {
    icon: "/logo/category-icon/employement.png",
    subIcons: [
      "/logo/category-icon/family.png",
      "/logo/category-icon/official.png",
      "/logo/category-icon/religion.png",
    ],
  },
  {
    icon: "/logo/icon/4.png",
    subIcons: [
      "/logo/category-icon/student.png",
      "/logo/category-icon/official.png",
      "/logo/category-icon/personal.png",
    ],
  },
  {
    icon: "/logo/icon/5.png",
    subIcons: [
      "/logo/category-icon/official.png",
      "/logo/category-icon/religion.png",
      "/logo/category-icon/investor.png",
      "/logo/category-icon/short-tirm.png",
    ],
  },
  {
    icon: "/logo/icon/6.png",
    subIcons: [
      "/logo/category-icon/short-tirm.png",
      "/logo/category-icon/student.png",
      "/logo/category-icon/official.png",
    ],
  },
  {
    icon: "/logo/icon/7.png",
    subIcons: [
      "/logo/category-icon/religion.png",
      "/logo/category-icon/official.png",
      "/logo/category-icon/immigrant.png",
    ],
  },
  {
    icon: "/logo/icon/8.svg",
    subIcons: [
      "/logo/category-icon/official.png",
      "/logo/category-icon/personal.png",
      "/logo/category-icon/immigrant.png",
    ],
  },
];

function ServiceCategoryPage() {
  const { t } = useLanguage();

  const categories = t.servicePage.categories.map((cat, i) => ({
    id: i + 1,
    title: cat.title,
    icon: meta[i].icon,
    description: cat.description,
    subCategories: cat.subCategories.map((name, j) => ({
      name,
      icon: meta[i].subIcons[j] || meta[i].subIcons[0],
    })),
  }));

  const [activeId, setActiveId] = useState(1);
  const activeCategory = categories.find((c) => c.id === activeId) || categories[0];

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">
              {t.servicePage.breadcrumbHome}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{t.servicePage.breadcrumb}</span>
          </nav>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="border-r pr-4">
          <h2 className="text-2xl font-semibold mb-6">{t.servicePage.category}</h2>
          <div className="space-y-3">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                  activeCategory.id === cat.id
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img src={cat.icon} alt={cat.title} className="w-10 h-10" />
                  <span>{cat.title}</span>
                </div>
                <HiChevronRight className="text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-2">{activeCategory.title}</h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            {activeCategory.description}
          </p>

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">
              {t.servicePage.applyFor(activeCategory.title)}
            </h3>
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">
              {activeCategory.subCategories.length} {t.servicePage.countLabel}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeCategory.subCategories.map((subCat, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-xl p-5 flex items-center gap-4 hover:shadow-md cursor-pointer transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <img
                    src={subCat.icon}
                    alt={subCat.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="font-medium text-blue-800">{subCat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCategoryPage;
