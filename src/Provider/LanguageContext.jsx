import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

const translations = {
  EN: {
    nav: {
      home: "Home",
      service: "Service",
      faq: "FAQ",
      contact: "Contact",
      manuals: "Manuals and instructions",
      login: "Log In",
    },
    login: {
      title: "LOG IN",
      options: [
        "Mongolian national log in",
        "Mongolian legal entity log in",
        "Foreign national login",
        "NGO Branch, Alternative Log in",
        "Registration of foreign nationals within 48 hours",
        "Citizenship login",
        "Foreign embassy",
      ],
      footer: "DEPARTMENT OF FOREIGN CITIZENS AND CITIZENS",
      modalTitle: "SELECT LOGIN TYPE",
      modalDan: "Log in via DAN system",
      modalInfo: "Log in with your information",
    },
    banner: {
      heading: "Which visa category is right for you?",
      subheading:
        "You can quickly and easily find the visa information that suits you below.",
      country: "Select country",
      purpose: "Purpose of trip",
      check: "Check",
      searching: "Searching...",
      noCountry: "No country found",
      noPurpose: "No purpose found",
      purposes: {
        student: "Student",
        family: "Family",
        immigrant: "Immigrant",
        work: "Employment",
        religious: "Religious",
        tourism: "Tourism",
        personal: "Personal",
        shortTerm: "Short-term",
        visaFree: "Visa-free traveler",
      },
    },
    serviceCategory: {
      heading: "Service Category",
      items: [
        "Visa approval",
        "Visa",
        "Registration of a foreign national",
        "Reside for an official and private purpose",
        "Citizenship",
        "Branches and representative offices",
        "Adoption",
      ],
    },
    visaFree: {
      heading: "Visa free countries",
      continents: {
        Asia: "Asia",
        Africa: "Africa",
        Oceania: "Oceania",
        Americas: "Americas",
        Europe: "Europe",
      },
      noData: "No Data",
      noFound: (c) => `No countries found for ${c}`,
    },
    tabs: [
      {
        id: "visaPermission",
        tabName: "Visa permission",
        title: "Reside for an official and private purpose",
        description:
          "'Visa permit' means a document issued by the state administrative organization in charge of foreign affairs, or the central state administrative authority in charge of foreign affairs, to diplomatic missions abroad from Mongolia, or to branches of the state administrative organization in charge of foreign citizens, to issue visas to foreigners. Requests for visa approval are made by the inviting party",
      },
      {
        id: "visa",
        tabName: "Visa",
        title: "Easy application for various visa types",
        description:
          "Visa means permission to enter Mongolia and stay in Mongolia for a certain period of time, issued by an authorized organization. Mongolia issues 64 categories of visas with or without visa authorization. Visas are available in electronic and paper formats, and e-visas can be obtained without an invitation. Temporary visitor visas valid for up to 90 days can be extended once for up to 30 days.",
      },
      {
        id: "extension",
        tabName: "Reside for an official and private purpose",
        title: "Extend your stay in Mongolia",
        description:
          'A foreign citizen or a person related to him who comes to Mongolia for a stay of more than 91 days is called a "resident for the purpose of residence" and must obtain a residence permit. The request for a residence permit will be submitted within 21 days from the date of entry into Mongolia, and a residence permit will be issued for a period of up to 5 years. Also, temporary visitors of certain categories who will stay for up to 90 years can obtain a residence permit in the specified category.',
      },
    ],
    servicePage: {
      breadcrumbHome: "Home",
      breadcrumb: "Service category",
      category: "Category",
      applyFor: (t) => `Apply for ${t.toLowerCase()}`,
      countLabel: "category",
      categories: [
        {
          title: "Visa approval",
          description:
            "A document issued to allow a visa to be granted to a foreign national. Based on the visa approval, the visa is affixed at the Mongolian diplomatic mission abroad or at the border checkpoint.",
          subCategories: [
            "Officially",
            "Investor",
            "Employment",
            "Student",
            "Family",
            "Immigrant",
            "Religious",
            "Personal",
            "Short-term",
          ],
        },
        {
          title: "Visa",
          description:
            "A visa is a document granting a foreign national the right to enter and leave Mongolia. A visa is valid for a specified period and only for a single trip.",
          subCategories: [
            "Tourist Visa",
            "Business Visa",
            "Transit Visa",
            "Diplomatic Visa",
          ],
        },
        {
          title: "Registration of a foreign national",
          description:
            "Service for registering and tracking information of foreign nationals residing in Mongolia.",
          subCategories: [
            "Temporary Registration",
            "Permanent Registration",
            "Registration Renewal",
          ],
        },
        {
          title: "Reside for an official and private purpose",
          description:
            "Service for obtaining residence permits for official or private purposes. Used when foreign nationals seek to reside in Mongolia for official work, business, or personal reasons.",
          subCategories: [
            "Official Residence",
            "Private Residence",
            "Business Residence",
          ],
        },
        {
          title: "Citizenship",
          description:
            "Service for obtaining Mongolian citizenship. Foreign nationals can find requirements and procedures for Mongolian citizenship here.",
          subCategories: [
            "Citizenship by Birth",
            "Citizenship by Marriage",
            "Citizenship by Investment",
            "Dual Citizenship",
          ],
        },
        {
          title: "Branches and representative offices",
          description:
            "Service for foreign companies opening and registering branches and representative offices in Mongolia.",
          subCategories: [
            "Branch Registration",
            "Representative Office",
            "Legal Entity Registration",
          ],
        },
        {
          title: "Adoption",
          description:
            "International adoption service. Used when foreign nationals adopt Mongolian citizens, or when Mongolian citizens adopt foreign nationals.",
          subCategories: [
            "Domestic Adoption",
            "International Adoption",
            "Adoption Procedures",
          ],
        },
        {
          title: "Certificate",
          description:
            "Certificate service description. Detailed information about various services is available here.",
          subCategories: [
            "Service Information",
            "Requirements",
            "Procedures",
          ],
        },
      ],
    },
    faqPage: {
      breadcrumbHome: "Home",
      breadcrumb: "FAQ",
      tabs: [
        { key: "general", label: "General" },
        { key: "visa_approval", label: "Visa approval" },
        { key: "visa", label: "Visa" },
        { key: "registration", label: "Registration of a foreign national" },
        {
          key: "residency",
          label: "Reside for an official and private purpose",
        },
      ],
      data: {
        general: [
          {
            question: "Who is considered a related person?",
            answer:
              "Not allowed. A residence permit will not be issued or extended if the foreign national is not present in Mongolia.",
          },
          {
            question: "What is address verification?",
            answer: `<p style="text-align: justify;">The citizen, enterprise, or organization providing housing to the foreign national must verify the address at which the foreign national will arrive using the following documents.</p>
<ol>
</br>
<li style="text-align: justify;">Hotel, resort, camp, or guesthouse booking confirmation and payment receipt for accommodation in Mongolia;</li>
</br>
<li style="text-align: justify;">For a citizen providing housing: a confirmation letter, copy of national ID (for foreigners, a passport copy), and supporting documents for the address mentioned (real estate certificate, lease agreement);</li>
</br>
<li style="text-align: justify;">If a tourism organization provides services, the travel route, accommodation and camping point address, and location information must be submitted by official letter;</li>
</br>
<li style="text-align: justify;">For foreign nationals coming to work in rural areas, the inviting organization must include detailed address information, worker housing, camp location, ger/container numbers, etc., in the official letter.</li>
</ol>
</br>
<p style="text-align: justify;">Note that submitting requests without meeting the above requirements or using false address registration may result in refusal to issue a visa or visa approval, or cancellation of an issued visa.</p>`,
          },
          {
            question: "Can I receive documents by delivery?",
            answer: `<p style="text-align: justify;">If the foreign national, the inviting citizen, enterprise, or organization makes a request, the residence ID can be delivered within Ulaanbaatar using "Chamdaa" LLC's mail delivery service for newly issued or extended residence permits. (If the delivery service is selected at the time of application.)</p>`,
          },
          {
            question:
              "Where can a foreign national obtain a border exit certificate?",
            answer:
              "Can the residence permit type of an employed foreign national be transferred to executive director (B2) of a foreign-invested enterprise? </br></br><strong>Not possible.</strong> The form of an employed resident foreign national cannot be transferred to any form other than the investor form of a foreign-invested enterprise. In other words, without leaving Mongolia, the employed foreign national can only transfer to the B1 form.",
          },
          {
            question:
              "What if the 'continue' button does not activate during application, or pressing it does not proceed?",
            answer:
              "<strong>Not possible.</strong> A residence ID acts like an exit visa, so you cannot cross the border without carrying it. Foreign nationals with a Mongolian residence permit can only cross the border using their residence ID or with an \"...until\" exit stamp.",
          },
          {
            question:
              "How to cancel an application? What is the processing time?",
            answer:
              "What should I do to obtain a residence permit cancellation certificate? </br></br>For an organization, submit an official request; for an individual, an application; a copy of the foreign national's passport; payment receipt of 2,500 MNT/person (standard service, 5 working days) or 5,000 MNT/person (urgent, 3 working days) to Golomt Bank account 1320000052; and send to visasection@immigration.gov.mn.",
          },
          {
            question:
              "What if I lose my residence ID while abroad?",
            answer: "If you cannot exit within the cancellation period, you commit a violation.",
          },
          {
            question:
              "What if I find a foreign national's passport or residence ID?",
            answer:
              "<strong>Yes.</strong> Submit through the \"Request to change residence permit form\" window.",
          },
          {
            question:
              "Can multiple people apply in one request? Can different categories be filed in one request?",
            answer:
              "<strong>Yes.</strong> An official letter from Company A must indicate whether there is any objection to transferring to Company B. Company B then files via the \"Request to change residence permit form\" window.",
          },
        ],
        visa_approval: [
          {
            question: "How long is a visa approval valid?",
            answer:
              "Visa approval is valid for <strong>60 days</strong>, during which the visa can be obtained at the relevant embassy, consulate, or at the border checkpoint specified in the approval.",
          },
          {
            question: "Request a K2 tourist-category visa or visa approval",
            answer:
              "Per Article 6.4 of the Tourism Law, a tourism organization may apply for a visa/visa approval for foreign nationals coming for tourism purposes for up to 90 days. </br></br> Required documents to submit to the Immigration Agency: </br></br> 1. Organization's request (operations field, duration of stay in Mongolia, visa issuance location). </br> 2. State registration certificate. </br> 3. Certificate of legal entity per Article 6.4. </br> 4. Copy of passport (at least 180 days valid). </br> 5. Proof of financial capacity, ticket reservations (if required). </br> 6. Authorization letter for the applying staff, work ID, national ID. </br> 7. Other documents if needed. </br> 8. Address verification documents. </br> 9. Complete the application electronically. </br> 10. Pay fee by QR before submission. </br></br><strong>Note:</strong> Reply sent to email; approval valid 60 days; total stay in a year ≤180 days; false documentation = 180-day ban, other refusal = 30-day ban.",
          },
          {
            question:
              "Can I receive my visa with a new/different passport than the one used for visa approval?",
            answer:
              "<strong>Not possible.</strong> Re-apply for visa approval with the new passport.",
          },
        ],
        visa: [
          {
            question: "Apply for a visa or apply for a visa approval?",
            answer:
              "* <strong>\"Visa approval\"</strong> is a document of an invitational nature that allows a foreign national to be issued or receive a visa. Based on this approval, the foreign national can obtain their visa at a Mongolian diplomatic mission abroad or at the border entry point. When inviting a foreign national, one applies for a visa approval, and the inviter pays 2,500–5,000 MNT per person. </br></br> * <strong>\"Visa\"</strong> refers to the permission to enter Mongolia and stay in the country for a specified period. In addition to the traditional sticker-type visa, there is also an electronic visa. When applying directly for a visa, the inviter pays the standard visa fee of $45–95.",
          },
          {
            question:
              "Explain visa validity. Can it be extended if I cannot enter Mongolia in time?",
            answer:
              "Visa validity is the period from issuance until entry into Mongolia. It is marked <strong>\"Enter before……\"</strong> on the visa. Single/double entry visas are valid 150 days. Validity cannot be extended; if expired, re-apply.",
          },
          {
            question: "Visa for foreign nationals coming to Mongolia for tourism",
            answer:
              "4 options: </br></br> 1. Check if your country has a mutual visa-free agreement with Mongolia. </br> 2. Apply for K2/K4/K6 e-visa via evisa.mn if eligible. </br> 3. From countries without a Mongolian embassy or for stays >30 days, the inviter applies for visa approval or visa via the Immigration Agency. </br> 4. Mongolian embassies/consulates abroad can issue K2 (up to 30 days), K3 border tourist, K6 transit visas.",
          },
          {
            question:
              "Can a temporary visitor who has already extended their stay extend again?",
            answer:
              "A temporary visitor can re-apply for extension 90 days after the previous extension expires.",
          },
          {
            question:
              "Difference between Official (A3) and Business (K1) visa? Who can apply?",
            answer:
              "* A3 — intergovernmental agreements, ministries, state organizations, international bodies. Government and local self-governing bodies apply. </br> * K1 — for temporary business visitors. Private sector entities apply.",
          },
          {
            question:
              "I want to apply for K1 or B1 visa but it's not visible. What to do?",
            answer:
              "Log in with the company's digital signature for business or investment/employment categories. Individual login only shows individual-eligible categories.",
          },
          {
            question:
              "If a visa is refused, can I apply for a different visa category?",
            answer:
              "Not possible. The right to re-apply arises after 30 days.",
          },
          {
            question:
              "I applied for a multiple-entry visa but received only single/double entry?",
            answer:
              "Refusing a multiple-entry visa would bar the applicant for 30 days, so a single/double visa may be issued instead. This means the multiple-entry visa was effectively refused.",
          },
          {
            question:
              "Visa/extension/approval was refused. Can I ask the reason?",
            answer:
              "Per Article 20.4 of the Foreign Nationals Legal Status Law, the agency has no obligation to explain refusal reasons.",
          },
        ],
        registration: [
          {
            question: "Register a foreign national?",
            answer:
              "Per Article 24.4 of the Foreign Nationals Legal Status Law: the citizen, enterprise, or organization providing housing to a foreign national must register them with the immigration authority within 48 hours of arrival at the address, electronically.",
          },
        ],
        residency: [
          {
            question:
              "I've applied for a residence permit — can I leave the country?",
            answer:
              "<strong>Not possible.</strong> A residence permit is not issued or extended if the foreign national is not in Mongolia.",
          },
          {
            question: "When to apply for a residence permit?",
            answer:
              "Within <strong>21 calendar days</strong> of entry into Mongolia. Required supporting documents must be included (e.g., certificate from Investment and Trade Office for investor category, or work authorization from General Office of Labor for employment category). Applications without these are not accepted.",
          },
          {
            question:
              "Does a resident foreign national need a multiple-entry visa?",
            answer:
              "<strong>Not needed.</strong> Long-term residents cross the border without a visa during their residence period using their residence ID.",
          },
          {
            question:
              "Can I transfer from employment to executive director (B2)?",
            answer:
              "<strong>Not possible.</strong> Employment residents can only transfer to B1 without leaving Mongolia.",
          },
          {
            question:
              "Can I exit if my residence permit was approved but the ID is not yet printed?",
            answer:
              "<strong>Not possible.</strong> Residence ID acts as exit authorization. Without carrying it (or an \"...until\" exit stamp), you cannot exit.",
          },
          {
            question: "How to get a cancellation certificate?",
            answer:
              "For organization: official request. For individual: application. Plus a copy of foreign national's passport and Golomt Bank account 1320000052 receipt (2,500 MNT standard 5 days / 5,000 MNT urgent 3 days). Send to visasection@immigration.gov.mn.",
          },
          {
            question: "What if I cannot exit within the cancellation period?",
            answer: "You commit a violation.",
          },
          {
            question:
              "A person with B2 at one company applying for C residence at the same company?",
            answer:
              "<strong>Yes.</strong> Submit via \"Request to change residence permit form\" window.",
          },
          {
            question:
              "Can a B2 resident at Company A transfer to Company B under C form?",
            answer:
              "<strong>Yes.</strong> Get an official letter from Company A regarding non-objection. Company B submits via \"Request to change residence permit form\".",
          },
          {
            question:
              "My passport is expiring soon. Can I extend my residence permit?",
            answer:
              "Residence permits are not issued beyond the passport's expiry. Renew your passport first, then apply for extension before the residence permit expires.",
          },
        ],
      },
    },
    contact: {
      heading: "Contact",
      subheading: "We are ready to address your questions and feedback promptly",
      sections: [
        [
          { title: "Information Center:", content: "1800-1882 / Senior Specialist D. Shinebaatar", type: "phone" },
          { title: "E-register:", content: "support@immigration.gov.mn", type: "email" },
          { title: "Document Office:", content: "7013-3458 letter@immigration.gov.mn", type: "mixed" },
          { title: "Visa Permission Office:", content: "7013-3457", type: "phone" },
          { title: "Citizenship Office:", content: "7013-3459", type: "phone" },
        ],
        [
          { title: "Violations Office:", content: "7013-3448", type: "phone" },
          { title: "Complaints Officer:", content: "7013-3480 / Ts.Tserenkhuu 3rd floor", type: "phone" },
          { title: "Public Relations:", content: "7013-3445 / Ch.Gantuya 3rd floor, room 308", type: "phone" },
          { title: "Duty Officer:", content: "7013-3479", type: "phone" },
          { title: "Email:", content: "letter@immigration.gov.mn", type: "email" },
        ],
        [
          { title: "Visa Information:", content: "visasection@immigration.gov.mn", type: "email" },
          { title: "Foreign Relations:", content: "foreignrelations@immigration.gov.mn", type: "email" },
          { title: "Address:", content: "Ulaanbaatar, Khan-Uul District, Khoroo 21, Buyant-Ukhaa, Immigration Agency", type: "address" },
          { title: "Online:", content: "", type: "social" },
        ],
      ],
      pins: [
        "Main building", "Main building", "Main building", "Main building",
        "Communication center", "Guest house", "Online", "Duty", "Online", "Duty",
      ],
    },
    footer: {
      copyright: "© 2026 - DEPARTMENT OF FOREIGN CITIZENS AND CITIZENS",
    },
  },
  MN: {
    nav: {
      home: "НҮҮР",
      service: "ҮЙЛЧИЛГЭЭ",
      faq: "ТҮГЭЭМЭЛ АСУУЛТ",
      contact: "ХОЛБОО БАРИХ",
      manuals: "Гарын авлага, заавар",
      login: "Нэвтрэх",
    },
    login: {
      title: "НЭВТРЭХ",
      options: [
        "Монгол улсын иргэний нэвтрэх",
        "Монгол улсын хуулийн этгээдийн нэвтрэх",
        "Гадаад иргэний нэвтрэх",
        "ТББ-ын салбар, өөр нэвтрэх",
        "Гадаадын иргэдийг 48 цагийн дотор бүртгэх",
        "Иргэний харьяалал нэвтрэлт",
        "Гадаадын элчин сайдын яам",
      ],
      footer: "ГАДААДЫН ИРГЭН, ХАРЬЯАТЫН ГАЗАР",
      modalTitle: "НЭВТРЭХ ТӨРӨЛ СОНГОХ",
      modalDan: "DAN системээр нэвтрэх",
      modalInfo: "Өөрийн мэдээллээр нэвтрэх",
    },
    banner: {
      heading: "Танд аль ангиллын виз тохирох вэ?",
      subheading:
        "Танд тохирох визийн мэдээллийг доороос хурдан хялбар олох боломжтой.",
      country: "Улсаа сонгох",
      purpose: "Аяллын зорилго",
      check: "Шалгах",
      searching: "Хайж байна...",
      noCountry: "Улс олдсонгүй",
      noPurpose: "Зорилго олдсонгүй",
      purposes: {
        student: "Оюутан",
        family: "Гэр бүл",
        immigrant: "Цагаач",
        work: "Хөдөлмөр эрхлэх",
        religious: "Шашны",
        tourism: "Аялал жуулчлал",
        personal: "Хувийн",
        shortTerm: "Богино хугацааны",
        visaFree: "Визгүй зорчих улсын иргэн",
      },
    },
    serviceCategory: {
      heading: "Үйлчилгээний ангилал",
      items: [
        "Визийн зөвшөөрөл",
        "Виз",
        "Гадаадын иргэнийг бүртгэх",
        "Албан болон хувийн зорилгоор оршин суух",
        "Иргэний харьяалал",
        "Салбар, төлөөлөгчийн газар",
        "Үрчлэлт",
      ],
    },
    visaFree: {
      heading: "Визгүй зорчих улсууд",
      continents: {
        Asia: "Ази",
        Africa: "Африк",
        Oceania: "Номхон далай",
        Americas: "Америк",
        Europe: "Европ",
      },
      noData: "Мэдээлэл алга",
      noFound: (c) => `${c} тивд улс олдсонгүй`,
    },
    tabs: [
      {
        id: "visaPermission",
        tabName: "Визийн зөвшөөрөл",
        title: "Албан болон хувийн зорилгоор оршин суух",
        description:
          "“Визийн зөвшөөрөл” гэдэг нь гадаад харилцааны асуудал эрхэлсэн төрийн захиргааны байгууллага эсхүл түүний харьяа байгууллагаас Монгол Улсаас гадаад улсад суугаа дипломат төлөөлөгчийн газар, эсхүл харьяа салбарт гадаадын иргэнд виз олгох талаар олгож буй баримт бичгийг хэлнэ. Визийн зөвшөөрлийн хүсэлтийг уригч тал гаргана.",
      },
      {
        id: "visa",
        tabName: "Виз",
        title: "Төрөл бүрийн виз мэдүүлэхэд хялбар",
        description:
          "Виз гэдэг нь Монгол Улсад орж ирэх, тодорхой хугацаагаар байх зөвшөөрлийг эрх бүхий байгууллагаас олгохыг хэлнэ. Монгол Улс визийн зөвшөөрөлтэй болон зөвшөөрөлгүй 64 ангиллын виз олгодог. Виз нь цахим болон цаасан хэлбэртэй бөгөөд цахим визийг уригчгүйгээр авах боломжтой. Түр ирэгчийн виз 90 хүртэл хоног хүчинтэй бөгөөд 30 хүртэл хоногоор нэг удаа сунгагдана.",
      },
      {
        id: "extension",
        tabName: "Албан болон хувийн зорилгоор оршин суух",
        title: "Монгол Улсад байх хугацаагаа сунгах",
        description:
          "Монгол Улсад 91-ээс дээш хоногоор ирэх гадаадын иргэн болон түүний хамаарал бүхий этгээдийг “оршин суух зорилгоор ирэгч” гэх бөгөөд оршин суух зөвшөөрөл авна. Хүсэлтийг хилээр нэвтэрсэн өдрөөс 21 хоногийн дотор гаргах ба 5 хүртэл жилийн хугацаатай зөвшөөрөл олгоно. Зарим ангиллын 90 хүртэл хоног байх түр ирэгчид ч мөн оршин суух зөвшөөрөл авч болно.",
      },
    ],
    servicePage: {
      breadcrumbHome: "Нүүр",
      breadcrumb: "Үйлчилгээний ангилал",
      category: "Ангилал",
      applyFor: (t) => `${t} мэдүүлэх`,
      countLabel: "ангилал",
      categories: [
        {
          title: "Визийн зөвшөөрөл",
          description:
            "Гадаадын иргэнд виз олгохыг зөвшөөрч олгосон баримт бичгийг хэлнэ. Олгосон визийн зөвшөөрлийн дагуу Монгол Улсаас гадаад улсад суугаа дипломат төлөөлөгчийн газарт болон хилийн боомтод визээ даруулна.",
          subCategories: [
            "Албан",
            "Хөрөнгө оруулагч",
            "Хөдөлмөр эрхлэх",
            "Оюутан",
            "Гэр бүл",
            "Цагаач",
            "Шашны",
            "Хувийн",
            "Богино хугацааны",
          ],
        },
        {
          title: "Виз",
          description:
            "Виз нь гадаадын иргэд Монгол Улсад орж ирэх, гарах эрхийг олгох баримт бичиг юм. Виз нь тодорхой хугацаатай байх бөгөөд зөвхөн нэг удаагийн аялалд хүчинтэй.",
          subCategories: [
            "Жуулчлалын виз",
            "Бизнесийн виз",
            "Дамжин өнгөрөх виз",
            "Дипломат виз",
          ],
        },
        {
          title: "Гадаадын иргэнийг бүртгэх",
          description:
            "Гадаадын иргэний бүртгэл нь Монгол Улсад оршин суугаа гадаадын иргэдийн мэдээллийг бүртгэх, хянах үйлчилгээ юм.",
          subCategories: [
            "Түр бүртгэл",
            "Байнгын бүртгэл",
            "Бүртгэл сунгалт",
          ],
        },
        {
          title: "Албан болон хувийн зорилгоор оршин суух",
          description:
            "Албан болон хувийн зорилгоор оршин суух зөвшөөрөл авах үйлчилгээ. Гадаадын иргэд Монгол Улсад албан ёсны ажил, бизнес эсвэл хувийн зорилгоор оршин суухыг хүсэх тохиолдолд энэ үйлчилгээг ашиглана.",
          subCategories: [
            "Албан оршин суух",
            "Хувийн оршин суух",
            "Бизнес оршин суух",
          ],
        },
        {
          title: "Иргэний харьяалал",
          description:
            "Монгол Улсын иргэншил авах үйлчилгээ. Гадаадын иргэд Монгол Улсын иргэншил авах шаардлага, журмыг энэ хэсгээс мэдэх боломжтой.",
          subCategories: [
            "Төрөлтөөр иргэншил",
            "Гэрлэлтээр иргэншил",
            "Хөрөнгө оруулалтаар иргэншил",
            "Давхар иргэншил",
          ],
        },
        {
          title: "Салбар, төлөөлөгчийн газар",
          description:
            "Гадаадын компаниудын Монгол Улсад салбар, төлөөлөгчийн газраа нээх, бүртгүүлэх үйлчилгээ.",
          subCategories: [
            "Салбар бүртгэл",
            "Төлөөлөгчийн газар",
            "Хуулийн этгээдийн бүртгэл",
          ],
        },
        {
          title: "Үрчлэлт",
          description:
            "Олон улсын үндэслэлээр хүүхэд үрчлэх үйлчилгээ. Гадаадын иргэд Монгол Улсын иргэдийг үрчлэх эсвэл Монгол Улсын иргэд гадаадын иргэдийг үрчлэх тохиолдолд энэ үйлчилгээг ашиглана.",
          subCategories: [
            "Дотоодын үрчлэлт",
            "Олон улсын үрчлэлт",
            "Үрчлэлтийн журам",
          ],
        },
        {
          title: "Тодорхойлолт",
          description:
            "Тодорхойлолт үйлчилгээний тайлбар. Энэ хэсэгт төрөл бүрийн үйлчилгээний талаар дэлгэрэнгүй мэдээллийг авах боломжтой.",
          subCategories: [
            "Үйлчилгээний мэдээлэл",
            "Шаардлага",
            "Журам",
          ],
        },
      ],
    },
    faqPage: {
      breadcrumbHome: "Нүүр",
      breadcrumb: "Түгээмэл асуулт",
      tabs: [
        { key: "general", label: "Ерөнхий" },
        { key: "visa_approval", label: "Визийн зөвшөөрөл" },
        { key: "visa", label: "Виз" },
        { key: "registration", label: "Гадаадын иргэний бүртгэл" },
        { key: "residency", label: "Албан болон хувийн зорилгоор оршин суух" },
      ],
      data: {
        general: [
          {
            question: "Хамаарал бүхий этгээд гэдэгт хэнийг ойлгох вэ?",
            answer:
              "Болохгүй. Гадаадын иргэн Монгол Улсад байхгүй тохиолдолд оршин суух зөвшөөрөл олгогдохгүй, сунгагдахгүй.",
          },
          {
            question: "Хаягийн баталгаажуулалт гэж юу вэ?",
            answer: `<p style="text-align: justify;">Гадаадын иргэнийг орон байраар хангаж буй иргэн, аж ахуйн нэгж, байгууллагаас тухайн гадаадын иргэнийг ямар хаяган дээр ирэхийг баталгаажуулж буй хаягийн баталгаажуулалтын баримт бичгийг дараах хэлбэрээр бүрдүүлнэ.</p>
<ol>
</br>
<li style="text-align: justify;">Монгол Улсад байрлах зочид буудал, амралт, кемп, дэн буудлын захиалгын баталгаажуулалтын хуудас, төлбөр төлсөн баримт;</li>
</br>
<li style="text-align: justify;">Орон байраар хангаж буй иргэний хувьд баталгаажуулалтын захидал, иргэний үнэмлэхийн хуулбар /гадаадын иргэний хувьд паспортын хуулбар/, захидалд, дурдагдсан хаягийн нотлох баримт бичиг /үл хөдлөх хөрөнгийн гэрчилгээ, түрээсийн гэрээ/;</li>
</br>
<li style="text-align: justify;">Аялал жуулчлалын байгууллагаас үйлчилгээ үзүүлж байгаа бол аяллын маршрут, буудаллах болон отоглох цэгийн хаяг, байршлын мэдээллийг албан бичгээр;</li>
</br>
<li style="text-align: justify;">Хөдөө орон нутагт ажиллах зорилгоор ирэх гадаадын иргэний хувьд уригч байгууллагаас уригдагч иргэний байрлах хаягийн дэлгэрэнгүй, ажилчдын байр, кемпийн байршил, гэр контейнерын дугаар зэрэг мэдээллийг албан бичигт дурдаж ирүүлэх</li>
</ol>
</br>
<p style="text-align: justify;">Дээрх шаардлагыг хангаагүй хүсэлт ирүүлэх, хуурамч хаягийн бүртгэл ашиглах нь виз, визийн зөвшөөрөл олгохоос татгалзах, олгосон визийг цуцлах үндэслэл болохыг анхаарна уу.</p>`,
          },
          {
            question: "Танайхаас авах баримт бичгээ хүргэлтээр авах боломжтой юу?",
            answer: `<p style="text-align: justify;">Гадаадын иргэн, түүнийг уригч иргэн, аж ахуйн нэгж, байгууллага хүсэлт гаргасан тохиолдолд "Чамдаа"ХХК-ийн шуудан хүргэлтийн үйлчилгээ ашиглан гадаадын иргэний оршин суух зөвшөөрөл шинээр авах болон сунгалт хийлгэсэн бол оршин суух үнэмлэхийг Улаанбаатар хот дотор хүргүүлэх боломжтой. (хүсэлт гаргах үедээ хүргэлтийн үйлчилгээг сонгосон тохиолдолд)</p>`,
          },
          {
            question: "Гадаадын иргэн хилээр гарсан тодорхойлолтыг хаанаас авах вэ?",
            answer:
              "Хөдөлмөр эрхлэгч гадаадын иргэний оршин суух зөвшөөрлийн хэлбэрийг гадаадын хөрөнгө оруулалттай аж ахуйн нэгжийн гүйцэтгэх захирал (В2) хэлбэрт шилжүүлж болох уу? </br></br><strong>Боломжгүй.</strong> Хөдөлмөр эрхлэгч оршин суух зөвшөөрөлтэй гадаадын иргэний хэлбэрийг гадаадын хөрөнгө оруулалттай аж ахуйн нэгжийн хөрөнгө оруулагч хэлбэр төрлөөс бусад хэлбэр, төрөлд шилжүүлэхгүй. Өөрөөр хэлбэл хөдөлмөр эрхлэгч гадаадын иргэн Монгол Улсаас гаралгүйгээр зөвхөн В1 хэлбэр рүү л шилжих боломжтой.",
          },
          {
            question:
              "Хүсэлт бөглөх явцад 'үргэлжлүүлэх' товч идэвхжихгүй, мөн дарсан ч үргэлжлэхгүй бол яах вэ?",
            answer:
              "<strong>Болохгүй.</strong> Оршин суух үнэмлэх нь гарах визтэй адил үйлчилдэг тул оршин суух үнэмлэхээ биедээ авч яваагүй тохиолдолд хилээр гарч чадахгүй. Монгол Улсад оршин суух зөвшөөрөлтэй гадаадын иргэний хувьд оршин суух үнэмлэхээрээ, эсвэл “....хүртэл/until” гэсэн хасалтын тэмдгээр л зөвхөн хилээр гарах боломжтой.",
          },
          {
            question: "Хүсэлт хэрхэн цуцлах вэ? Шийдвэрлэлтийн хугацаа ямар байх вэ?",
            answer:
              "Оршин суух зөвшөөрлийн хасалтын тодорхойлолт авахдаа яах ёстой вэ?  </br></br> Байгууллага бол албан хүсэлт, хувь хүн өргөдөл, тодорхойлуулах гадаадын иргэний паспортын хуулбар, Голомт банкны 1320000052 тоот дансанд 1 хүний 2500 төг (энгийн үйлчилгээ ажлын 5 хоног), яаралтай үйлчилгээ авах бол 1 хүний 5000 төг (ажлын 3 хоног) төлсөн баримт зэргийг бүрдүүлэн visasection@immigration.gov.mn сайтаар хүсэлтээ илгээнэ.",
          },
          {
            question: "Гадаадад байхдаа оршин суух үнэмлэхээ гээгдүүлсэн бол яах вэ?",
            answer: "Хасалт хийлгэсэн хугацаандаа гарч чадахгүй бол зөрчилд орно.",
          },
          {
            question: "Гадаадын иргэний паспорт, оршин суух үнэмлэх олсон бол яах вэ?",
            answer:
              "<strong>Болно.</strong> “Оршин суух зөвшөөрлийн хэлбэр өөрчлөх хүсэлт гаргах” цонхоор хүсэлт гаргана.",
          },
          {
            question:
              "Нэг хүсэлтэд олон хүн зэрэг мэдүүлж болох уу? Нэг хүсэлтэд өөр өөр ангилал мэдүүлж болох уу?",
            answer:
              "<strong>Болно.</strong> А компаниас Б компани руу шилжүүлэхэд татгалзах зүйлтэй эсэх талаар албан бичиг А компаниас авна. Б компани “Оршин суух зөвшөөрлийн хэлбэр өөрчлөх хүсэлт гаргах” цонхоор хүсэлт гаргана.",
          },
        ],
        visa_approval: [
          {
            question: "Визийн зөвшөөрлийн хүчинтэй хугацаа хэд хоног вэ?",
            answer:
              "Визийн зөвшөөрлийн хүчинтэй хугацаа <strong>60 хоног</strong> бөгөөд уг хугацаанд холбогдох Элчин сайдын яам, консулын газар, эсвэл зөвшөөрөлд заагдсан хилийн боомт дээрээс визээ авах боломжтой.",
          },
          {
            question: "Аялал жуулчлалын K2 ангиллын виз, визийн зөвшөөрөл хүсэх",
            answer:
              "Аялал жуулчлалын тухай хуулийн 6 дугаар зүйлийн 6.4-д заасан аялал жуулчлалын байгууллага нь жуулчлах зорилгоор 90 хүртэл хоногоор ирэх гадаадын иргэнд виз, визийн зөвшөөрөл мэдүүлнэ. </br> </br> 1. Виз, визийн зөвшөөрлийн хүсэлтийг Гадаадын иргэн, харьяатын газарт мэдүүлэхдээ дараах баримт бичгийг бүрдүүлнэ. Үүнд: </br> </br> 2. Аж ахуйн нэгж, байгууллагын хүсэлт. </br> </br> 3. Байгууллагын улсын бүртгэлийн гэрчилгээ. </br> </br> 4. Хуулийн этгээдэд бүртгүүлсэн гэрчилгээ. </br> </br> 5. Паспортын хуулбар (180 хоногоос доошгүй). </br> </br> 6. Санхүүгийн чадавхын баримт. </br> </br> 7. Итгэмжлэх, үнэмлэх. </br> </br> 8. Бусад шаардлагатай бичиг. </br> </br> 9. Хаягийн баталгаажуулалт. </br> </br> 10. Цахим мэдүүлэг. </br> </br> 11. QR төлбөр. </br> </br> <strong>Санамж:</strong> Визийн зөвшөөрөл 60 хоног хүчинтэй; жилд 180-аас илүү бол оршин суух авна; хуурамч 180 хоног, бусад татгалзал 30 хоног.",
          },
          {
            question:
              "Визийн зөвшөөрлөө хуучин паспортаар мэдүүлсэн боловч ЭСЯ дээр очиж визээ даруулахдаа шинэ буюу өөр паспорттай очиж болох уу?",
            answer:
              "<strong>Болохгүй.</strong> Визийн зөвшөөрлөө шинэ паспортаараа дахин мэдүүлнэ.",
          },
        ],
        visa: [
          {
            question: "Виз эсвэл визийн зөвшөөрлийг хэрхэн мэдүүлэх вэ?",
            answer:
              "* <strong>“Визийн зөвшөөрөл”</strong> нь гадаадын иргэнд виз олгохыг зөвшөөрсөн уригын шинж чанартай баримт бичиг. Энэ зөвшөөрлийн дагуу гадаад дахь Монголын ЭСЯ, эсвэл хилийн боомтоос виз авна. Уригч 2500–5000 төг төлнө. </br></br> * <strong>“Виз”</strong> нь Монгол Улсад орж, тогтоосон хугацаанд байх зөвшөөрөл. Цаасан болон цахим виз байх. Цахим виз авахад уригч 45–95 ам.доллар төлнө.",
          },
          {
            question:
              "Визийн хүчинтэй хугацаа гэдгийг тайлбарлаж өгнө үү?",
            answer:
              "Визийн хүчинтэй хугацаа гэдэгт виз олгосон өдрөөс Монгол Улсын хилээр нэвтрэх хүртэлх хугацаа. Визэнд <strong>“Enter before……”</strong> гэж тэмдэглэдэг. Нэг, хоёр удаагийн виз 150 хоног хүчинтэй. Сунгах боломжгүй; дахин мэдүүлнэ.",
          },
          {
            question: "Жуулчлах зорилгоор Монгол Улсад ирэх гадаадын иргэний виз",
            answer:
              "4 хувилбар: </br></br> 1. Харилцан визгүй гэрээтэй улс эсэхийг шалгана. </br></br> 2. evisa.mn-аар К2, К4, К6 цахим виз. </br></br> 3. ЭСЯ-гүй улсаас эсвэл 30+ хоног бол уригч ГИХГ-т хүсэлт гаргана. </br></br> 4. Гадаад дахь ЭСЯ/КГ К2 (30 хоног хүртэл), К3 хил орчмын, К6 дамжин өнгөрөх виз олгоно.",
          },
          {
            question:
              "Түр ирэгчийн байх хугацааг өмнө нь сунгуулж байсан гадаадын иргэн дахин сунгалт хийлгэж болох уу?",
            answer:
              "Өмнөх сунгалтын хугацаа дууссанаас хойш 90 хоногийн дараа дахин сунгуулж болно.",
          },
          {
            question:
              "Албан (А3) ба ажил хэргийн (K1) ангиллын визийн ялгаа?",
            answer:
              "* А3: засгийн газар хоорондын, яам, төрийн, олон улсын байгууллагаас. </br></br> * К1: ажил хэргийн хувийн хэвшил.",
          },
          {
            question:
              "K1 эсвэл В1 ангиллын виз мэдүүлэх гэсэн боловч харагдахгүй байна.",
            answer:
              "Ажил хэргийн эсвэл хөрөнгө оруулагч/хөдөлмөр эрхлэгч ангиллаар урихдаа компанийн тоон гарын үсгээр нэвтрээрэй.",
          },
          {
            question:
              "Виз олгохоос татгалзсан бол өөр ангиллын виз мэдүүлж болох уу?",
            answer: "Болохгүй. 30 хоногийн дараа дахин мэдүүлнэ.",
          },
          {
            question:
              "Олон удаагийн виз мэдүүлсэн боловч 1 эсвэл 2 удаагийн виз л гарсан байна?",
            answer:
              "Олон удаагийн виз татгалзсан тохиолдолд 30 хоног мэдүүлэхгүй болохоос сэргийлж 1, 2 удаагийн виз олгох тохиолдол бий. Энэ нь олон удаагийн виз олгохоос татгалзсан гэсэн үг.",
          },
          {
            question:
              "Виз, визийн сунгалт, визийн зөвшөөрөл татгалзсан. Шалтгааныг асууж болох уу?",
            answer:
              "Гадаадын иргэний эрх зүйн байдлын тухай хуулийн 20.4-т зааснаар татгалзсан шалтгаан тайлбарлах үүрэг хүлээхгүй.",
          },
        ],
        registration: [
          {
            question: "Гадаад иргэнийг бүртгүүлэх?",
            answer:
              "Гадаадын иргэний эрх зүйн байдлын тухай хуулийн 24.4. Гадаадын иргэнийг орон байраар хангасан иргэн, аж ахуйн нэгж, байгууллага түүнийг гадаадын иргэний асуудал эрхэлсэн төрийн захиргааны байгууллагад 48 цагийн дотор бүртгүүлэх /тухайн хаяг дээр очсоны дараа 48 цагийн дотор/ бөгөөд бүртгэлийг цахимаар хийнэ.",
          },
        ],
        residency: [
          {
            question:
              "Оршин суух зөвшөөрлөө мэдүүлчихээд хилээр гараад явчихаж болох уу?",
            answer:
              " <strong>Болохгүй.</strong> Гадаадын иргэн Монгол Улсад байхгүй тохиолдолд оршин суух зөвшөөрөл олгогдохгүй, сунгагдахгүй.",
          },
          {
            question: "Оршин суух зөвшөөрлөө хэзээ мэдүүлэх вэ?",
            answer:
              " Оршин суух зөвшөөрлийг Монгол Улсын хилээр нэвтэрснээс хойш хуанлийн <strong>21 хоногийн дотор</strong> мэдүүлнэ. Үндсэн бичиг баримтын бүрдлийг хангаж ирүүлсэн байна.",
          },
          {
            question:
              "Монгол Улсад оршин суух зөвшөөрөлтэй гадаадын иргэн олон удаагийн виз авах шаардлагатай юу?",
            answer:
              " <strong>Шаардлагагүй.</strong> Удаан хугацаагаар оршин суугч гадаадын иргэн оршин суух зөвшөөрлийн хугацаанд визгүйгээр хилээр нэвтэрнэ.",
          },
          {
            question:
              "Хөдөлмөр эрхлэгчийн хэлбэрээс гүйцэтгэх захирал (В2) хэлбэрт шилжиж болох уу?",
            answer:
              "<strong>Боломжгүй.</strong> Хөдөлмөр эрхлэгч гадаадын иргэн Монгол Улсаас гаралгүйгээр зөвхөн В1 хэлбэр рүү шилжинэ.",
          },
          {
            question:
              "Оршин суух зөвшөөрөл гарсан ч үнэмлэх хэвлэгдээгүй үед хилээр гарч болох уу?",
            answer:
              "<strong>Болохгүй.</strong> Оршин суух үнэмлэхгүй бол хилээр гарч чадахгүй.",
          },
          {
            question: "Хасалтын тодорхойлолт хэрхэн авах вэ?",
            answer:
              "Байгууллага албан хүсэлт, хувь хүн өргөдөл, паспорт хуулбар, Голомт банкны 1320000052 дансанд 2500 төг (5 хоног) / 5000 төг (3 хоног) төлсөн баримтыг visasection@immigration.gov.mn-руу илгээнэ.",
          },
          {
            question: "Хасалт хийлгэсэн хугацаандаа гарч чадахгүй бол яах вэ?",
            answer: "Зөрчилд орно.",
          },
          {
            question:
              "Нэг компани дээр В2-оор оршин сууж байгаа хүн тухайн компани дээрээ С хэлбэрээр оршин суух зөвшөөрөл мэдүүлж болох уу?",
            answer:
              "<strong>Болно.</strong> “Оршин суух зөвшөөрлийн хэлбэр өөрчлөх хүсэлт гаргах” цонхоор.",
          },
          {
            question:
              "А компани дээр B2-оор оршин сууж байгаа гадаадын иргэн Б компани руу С хэлбэрээр шилжиж болох уу?",
            answer:
              "<strong>Болно.</strong> А компаниас албан бичиг авч, Б компани “Оршин суух зөвшөөрлийн хэлбэр өөрчлөх хүсэлт гаргах” цонхоор хүсэлт гаргана.",
          },
          {
            question:
              "Паспортын хүчинтэй хугацаа удахгүй дуусах гэж байгаа. Оршин суух зөвшөөрлөө сунгуулж болох уу?",
            answer:
              "Паспортын дуусах хугацааг давуулан олгодоггүй тул паспортаа шинэчилсний дараа сунгалтын хүсэлтээ гаргана.",
          },
        ],
      },
    },
    contact: {
      heading: "Холбоо Барих",
      subheading:
        "Бид таны асуулт, санал хүсэлтийг цаг тухайд нь шийдвэрлэхэд бэлэн байна",
      sections: [
        [
          { title: "Мэдээллийн төв:", content: "1800-1882 / Ахлах мэргэжилтэн Д. Шинэбаатар", type: "phone" },
          { title: "E-register авах:", content: "support@immigration.gov.mn", type: "email" },
          { title: "Бичиг хэрэг:", content: "7013-3458 letter@immigration.gov.mn", type: "mixed" },
          { title: "Виз зөвшөөрлийн газар:", content: "7013-3457", type: "phone" },
          { title: "Иргэний харьяатын газар:", content: "7013-3459", type: "phone" },
        ],
        [
          { title: "Зөрчил шалган шийдвэрлэх газар:", content: "7013-3448", type: "phone" },
          { title: "Өргөдөл, гомдол хариуцсан мэргэжилтэн:", content: "7013-3480 / Ц.Цэрэнхүү III давхар", type: "phone" },
          { title: "Олон нийттэй харилцах:", content: "7013-3445 / Ч.Гантуяа III давхар 308 тоот", type: "phone" },
          { title: "Жижүүр:", content: "7013-3479", type: "phone" },
          { title: "Цахим шуудан:", content: "letter@immigration.gov.mn", type: "email" },
        ],
        [
          { title: "Визийн мэдээлэл:", content: "visasection@immigration.gov.mn", type: "email" },
          { title: "Гадаад харилцаа:", content: "foreignrelations@immigration.gov.mn", type: "email" },
          { title: "Хаяг:", content: "Улаанбаатар хот, Хан-Уул дүүрэг, 21-р хороо, Буянт-Ухаа дэнж, Гадаадын иргэн, харьяатын газар", type: "address" },
          { title: "Онлайн сүлжээ:", content: "", type: "social" },
        ],
      ],
      pins: [
        "Гол байр", "Гол байр", "Гол байр", "Гол байр",
        "Харилцааны төв", "Зочдын байр", "Онлайн", "Жижүүр", "Онлайн", "Жижүүр",
      ],
    },
    footer: {
      copyright: "© 2026 - ГАДААДЫН ИРГЭН, ХАРЬЯАТЫН ГАЗАР",
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "EN");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
