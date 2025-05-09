import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Emma Johnson',
    role: 'IT Director',
    company: 'TechNova Inc.',
    message: 'SoftSell made it incredibly easy to recover value from unused software. The process was smooth and secure.',
  },
  {
    name: 'Daniel Lee',
    role: 'Procurement Manager',
    company: 'CloudCore Solutions',
    message: 'Very professional and responsive team. We managed to sell licenses we thought were worthless.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800 text-center">
      <h3 className="text-3xl font-bold mb-12">What Our Clients Say</h3>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <p className="italic mb-4 text-gray-700 dark:text-gray-300">“{t.message}”</p>
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-gray-500">{t.role}, {t.company}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
