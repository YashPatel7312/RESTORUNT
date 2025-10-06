import React from "react";
import "./ImageGallery.css";

const ImageGallery = ({ images, variant = "dark" }) => {
  return (
    <div className={`gallery-wrapper ${variant === "dark" ? "dark" : "" }`}>
      {/* Header */}
      <h2
        className={`gallery-header ${
          variant === "dark" ? "dark-header" : "light-header"
        }`}
      >
        Image Gallery
      </h2>

      {/* Grid of images */}
      <div className="imageparent">
        {images.map((img, index) => (
          <div key={index} className={`imagediv imagediv${index + 1}`}>
            <img
              src={img}
              alt={`gallery-${index + 1}`}
              className={`gallery-img ${
                variant === "dark" ? "dark-border" : "light-border"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
