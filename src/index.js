import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "@reduxjs/toolkit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store = {store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
