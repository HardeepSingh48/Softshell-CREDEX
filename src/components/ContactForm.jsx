import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Required';
    if (!formData.email) newErrors.email = 'Required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.company) newErrors.company = 'Required';
    if (!formData.licenseType) newErrors.licenseType = 'Required';
    if (!formData.message) newErrors.message = 'Required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      setErrors({});
      console.log(formData); // simulate submission
    } else {
      setErrors(validation);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900 text-center">
      <h3 className="text-3xl font-bold mb-10">Contact Us</h3>
      {submitted ? (
        <p className="text-green-600 dark:text-green-400">Thanks! We'll be in touch soon.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto grid gap-6 text-left"
          noValidate
        >
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-800"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-800"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Company</label>
            <input
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-800"
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">License Type</label>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-800"
            >
              <option value="">Select a license</option>
              <option value="Office">Microsoft Office</option>
              <option value="Adobe">Adobe Creative Cloud</option>
              <option value="Antivirus">Antivirus</option>
              <option value="Other">Other</option>
            </select>
            {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded dark:bg-gray-800"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
