// src/pages/Products.jsx

// SUMKALAR 
import filoqsumka from "../assets/images/sumka/fil oq.jpg"
import filqizil from "../assets/images/sumka/fil.jpg"
import koksumka from "../assets/images/sumka/kok sum.jpg"
import koksum from "../assets/images/sumka/kok.jpg"
import oddiysumka from "../assets/images/sumka/oddiy.jpg"
import oqanor from "../assets/images/sumka/oq anor.jpg"
import yashilanor from "../assets/images/sumka/oq yashil anor.jpg"
import qizilanor from "../assets/images/sumka/qizil anor.jpg"
import qizilsumka from "../assets/images/sumka/qizil sum.jpg"
import qorasumka from "../assets/images/sumka/qora.jpg"
import rgbsumka from "../assets/images/sumka/rgb.jpg"
import slkok from "../assets/images/sumka/sl - kok.jpg"
import slqizil from "../assets/images/sumka/sl - qizil.jpg"
import slyashil from "../assets/images/sumka/sl - yashil.jpg"
import wlsumka from "../assets/images/sumka/wl anor.jpg"
import yashilsumka from "../assets/images/sumka/yashil anor.jpg"

// BOSH KIYIMLAR
import kepkaatlas from "../assets/images/bosh kiyim/kepka - atlas.png"
import bukharakep from "../assets/images/bosh kiyim/kepka - bukhaa.png"
import naqshkep from "../assets/images/bosh kiyim/kepka - naqsh.png"
import toplamkep from "../assets/images/bosh kiyim/kepka - toplam.png"
import shapkabrown from "../assets/images/bosh kiyim/shapka-brown.png"
import shapkakok from "../assets/images/bosh kiyim/shapka-kok.png"
import shapkaqizil from "../assets/images/bosh kiyim/shapka-qizil.png"
import shapkasariq from "../assets/images/bosh kiyim/shapka-sariq.png"
import shapkawl from "../assets/images/bosh kiyim/shapka-wl.png"
import shlkok from "../assets/images/bosh kiyim/shl - kok.png"
import shlqizil from "../assets/images/bosh kiyim/shl - qizil.png"
import shlyashil from "../assets/images/bosh kiyim/shl - yashil.png"

// SUZANELAR 
import anorsuzane from "../assets/images/suzane/suzane - anor.png"
import koksuzane from "../assets/images/suzane/suzane - kok.png"
import oqsuzane from "../assets/images/suzane/suzane - oq.png"
import qiznaqshsuzane from "../assets/images/suzane/suzane - qiz-naqsh.png"
import qizilsuzane from "../assets/images/suzane/suzane - qizil.png"
import slanorsuzane from "../assets/images/suzane/suzane - sl-anor.png"
import hrtuyasuzane from "../assets/images/suzane/suzane - sl-hr-tuya.png"
import slkoksuzane from "../assets/images/suzane/suzane - sl-kok.png"
import sloysuzane from "../assets/images/suzane/suzane - sl-oy.png"
import sltuyasuzane from "../assets/images/suzane/suzane - sl-tuya.png"
import slyashilsuzane from "../assets/images/suzane/suzane - sl-yashil.png"
import tillasuzane from "../assets/images/suzane/suzane - tilla.png"

// TOYS 
import whitetoy from "../assets/images/toys/toys - whirte.png"
import browntoy from "../assets/images/toys/toys -brown.png"

import React, { useState, useMemo } from "react"
import "../assets/Products.css"

