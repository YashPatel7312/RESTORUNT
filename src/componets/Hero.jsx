import React from "react";
import "./Hero.css";

export default function Hero({ title, background }) {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-container">
        <h1 className="hero-title">{title}</h1>
      </div>
    </section>
  );
}
