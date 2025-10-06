import React from "react";
import "./menu.css";

const MenuCard = ({ header, image, dishes, theme = "light" }) => {
  return (
    <div className={`menu-card ${theme}`}>
      {/* Header */}
      <h2 className="menu-header">{header}</h2>

      {/* Content row */}
      <div className={`menu-row ${theme}`}>
        {/* Image */}
        <div className="menu-image">
          <div className="image-wrapper">
            <img src={image} alt={header} />
          </div>
        </div>

        {/* Text */}
        <div className="menu-dishes">
          {dishes.map((dish, index) => (
            <div key={index} className="dish">
              <h3 className="dish-name">{dish.name}</h3>
              <p className="dish-desc">{dish.description}</p>
              <p className="dish-price">{dish.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
48