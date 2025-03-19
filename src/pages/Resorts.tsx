import React from 'react';
import { Star, MapPin } from 'lucide-react';

const resorts = [
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
  {
    id: 4,
    name: 'Tropical Paradise Resort',
    location: 'Bali',
    price: 780,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
  },
];

export default function Resorts() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Resorts</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {resorts.map((resort) => (
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
    </div>
  );
}