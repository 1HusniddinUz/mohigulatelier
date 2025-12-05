import React from "react";
import "../assets/Marketplaces.css";

// Rasmlarni o'zingdagi asset nomlariga moslab o'zgartirasan
import uzumLogo from "../assets/images/marketplaces-icon/uzummarket.png";
import ozonLogo from "../assets/images/marketplaces-icon/ozon.png";
import yandexLogo from "../assets/images/marketplaces-icon/yandexmarket.png";
import wildberriesLogo from "../assets/images/marketplaces-icon/wb.png";

const marketplaces = [
  {
    id: "uzum",
    name: "UZUM MARKET",
    description:
      "Mahalliy xaridorlar uchun kashta naqshli kepkalar, sumkalar va aksessuarlar. Oson yetkazib berish va to‘lov.",
    image: uzumLogo,
    link: "https://uzum.uz/uz/product/ozbek-atlasidan-ayollar-kepkasi-ikat-2164097",
    tag: "Faol joylashtirilgan",
  },
  {
    id: "ozon",
    name: "OZON",
    description:
      "Rossiya bozoriga yo‘naltirilgan kolleksiya: ayollar kepkalari va kundalik aksessuarlar uchun tayyor vitrina.",
    image: ozonLogo,
    link: "https://uz.ozon.com/product/sumka-3186635907/?oos_search=false",
    tag: "Online do‘kon",
  },
  {
    id: "yandex",
    name: "YANDEX MARKET",
    description:
      "Sharqona kashtali kepkalar uchun alohida do‘kon sahifasi. Kepka va boshqa mahsulotlar bosqichma-bosqich joylashtiriladi.",
    image: yandexLogo,
    link: "https://market.yandex.uz/card/zhenskaya-kepka-s-vyshivkoy-v-vostochnom-stile-stilnaya-kepka-iz-plotnogo-tekstilya-ukrashennaya-yarkoy-vostochnoy-vyshivkoy/4814382078?do-waremd5=BAW8wpOsuqQKs3KRSu7SNA&businessId=216503443&ogV=-7https://market.yandex.uz/business--husniddin/216503443?generalContext=t%3DshopInShop%3Bi%3D1%3Bbi%3D216503443%3B&rs=eJwzkn7ByPiJUZSDUWDhIVYJBo2eo6wa7189YNZYdYQVAH_UCdY%2C&searchContext=sins_ctx",
    extraLink:
      "https://market.yandex.uz/card/zhenskaya-kepka-s-vyshivkoy-v-vostochnom-stile-stilnaya-kepka-iz-plotnogo-tekstilya-ukrashennaya-yarkoy-vostochnoy-vyshivkoy/4814382078?do-waremd5=BAW8wpOsuqQKs3KRSu7SNA&businessId=216503443&ogV=-7",
    tag: "Online do‘kon",
  },
  {
    id: "wildberries",
    name: "WILDBERRIES",
    description:
      "Markaziy Osiyo va Rossiya xaridorlari uchun kapsul kolleksiya. Platformaga tayyorlanayotgan pozitsiyalar.",
    image: wildberriesLogo,
    link: "https://www.wildberries.ru/catalog/682102776/detail.aspx?targetUrl=GP",
    tag: "Faol joylashtirilgan",
  },
];

const Marketplaces = () => {
  return (
    <section id="Marketplaces">
      <div className="marketplaces-container">
        <header className="marketplaces-header">
          <p className="marketplaces-eyebrow">Online savdo maydonchalari</p>
          <h1 className="marketplaces-title">
            Kashta mahsulotlar qayerda sotiladi?
          </h1>
          <p className="marketplaces-subtitle">
            Mohigulning kepkalari va aksessuarlari bir nechta yirik marketplace
            platformalarida joylashtirilgan. Quyidagi sahifalar orqali
            kolleksiyani ko‘rishingiz va buyurtma qilishingiz mumkin.
          </p>
        </header>

        <div className="marketplaces-grid">
          {marketplaces.map((item) => (
            <article className="marketplace-card" key={item.id}>
              <div className="marketplace-logo">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="marketplace-body">
                <div className="marketplace-top">
                  <h2>{item.name}</h2>
                  {item.tag && (
                    <span className="marketplace-tag">{item.tag}</span>
                  )}
                </div>

                <p className="marketplace-text">{item.description}</p>

                <div className="marketplace-actions">
                  {item.link !== "#" && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-marketplace"
                    >
                      Sahifaga o‘tish
                    </a>
                  )}

                  {item.link === "#" && (
                    <button className="btn-marketplace disabled" disabled>
                      Tez orada
                    </button>
                  )}

                  {/* {item.extraLink && (
                    <a
                      href={item.extraLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="marketplace-extra"
                    >
                      Kepka kartasini ko‘rish
                    </a>
                  )} */}
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
