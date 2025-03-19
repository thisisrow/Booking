import React from 'react';
import { Star, MapPin } from 'lucide-react';

const villas = [
  {
    id: 5,
    name: 'Luxury Villa Estate',
    location: 'Tuscany',
    price: 1500,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
  },
  {
    id: 6,
    name: 'Oceanfront Villa',
    location: 'Greek Islands',
    price: 2200,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=800&q=80',
  },
  {
    id: 7,
    name: 'Mountain Retreat Villa',
    location: 'Swiss Alps',
    price: 1800,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=800&q=80',
  },
];

export default function Villas() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Luxury Villas</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {villas.map((villa) => (
          <div key={villa.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={villa.image} alt={villa.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{villa.name}</h3>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {villa.location}
                  </p>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>{villa.rating}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold">₹{villa.price}/night</p>
                <button
                  onClick={() => window.location.href = `/booking/${villa.id}`}
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