// src/pages/Products.jsx

import React, { useState, useMemo } from "react";
import "../assets/Products.css";
import { useTranslation } from "react-i18next";

// SUMKALAR
import filoqsumka from "../assets/images/sumka/fil oq.jpg";
import filqizil from "../assets/images/sumka/fil.jpg";
import koksumka from "../assets/images/sumka/kok sum.jpg";
import oddiysumka from "../assets/images/sumka/oddiy.jpg";
import oqanor from "../assets/images/sumka/oq anor.jpg";
import yashilanor from "../assets/images/sumka/oq yashil anor.jpg";
import qizilanor from "../assets/images/sumka/qizil anor.jpg";
import qorasumka from "../assets/images/sumka/qora.jpg";
import rgbsumka from "../assets/images/sumka/rgb.jpg";
import slkok from "../assets/images/sumka/sl - kok.jpg";
import slqizil from "../assets/images/sumka/sl - qizil.jpg";
import slyashil from "../assets/images/sumka/sl - yashil.jpg";
import wlsumka from "../assets/images/sumka/wl anor.jpg";
import yashilsumka from "../assets/images/sumka/yashil anor.jpg";

// BOSH KIYIMLAR
import kepkaatlas from "../assets/images/bosh kiyim/kepka - atlas.png";
import bukharakep from "../assets/images/bosh kiyim/kepka - bukhaa.png";
import naqshkep from "../assets/images/bosh kiyim/kepka - naqsh.png";
import toplamkep from "../assets/images/bosh kiyim/kepka - toplam.png";
import shapkabrown from "../assets/images/bosh kiyim/shapka-brown.png";
import shapkakok from "../assets/images/bosh kiyim/shapka-kok.png";
import shapkaqizil from "../assets/images/bosh kiyim/shapka-qizil.png";
import shapkasariq from "../assets/images/bosh kiyim/shapka-sariq.png";
import shapkawl from "../assets/images/bosh kiyim/shapka-wl.png";
import shlkok from "../assets/images/bosh kiyim/shl - kok.png";
import shlqizil from "../assets/images/bosh kiyim/shl - qizil.png";
import shlyashil from "../assets/images/bosh kiyim/shl - yashil.png";

// SUZANELAR
import anorsuzane from "../assets/images/suzane/suzane - anor.png";
import koksuzane from "../assets/images/suzane/suzane - kok.png";
import oqsuzane from "../assets/images/suzane/suzane - oq.png";
import qiznaqshsuzane from "../assets/images/suzane/suzane - qiz-naqsh.png";
import qizilsuzane from "../assets/images/suzane/suzane - qizil.png";
import slanorsuzane from "../assets/images/suzane/suzane - sl-anor.png";
import hrtuyasuzane from "../assets/images/suzane/suzane - sl-hr-tuya.png";
import slkoksuzane from "../assets/images/suzane/suzane - sl-kok.png";
import sloysuzane from "../assets/images/suzane/suzane - sl-oy.png";
import sltuyasuzane from "../assets/images/suzane/suzane - sl-tuya.png";
import slyashilsuzane from "../assets/images/suzane/suzane - sl-yashil.png";
import tillasuzane from "../assets/images/suzane/suzane - tilla.png";

// TOYS
import whitetoy from "../assets/images/toys/toys - whirte.png";
import browntoy from "../assets/images/toys/toys -brown.png";

