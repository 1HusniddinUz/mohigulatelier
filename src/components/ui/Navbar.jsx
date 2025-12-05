import { useState } from "react";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../assets/Navbar.css";
import logo from "../../assets/images/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

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
              <select>
                <option value="uz">O'zbek</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
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
                Home
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
                Products
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
                Marketplaces
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
                About
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
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
