import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import "../../assets/Copyright.css"
const Copyright = () => {
  return (
    <div id="Copyright">
      <div className="container">
        <div className="social-link">
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
        <div className="link-to-copy">
          <a href="https://t.me/buxoro_tadbirkorlar_klubi" target="_blank" rel="noopener noreferrer">© 2025 Buxoro tadbirkorlar biznes klubi</a>
          <span>Biznesingizni biz bilan barpo eting</span>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
