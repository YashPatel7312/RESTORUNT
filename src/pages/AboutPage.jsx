import React from "react";
import Hero from "../componets/Hero";
import ProfileCard from "../componets/ProfileCard";
import ImageGallery from "../componets/ImageGallery"; // 👈 make sure folder name correct
import aboutBg from "../assets/heroabout.jpg";

// Profile Images
import userImg1 from "../assets/user1.jpg";
import userImg2 from "../assets/user2.jpg";
import userImg3 from "../assets/user3.jpg";
import userImg4 from "../assets/user4.jpg";

// Gallery Images
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

// about us section
import FourPartComponent from "../componets/FourPartComponent";
import "./AboutPage.css";

export default function AboutPage() {
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  return (
    <>
      {/* Hero Section */}
      <Hero title="About" background={aboutBg} />

      {/* Four Part Component Section */}
      <div>
        {/* Component call */}
        <FourPartComponent />
      </div>

      {/* Image Gallery Section */}
      <ImageGallery images={galleryImages} variant="dark" />

      {/* Centered Review Text */}
      <div className="review">review</div>

      {/* Profile Card Section */}
      <div className="aboutparent">
        <div className="parentdiv1">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ProfileCard
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis. Magnam, explicabo cumque."
              image={userImg1}
              name="John Doe"
            />
          </div>
        </div>

        <div className="parentdiv2">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ProfileCard
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia?"
              image={userImg2}
              name="Maria Cruz"
            />
          </div>
        </div>

        <div className="parentdiv3">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ProfileCard
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor itaque reprehenderit minus tempore. Iste quibusdam facilis excepturi nihil maiores!"
              image={userImg3}
              name="Anna Gold"
            />
          </div>
        </div>

        <div className="parentdiv4">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ProfileCard
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum et voluptate minus error suscipit officiis placeat repudiandae quibusdam officia tempora, reprehenderit, enim, quidem exercitationem laborum!"
              image={userImg4}
              name="Nick Burn"
            />
          </div>
        </div>
      </div>
    </>
  );
}
