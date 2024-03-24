// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import Footer from "@layout/Footer.jsx";
import Header from "@layout/Header.jsx";
import "@/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Header />
    <App />
    <Footer />
  </Router>,
);
