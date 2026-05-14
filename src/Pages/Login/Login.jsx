import React, { useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { useLanguage } from "../../Provider/LanguageContext";

const SSO_URL =
  "https://sso.gov.mn/login?response_type=code&client_id=80d5fd39f3e5f674d3a2ba0e-dfde3a2fe325c84f55c9fd94676cfdb2&redirect_uri=https://sso-api.isf.mn/sso-api/sso/access-grant&scope=W3sid3NkbCI6Imh0dHBzOi8veHlwLmdvdi5tbi9jaXRpemVuLTEuMy4wL3dzP1dTREwiLCJzZXJ2aWNlcyI6WyJXUzEwMDEwMV9nZXRDaXRpemVuSURDYXJkSW5mbyJdfV0=&state=eyJhY3Rpb24iOiJMT0dJTiIsInV1aWQiOiI0YjcwNDNhZC0yZjdjLTRkZDQtOGRiNi1iNGU5NmE4YzJhN2ItMTc3ODc3NjQwOTQxOSIsImxvbmciOmZhbHNlfQ==";

const cards = [
  { icon: "/logo/login/logIn-icon-01.svg", href: SSO_URL, type: "link" },
  { icon: "/logo/login/logIn-icon-02.svg", href: SSO_URL, type: "link" },
  { icon: "/logo/login/logIn-icon-03.svg", type: "modal" },
  { icon: "/logo/login/logIn-icon-05-7.svg", href: "#", type: "link" },
  { icon: "/logo/login/logIn-icon-05-7.svg", href: "#", type: "link" },
  { icon: "/logo/login/logIn-icon-05-7.svg", href: "#", type: "link" },
  { icon: "/logo/login/logIn-icon-08.svg", href: "#", type: "link" },
];

function Login() {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      className="min-h-screen w-full py-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/logo/login/cover-background.jpg')" }}
    >
      <div className="max-w-3xl lg:max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">
          {t.login.title}
        </h1>

        <div className="space-y-4">
          {t.login.options.map((label, idx) => {
            const { icon, href, type } = cards[idx];
            const content = (
              <>
                <div className="flex items-center gap-4">
                  <img src={icon} alt="" className="w-10 h-10 object-contain" />
                  <span className="text-lg text-gray-800">{label}</span>
                </div>
                <FaArrowRight className="text-gray-500 group-hover:translate-x-1 transition-transform" />
              </>
            );
            const cls =
              "flex items-center justify-between bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow px-6 py-5 group w-full text-left";

            if (type === "modal") {
              return (
                <button
                  key={idx}
                  onClick={() => setModalOpen(true)}
                  className={cls}
                >
                  {content}
                </button>
              );
            }
            return (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-8 md:p-12 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              {t.login.modalTitle}
            </h2>
            <div className="space-y-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow px-6 py-5 group border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <img src="/logo/login/logIn-icon-03.svg" alt="" className="w-10 h-10 object-contain" />
                  <span className="text-lg text-gray-800">{t.login.modalDan}</span>
                </div>
                <FaArrowRight className="text-gray-500 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow px-6 py-5 group border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <img src="/logo/login/logIn-icon-01.svg" alt="" className="w-10 h-10 object-contain" />
                  <span className="text-lg text-gray-800">{t.login.modalInfo}</span>
                </div>
                <FaArrowRight className="text-gray-500 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
