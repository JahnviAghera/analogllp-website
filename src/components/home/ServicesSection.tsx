
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: '💡', // Placeholder icon
      title: 'Web Development',
      description: 'Crafting responsive and high-performance websites tailored to your business needs.',
    },
    {
      icon: '📱', // Placeholder icon
      title: 'Mobile App Development',
      description: 'Building intuitive and feature-rich mobile applications for iOS and Android platforms.',
    },
    {
      icon: '☁️', // Placeholder icon
      title: 'Cloud Solutions',
      description: 'Implementing scalable and secure cloud infrastructure for optimal performance.',
    },
    {
      icon: '📊', // Placeholder icon
      title: 'Digital Marketing',
      description: 'Driving online growth through SEO, social media, and content marketing strategies.',
    },
  ];

  return (
    <section id="services" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-purple-700">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
