import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextWrapper } from "./context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ContextWrapper>
    <App />
  </ContextWrapper>
);
