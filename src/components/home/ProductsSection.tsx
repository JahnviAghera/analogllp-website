
import React from 'react';

const ProductsSection = () => {
  const products = [
    {
      title: 'Product A',
      description: 'A cutting-edge solution for modern businesses, designed for efficiency and scalability.',
      image: '/file.svg', // Placeholder image
    },
    {
      title: 'Product B',
      description: 'Empowering your team with advanced tools and seamless integration capabilities.',
      image: '/globe.svg', // Placeholder image
    },
    {
      title: 'Product C',
      description: 'Revolutionizing data management with intelligent insights and robust security.',
      image: '/window.svg', // Placeholder image
    },
  ];

  return (
    <section id="products" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <img src={product.image} alt={product.title} className="mx-auto mb-6 w-24 h-24 object-contain" />
              <h3 className="text-2xl font-semibold mb-3 text-purple-700">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
