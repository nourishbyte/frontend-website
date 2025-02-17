<<<<<<< HEAD
import React from 'react';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Organic Jaggery Blocks',
    description: '100% organic jaggery made from traditional methods, available in bulk sizes.',
    price: '$25 per kg',
    image: "https://www.shutterstock.com/shutterstock/photos/2392379161/display_1500/stock-photo-close-up-shot-of-jaggery-neatly-placed-in-a-bowl-against-a-clean-white-background-isolated-2392379161.jpg",
  },
  {
    id: 2,
    name: 'Jaggery Powder',
    description: 'Fine jaggery powder for easy use in cooking and baking. Perfect for bulk orders.',
    price: '$20 per kg',
    image: "https://www.shutterstock.com/shutterstock/photos/2392379161/display_1500/stock-photo-close-up-shot-of-jaggery-neatly-placed-in-a-bowl-against-a-clean-white-background-isolated-2392379161.jpg"
  },
  {
    id: 3,
    name: 'Flavored Jaggery',
    description: 'Infused with natural spices like ginger and cardamom for unique flavors.',
    price: '$30 per kg',
    image: "https://www.shutterstock.com/shutterstock/photos/2392379161/display_1500/stock-photo-close-up-shot-of-jaggery-neatly-placed-in-a-bowl-against-a-clean-white-background-isolated-2392379161.jpg"
  },
];

const Products = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="w-11/12 max-w-maxContent mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-600 mb-8">
          Our Jaggery Products
        </h2>
        <p className="mb-12 text-gray-600">
          Discover our wide variety of organic jaggery products, each made with the highest quality standards.
        </p>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="mt-4">
                  <span className="text-lg font-semibold text-yellow-600">Rate</span>
                </div>
                <button className="mt-6 w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>
=======
import React from "react";
import ProductSection from "../components/Home/ProductSection";
import ServiceSection from "../components/Home/ServiceSection";


const Products = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className=" w-full mx-auto text-center">
        {/* Headline with Emphasis */}
        <h2 className="text-5xl md:text-6xl font-bold text-yellow-700 mb-6 leading-tight">
          <span className="text-yellow-900"> Our Premium Products</span>
        </h2>
        
        {/* Supporting Text */}
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-10">
          Explore our  <span className="text-yellow-900 font-semibold">high-quality</span> range of imported and exported goods, sourced with <span className="text-yellow-900 font-semibold">trust</span> and <span className="text-yellow-900 font-semibold">excellence</span>.  
          We ensure seamless global trade, delivering  <span className="text-yellow-900 font-semibold">authentic, reliable, and top-grade </span>products.
        </p>

        {/* Product Section */}
        <section>
          <ProductSection />
        </section>

        {/* Services Section */}
        <section>
          <ServiceSection />
        </section>
>>>>>>> f95598c (Some Changes in the website)
      </div>
    </section>
  );
};

export default Products;
