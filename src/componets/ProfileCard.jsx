import React from "react";
import "./ProfileCard.css";
import "../pages/AboutPage.css";

const ProfileCard = ({ description, image, name }) => {
  return (
    <div className="profile-card" >
      {/* Main Section */}
      <h1></h1>
      <div className="profile-main">
        <p>{description}</p>
      </div>

      {/* Footer Section */}
      <div className="profile-footer">
        <div className="profile-info">
          <img src={image} alt={name} className="profile-pic" />
          <span className="profile-name">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
