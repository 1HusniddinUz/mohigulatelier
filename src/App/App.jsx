import "./App.css";
import Header from "../components/layout/Header";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Marketplaces from "../pages/Marketplaces";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Footer from "../components/layout/Footer";


const ContactPage = () => <div>Contact page</div>;

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
