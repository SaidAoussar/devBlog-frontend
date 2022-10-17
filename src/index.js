import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/global.css";
import { ContextWrapper } from "./context/AppContext";

ReactDOM.render(
  <BrowserRouter>
    <ContextWrapper>
      <Home></Home>
    </ContextWrapper>
  </BrowserRouter>,
  document.getElementById("root")
);
