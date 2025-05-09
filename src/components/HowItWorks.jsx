import React from 'react';
import { motion } from 'framer-motion';
import { FaUpload, FaSearchDollar, FaMoneyBillWave } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUpload className="text-4xl text-blue-600" />,
    title: 'Upload License',
    description: 'Submit the license details you want to sell.',
  },
  {
    icon: <FaSearchDollar className="text-4xl text-blue-600" />,
    title: 'Get Valuation',
    description: 'We’ll assess your license value instantly.',
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-blue-600" />,
    title: 'Get Paid',
    description: 'Receive money securely after your license is sold.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 text-center bg-gray-100 dark:bg-gray-800">
      <h3 className="text-3xl font-bold mb-12">How It Works</h3>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
