import React, { useState } from "react";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../assets/Contacts.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, topic, message } = formData;

    const subject =
      (topic || "Kashta House saytidan yangi murojaat") +
      (name ? ` – ${name}` : "");

    const body = `
Ism: ${name || "-"}
Email: ${email || "-"}
Telefon: ${phone || "-"}

Mavzu: ${topic || "-"}

Xabar:
${message || "-"}
    `.trim();

    const to = "moxigulidiyeva502@gmail.com";

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Gmail compose oynasini yangi tabda ochamiz
    window.open(gmailUrl, "_blank");

    // Formani tozalab qo'yamiz
    setFormData({
      name: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
    });
  };

  return (
    <section id="Contacts">
      <div className="container">
        <div className="contacts-layout">
          {/* Chap tomoni: info */}
          <div className="contacts-left">
            <p className="contacts-eyebrow">Biz bilan bog‘laning</p>
            <h2 className="contacts-title">Kashta loyihalaringizni birga quramiz.</h2>
            <p className="contacts-text">
              Buyurtmalar, hamkorlik takliflari yoki savollarni tashlab qoldiring.
              Xabar Gmail orqali bizga yetib boradi.
            </p>

            <div className="contacts-grid">

              <div className="contacts-item">
                <span className="contacts-label">Manzil</span>
                <span className="contacts-value">O&apos;zbekiston , Buxoro viloyati, Moxi-Xossa Muzeyi ,</span>
              </div>

              <div className="contacts-item">
                <span className="contacts-label">Ijtimoiy tarmoqlar</span>
                <div className="contacts-social">
                  <a
                    href="https://instagram.com/moxigul_idiyeva"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://t.me/+998907446205"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                  >
                    <FaTelegramPlane />
                  </a>
                  <a
                    href="mailto:moxigulidiyeva502@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Gmail"
                  >
                    <SiGmail />
                  </a>
                </div>
              </div>

              <div className="contacts-item">
                <span className="contacts-label">Ish vaqti</span>
                <span className="contacts-value">Dushanba–Juma, 10:00–18:00</span>
              </div>
            </div>
          </div>

          {/* O‘ng tomoni: forma – endi Gmail'ga yo‘naltiradi */}
          <div className="contacts-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Ismingiz</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ism Familya"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+998 90 000 00 00"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="topic">Mavzu</label>
                  <input
                    id="topic"
                    name="topic"
                    type="text"
                    placeholder="Buyurtma, hamkorlik, savol..."
                    value={formData.topic}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message">Xabar matni</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Loyihangiz yoki savolingiz haqida qisqacha yozing..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-footer">
                <button type="submit" className="btn-submit">
                  Gmail orqali yuborish
                </button>
                <p className="form-note">
                  Tugmani bosganda Gmail oynasi ochilib, xabar matni avtomatik
                  to‘ldiriladi. Siz faqat “Send” ni bosasiz.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* pastdagi xarita qismi o'zgarmasdan qolishi mumkin */}
        <div className="contacts-map-wrapper">
          <div className="contacts-map-card">
            <h3>Bizni xaritada ko‘ring</h3>
            <div className="contacts-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6129.33576457811!2d64.440269!3d39.814441!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ4JzUyLjAiTiA2NMKwMjYnMjUuMCJF!5e0!3m2!1sru!2s!4v1764686138282!5m2!1sru!2s"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Buxoro manzil xaritada"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
