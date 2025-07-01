import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const Footer = () => {

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
    <footer className="text-white">

      {/* Top CTA Banner */}
      <div
        className="bg-cover bg-center py-16 px-4 text-center"
        style={{ backgroundImage: "url('/Rectangle.svg')" }}
      >
        <h2 className="text-2xl text-blue-950 md:text-3xl font-semibold mb-4">
          Learn more about our listing process, as well as our additional staging and design work.
        </h2>
        <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 transition">
          LEARN MORE
        </button>
      </div>

      {/* Middle Blue Bar */}
      <div className="bg-blue-600 py-6 px-4 text-center md:flex md:items-center md:justify-between">
        <ul className="flex flex-wrap justify-center gap-4 text-sm mb-4 md:mb-0">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Projects</a></li>
          <li><a href="#" className="hover:underline">Testimonials</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>

        <form onSubmit={handleSubmit} className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded text-white"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom Black Bar */}
      <div className="bg-gray-900 text-gray-400 text-sm py-4 px-4 text-center md:flex md:items-center md:justify-between">
        <div>© All Rights Reserved 2025</div>
        <div className="flex items-center justify-center gap-4 mt-2 md:mt-0">
          <span className="font-bold text-white">
            <img src="/logo.svg" alt="" className='size-25 text-white h-10 w-25'/>
          </span>
          <div className="flex gap-3 ml-6">
            <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
