import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/newsletter`, { email });
      alert('Subscribed successfully!');
      setEmail('');
    } catch (err) {
      console.error('Subscription error:', err);
      alert('Error subscribing. Try again.');
    }
  };

  return (
    <div>
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
