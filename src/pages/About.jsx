import React from 'react';
import { FaLeaf, FaCheckCircle, FaUsers } from 'react-icons/fa';
import aboutImage from '../assets/Jagger1.jpg'; // Replace with the actual image path

const About = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="w-11/12 max-w-maxContent mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-yellow-600 mb-4">
          About Us
        </h2>
<<<<<<< HEAD
        <p className="text-gray-700 mb-6">
          At NourishBytes, we are dedicated to delivering the finest quality jaggery products to customers worldwide. With years of expertise in the agro-products industry, we specialize in producing and exporting organic jaggery sourced from sustainable sugarcane farms.
        </p>
        <div className='flex'>
        <img 
          src={aboutImage} 
          alt="About NourishBytes" 
          className="rounded-lg shadow-lg w-full h-64 object-cover mb-6" 
        />
        </div>
   
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 max-w-maxContent mx-auto">
        {/* Sustainability Card */}
=======
        <p className="text-gray-700 mb-6 text-lg md:text-xl">
        About Nourish Byte
At Nourish Byte, we are committed to delivering the finest agricultural products to the global market. As a trusted exporter, we ensure that every product meets the highest quality standards, bringing freshness, nutrition, and sustainability to consumers worldwide.
With a deep-rooted passion for agriculture and a dedication to excellence, we work closely with farmers and suppliers to source premium produce. Our rigorous quality control processes and efficient supply chain management allow us to provide fresh and reliable agricultural goods to international markets.
At Nourish Byte, we don’t just export—we nourish the world with the best nature has to offer.

        </p>
        
   
      </div>
      <h2 className="text-4xl font-bold text-yellow-600 mb-4 text-center">
          Why Choose Us
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 max-w-maxContent mx-auto">
        {/* Sustainability Card */}
        
>>>>>>> f95598c (Some Changes in the website)
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaLeaf className="text-green-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-yellow-600 mb-2">Sustainability</h3>
          <p className="text-gray-600">
            We prioritize eco-friendly farming and production methods that benefit the environment and support the farming communities we collaborate with.
          </p>
        </div>

        {/* Quality Assurance Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaCheckCircle className="text-blue-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-yellow-600 mb-2">Quality Assurance</h3>
          <p className="text-gray-600">
            Every batch undergoes stringent quality checks to ensure it meets international food safety standards, guaranteeing top-notch products.
          </p>
        </div>

        {/* Customer-Centric Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaUsers className="text-purple-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-yellow-600 mb-2">Customer-Centric Approach</h3>
          <p className="text-gray-600">
            We tailor our services and products to meet the unique needs of our clients, offering flexibility in packaging, delivery, and product customization.
          </p>
        </div>
      </div>

<<<<<<< HEAD
      <div className="text-center mt-8">
=======
      {/* <div className="text-center mt-8">
>>>>>>> f95598c (Some Changes in the website)
        <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Our Vision</h3>
        <p className="text-gray-700 w-11/12 mx-auto">
          To become a global leader in jaggery exports by providing premium, organic products that contribute to healthier lifestyles worldwide.
        </p>
<<<<<<< HEAD
      </div>
=======
      </div> */}
>>>>>>> f95598c (Some Changes in the website)
    </section>
  );
};

export default About;
