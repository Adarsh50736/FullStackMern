import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    mobileNumber: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/contacts`, formData);
      alert('✅ Contact form submitted!');
      setFormData({
        fullName: '',
        emailAddress: '',
        mobileNumber: '',
        city: ''
      });
    } catch (err) {
      console.error('Error:', err);
      alert('❌ Failed to submit. Please try again.');
    }
  };

  return (
    <section className="bg-blue-400 h-170 py-20 px-4 text-center">
      <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="emailAddress"
            placeholder="Email Address"
            value={formData.emailAddress}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
