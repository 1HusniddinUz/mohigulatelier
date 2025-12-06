import { useState } from "react";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../assets/Navbar.css";
import logo from "../../assets/images/logo.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLangChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  // i18n.language ba'zan "uz-UZ" bo‘lishi ham mumkin,
  // shuning uchun boshlari bo‘yicha tekshiraman:
  const currentLang = (() => {
    const lng = i18n.language || "uz";
    if (lng.startsWith("ru")) return "ru";
    if (lng.startsWith("en")) return "en";
    if (lng.startsWith("tr")) return "tr";
    if (lng.startsWith("fr")) return "fr";
    return "uz";
  })();

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* TOP LINE */}
        <div className="nav-top">
          <div className="social-links">
            <a
              href="https://t.me/+998907446205"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://instagram.com/moxigul_idiyeva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="logo-box">
            <img src={logo} alt="MOHIGUL ATELIER LOGO" />
          </div>

          <div className="nav-right">
            <div className="lang-provider">
              <select
                id="select"
                value={currentLang}
                onChange={handleLangChange}
              >
                <option value="uz">🇺🇿 O&apos;zbek</option>
                <option value="ru">🇷🇺 Русский</option>
                <option value="en">🇬🇧 English</option>
                <option value="tr">🇹🇷 Türkçe</option>
                <option value="fr">🇫🇷 Français</option>
              </select>
            </div>

            {/* HAMBURGER BUTTON (faqat mobilda ko'rinadi) */}
            <button
              className={`nav-toggle ${isOpen ? "open" : ""}`}
              onClick={handleToggle}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* BOTTOM MENU */}
        <div className={`nav-bottom ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                onClick={handleClose}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                onClick={handleClose}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("products")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/marketplaces"
                onClick={handleClose}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("marketplaces")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={handleClose}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("about")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={handleClose}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("contact")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
