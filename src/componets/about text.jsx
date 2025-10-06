import React from "react";
import { useNavigate } from "react-router-dom";
import "./about text.css";

const AboutText = () => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate("/about");
  };

  return (
    <div className="about-text-container">
      {/* Part 1 - Header */}
      <h2 className="about-header">About Us</h2>

      {/* Part 2 - Paragraph */}
      <p className="about-paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident 
        voluptate aut dolore ullam quasi numquam quod molestias cum officiis perspiciatis?
      </p>

      {/* Part 3 - Paragraph */}
      <p className="about-paragraph">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni 
        animi tenetur eaque vel accusamus placeat quaerat ad. Similique quaerat 
        qui doloribus assumenda deserunt tenetur quas suscipit officiis quod sequi?
      </p>

      {/* Part 4 - Button */}
      <button className="about-button" onClick={handleMoreClick}>
        More About Us
      </button>
    </div>
  );
};

export default AboutText;
