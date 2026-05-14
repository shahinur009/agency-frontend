import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";
import { router } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import { BaseUrlProvider } from "./Provider/BaseUrlContext";
import { LanguageProvider } from "./Provider/LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BaseUrlProvider>
      <HelmetProvider>
        <AuthProvider>
          <LanguageProvider>
            <RouterProvider router={router} />
          </LanguageProvider>
        </AuthProvider>
      </HelmetProvider>
    </BaseUrlProvider>
  </React.StrictMode>
);
