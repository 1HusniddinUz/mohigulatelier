import React from "react";
import { Link } from "react-router-dom";
import "../assets/About.css";
import profileImg from "../assets/images/suzane.png"; // o'z rasm yo'lingni qo'y

const About = () => {
  return (
    <section id="AboutSection">
      <div className="about-container">
        {/* LEFT: IMAGE */}
        <div className="about-image-wrapper">
          <img src={profileImg} alt="Idiieva Mohigul" className="about-image" />
        </div>

        {/* RIGHT: TEXT */}
        <div className="about-content">
          <p className="about-eyebrow">Kashtachilik va dizayn</p>
          <h1 className="about-title">Hi, I&apos;m Idiyeva Mohigul.</h1>

          <p className="about-text">
            I&apos;m a textile artist and embroidery designer who has been
            working in kashtachilik since 2017. My work reimagines traditional
            Uzbek embroidery for today&apos;s lifestyle – turning age-old
            patterns into modern bags, caps, accessories and home pieces that
            feel both familiar and refreshingly new.
          </p>

          <p className="about-text">
            Every piece starts with a story: a memory from Bukhara, a classic
            suzani motif, or a detail from everyday life. I carefully translate
            these elements into minimal, wearable designs so that heritage
            doesn&apos;t just stay in the chest at home, but walks with you in
            your daily routine.
          </p>

          <p className="about-text">
            Quality and meaning are at the heart of what I do. I work in small
            batches, using hand embroidery and thoughtful construction so that
            each product serves as both a functional object and a keepsake. My
            goal is simple: to help you carry a piece of our culture with you,
            in a quiet, elegant and contemporary way.
          </p>

          {/* ACTION BUTTONS */}
          <div className="about-actions">
            <Link to="/products" className="btn-primary">
              Kolleksiyani ko‘rish
            </Link>
            <Link to="/contact" className="btn-secondary">
              Murojaat qoldirish
            </Link>
          </div>

          <p className="about-note">
            Yangi ishlar va jarayonlarni{" "}
            <a
              href="https://instagram.com/moxigul_idiyeva"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            da kuzatishingiz mumkin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
