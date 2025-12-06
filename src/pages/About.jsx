// src/pages/About.jsx
import { Link } from "react-router-dom";
import "../assets/About.css";
import profileImg from "../assets/images/suzane.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="AboutSection">
      <div className="about-container">
        {/* LEFT: IMAGE */}
        <div className="about-image-wrapper">
          <img src={profileImg} alt="Idiieva Mohigul" className="about-image" />
        </div>

        {/* RIGHT: TEXT */}
        <div className="about-content">
          <p className="about-eyebrow">{t("about_eyebrow")}</p>
          <h1 className="about-title">{t("about_title")}</h1>

          <p className="about-text">{t("about_p1")}</p>
          <p className="about-text">{t("about_p2")}</p>
          <p className="about-text">{t("about_p3")}</p>

          {/* ACTION BUTTONS */}
          <div className="about-actions">
            <Link to="/products" className="btn-primary">
              {t("about_btn_products")}
            </Link>
            <Link to="/contact" className="btn-secondary">
              {t("about_btn_contact")}
            </Link>
          </div>

          <p className="about-note">
            {t("about_note_text")}
            <a
              href="https://instagram.com/moxigul_idiyeva"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("about_note_instagram")}
            </a>
            {t("about_note_suffix")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
