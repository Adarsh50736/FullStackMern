import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/hero.svg')" }}
    >
      <div className=" bg-opacity-60 w-full h-full absolute top-0 left-0 z-0"></div>

      <div className="relative z-10 container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Consultation,<br /> Design & Marketing
          </h1>
          <p className="text-lg text-gray-200">
            Get expert guidance to grow your real estate business with a customized strategy.
          </p>
        </div>

        {/* Contact Box */}
        <div className="bg-blue-950 text-white opacity-65 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">Get a Free Consultation</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
            <input type="text" placeholder="Phone" className="w-full p-2 border border-gray-300 rounded" />
            <textarea placeholder="Message" rows="3" className="w-full p-2 border border-gray-300 rounded"></textarea>
            <button
              type="submit"
              className="w-full py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
