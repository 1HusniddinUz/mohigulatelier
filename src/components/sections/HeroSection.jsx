import React from "react";
import img1 from "../../assets/images/sumka.png";
import img2 from "../../assets/images/kepka.jpg";
import img3 from "../../assets/images/suzane.png";
import "../../assets/HeroSection.css";
import { NavLink } from "react-router-dom";

const MainImages = [
  {
    id: 1,
    name: "AYOLLAR SUMKASI",
    info: "Kashtadan tikilgan ayollar sumkasi",
    image: img1,
  },
  {
    id: 2,
    name: "AYOLLAR KEPKASI",
    info: "Kashta naqshli ayollar kepkasi",
    image: img2,
  },
  {
    id: 3,
    name: "KASHTALI SUMKA",
    info: "Kundalik uslubdagi kashtali sumka",
    image: img3,
  },
];

const HeroSection = () => {
  return (
    <section id="HeroSection">
      <div className="container">
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <div className="main-images">
            {MainImages.map((item) => (
              <div className="hero-card" key={item.id}>
                <div className="hero-card-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="hero-card-body">
                  <h3>{item.name}</h3>
                  <p>{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
