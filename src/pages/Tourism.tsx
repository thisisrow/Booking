import { MapPin, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTourism } from '../context/TourismContext';
import TiltCard from '../components/TiltCard';

export default function Tourism() {
  const { getFortSpots, getWaterfallSpots, getTouristAttractions } = useTourism();

  const forts = getFortSpots();
  const waterfalls = getWaterfallSpots();
  const attractions = getTouristAttractions();

  const renderSpots = (spots: any[], title: string) => (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {spots.map((spot) => (
          <Link 
            to={`/tourism/${spot.id}`} 
            key={spot.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <TiltCard>
              <div className="relative">
                <img 
                  loading="lazy" 
                  src={spot.image} 
                  alt={spot.name} 
                  className="w-full h-48 object-cover" 
                />
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
            </TiltCard>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Explore Palghar</h1>
      
      {renderSpots(forts, "Historic Forts")}
      {renderSpots(waterfalls, "Scenic Waterfalls")}
      {renderSpots(attractions, "Tourist Attractions")}
    </div>
  );
}