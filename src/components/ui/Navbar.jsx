import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../assets/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
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
            <h1>MOHINUR ATELIER</h1>
          </div>

          <div className="lang-provider">
            <select>
              <option value="uz">O'zbek</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        {/* BOTTOM MENU */}
        <div className="nav-bottom">
          <ul>
            <li>
              <NavLink
                to="/"
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
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
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