const ProductsData = [
  // SUMKALAR
  {
    id: 1,
    name: "Fil oq sumka",
    img: filoqsumka,
    category: "Sumkalar",
    info: "Tabiiy matodan tikilgan, fil naqshli oq sumka. Kundalik foydalanish uchun qulay.",
    price: "150 000 so‘m",
  },
  {
    id: 2,
    name: "Fil qizil sumka",
    img: filqizil,
    category: "Sumkalar",
    info: "Qizil rangdagi fil naqshli milliy sumka.",
    price: "150 000 so‘m",
  },
  {
    id: 3,
    name: "Ko‘k suzani sumka",
    img: koksumka,
    category: "Sumkalar",
    info: "Ko‘k rangli klassik suzani naqshli sumka.",
    price: "50 000 so‘m",
  },
  {
    id: 4,
    name: "Oddiy klassik sumka",
    img: oddiysumka,
    category: "Sumkalar",
    info: "Minimalistik dizayndagi kundalik sumka.",
    price: "200 000 so‘m",
  },
  {
    id: 5,
    name: "Oq anor sumka",
    img: oqanor,
    category: "Sumkalar",
    info: "Oq fonda anor naqshli milliy sumka.",
    price: "100 000 so‘m",
  },
  {
    id: 6,
    name: "Yashil anor sumka",
    img: yashilanor,
    category: "Sumkalar",
    info: "Yashil palitradagi anor naqshli dizayn.",
    price: "200 000 so‘m",
  },
  {
    id: 7,
    name: "Qizil anor sumka",
    img: qizilanor,
    category: "Sumkalar",
    info: "Qizil anor naqshi bilan bezatilgan sumka.",
    price: "150 000 so‘m",
  },
  {
    id: 8,
    name: "Qora klassik sumka",
    img: qorasumka,
    category: "Sumkalar",
    info: "Qora rangli, hamon milliy, hamon zamonaviy.",
    price: "200 000 so‘m",
  },
  {
    id: 9,
    name: "RGB suzani sumka",
    img: rgbsumka,
    category: "Sumkalar",
    info: "Rang-barang suzani naqshlari bilan bezatilgan model.",
    price: "150 000 so‘m",
  },
  {
    id: 10,
    name: "SL ko‘k sumka",
    img: slkok,
    category: "Sumkalar",
    info: "Ko‘k rangda SL seriyadagi sumka.",
    price: "150 000 so‘m",
  },
  {
    id: 11,
    name: "SL qizil sumka",
    img: slqizil,
    category: "Sumkalar",
    info: "Qizil SL kolleksiyasi modeli.",
    price: "150 000 so‘m",
  },
  {
    id: 12,
    name: "SL yashil sumka",
    img: slyashil,
    category: "Sumkalar",
    info: "Yashil SL kolleksiyasi sumkasi.",
    price: "150 000 so‘m",
  },
  {
    id: 13,
    name: "WL anor sumka",
    img: wlsumka,
    category: "Sumkalar",
    info: "WL seriyadagi anor naqshli model.",
    price: "150 000 so‘m",
  },
  {
    id: 14,
    name: "Yashil anor sumka 2",
    img: yashilsumka,
    category: "Sumkalar",
    info: "Yashil anor naqshlarining boshqa varianti.",
    price: "150 000 so‘m",
  },

  // BOSH KIYIMLAR
  {
    id: 15,
    name: "Atlas kepka",
    img: kepkaatlas,
    category: "Bosh kiyimlar",
    info: "Atlas matodan milliy naqshli kepka.",
    price: "70 000 so‘m",
  },
  {
    id: 16,
    name: "Bukhara kepka",
    img: bukharakep,
    category: "Bosh kiyimlar",
    info: "Buxoro uslubidagi milliy kepka.",
    price: "125 000 so‘m",
  },
  {
    id: 17,
    name: "Naqshli kepka",
    img: naqshkep,
    category: "Bosh kiyimlar",
    info: "Murakkab milliy naqshlar bilan bezatilgan.",
    price: "150 000 so‘m",
  },
  {
    id: 18,
    name: "To‘plam kepka",
    img: toplamkep,
    category: "Bosh kiyimlar",
    info: "To‘plam ichidagi kepka varianti.",
    price: "450 000 so‘m",
  },
  {
    id: 19,
    name: "Brown shapka",
    img: shapkabrown,
    category: "Bosh kiyimlar",
    info: "Issiq jigarrang qishki shapka.",
    price: "150 000 so‘m",
  },
  {
    id: 20,
    name: "Ko‘k shapka",
    img: shapkakok,
    category: "Bosh kiyimlar",
    info: "Ko‘k rangli yumshoq shapka.",
    price: "150 000 so‘m",
  },
  {
    id: 21,
    name: "Qizil shapka",
    img: shapkaqizil,
    category: "Bosh kiyimlar",
    info: "Qizil rangli qishki shapka.",
    price: "150 000 so‘m",
  },
  {
    id: 22,
    name: "Sariq shapka",
    img: shapkasariq,
    category: "Bosh kiyimlar",
    info: "Sariq rangli, kayfiyat ko‘taruvchi shapka.",
    price: "150 000 so‘m",
  },
  {
    id: 23,
    name: "WL shapka",
    img: shapkawl,
    category: "Bosh kiyimlar",
    info: "WL seriyadagi shapka modeli.",
    price: "150 000 so‘m",
  },
  {
    id: 24,
    name: "SL ko‘k shapka",
    img: shlkok,
    category: "Bosh kiyimlar",
    info: "SL seriyadagi ko‘k bosh kiyim.",
    price: "150 000 so‘m",
  },
  {
    id: 25,
    name: "SL qizil shapka",
    img: shlqizil,
    category: "Bosh kiyimlar",
    info: "SL seriyani qizil modeli.",
    price: "150 000 so‘m",
  },
  {
    id: 26,
    name: "SL yashil shapka",
    img: shlyashil,
    category: "Bosh kiyimlar",
    info: "SL seriyani yashil modeli.",
    price: "150 000 so‘m",
  },

  // SUZANELAR
  {
    id: 27,
    name: "Anor suzane",
    img: anorsuzane,
    category: "Suzanelar",
    info: "Anor motivli an’anaviy suzani.",
    price: "200 000 so‘m",
  },
  {
    id: 28,
    name: "Ko‘k suzane",
    img: koksuzane,
    category: "Suzanelar",
    info: "Ko‘k rangli dekorativ suzani.",
    price: "800 000 so‘m",
  },
  {
    id: 29,
    name: "Oq suzane",
    img: oqsuzane,
    category: "Suzanelar",
    info: "Oq fonda nafis milliy naqshlar.",
    price: "500 000 so‘m",
  },
  {
    id: 30,
    name: "Qizil naqshli suzane",
    img: qiznaqshsuzane,
    category: "Suzanelar",
    info: "Qizil rangdagi boy naqshlar.",
    price: "4 500 000 so‘m",
  },
  {
    id: 31,
    name: "Qizil suzane",
    img: qizilsuzane,
    category: "Suzanelar",
    info: "Qizil palitralar ustun bo‘lgan suzani.",
    price: "800 000 so‘m",
  },
  {
    id: 32,
    name: "SL anor suzane",
    img: slanorsuzane,
    category: "Suzanelar",
    info: "SL seriyadagi anor naqshli suzani.",
    price: "300 000 so‘m",
  },
  {
    id: 33,
    name: "SL hr-tuya suzane",
    img: hrtuyasuzane,
    category: "Suzanelar",
    info: "Tuya motivlari bilan bezatilgan suzani.",
    price: "250 000 so‘m",
  },
  {
    id: 34,
    name: "SL ko‘k suzane",
    img: slkoksuzane,
    category: "Suzanelar",
    info: "SL seriyadagi ko‘k suzani.",
    price: "300 000 so‘m",
  },
  {
    id: 35,
    name: "SL oy suzane",
    img: sloysuzane,
    category: "Suzanelar",
    info: "Oy shaklli naqshlar bilan bezatilgan.",
    price: "300 000 so‘m",
  },
  {
    id: 36,
    name: "SL tuya suzane",
    img: sltuyasuzane,
    category: "Suzanelar",
    info: "Tuya motivlari bilan SL kolleksiya.",
    price: "300 000 so‘m",
  },
  {
    id: 37,
    name: "SL yashil suzane",
    img: slyashilsuzane,
    category: "Suzanelar",
    info: "Yashil rangdagi SL seriya suzani.",
    price: "300 000 so‘m",
  },
  {
    id: 38,
    name: "Zarpad suzane",
    img: tillasuzane,
    category: "Suzanelar",
    info: "Tilla tuslarda hashamatli suzani.",
    price: "200 000 so‘m",
  },

  // TOYS
  {
    id: 39,
    name: "Kichikina oq tuya",
    img: whitetoy,
    category: "O‘yinchoqlar",
    info: "Oq rangli yumshoq qo‘g‘irchoq.",
    price: "50 000 so‘m",
  },
  {
    id: 40,
    name: "Kichikina jigarrang tuya",
    img: browntoy,
    category: "O‘yinchoqlar",
    info: "Jigarrang yumshoq qo‘g‘irchoq.",
    price: "50 000 so‘m",
  },
]

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("Hammasi")
  const [search, setSearch] = useState("")

  const categories = useMemo(
    () => ["Hammasi", ...new Set(ProductsData.map((item) => item.category))],
    []
  )

  const filteredProducts = useMemo(() => {
    return ProductsData.filter((product) => {
      const matchCategory =
        activeCategory === "Hammasi" || product.category === activeCategory
      const text = (product.name + " " + product.info).toLowerCase()
      const matchSearch = text.includes(search.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [activeCategory, search])

  return (
    <section id="Products" className="products-section">
      <div className="products-container">
        {/* Header */}
        <div className="products-header">
          <div className="products-header-text">
            <h1 className="products-title">Mahsulotlar</h1>
            <p className="products-subtitle">
              Milliy sumkalar, bosh kiyimlar, suzanelar va o‘yinchoqlar.
            </p>
          </div>

          <div className="products-search-wrapper">
            <input
              type="text"
              placeholder="Qidirish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="products-search-input"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="products-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={
                "products-filter-btn" +
                (activeCategory === cat ? " products-filter-btn-active" : "")
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredProducts.length === 0 ? (
          <div className="products-empty">
            Hech narsa topilmadi. Qidiruv so‘zini o‘zgartirib ko‘r.
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-content">
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-info">{product.info}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>

                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Products
