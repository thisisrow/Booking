import { Send } from 'lucide-react';
import SocialFeed from '../components/SocialFeed';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export default function Home() {

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1800&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-5xl font-bold mb-6">Wellcome to PalgharCity48</h1>
            <p className="text-lg italic">- by <span className="font-semibold">Sachin Vishwakarma</span></p>
            <p className="text-xl mb-8">"Experience the thrill and excitement at our world-class water parks!"</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com" target="_blank" className="bg-pink-500 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors duration-200">
              Instagram
              </a>
              <a href="https://www.youtube.com" target="_blank" className="bg-red-600 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-200">
              YouTube
              </a>
              <a href="https://www.facebook.com" target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed */}
      <SocialFeed />

      {/* Feedback Form */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8">Share Your Experience</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
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
    </div>
  );
}