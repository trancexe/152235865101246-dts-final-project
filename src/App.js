import React from "react";
import "./App.scss";
import Search from "./components/Search";
import CardFood from "./components/CardFood.jsx";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <div className="header-container">
        <Header />
      </div>
      <div className="body">
        <div className="search-container">
          <Search />
        </div>
        <div className="card-container">
          <CardFood />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
