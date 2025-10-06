// src/pages/HomePage.jsx
import React from "react";
import "./HomePage.css";
import HomeHero from "../componets/HomeHero";
import ImageGallery from "../componets/ImageGallery";
import HomeBg from "../assets/herohome.jpg";

//images import karo
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

// whare to find us section
import Textarea1 from "../componets/textarea1";
import where from "../assets/where.jpg";

// our favourites section
import Favourite from "../componets/favourits";


// about us section
import aboutus from "../assets/about us.jpg";
import AboutText from "../componets/about text";


export default function HomePage() {
  // array banavi
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  return (
    <>
      <HomeHero
        subtitle="welcome to"     // 1st text 
        title="React Restaurant"  // 2nd text
        background={HomeBg}       // background image
      />

      {/* about us section */}
      <div class="about-us-parent">
        <div class="about-us-div1">
          <img src={aboutus} 
          alt="info icon" class="about-us-image" />
        </div>
        <div class="about-us-div2">
          <AboutText />
        </div>
      </div>


      {/* our favourits section */}
      <div>
        <Favourite />
      </div>

      {/* Image gallery container */}
      <div className="container">
        <ImageGallery images={galleryImages} variant="light" />
      </div>

      {/* Contact Section */}
      <div className="home-c-parent">
        <div className="home-c-div1">
          {/* Light Version */}
          <Textarea1 background="#212529" color="#f8f8f8">
            <div className="line1">
              <h1 className="ltext1">Where to Find Us</h1>
              <p className="ltext2">47 Baker Street, London LD1 0ND</p>
            </div>
            <div className="line2">
              <h2 className="ltext3">Opening Hours</h2>
              <div className="hours">
                <p className="time1">Mon - Fri : 09:00 - 17:00</p><br />
                <p className="time2">Sat - Sun : 10:00 - 15:00</p>
              </div>
            </div>
          </Textarea1>
        </div>
        <div className="home-c-div2">
          < img src={where} alt="Restaurant" className="where-image" />
        </div>
      </div>
    </>
  );
}
