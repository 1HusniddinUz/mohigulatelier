// src/components/footer/Copyright.jsx
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import "../../assets/Copyright.css";
import { useTranslation } from "react-i18next";

const Copyright = () => {
  const { t } = useTranslation();

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
          <a
            href="https://t.me/buxoro_tadbirkorlar_klubi"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("copy_line")}
          </a>
          <span>{t("copy_tagline")}</span>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
