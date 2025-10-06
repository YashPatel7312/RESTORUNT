// ContactInfo.jsx
import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      {/* Column 1: Address */}
      <div className="contact-column">
        <h1>Where to find us</h1>
        <h5>47 Baker Street, London LD1 0ND</h5>
      </div>

      {/* Column 2: Opening Hours */}
      <div className="contact-column">
        <h3>Opening Hours</h3>
        <div className="hours">
          <h5>Mon - Fri: 09:00 - 17:00</h5>
          <h5>Sat - Sun: 10:00 - 15:00</h5>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
