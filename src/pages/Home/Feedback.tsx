import React, { useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Feedback: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_qjy6e4c', 'template_jmpani3', form.current, {
          publicKey: 'fKQOmdOMvHgxG5GHP',
        })
        .then(
          () => {
            console.log('Feedback sent successfully!');
          },
          (error) => {
            console.log('Failed to send feedback...', error.text);
          }
        );
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-8">Share Your Experience</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Submit Feedback
            </button>
            <button
              type="button"
              onClick={() => window.open('https://wa.me/6394031815', '_blank')}
              className="flex items-center text-green-600 hover:text-green-700"
            >
              <Send className="w-5 h-5 mr-2" />
              Continue on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Feedback;