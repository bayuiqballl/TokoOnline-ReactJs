import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./component/Navigation.jsx";
import ContentWeb from "./component/ContentWeb.jsx";
import FooterPage from "./component/FooterPage.jsx";

export const App = () => {
  return (
    <div className="App">
      <Navigation />
      <ContentWeb title="REKOMENDASI" />
      <FooterPage tahun="2020" />
    </div>
  );
};

export default App;
