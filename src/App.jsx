import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


// Import pages
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
      <Routes>
        {/* Default route = HomePage */}
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
