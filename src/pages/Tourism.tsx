import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

const tourismSpots = [
  {
    id: 1,
    name: 'Taj Mahal',
    location: 'Agra, India',
    description: 'An ivory-white marble mausoleum on the right bank of the river Yamuna.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
  },
  {
    id: 2,
    name: 'Santorini',
    location: 'Greece',
    description: 'Famous for its dramatic views, stunning sunsets, and white-washed houses.',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
  },
  {
    id: 3,
    name: 'Machu Picchu',
    location: 'Peru',
    description: 'An ancient Incan city set high in the Andes Mountains.',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80',
  },
  {
    id: 4,
    name: 'Great Barrier Reef',
    location: 'Australia',
    description: 'The world\'s largest coral reef system, visible from outer space.',
    image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80',
  },
  {
    id: 5,
    name: 'Northern Lights',
    location: 'Iceland',
    description: 'Natural light display in the Earth\'s sky, predominantly seen in high-latitude regions.',
    image: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800&q=80',
  },
  {
    id: 6,
    name: 'Venice',
    location: 'Italy',
    description: 'Famous for its canals, Gothic architecture, and traditional gondolas.',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
  },
];

export default function Tourism() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Popular Tourist Destinations</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {tourismSpots.map((spot) => (
          <Link 
            to={`/tourism/${spot.id}`} 
            key={spot.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="relative">
              <img src={spot.image} alt={spot.name} className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-xl font-semibold text-white mb-1">{spot.name}</h3>
                <p className="text-white/90 flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {spot.location}
                </p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 line-clamp-2">{spot.description}</p>
              <div className="mt-4 flex items-center text-blue-600">
                <span>Explore more</span>
                <Navigation className="w-4 h-4 ml-2" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}