const ProductsData = [
  // BAGS
  { id: 1, img: filoqsumka, categoryKey: "bags" },
  { id: 2, img: filqizil, categoryKey: "bags" },
  { id: 3, img: koksumka, categoryKey: "bags" },
  { id: 4, img: oddiysumka, categoryKey: "bags" },
  { id: 5, img: oqanor, categoryKey: "bags" },
  { id: 6, img: yashilanor, categoryKey: "bags" },
  { id: 7, img: qizilanor, categoryKey: "bags" },
  { id: 8, img: qorasumka, categoryKey: "bags" },
  { id: 9, img: rgbsumka, categoryKey: "bags" },
  { id: 10, img: slkok, categoryKey: "bags" },
  { id: 11, img: slqizil, categoryKey: "bags" },
  { id: 12, img: slyashil, categoryKey: "bags" },
  { id: 13, img: wlsumka, categoryKey: "bags" },
  { id: 14, img: yashilsumka, categoryKey: "bags" },

  // HEADWEAR
  { id: 15, img: kepkaatlas, categoryKey: "headwear" },
  { id: 16, img: bukharakep, categoryKey: "headwear" },
  { id: 17, img: naqshkep, categoryKey: "headwear" },
  { id: 18, img: toplamkep, categoryKey: "headwear" },
  { id: 19, img: shapkabrown, categoryKey: "headwear" },
  { id: 20, img: shapkakok, categoryKey: "headwear" },
  { id: 21, img: shapkaqizil, categoryKey: "headwear" },
  { id: 22, img: shapkasariq, categoryKey: "headwear" },
  { id: 23, img: shapkawl, categoryKey: "headwear" },
  { id: 24, img: shlkok, categoryKey: "headwear" },
  { id: 25, img: shlqizil, categoryKey: "headwear" },
  { id: 26, img: shlyashil, categoryKey: "headwear" },

  // SUZANI
  { id: 27, img: anorsuzane, categoryKey: "suzani" },
  { id: 28, img: koksuzane, categoryKey: "suzani" },
  { id: 29, img: oqsuzane, categoryKey: "suzani" },
  { id: 30, img: qiznaqshsuzane, categoryKey: "suzani" },
  { id: 31, img: qizilsuzane, categoryKey: "suzani" },
  { id: 32, img: slanorsuzane, categoryKey: "suzani" },
  { id: 33, img: hrtuyasuzane, categoryKey: "suzani" },
  { id: 34, img: slkoksuzane, categoryKey: "suzani" },
  { id: 35, img: sloysuzane, categoryKey: "suzani" },
  { id: 36, img: sltuyasuzane, categoryKey: "suzani" },
  { id: 37, img: slyashilsuzane, categoryKey: "suzani" },
  { id: 38, img: tillasuzane, categoryKey: "suzani" },

  // TOYS
  { id: 39, img: whitetoy, categoryKey: "toys" },
  { id: 40, img: browntoy, categoryKey: "toys" },
];

const categoryKeys = ["all", "bags", "headwear", "suzani", "toys"];

const Products = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return ProductsData.filter((product) => {
      const matchCategory =
        activeCategory === "all" || product.categoryKey === activeCategory;

      const name = t(`product_${product.id}_name`);
      const info = t(`product_${product.id}_info`);
      const text = (String(name) + " " + String(info)).toLowerCase();
      const matchSearch = text.includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [activeCategory, search, t]);

  return (
    <section id="Products" className="products-section">
      <div className="products-container">
        {/* Header */}
        <div className="products-header">
          <div className="products-header-text">
            <h1 className="products-title">{t("products_title")}</h1>
            <p className="products-subtitle">{t("products_subtitle")}</p>
          </div>

          <div className="products-search-wrapper">
            <input
              type="text"
              placeholder={t("products_search_placeholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="products-search-input"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="products-filters">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={
                "products-filter-btn" +
                (activeCategory === key ? " products-filter-btn-active" : "")
              }
            >
              {t(
                key === "all"
                  ? "products_category_all"
                  : key === "bags"
                  ? "products_category_bags"
                  : key === "headwear"
                  ? "products_category_headwear"
                  : key === "suzani"
                  ? "products_category_suzani"
                  : "products_category_toys"
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredProducts.length === 0 ? (
          <div className="products-empty">{t("products_empty")}</div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => {
              const name = t(`product_${product.id}_name`);
              const info = t(`product_${product.id}_info`);
              const price = t(`product_${product.id}_price`);

              return (
                <article key={product.id} className="product-card">
                  <div className="product-image-wrapper">
                    <img
                      src={product.img}
                      alt={name}
                      className="product-image"
                    />
                  </div>
                  <div className="product-content">
                    <h2 className="product-name">{name}</h2>
                    <p className="product-info">{info}</p>
                    <div className="product-footer">
                      <span className="product-price">{price}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
