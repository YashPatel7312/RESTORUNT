import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeHero.css";

export default function HomeHero({ background }) {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate("/menu");
  };

  return (
    <>
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="home-hero-container center-align">
          <h1 className="home-hero-title">
            <span className="home-hero-subtitle">Welcome To </span>
            <span className="line-break"></span>
            React Restaurant
          </h1>

          {/* Button */}
          <button className="home-hero-btn" onClick={goToMenu}>
            Our Full Menu
          </button>
        </div>
      </section>
    </>
  );
}
