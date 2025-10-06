import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import "./App.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Pages
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// ScrollToTop import karo
import ScrollToTop from "../src/componets/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />  {/* <-- add here */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
