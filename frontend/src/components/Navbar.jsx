import React from 'react';
import ContactForm from './ConForm';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 shadow-md bg-white sticky top-0 z-50">
      <div className="text-2xl font-bold"><img className='size-20 h-15 w-25' src="/logo.svg" alt="" /></div>
      <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
        <li><a href="/">Home</a></li>
        <li><a href="/why">Lifestyle</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/footer">Testimonials</a></li>
         <li><a href="/admin">Admin Panel</a></li>
      </ul>
      <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
        <Link to="/contact">Contact Us</Link>
      </button>
    </nav>
  );
};

export default Navbar;
