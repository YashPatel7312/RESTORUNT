import React from "react";
import "../componets/favourits.css";
import { Link } from "react-router-dom";
import bgImage from "../assets/heromenu.jpg";

const Favourite = () => {
    return (
        <section
            className="favourite-section"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="overlay">
                <h2 className="fav-title">OUR FAVORITES</h2>

                <div className="fav-container">
                    {/* Food Section */}
                    <div className="fav-column">
                        <h3 className="fav-subtitle">Food</h3>
                        <ul>
                            <li>
                                <div className="dish-wrapper">
                                    <span className="dish-name">English Breakfast</span>
                                    <span className="price">£12</span>
                                </div>
                            </li>
                            <li>
                                <div className="dish-wrapper">
                                    <span className="dish-name">Spicy Beef</span>
                                    <span className="price">£15</span>
                                </div>
                            </li>
                            <li>
                                <div className="dish-wrapper">
                                    <span className="dish-name">Spaghetti Bolognese</span>
                                    <span className="price">£11</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Drinks Section */}
                    <div className="fav-column">
                        <h3 className="fav-subtitle">Drinks</h3>
                        <ul>
                            <li>
                                <div className="dish-wrapper">
                                    <span className="dish-name">Coffee</span>
                                    <span className="price">£2</span>
                                </div>
                            </li>
                            <li>
                                <div className="dish-wrapper">
                                    <span className="dish-name">Juice</span>
                                    <span className="price">£1</span>
                                </div>
                            </li>
                            <li>
                                <div className="dish-wrapper">
                                    <span className="dish-name">Spirits</span>
                                    <span className="price">£5</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                < div className="btn-wrapper">
                    <Link to="/menu">
                        <button className="fav-btn">Our Full Menu</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Favourite;
