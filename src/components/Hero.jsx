import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sell Your Unused Software Licenses
      </motion.h2>
      <p className="text-lg md:text-xl max-w-xl mb-6 text-gray-700 dark:text-gray-300">
        SoftSell makes it fast and secure to monetize your unused or surplus software licenses.
      </p>
      <a
        href="#contact"
        className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300"
      >
        Get a Quote
      </a>
    </section>
  );
};

export default Hero;