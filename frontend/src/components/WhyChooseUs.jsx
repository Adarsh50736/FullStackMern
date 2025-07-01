import React from 'react';

const features = [
  {
    title: 'Patented ROI',
    description: 'Grow your real estate results with proven ROI solutions.',
    icon: '💡'
  },
  {
    title: 'Design',
    description: 'Beautiful modern layouts to showcase your properties.',
    icon: '🎨'
  },
  {
    title: 'Marketing',
    description: 'Full-funnel strategy that captures the right buyers.',
    icon: '📈'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
      <div className="grid md:grid-cols-3 gap-12 px-8 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div key={idx} className="bg-gray-50 p-6 rounded shadow hover:shadow-md transition">
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
