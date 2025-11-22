import React, { useState } from "react";
import { HiChevronRight } from "react-icons/hi";

const categories = [
  {
    id: 1,
    title: "Visa approval",
    icon: "/logo/icon/1-2.png",
    description:
      "Гадаадын иргэнд виз олгохыг зөвшөөрч олгосон баримт бичгийг хэлнэ. Олгосон визийн зөвшөөрлийн дагуу Монгол Улсаас гадаад улсад суугаа дипломат төлөөлөгчийн газарт болон хилийн боомтод визээ даруулна.",
    subCategories: [
      {
        name: "Officially",
        icon: "../../../public/logo/category-icon/official.png",
      },
      {
        name: "Investor",
        icon: "../../../public/logo/category-icon/investor.png",
      },
      {
        name: "Employment",
        icon: "../../../public/logo/category-icon/employement.png",
      },
      {
        name: "Student",
        icon: "../../../public/logo/category-icon/student.png",
      },
      {
        name: "Family",
        icon: "../../../public/logo/category-icon/family.png",
      },
      {
        name: "Immigrant",
        icon: "../../../public/logo/category-icon/immigrant.png",
      },
      {
        name: "Religious",
        icon: "../../../public/logo/category-icon/religion.png",
      },
      {
        name: "Personal",
        icon: "../../../public/logo/category-icon/personal.png",
      },
      {
        name: "Short-term",
        icon: "../../../public/logo/category-icon/short-tirm.png",
      },
    ],
  },
  {
    id: 2,
    title: "Visa",
    icon: "/logo/icon/1-2.png",
    description:
      "Виз нь гадаадын иргэд Монгол Улсад орж ирэх, гарах эрхийг олгох баримт бичиг юм. Виз нь тодорхой хугацаатай байх бөгөөд зөвхөн нэг удаагийн аялалд хүчинтэй.",
    subCategories: [
      {
        name: "Tourist Visa",
        icon: "../../../public/logo/category-icon/personal.png",
      },
      {
        name: "Business Visa",
        icon: "../../../public/logo/category-icon/official.png",
      },
      {
        name: "Transit Visa",
        icon: "../../../public/logo/category-icon/short-tirm.png",
      },
      {
        name: "Diplomatic Visa",
        icon: "../../../public/logo/category-icon/investor.png",
      },
    ],
  },
  {
    id: 3,
    title: "Registration of a foreign national",
    icon: "../../../public/logo/category-icon/employement.png",
    description:
      "Гадаадын иргэний бүртгэл нь Монгол Улсад оршин суугаа гадаадын иргэдийн мэдээллийг бүртгэх, хянах үйлчилгээ юм.",
    subCategories: [
      {
        name: "Temporary Registration",
        icon: "../../../public/logo/category-icon/family.png",
      },
      {
        name: "Permanent Registration",
        icon: "../../../public/logo/category-icon/official.png",
      },
      {
        name: "Registration Renewal",
        icon: "../../../public/logo/category-icon/religion.png",
      },
    ],
  },
  {
    id: 4,
    title: "Reside for an official and private purpose",
    icon: "/logo/icon/4.png",
    description:
      "Албан болон хувийн зорилгоор оршин суух зөвшөөрөл авах үйлчилгээ. Гадаадын иргэд Монгол Улсад албан ёсны ажил, бизнес эсвэл хувийн зорилгоор оршин суухыг хүсэх тохиолдолд энэ үйлчилгээг ашиглана.",
    subCategories: [
      {
        name: "Official Residence",
        icon: "../../../public/logo/category-icon/student.png",
      },
      {
        name: "Private Residence",
        icon: "../../../public/logo/category-icon/official.png",
      },
      {
        name: "Business Residence",
        icon: "../../../public/logo/category-icon/personal.png",
      },
    ],
  },
  {
    id: 5,
    title: "Citizenship",
    icon: "/logo/icon/5.png",
    description:
      "Монгол Улсын иргэншил авах үйлчилгээ. Гадаадын иргэд Монгол Улсын иргэншил авах шаардлага, журмыг энэ хэсгээс мэдэх боломжтой.",
    subCategories: [
      {
        name: "Citizenship by Birth",
        icon: "../../../public/logo/category-icon/official.png",
      },
      {
        name: "Citizenship by Marriage",
        icon: "../../../public/logo/category-icon/religion.png",
      },
      {
        name: "Citizenship by Investment",
        icon: "../../../public/logo/category-icon/investor.png",
      },
      {
        name: "Dual Citizenship",
        icon: "../../../public/logo/category-icon/short-tirm.png",
      },
    ],
  },
  {
    id: 6,
    title: "Branches and representative offices",
    icon: "/logo/icon/6.png",
    description:
      "Гадаадын компаниудын Монгол Улсад салбар, төлөөлөгчийн газраа нээх, бүртгүүлэх үйлчилгээ.",
    subCategories: [
      {
        name: "Branch Registration",
        icon: "../../../public/logo/category-icon/short-tirm.png",
      },
      {
        name: "Representative Office",
        icon: "../../../public/logo/category-icon/student.png",
      },
      {
        name: "Legal Entity Registration",
        icon: "../../../public/logo/category-icon/official.png",
      },
    ],
  },
  {
    id: 7,
    title: "Adoption",
    icon: "/logo/icon/7.png",
    description:
      "Олон улсын үндэслэлээр хүүхэд үрчлэх үйлчилгээ. Гадаадын иргэд Монгол Улсын иргэдийг үрчлэх эсвэл Монгол Улсын иргэд гадаадын иргэдийг үрчлэх тохиолдолд энэ үйлчилгээг ашиглана.",
    subCategories: [
      {
        name: "Domestic Adoption",
        icon: "../../../public/logo/category-icon/religion.png",
      },
      {
        name: "International Adoption",
        icon: "../../../public/logo/category-icon/official.png",
      },
      {
        name: "Adoption Procedures",
        icon: "../../../public/logo/category-icon/immigrant.png",
      },
    ],
  },
  {
    id: 8,
    title: "Тодорхойлолт",
    icon: "../../../public/logo/icon/8.svg",
    description:
      "Тодорхойлолт үйлчилгээний тайлбар. Энэ хэсэгт төрөл бүрийн үйлчилгээний талаар дэлгэрэнгүй мэдээллийг авах боломжтой.",
    subCategories: [
      {
        name: "Service Information",
        icon: "../../../public/logo/category-icon/official.png",
      },
      {
        name: "Requirements",
        icon: "../../../public/logo/category-icon/personal.png",
      },
      {
        name: "Procedures",
        icon: "../../../public/logo/category-icon/immigrant.png",
      },
    ],
  },
];

function ServiceCategoryPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDEBAR */}
        <div className="border-r pr-4">
          <h2 className="text-2xl font-semibold mb-6">Category</h2>
          <div className="space-y-3">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
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

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-2">{activeCategory.title}</h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            {activeCategory.description}
          </p>

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">
              Apply for {activeCategory.title.toLowerCase()}
            </h3>
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">
              {activeCategory.subCategories.length} category
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
