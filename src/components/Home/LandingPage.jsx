<<<<<<< HEAD
import React from 'react';
import image1 from "../../assets/Jagger1.jpg";
import image2 from "../../assets/Jagger2.jpg";
import image3 from "../../assets/Jagger3.jpg";

const LandingPage = () => {
  return (
    <div>
      <section className="bg-gray-50 py-12">
        <div className="w-11/12 max-w-maxContent mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between">
          
          {/* Left Section */}
          <div className="lg:w-4/6 flex flex-col mt-2">
            <h2 className="text-4xl md:text-6xl font-bold text-yellow-600 text-center mb-8">
              Golden <span className='text-yellow-900'>Sweetness</span> from India to the World
            </h2>
            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <img
                src={image1}
                alt="Jaggery 1"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              <img
                src={image2}
                alt="Jaggery 2"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              <img
                src={image3}
                alt="Jaggery 3"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Right Section: Form */}
          <div className="lg:w-2/6 bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  type="text"
                  id="name"
                  placeholder="Your name"
                  aria-label="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  type="tel"
                  id="phone"
                  placeholder="Your phone number"
                  aria-label="Your phone number"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  type="email"
                  id="email"
                  placeholder="Your email"
                  aria-label="Your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  id="message"
                  rows="4"
                  placeholder="Your message"
                  aria-label="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white p-3 rounded-lg hover:bg-yellow-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-700 text-white px-6">
      <div className="w-11/12 max-w-5xl text-center">
        
        {/* Tagline with Animation */}
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Harvesting <span className="text-yellow-300">Purity</span>,  
          <br />
          <span className="text-yellow-700">Exporting</span> Trust.
        </motion.h1>

        {/* Subtext with Subtle Fade-in Effect */}
        <motion.p 
          className="mt-6 text-lg md:text-2xl text-yellow-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Your trusted partner in global <span className="font-semibold text-yellow-800">import & export</span>.  
          Bringing premium products from farms to the world.
        </motion.p>

        {/* CTA Buttons with Smooth Hover Effect */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.button
            className="px-8 py-4 bg-white text-yellow-700 font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-100 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-yellow-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </section>
  );
};
>>>>>>> f95598c (Some Changes in the website)

export default LandingPage;
