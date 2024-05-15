import React, { useState } from 'react';
import axios from 'axios';
import './css/kontaktform.css';

const KontaktForm = ({ onFormSubmit }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fornavn: '',
    efternavn: '',
    email: '',
    telefon: '',
    besked: '',
  });
  const [loading, setLoading] = useState(false); // State to manage loading
  const [error, setError] = useState(null); // State to manage error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = {
      fornavn: e.target.fornavn.value,
      efternavn: e.target.efternavn.value,
      email: e.target.email.value,
      telefon: e.target.telefon.value,
      besked: e.target.besked.value,
    };

    try {
      const res = await axios.post(
        'https://pksmedeservicebackend.vercel.app/api/sendgrid',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Email sent:', res.data);
      setSubmitted(true);
      setFormData({
        fornavn: '',
        efternavn: '',
        email: '',
        telefon: '',
        besked: '',
      });
      onFormSubmit();
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to send message. Please try again.');
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      className={`w-full flex justify-center pt-12 font-roboto pb-12 ${
        submitted ? 'fade-out' : ''
      }`}
    >
      <div className="contact-form flex justify-center w-full">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="form-group flex flex-col items-center">
            <input
              type="text"
              name="fornavn"
              placeholder="Fornavn"
              className="form-control w-4/5 lg:w-3/6 border-2 p-2 mb-5 focus:border-orange rounded-lg"
              required
            />

            <input
              type="text"
              name="efternavn"
              placeholder="Efternavn"
              className="form-control w-4/5 lg:w-3/6 border-2 p-2 mb-5 focus:border-orange rounded-lg"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control w-4/5 lg:w-3/6 border-2 p-2 mb-5 focus:border-orange rounded-lg"
              required
            />

            <input
              type="text"
              name="telefon"
              placeholder="Telefon"
              className="form-control w-4/5 lg:w-3/6 border-2 p-2 mb-10 focus:border-orange rounded-lg"
              required
            />

            <textarea
              name="besked"
              placeholder="Besked"
              className="form-control w-4/5 lg:w-3/6 border-2 p-2 focus:border-orange rounded-lg"
              rows="5"
              required
            ></textarea>
            <div className="pt-5"></div>
            <button
              type="submit"
              className="form-control submit w-4/5 lg:w-3/6 border-2 border-primary text-light text-lg py-2 px-6 rounded-full relative hover:drop-shadow-xl hover:bg-primary hover:cursor-pointer hover:text-light 
            hover:text-transform transition duration-300 font-ubuntu ease-in-out mt-9"
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
