// src/App/App.jsx yoki src/App.jsx – qayerda bo'lsa

import "./App.css";
import Header from "../components/layout/Header";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Marketplaces from "../pages/Marketplaces";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Footer from "../components/layout/Footer";

// i18n bu yerda init qilinmaydi, faqat global faylda
// Agar kerak bo'lsa, faqat shunchaki import qilinishi mumkin:
// import "../i18n";  // lekin odatda main.jsx da qilinadi

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/marketplaces" element={<Marketplaces />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
