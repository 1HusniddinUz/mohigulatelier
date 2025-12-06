// src/components/HeroSection/HeroSection.jsx (yo‘lini o‘zing moslashtirasan)
import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/HeroSection.css";
import { useTranslation } from "react-i18next";

import img1 from "../../assets/images/sumka.png";
import img2 from "../../assets/images/kepka.jpg";
import img3 from "../../assets/images/suzane.png";

const HeroSection = () => {
  const { t } = useTranslation();

  const MainImages = [
    {
      id: 1,
      image: img1,
      nameKey: "hero_item1_name",
      infoKey: "hero_item1_info",
    },
    {
      id: 2,
      image: img2,
      nameKey: "hero_item2_name",
      infoKey: "hero_item2_info",
    },
    {
      id: 3,
      image: img3,
      nameKey: "hero_item3_name",
      infoKey: "hero_item3_info",
    },
  ];

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
                  <img src={item.image} alt={t(item.nameKey)} />
                </div>
                <div className="hero-card-body">
                  <h3>{t(item.nameKey)}</h3>
                  <p>{t(item.infoKey)}</p>
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
