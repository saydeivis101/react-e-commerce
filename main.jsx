import React from "react";
import { createRoot } from "react-dom/client";
import { FilterProvider } from "./src/context/FilterProvider";
import { ReactEcApp } from "./src/ReactEcApp";
import "./style.css";

const root = createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <FilterProvider>
      <ReactEcApp />
    </FilterProvider>
  </React.StrictMode>
);
