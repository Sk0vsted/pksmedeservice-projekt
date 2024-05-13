import React, { useState } from "react";
import axios from "axios";
import "./css/kontaktform.css";
import ReCAPTCHA from "react-google-recaptcha";

const KontaktForm = ({ onFormSubmit }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fornavn: "",
    efternavn: "",
    email: "",
    telefon: "",
    besked: "",
  });
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleCaptchaChange = (value) => {
    setIsCaptchaValid(value !== null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fornavn: formData.fornavn,
      efternavn: formData.efternavn,
      email: formData.email,
      telefon: formData.telefon,
      besked: formData.besked,
    };

    try {
      const res = await axios.post(
        "https://pksmedeservice.dk/api/sendgrid",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Email sent:", res.data);
      setSubmitted(true);
      setFormData({
        fornavn: "",
        efternavn: "",
        email: "",
        telefon: "",
        besked: "",
      });
      onFormSubmit();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      className={`w-full flex justify-center pt-12 font-roboto pb-12 ${
        submitted ? "fade-out" : ""
      }`}
    >
      <div className="contact-form flex justify-center w-full">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="form-group flex flex-col items-center">
            <input
              type="text"
              name="fornavn"
              placeholder="Fornavn"
              value={formData.fornavn}
              onChange={handleChange}
              className="form-control w-4/5 lg:w-3/6 border-2 p-2 mb-5 focus:border-orange rounded-lg"
              required
            />

            <input
              type="text"
              name="efternavn"
              placeholder="Efternavn"
              value={formData.efternavn}
              onChange={handleChange}
              className="form-control w-4/5 lg:w-3/6 border-2 p-2 mb-5 focus:border-orange rounded-lg"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control w-4/5 lg:w-3/6 border-2 p-2 mb-5 focus:border-orange rounded-lg"
              required
            />

            <input
              type="text"
              name="telefon"
              placeholder="Telefon"
              value={formData.telefon}
              onChange={handleChange}
              className="form-control w-4/5 lg:w-3/6 border-2 p-2 mb-10 focus:border-orange rounded-lg"
              required
            />

            <textarea
              name="besked"
              placeholder="Besked"
              value={formData.besked}
              onChange={handleChange}
              className="form-control w-4/5 lg:w-3/6 border-2 p-2 focus:border-orange rounded-lg"
              rows="5"
              required
            ></textarea>
            <div className="pt-5"></div>
            <ReCAPTCHA
              sitekey="6LdJzr8bAAAAAOb4K4oYv1y9Zm7G4k2jZQ7Q0j3E"
              onChange={handleCaptchaChange}
            />
            <button
              type="submit"
              className="form-control submit w-4/5 lg:w-3/6 border-2 border-primary text-light text-lg py-2 px-6 rounded-full relative hover:drop-shadow-xl hover:bg-primary hover:cursor-pointer hover:text-light 
            hover:text-transform transition duration-300 font-ubuntu ease-in-out mt-9"
              disabled={!isCaptchaValid}
            >
              Send besked
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default KontaktForm;
