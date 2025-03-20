import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Globe, Clock, Sun, Cloud, Navigation } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation as SwiperNavigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const tourismData = {
  1: {
    name: 'Taj Mahal',
    location: 'Agra, India',
    description: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, India. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.',
    images: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
      'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=800&q=80'
    ],
    bestTime: 'October to March',
    weather: 'Tropical with hot summers and mild winters',
    coordinates: '27.1751° N, 78.0421° E',
    attractions: [
      'Main Mausoleum',
      'Mosque and Jawab',
      'Mughal Gardens',
      'Yamuna River View'
    ]
  },
  2: {
    name: 'Santorini',
    location: 'Greece',
    description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera.',
    images: [
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
      'https://images.unsplash.com/photo-1571406252241-db3117da6c36?w=800&q=80'
    ],
    bestTime: 'April to October',
    weather: 'Mediterranean climate with warm summers',
    coordinates: '36.3932° N, 25.4615° E',
    attractions: [
      'Oia Sunset Point',
      'Fira Town',
      'Red Beach',
      'Ancient Thera'
    ]
  }
};

export default function TourismDetails() {
  const { id } = useParams();
  const spot = tourismData[id as keyof typeof tourismData];

  if (!spot) {
    return <div className="text-center py-12">Destination not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{spot.name}</h1>
      <div className="flex items-center text-gray-600 mb-8">
        <MapPin className="w-5 h-5 mr-2" />
        <span>{spot.location}</span>
      </div>

      <div className="mb-12">
        <Swiper
          modules={[Autoplay, SwiperNavigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="rounded-xl overflow-hidden"
        >
          {spot.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`${spot.name} ${index + 1}`} className="w-full h-[500px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Clock className="w-6 h-6 text-blue-600 mb-3" />
          <h3 className="font-semibold mb-2">Best Time to Visit</h3>
          <p className="text-gray-600">{spot.bestTime}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Cloud className="w-6 h-6 text-blue-600 mb-3" />
          <h3 className="font-semibold mb-2">Weather</h3>
          <p className="text-gray-600">{spot.weather}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Navigation className="w-6 h-6 text-blue-600 mb-3" />
          <h3 className="font-semibold mb-2">Coordinates</h3>
          <p className="text-gray-600">{spot.coordinates}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-gray-600 leading-relaxed">{spot.description}</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Popular Attractions</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {spot.attractions.map((attraction, index) => (
            <div key={index} className="flex items-center p-4 border rounded-lg">
              <Sun className="w-5 h-5 text-blue-600 mr-3" />
              <span>{attraction}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}