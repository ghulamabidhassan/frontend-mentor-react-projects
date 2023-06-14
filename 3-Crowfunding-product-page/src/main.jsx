import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const elem = document.querySelector("#root");
const root = ReactDOM.createRoot(elem);

root.render(<App />);
