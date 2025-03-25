import { Star, MapPin, Wifi, Coffee, Car, Shield, Send } from 'lucide-react';

import SocialFeed from '../components/SocialFeed';
import CircularGallery from '../components/CircularGallery';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { resorts, waterParks, villas } from '../context/WaterContext';

const services = [
  { icon: <Wifi className="w-6 h-6" />, name: 'Free Wi-Fi' },
  { icon: <Coffee className="w-6 h-6" />, name: 'Restaurant' },
  { icon: <Car className="w-6 h-6" />, name: 'Pickup Service' },
  { icon: <Shield className="w-6 h-6" />, name: '24/7 Security' },
];

const galleryItems = [
  { image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', text: 'Luxury Suite' },
  { image: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?w=800&q=80', text: 'Ocean View' },
  { image: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&q=80', text: 'Mountain Retreat' },
  { image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80', text: 'Desert Villa' },
  { image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80', text: 'Private Pool' },
  { image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=800&q=80', text: 'Garden View' },
];

export default function Home() {
  // We'll show only the first 4 of each type on the homepage
  const popularResorts = resorts.slice(0, 4);
  const popularWaterParks = waterParks.slice(0, 4);
  const popularVillas = villas.slice(0, 4);

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