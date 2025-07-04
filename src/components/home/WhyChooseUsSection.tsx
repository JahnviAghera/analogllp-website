
import React from 'react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: '🚀', // Placeholder icon
      text: 'Cutting-edge Technology',
    },
    {
      icon: '🤝', // Placeholder icon
      text: 'Client-Centric Approach',
    },
    {
      icon: '💡', // Placeholder icon
      text: 'Innovative Solutions',
    },
    {
      icon: '📈', // Placeholder icon
      text: 'Proven Track Record',
    },
    {
      icon: '🔒', // Placeholder icon
      text: 'Robust Security',
    },
    {
      icon: '⏱️', // Placeholder icon
      text: 'Timely Delivery',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mr-4">{feature.icon}</div>
              <p className="text-xl font-semibold text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
