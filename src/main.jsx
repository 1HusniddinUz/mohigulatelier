// src/main.jsx (yoki index.jsx)
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import "./index.css"
import "./locales/i18n";
import { TranslationProvider } from "./i18n/TranslationProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TranslationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TranslationProvider>
  </React.StrictMode>
);
