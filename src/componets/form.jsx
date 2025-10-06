// src/components/Form.jsx
import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    comments: "",
  });

  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [progress, setProgress] = useState(0);

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // validation → first 6 fields required
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.guests
    ) {
      setError("⚠️ Please fill all required fields before submitting.");
      return;
    }

    setError("");
    setShowPopup(true);
    setProgress(0);

    // progress bar simulate
    let p = 0;
    const interval = setInterval(() => {
      p += 10;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setShowPopup(false);

          // ✅ Reset form after submit
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            date: "",
            guests: "",
            comments: "",
          });
        }, 500);
      }
    }, 200);
  };

  return (
    <div className="form-wrapper">
      <form className="custom-form" onSubmit={handleSubmit}>
        {/* First & Last Name */}
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="form-row">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Date & Guests */}
        <div className="form-row">
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Number of Guests</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Comments */}
        <div className="form-group full-width">
          <label>Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit
        </button>

        {/* Error Message */}
        {error && <p className="error-msg">{error}</p>}

        {/* Popup with Progress Bar */}
        {showPopup && (
          <div className="popup">
            <p>Success! We've Received Your Information.</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
