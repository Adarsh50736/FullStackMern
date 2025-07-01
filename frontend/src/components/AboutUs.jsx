import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-20 bg-gray-50 text-center px-6">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
      <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
        We are a team of experienced real estate consultants and marketers dedicated to helping clients showcase their properties, build their brand, and close deals faster through tailored digital strategies.
      </p>
      <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
        Learn More
      </button>
    </section>
  );
};

export default AboutUs;
