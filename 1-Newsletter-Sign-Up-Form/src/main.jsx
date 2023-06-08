import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./designs/Context.jsx";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
