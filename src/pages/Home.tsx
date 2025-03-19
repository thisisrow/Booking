import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Star, MapPin, Wifi, Coffee, Car, Shield, Send } from 'lucide-react';
import SocialFeed from '../components/SocialFeed';
import CircularGallery from '../components/CircularGallery';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const popularResorts = [
  {
    id: 1,
    name: 'Mountain View Resort',
    location: 'Swiss Alps',
    price: 850,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&q=80',
  },
  {
    id: 2,
    name: 'Beachfront Paradise',
    location: 'Maldives',
    price: 1200,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?w=800&q=80',
  },
  {
    id: 3,
    name: 'Desert Oasis Resort',
    location: 'Dubai',
    price: 950,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
  },
];

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
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1800&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-5xl font-bold mb-6">Discover Your Perfect Stay</h1>
            <p className="text-xl mb-8">Experience luxury and comfort in our handpicked collection of resorts and villas</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Explore Now
            </button>
          </div>
        </div>
      </section>

      {/* Circular Gallery */}
      <section className="relative h-[600px] bg-gray-900">
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          font="bold 30px DM Sans"
        />
      </section>

      {/* Search Form */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 -mt-32 relative z-10">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Check-in</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Check-out</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-end">
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Resorts */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Popular Resorts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {popularResorts.map((resort) => (
            <div key={resort.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={resort.image} alt={resort.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{resort.name}</h3>
                    <p className="text-gray-600 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {resort.location}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{resort.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold">₹{resort.price}/night</p>
                  <button
                    onClick={() => window.location.href = `/booking/${resort.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold">{service.name}</h3>
              </div>
            ))}
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
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
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