import React from "react";
import Hero from "../componets/Hero";
import ProfileCard from "../componets/ProfileCard";
import contactBg from "../assets/herocontact.jpg";
import userImg1 from "../assets/user1.jpg";
import userImg2 from "../assets/user2.jpg";
import userImg3 from "../assets/user3.jpg";
import userImg4 from "../assets/user4.jpg";
import "./ContactPage.css";

// whare to find us section
import Textarea1 from "../componets/textarea1";
import Form from "../componets/form";



export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <Hero
        title="Contact"
        background={contactBg}
      />
      {/* Contact Section */}
      <div className="contactparent">
        <div className="contactdiv1">
          {/* dark Version */}
          <Textarea1 background="#fff" color="#212529">
            <div className="line1">
              <h1 className="ltext1">Where to Find Us</h1>
              <p className="ltext2">47 Baker Street, London LD1 0ND</p>
            </div>
            <div className="line2">
              <h2 className="ltext3">Opening Hours</h2>
              <div className="hours">
                <p className="time1">Mon - Fri: 09:00 - 17:00</p><br />
                <p className="time2">Sat - Sun: 10:00 - 15:00</p>
              </div>
            </div>
          </Textarea1>
        </div>
        <div className="contactdiv2">
          <Form />
        </div>
      </div>

      {/* Section Heading */}
      <div className="review">Review</div>

      {/* Profile Cards Grid */}
      <div className="aboutparent">
        <div className="parentdiv1">
          <ProfileCard
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis. Magnam, explicabo cumque."
            image={userImg1}
            name="John Doe"
          />
        </div>

        <div className="parentdiv2">
          <ProfileCard
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia?"
            image={userImg2}
            name="Maria Cruz"
          />
        </div>

        <div className="parentdiv3">
          <ProfileCard
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor itaque reprehenderit minus tempore. Iste quibusdam facilis excepturi nihil maiores!"
            image={userImg3}
            name="Anna Gold"
          />
        </div>

        <div className="parentdiv4">
          <ProfileCard
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum et voluptate minus error suscipit officiis placeat repudiandae quibusdam officia tempora, reprehenderit, enim, quidem exercitationem laborum!"
            image={userImg4}
            name="Nick Burn"
          />
        </div>
      </div>
    </div>
  );
}
