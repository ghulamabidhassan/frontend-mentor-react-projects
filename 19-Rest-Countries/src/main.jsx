import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./Context.jsx";

const elem = document.getElementById("root");

const root = ReactDOM.createRoot(elem);

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
