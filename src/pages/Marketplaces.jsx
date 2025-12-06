// src/pages/Marketplaces.jsx
import React from "react";
import "../assets/Marketplaces.css";
import { useTranslation } from "react-i18next";

import uzumLogo from "../assets/images/marketplaces-icon/uzummarket.png";
import ozonLogo from "../assets/images/marketplaces-icon/ozon.png";
import yandexLogo from "../assets/images/marketplaces-icon/yandexmarket.png";
import wildberriesLogo from "../assets/images/marketplaces-icon/wb.png";

const marketplaces = [
  {
    id: "uzum",
    image: uzumLogo,
    link: "https://uzum.uz/uz/product/ozbek-atlasidan-ayollar-kepkasi-ikat-2164097",
    tagKey: "mp_uzum_tag",
    nameKey: "mp_uzum_name",
    descKey: "mp_uzum_desc",
  },
  {
    id: "ozon",
    image: ozonLogo,
    link: "https://uz.ozon.com/product/sumka-3186635907/?oos_search=false",
    tagKey: "mp_ozon_tag",
    nameKey: "mp_ozon_name",
    descKey: "mp_ozon_desc",
  },
  {
    id: "yandex",
    image: yandexLogo,
    link: "https://market.yandex.uz/card/zhenskaya-kepka-s-vyshivkoy-v-vostochnom-stile-stilnaya-kepka-iz-plotnogo-tekstilya-ukrashennaya-yarkoy-vostochnoy-vyshivkoy/4814382078?do-waremd5=BAW8wpOsuqQKs3KRSu7SNA&businessId=216503443&ogV=-7",
    tagKey: "mp_yandex_tag",
    nameKey: "mp_yandex_name",
    descKey: "mp_yandex_desc",
  },
  {
    id: "wildberries",
    image: wildberriesLogo,
    link: "https://www.wildberries.ru/catalog/682102776/detail.aspx?targetUrl=GP",
    tagKey: "mp_wb_tag",
    nameKey: "mp_wb_name",
    descKey: "mp_wb_desc",
  },
];

const Marketplaces = () => {
  const { t } = useTranslation();

  return (
    <section id="Marketplaces">
      <div className="marketplaces-container">
        <header className="marketplaces-header">
          <p className="marketplaces-eyebrow">{t("mp_eyebrow")}</p>
          <h1 className="marketplaces-title">{t("mp_title")}</h1>
          <p className="marketplaces-subtitle">{t("mp_subtitle")}</p>
        </header>

        <div className="marketplaces-grid">
          {marketplaces.map((item) => (
            <article className="marketplace-card" key={item.id}>
              <div className="marketplace-logo">
                <img src={item.image} alt={t(item.nameKey)} />
              </div>

              <div className="marketplace-body">
                <div className="marketplace-top">
                  <h2>{t(item.nameKey)}</h2>
                  <span className="marketplace-tag">
                    {t(item.tagKey)}
                  </span>
                </div>

                <p className="marketplace-text">
                  {t(item.descKey)}
                </p>

                <div className="marketplace-actions">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-marketplace"
                    >
                      {t("mp_btn_goto")}
                    </a>
                  ) : (
                    <button
                      className="btn-marketplace disabled"
                      disabled
                    >
                      {t("mp_btn_soon")}
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplaces;
