import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";
import { router } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import { BaseUrlProvider } from "./Provider/BaseUrlContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BaseUrlProvider>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </BaseUrlProvider>
  </React.StrictMode>
);
