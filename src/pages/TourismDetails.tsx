import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Globe, Clock, Sun, Cloud, Navigation } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation as SwiperNavigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTourism } from '../context/TourismContext';

export default function TourismDetails() {
  const { id } = useParams<{ id: string }>();
  const { getTourismSpotById } = useTourism();
  const spot = getTourismSpotById(Number(id));

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
              <img loading="lazy" src={image} alt={`${spot.name} ${index + 1}`} className="w-full h-[500px] object-cover" />
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
        <p className="text-gray-600 leading-relaxed">{spot.about}</p>
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