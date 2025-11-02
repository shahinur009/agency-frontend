// src/Provider/BaseUrlContext.js
import React, { createContext, useContext } from "react";

const config = {
  development: {
    API_BASE_URL:
      import.meta.env.VITE_API_BASE_URL || "http://localhost:5005/api",
    IMAGE_BASE_URL: "http://localhost:5005/images",
  },
  production: {
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
    IMAGE_BASE_URL: "http://localhost:5005//images",
  },
};

const environment = import.meta.env.MODE || "development";
const currentBaseUrls = config[environment];

const BaseUrlContext = createContext(currentBaseUrls);

export const BaseUrlProvider = ({ children }) => {
  return (
    <BaseUrlContext.Provider value={currentBaseUrls}>
      {children}
    </BaseUrlContext.Provider>
  );
};

export const useBaseUrls = () => {
  return useContext(BaseUrlContext);
};
