import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaBolt, FaUserCheck, FaHandshake } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    title: 'Secure Transactions',
    description: 'We use encryption and verified buyers for safe exchanges.',
  },
  {
    icon: <FaBolt className="text-3xl text-blue-600" />,
    title: 'Fast Payouts',
    description: 'Once approved, we process your payment in 24 hours.',
  },
  {
    icon: <FaUserCheck className="text-3xl text-blue-600" />,
    title: 'Trusted by Companies',
    description: 'We’ve helped 500+ businesses recover software costs.',
  },
  {
    icon: <FaHandshake className="text-3xl text-blue-600" />,
    title: 'Hassle-Free Process',
    description: 'Just upload, approve, and get paid—no back and forth.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 text-center">
      <h3 className="text-3xl font-bold mb-12">Why Choose Us</h3>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="mb-3">{item.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
