import mapImage from "/mongolia.avif";
import { useLanguage } from "../../Provider/LanguageContext";

const socialIcons = {
  Facebook: (
    <svg className="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  X: (
    <svg className="w-4 h-4" fill="#000000" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Youtube: (
    <svg className="w-4 h-4" fill="#FF0000" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
};

const socials = [
  { name: "Facebook", url: "#", handle: "Immigration Agency of Mongolia" },
  { name: "X", url: "#", handle: "Immigration Agency of Mongolia" },
  { name: "Youtube", url: "#", handle: "Immigration Agency of Mongolia" },
];

const pinPositions = [
  { top: "83%", left: "52%" },
  { top: "78%", left: "40%" },
  { top: "70%", left: "30%" },
  { top: "60%", left: "20%" },
  { top: "32%", left: "19%" },
  { top: "20%", left: "45%" },
  { top: "53%", left: "80%" },
  { top: "63%", left: "70%" },
  { top: "33%", left: "75%" },
  { top: "32%", left: "55%" },
];

const Contact = () => {
  const { t } = useLanguage();

  const renderContactContent = (item) => {
    switch (item.type) {
      case "phone": {
        const phoneNumber = item.content.split(" ")[0];
        return (
          <a
            href={`tel:${phoneNumber}`}
            className="hover:text-blue-700 transition-colors duration-200"
          >
            {item.content}
          </a>
        );
      }
      case "email":
        return (
          <a
            href={`mailto:${item.content}`}
            className="hover:text-blue-700 transition-colors duration-200"
          >
            {item.content}
          </a>
        );
      case "mixed": {
        const parts = item.content.split(" ");
        const numberPart = parts[0];
        const emailPart = parts[1];
        return (
          <>
            <a
              href={`tel:${numberPart}`}
              className="hover:text-blue-700 transition-colors duration-200"
            >
              {numberPart}
            </a>{" "}
            <a
              href={`mailto:${emailPart}`}
              className="hover:text-blue-700 transition-colors duration-200"
            >
              {emailPart}
            </a>
          </>
        );
      }
      case "social":
        return (
          <div className="space-y-2">
            {socials.map((social, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="flex-shrink-0">{socialIcons[social.name]}</span>
                <a
                  href={social.url}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}: {social.handle}
                </a>
              </div>
            ))}
          </div>
        );
      case "address":
        return <span className="leading-normal">{item.content}</span>;
      default:
        return item.content;
    }
  };

  const MapPin = ({ top, left, label }) => (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
      style={{ top, left }}
    >
      <div className="w-6 h-6 bg-red-600 rounded-full animate-ping absolute -inset-1 opacity-75"></div>
      <div className="relative z-10">
        <div className="w-4 h-4 bg-red-600 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-200"></div>
        <div className="w-2 h-2 bg-red-600 rotate-45 absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
      </div>
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white px-2 py-1 rounded text-xs font-medium text-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {label}
      </div>
    </div>
  );

  return (
    <section
      className="w-full py-12 bg-gray-50"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="contact-heading" className="sr-only">
          {t.contact.heading}
        </h2>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-blue-900 mb-4">
            {t.contact.heading}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t.contact.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className=" transition-shadow duration-300">
              {section.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`${
                    itemIndex !== section.length - 1 ? "mb-6" : ""
                  }`}
                >
                  <h4 className="text-blue-900 font-semibold mb-2 text-base">
                    {item.title}
                  </h4>
                  <div className="text-gray-700 leading-relaxed">
                    {renderContactContent(item)}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="relative">
            <img
              src={mapImage}
              alt="Immigration Agency of Mongolia location map"
              className="w-full h-auto rounded-lg shadow-sm"
            />

            {pinPositions.map((pin, index) => (
              <MapPin
                key={index}
                top={pin.top}
                left={pin.left}
                label={t.contact.pins[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
