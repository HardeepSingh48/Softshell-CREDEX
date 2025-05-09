import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mockResponses = {
  "how do i sell my license?": "Just upload your license details via the contact form and we’ll handle the rest.",
  "how long does it take to get paid?": "Once your license is verified, we process payments within 24 hours.",
  "what payment methods do you support?": "We support bank transfers and PayPal payments.",
  "is my data secure?": "Yes, we use industry-standard encryption to protect your data.",
  "can i cancel my listing?": "Yes, you can cancel your listing anytime from your dashboard."
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = input.toLowerCase();
    const reply = mockResponses[userMessage] || "Sorry, I’m not sure. Please contact us via the form.";
    setChat([...chat, { sender: 'user', text: input }, { sender: 'bot', text: reply }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border dark:border-gray-700"
          >
            <div className="p-3 bg-blue-600 text-white font-semibold">SoftSell Assistant</div>
            <div className="p-3 h-64 overflow-y-auto text-sm">
              {chat.map((msg, i) => (
                <div key={i} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block px-3 py-2 rounded ${msg.sender === 'user' ? 'bg-blue-100 dark:bg-blue-900' : 'bg-gray-100 dark:bg-gray-700'}`}>
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-3 border-t dark:border-gray-700 flex gap-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded dark:bg-gray-700"
                placeholder="Ask something..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700"
      >
        {isOpen ? 'Close Chat' : 'Chat 💬'}
      </button>
    </div>
  );
};

export default ChatWidget;
