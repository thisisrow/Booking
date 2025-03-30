import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>('');  // To track form submission status

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_qjy6e4c', 'template_g69n1d9', form.current, {
          publicKey: 'fKQOmdOMvHgxG5GHP',
        })
        .then(
          () => {
            setStatus('Message sent successfully!');
            if (form.current) {
              form.current.reset();
          () => {
            setStatus('Failed to send message, please try again.');
          }
            setStatus('Failed to send message, please try again.');
          }
    });
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Contact Details */}
      <div>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">
                  <a href="tel:+916394031815" className="hover:underline">
                    +91 6394 031815
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">
                  sachinvishwakarma332@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">Palghar West</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
          <p className="text-gray-600 mb-4">
            For quick responses, reach out to us on WhatsApp or our social media channels.
          </p>
          <button
            onClick={() => window.open('https://wa.me/6394031815', '_blank')}
            className="flex items-center text-green-600 hover:text-green-700"
          >
            <Send className="w-5 h-5 mr-2" />
            Continue on WhatsApp
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
        {status && <p className="text-center mb-4 text-gray-600">{status}</p>}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="How can we help?"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
