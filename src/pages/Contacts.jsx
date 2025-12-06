// src/pages/Contacts.jsx
import React, { useState } from "react";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../assets/Contacts.css";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

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
      (topic || t("contacts_default_subject")) +
      (name ? ` – ${name}` : "");

    const body = `
${t("contacts_email_body_name")}: ${name || "-"}
${t("contacts_email_body_email")}: ${email || "-"}
${t("contacts_email_body_phone")}: ${phone || "-"}

${t("contacts_email_body_topic")}: ${topic || "-"}

${t("contacts_email_body_message")}:
${message || "-"}
    `.trim();

    const to = "moxigulidiyeva502@gmail.com";

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");

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
          {/* Left: info */}
          <div className="contacts-left">
            <p className="contacts-eyebrow">{t("contacts_eyebrow")}</p>
            <h2 className="contacts-title">{t("contacts_title")}</h2>
            <p className="contacts-text">{t("contacts_text")}</p>

            <div className="contacts-grid">
              <div className="contacts-item">
                <span className="contacts-label">
                  {t("contacts_address_label")}
                </span>
                <span className="contacts-value">
                  {t("contacts_address_value")}
                </span>
              </div>

              <div className="contacts-item">
                <span className="contacts-label">
                  {t("contacts_worktime_label")}
                </span>
                <span className="contacts-value">
                  {t("contacts_worktime_value")}
                </span>
              </div>

              <div className="contacts-item">
                <span className="contacts-label">
                  {t("contacts_social_label")}
                </span>
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
                <h4>
                  <a href="tel:+998907446205">+998(90) 744-62-05</a>
                </h4>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="contacts-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">
                    {t("contacts_form_name_label")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t("contacts_form_name_placeholder")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">
                    {t("contacts_form_email_label")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("contacts_form_email_placeholder")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="phone">
                    {t("contacts_form_phone_label")}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t("contacts_form_phone_placeholder")}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="topic">
                    {t("contacts_form_topic_label")}
                  </label>
                  <input
                    id="topic"
                    name="topic"
                    type="text"
                    placeholder={t("contacts_form_topic_placeholder")}
                    value={formData.topic}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message">
                  {t("contacts_form_message_label")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder={t(
                    "contacts_form_message_placeholder"
                  )}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-footer">
                <button type="submit" className="btn-submit">
                  {t("contacts_form_submit")}
                </button>
                <p className="form-note">{t("contacts_form_note")}</p>
              </div>
            </form>
          </div>
        </div>

        <div className="contacts-map-wrapper">
          <div className="contacts-map-card">
            <h3>{t("contacts_map_title")}</h3>
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
